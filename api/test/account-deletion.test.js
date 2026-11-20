// ---------------------------------------------------------------------------
// Security-Slice 4.4b – Website Account Deletion
//
// Vollständig eigenständig: importiert NUR aus src/account-deletion.js und
// src/account-deletion-mail.js (beide neu, von diesem Slice committet) –
// keine Abhängigkeit von src/app.js, src/config.js oder dem admin-System,
// da diese in diesem Repository derzeit nur als unfertige, nicht
// committete lokale Änderungen existieren. Baut eine eigene, minimale
// Express-App und einen eigenen Fake-App-Backend-HTTP-Server auf, mit
// demselben Vertrag wie das echte /api/internal/account-deletion/*.
//
// Der echte Cross-Repo-Ablauf gegen das tatsächliche App-Backend läuft in
// test/e2e-account-deletion.test.js (nur lokal, siehe dort).
// ---------------------------------------------------------------------------
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import http from 'node:http';
import { after, afterEach, before, describe, it } from 'node:test';

import express from 'express';
import request from 'supertest';

import {
  createAccountDeletionBackendClient,
  registerAccountDeletionRoutes,
} from '../src/account-deletion.js';

const PUBLIC_BASE_URL = 'https://lokapp.test';
const CONFIRMATION_PAGE_PATH = '/pages/account-loeschen/bestaetigen/';
const SECRET = crypto.randomBytes(32).toString('hex');

// ── Fake App-Backend (gleicher Vertrag wie das echte /api/internal/*) ──────

const startFakeBackend = async () => {
  const accounts = new Map(); // email -> userId
  const tokens = new Map(); // tokenHash -> { userId, used, expiresAt }
  const state = { mode: 'online', accounts, tokens }; // online | error500

  const backendApp = express();
  backendApp.use(express.json());

  backendApp.use((req, res, next) => {
    if (req.get('authorization') !== `Bearer ${SECRET}`) {
      return res.status(401).json({ code: 'INTERNAL_AUTH_FAILED' });
    }
    if (state.mode === 'error500') {
      return res.status(500).json({ code: 'INTERNAL_ERROR' });
    }
    return next();
  });

  backendApp.post('/api/internal/account-deletion/request-token', (req, res) => {
    const email = String(req.body?.email || '').trim().toLowerCase();
    const userId = accounts.get(email);

    if (!userId) {
      return res.status(200).json({ found: false });
    }

    for (const [hash, entry] of tokens) {
      if (entry.userId === userId && !entry.used) {
        tokens.set(hash, { ...entry, used: true });
      }
    }

    const rawToken = crypto.randomBytes(32).toString('hex');
    const tokenHash = crypto.createHash('sha256').update(rawToken).digest('hex');
    tokens.set(tokenHash, { userId, used: false, expiresAt: Date.now() + 30 * 60 * 1000 });

    return res.status(200).json({ found: true, email, token: rawToken, expiresInMinutes: 30 });
  });

  backendApp.post('/api/internal/account-deletion/confirm', (req, res) => {
    const rawToken = String(req.body?.token || '');
    const tokenHash = crypto.createHash('sha256').update(rawToken).digest('hex');
    const entry = tokens.get(tokenHash);

    if (!entry) return res.status(404).json({ code: 'TOKEN_INVALID' });
    if (entry.used) return res.status(409).json({ code: 'TOKEN_ALREADY_USED' });
    if (entry.expiresAt <= Date.now()) return res.status(410).json({ code: 'TOKEN_EXPIRED' });

    tokens.set(tokenHash, { ...entry, used: true });
    return res.status(200).json({ ok: true, status: 'pending' });
  });

  const server = http.createServer(backendApp);
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const url = `http://127.0.0.1:${server.address().port}`;

  return {
    state,
    close: () => new Promise((resolve) => server.close(resolve)),
    client: createAccountDeletionBackendClient({ internalUrl: url, internalSecret: SECRET, timeoutMs: 2000 }),
  };
};

const createOfflineClient = () =>
  createAccountDeletionBackendClient({ internalUrl: 'http://127.0.0.1:9', internalSecret: SECRET, timeoutMs: 500 });

const createFakeMailer = () => {
  const mailer = {
    sent: [],
    fail: false,
    sendMail: async (message) => {
      if (mailer.fail) {
        const error = new Error('SMTP down');
        error.code = 'ECONNECTION';
        throw error;
      }
      mailer.sent.push(message);
      return { messageId: crypto.randomUUID() };
    },
  };
  return mailer;
};

const buildApp = ({ mailer, backendClient }) => {
  const app = express();
  app.use(express.json());
  registerAccountDeletionRoutes(app, {
    mailer,
    smtpFrom: 'LokApp <no-reply@lokapp.test>',
    publicBaseUrl: PUBLIC_BASE_URL,
    confirmationPagePath: CONFIRMATION_PAGE_PATH,
    backendClient,
  });
  app.use((_req, res) => res.status(404).json({ error: 'Not found.' }));
  return app;
};

const extractToken = (mailer) => mailer.sent[0].text.match(/token=([a-f0-9]+)/u)?.[1];

describe('Website Account Deletion (Security-Slice 4.4b)', () => {
  let backend;

  before(async () => {
    backend = await startFakeBackend();
  });

  afterEach(() => {
    backend.state.mode = 'online';
    backend.state.accounts.clear();
    backend.state.tokens.clear();
  });

  after(async () => {
    await backend.close();
  });

  // -------------------------------------------------------------------------
  // Keine Account-Enumeration
  // -------------------------------------------------------------------------

  it('unbekannte und bekannte E-Mail-Adresse erhalten exakt dieselbe Antwort', async () => {
    const mailer = createFakeMailer();
    const app = buildApp({ mailer, backendClient: backend.client });

    const knownEmail = `known-${crypto.randomUUID()}@example.com`;
    backend.state.accounts.set(knownEmail, crypto.randomUUID());

    const unknownRes = await request(app)
      .post('/api/v1/account-deletion/request')
      .send({ email: `unknown-${crypto.randomUUID()}@example.com` });

    const knownRes = await request(app)
      .post('/api/v1/account-deletion/request')
      .send({ email: knownEmail });

    assert.equal(unknownRes.status, knownRes.status);
    assert.deepEqual(unknownRes.body, knownRes.body);
    assert.equal(mailer.sent.length, 1);
  });

  it('ungültiges E-Mail-Format erhält dieselbe generische Antwort, ohne Mailversand', async () => {
    const mailer = createFakeMailer();
    const app = buildApp({ mailer, backendClient: backend.client });

    const res = await request(app)
      .post('/api/v1/account-deletion/request')
      .send({ email: 'das-ist-keine-email' });

    assert.equal(res.status, 202);
    assert.equal(mailer.sent.length, 0);
  });

  // -------------------------------------------------------------------------
  // Gültiger Ablauf
  // -------------------------------------------------------------------------

  it('vollständiger Ablauf: request versendet eine Mail mit gültigem Bestätigungslink, confirm nimmt den Löschauftrag an', async () => {
    const mailer = createFakeMailer();
    const app = buildApp({ mailer, backendClient: backend.client });

    const email = `flow-${crypto.randomUUID()}@example.com`;
    backend.state.accounts.set(email, crypto.randomUUID());

    const requestRes = await request(app).post('/api/v1/account-deletion/request').send({ email });
    assert.equal(requestRes.status, 202);
    assert.equal(mailer.sent.length, 1);
    assert.equal(mailer.sent[0].to, email);
    assert.match(mailer.sent[0].text, /30 Minuten/u);

    const [, link] = mailer.sent[0].text.match(/(https?:\/\/\S+)/u) || [];
    assert.match(link, new RegExp(`^${PUBLIC_BASE_URL}${CONFIRMATION_PAGE_PATH}\\?token=`));

    const token = extractToken(mailer);
    assert.ok(token);

    const confirmRes = await request(app).post('/api/v1/account-deletion/confirm').send({ token });
    assert.equal(confirmRes.status, 202);
    assert.equal(confirmRes.body.status, 'pending');
    assert.match(confirmRes.body.message, /wird jetzt verarbeitet/u);
  });

  // -------------------------------------------------------------------------
  // Manipulierter / wiederverwendeter / abgelaufener Token
  // -------------------------------------------------------------------------

  it('ein manipulierter Token wird abgewiesen', async () => {
    const app = buildApp({ mailer: createFakeMailer(), backendClient: backend.client });
    const res = await request(app).post('/api/v1/account-deletion/confirm').send({ token: 'frei-erfunden' });
    assert.equal(res.status, 400);
    assert.equal(res.body.code, 'TOKEN_INVALID');
  });

  it('ein bereits verwendeter Token wird beim zweiten Mal abgewiesen', async () => {
    const mailer = createFakeMailer();
    const app = buildApp({ mailer, backendClient: backend.client });

    const email = `reused-${crypto.randomUUID()}@example.com`;
    backend.state.accounts.set(email, crypto.randomUUID());
    await request(app).post('/api/v1/account-deletion/request').send({ email });
    const token = extractToken(mailer);

    const first = await request(app).post('/api/v1/account-deletion/confirm').send({ token });
    assert.equal(first.status, 202);

    const second = await request(app).post('/api/v1/account-deletion/confirm').send({ token });
    assert.equal(second.status, 400);
    assert.equal(second.body.code, 'TOKEN_ALREADY_USED');
  });

  it('zwei parallele Bestätigungen desselben Tokens: genau eine gelingt', async () => {
    const mailer = createFakeMailer();
    const app = buildApp({ mailer, backendClient: backend.client });

    const email = `parallel-${crypto.randomUUID()}@example.com`;
    backend.state.accounts.set(email, crypto.randomUUID());
    await request(app).post('/api/v1/account-deletion/request').send({ email });
    const token = extractToken(mailer);

    const [a, b] = await Promise.all([
      request(app).post('/api/v1/account-deletion/confirm').send({ token }),
      request(app).post('/api/v1/account-deletion/confirm').send({ token }),
    ]);

    assert.deepEqual([a.status, b.status].sort(), [202, 400]);
  });

  it('ein abgelaufener Token wird abgewiesen', async () => {
    const mailer = createFakeMailer();
    const app = buildApp({ mailer, backendClient: backend.client });

    const email = `expired-${crypto.randomUUID()}@example.com`;
    backend.state.accounts.set(email, crypto.randomUUID());
    await request(app).post('/api/v1/account-deletion/request').send({ email });
    const token = extractToken(mailer);

    const tokenHash = crypto.createHash('sha256').update(token).digest('hex');
    const entry = backend.state.tokens.get(tokenHash);
    backend.state.tokens.set(tokenHash, { ...entry, expiresAt: Date.now() - 1 });

    const res = await request(app).post('/api/v1/account-deletion/confirm').send({ token });
    assert.equal(res.status, 400);
    assert.equal(res.body.code, 'TOKEN_EXPIRED');
  });

  it('confirm ohne Token im Body wird mit 400 abgewiesen', async () => {
    const app = buildApp({ mailer: createFakeMailer(), backendClient: backend.client });
    const res = await request(app).post('/api/v1/account-deletion/confirm').send({});
    assert.equal(res.status, 400);
  });

  it('der Bestätigungslink führt auf eine GET-Seite, keine automatische Löschung per Linkscanner möglich', async () => {
    // Die Löschung wird AUSSCHLIESSLICH über den oben getesteten POST
    // /confirm ausgelöst; der versendete Link selbst ist nur eine URL zu
    // einer statischen Website-Seite (kein API-Endpunkt dieses Servers).
    const mailer = createFakeMailer();
    const app = buildApp({ mailer, backendClient: backend.client });

    const email = `scanner-${crypto.randomUUID()}@example.com`;
    backend.state.accounts.set(email, crypto.randomUUID());
    await request(app).post('/api/v1/account-deletion/request').send({ email });

    const [, link] = mailer.sent[0].text.match(/(https?:\/\/\S+)/u) || [];
    const getRes = await request(app).get(new URL(link).pathname + new URL(link).search);
    assert.equal(getRes.status, 404); // diese API kennt keine GET-Route dafür
  });

  // -------------------------------------------------------------------------
  // Fehler beim E-Mail-Versand / Backend-Ausfall (stellvertretend für
  // PostgreSQL-Ausfall im App-Backend)
  // -------------------------------------------------------------------------

  it('schlägt der E-Mail-Versand fehl, antwortet die API mit 202 (keine Account-Enumeration via SMTP-Fehler)', async () => {
    const mailer = createFakeMailer();
    mailer.fail = true;
    const app = buildApp({ mailer, backendClient: backend.client });

    const email = `mailfail-${crypto.randomUUID()}@example.com`;
    backend.state.accounts.set(email, crypto.randomUUID());

    const res = await request(app).post('/api/v1/account-deletion/request').send({ email });
    // Kein 503: eine 503-Antwort nur für bekannte Accounts würde verraten, ob
    // die Adresse registriert ist (Account-Enumeration über SMTP-Ausfall).
    assert.equal(res.status, 202);
    assert.ok(res.body.message);
  });

  it('ist das App-Backend nicht erreichbar, antworten request und confirm mit 503', async () => {
    const app = buildApp({ mailer: createFakeMailer(), backendClient: createOfflineClient() });

    const requestRes = await request(app)
      .post('/api/v1/account-deletion/request')
      .send({ email: `offline-${crypto.randomUUID()}@example.com` });
    assert.equal(requestRes.status, 503);

    const confirmRes = await request(app).post('/api/v1/account-deletion/confirm').send({ token: 'irrelevant' });
    assert.equal(confirmRes.status, 503);
  });

  it('antwortet das App-Backend mit 500 (z.B. PostgreSQL-Ausfall dort), antwortet request mit 503, keine Mail wird versendet', async () => {
    const mailer = createFakeMailer();
    const app = buildApp({ mailer, backendClient: backend.client });

    const email = `backend500-${crypto.randomUUID()}@example.com`;
    backend.state.accounts.set(email, crypto.randomUUID());
    backend.state.mode = 'error500';

    const res = await request(app).post('/api/v1/account-deletion/request').send({ email });
    assert.equal(res.status, 503);
    assert.equal(mailer.sent.length, 0);
  });

  // -------------------------------------------------------------------------
  // Rate Limiting
  // -------------------------------------------------------------------------

  it('Rate Limit pro Account: mehr als 3 Anfragen pro Stunde für dieselbe E-Mail werden abgewiesen', async () => {
    const mailer = createFakeMailer();
    const app = buildApp({ mailer, backendClient: backend.client });

    const email = `ratelimit-account-${crypto.randomUUID()}@example.com`;
    backend.state.accounts.set(email, crypto.randomUUID());

    const responses = [];
    for (let i = 0; i < 4; i += 1) {
      responses.push(await request(app).post('/api/v1/account-deletion/request').send({ email }));
    }

    assert.ok(responses.slice(0, 3).every((res) => res.status === 202));
    assert.equal(responses[3].status, 429);
  });

  it('Rate Limit pro IP gilt auch über viele verschiedene E-Mail-Adressen hinweg', async () => {
    const app = buildApp({ mailer: createFakeMailer(), backendClient: backend.client });

    const responses = [];
    for (let i = 0; i < 11; i += 1) {
      responses.push(
        await request(app)
          .post('/api/v1/account-deletion/request')
          .send({ email: `ratelimit-ip-${i}-${crypto.randomUUID()}@example.com` }),
      );
    }

    assert.ok(responses.slice(0, 10).every((res) => res.status === 202));
    assert.equal(responses[10].status, 429);
  });
});
