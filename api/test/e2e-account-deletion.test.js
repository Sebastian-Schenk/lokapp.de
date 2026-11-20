// ---------------------------------------------------------------------------
// End-to-End: Website → echtes App-Backend → bestehender Deletion-Worker
//
// Läuft nur, wenn LOKAPP_BACKEND_DIR auf ein Checkout des App-Backends zeigt,
// das bereits migrations/010_account_deletion_confirmation.sql und
// src/routes/internal-account-deletion.js enthält, und dessen lokale
// Test-DB erreichbar ist:
//
//   LOKAPP_BACKEND_DIR=../../../Apps/Lokapp/Hardware/server npm test
//
// Backend-DB: BACKEND_TEST_DB_* (Standard: 127.0.0.1:5433/lokapp_local).
// Eigenständig von test/helpers.js (siehe account-deletion.test.js) –
// nutzt nur src/account-deletion.js und src/account-deletion-mail.js.
// Nutzt ausschließlich synthetische Testaccounts, niemals Produktionsdaten.
// ---------------------------------------------------------------------------
import assert from 'node:assert/strict';
import { spawn, spawnSync } from 'node:child_process';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { after, before, describe, it } from 'node:test';

import express from 'express';
import pg from 'pg';
import request from 'supertest';

import { createAccountDeletionBackendClient, registerAccountDeletionRoutes } from '../src/account-deletion.js';

const backendDir = process.env.LOKAPP_BACKEND_DIR
  ? path.resolve(process.env.LOKAPP_BACKEND_DIR)
  : null;

const enabled = Boolean(
  backendDir &&
    fs.existsSync(path.join(backendDir, 'src/routes/internal-account-deletion.js')) &&
    fs.existsSync(path.join(backendDir, 'migrations/010_account_deletion_confirmation.sql')),
);

const backendDbEnv = {
  DB_HOST: process.env.BACKEND_TEST_DB_HOST || '127.0.0.1',
  DB_PORT: process.env.BACKEND_TEST_DB_PORT || '5433',
  DB_USER: process.env.BACKEND_TEST_DB_USER || 'lokapp_local',
  DB_PASSWORD: process.env.BACKEND_TEST_DB_PASSWORD || 'lokapp_local_dev',
  DB_NAME: process.env.BACKEND_TEST_DB_NAME || 'lokapp_local',
};

const SECRET = crypto.randomBytes(32).toString('hex');
const USER_ID = crypto.randomUUID();
const EMAIL = `e2e-deletion-${USER_ID}@example.com`;

const createFakeMailer = () => {
  const mailer = {
    sent: [],
    sendMail: async (message) => {
      mailer.sent.push(message);
      return { messageId: crypto.randomUUID() };
    },
  };
  return mailer;
};

const runDeletionTick = () => {
  const script = `
    const db = require('./src/db');
    const { runDeletionOrchestrationTick } = require('./src/services/account-deletion/deletion.service');
    const { runCleanupTick } = require('./src/services/storage-cleanup/storage-cleanup.worker');
    (async () => {
      await runCleanupTick({ batchSize: 50 });
      await runDeletionOrchestrationTick({ batchSize: 50 });
    })().finally(() => db.end());
  `;

  const result = spawnSync(process.execPath, ['-e', script], {
    cwd: backendDir,
    env: {
      ...process.env,
      ...backendDbEnv,
      NODE_ENV: 'test',
      JWT_SECRET: 'e2e-account-deletion-test-secret',
      S3_PUBLIC_URL: 'http://127.0.0.1:8333',
      S3_BUCKET: 'lokapp-images',
      S3_ENDPOINT: 'http://127.0.0.1:8333',
      S3_ACCESS_KEY: 'lokapp_local',
      S3_SECRET_KEY: 'lokapp_local_s3_secret_2026',
    },
    encoding: 'utf8',
  });

  if (result.status !== 0) {
    throw new Error(`deletion tick failed: ${result.stderr}`);
  }
};

describe(
  'E2E Website → App-Backend Account Deletion',
  { skip: !enabled && 'LOKAPP_BACKEND_DIR nicht gesetzt oder Slice 4.4b fehlt dort' },
  () => {
    let backendDb;
    let child;
    let app;
    let mailer;

    const cleanupBackend = async () => {
      await backendDb.query('DELETE FROM account_deletion_confirmation_tokens WHERE user_id = $1', [USER_ID]);
      await backendDb.query('DELETE FROM account_deletion_jobs WHERE user_id = $1', [USER_ID]);
      await backendDb.query('DELETE FROM auth_accounts WHERE id = $1', [USER_ID]);
      await backendDb.query('DELETE FROM users WHERE id = $1', [USER_ID]);
    };

    before(async () => {
      backendDb = new pg.Pool({
        host: backendDbEnv.DB_HOST,
        port: Number(backendDbEnv.DB_PORT),
        user: backendDbEnv.DB_USER,
        password: backendDbEnv.DB_PASSWORD,
        database: backendDbEnv.DB_NAME,
      });

      await cleanupBackend();

      await backendDb.query(
        `INSERT INTO users (id, name, plan_type, config, created_at)
         VALUES ($1, 'E2E Deletion Test', 'basic', '{}'::jsonb, NOW())`,
        [USER_ID],
      );
      await backendDb.query(
        `INSERT INTO auth_accounts (id, email, password_hash, provider, provider_id, email_verified, created_at)
         VALUES ($1, $2, 'hash', 'email', NULL, true, NOW())`,
        [USER_ID, EMAIL],
      );

      const serverScript = `
        const express = require('express');
        const app = express();
        app.use(express.json());
        app.use('/api/internal/account-deletion', require('./src/routes/internal-account-deletion'));
        const server = app.listen(0, '127.0.0.1', () => console.log('PORT=' + server.address().port));
      `;

      child = spawn(process.execPath, ['-e', serverScript], {
        cwd: backendDir,
        env: { ...process.env, ...backendDbEnv, NODE_ENV: 'test', ACCOUNT_DELETION_INTERNAL_SECRET: SECRET },
        stdio: ['ignore', 'pipe', 'inherit'],
      });

      const port = await new Promise((resolve, reject) => {
        child.stdout.on('data', (chunk) => {
          const match = String(chunk).match(/PORT=(\d+)/u);
          if (match) resolve(Number(match[1]));
        });
        child.on('exit', (code) => reject(new Error(`backend exited ${code}`)));
      });

      mailer = createFakeMailer();

      app = express();
      app.use(express.json());
      registerAccountDeletionRoutes(app, {
        mailer,
        smtpFrom: 'LokApp <no-reply@lokapp.test>',
        publicBaseUrl: 'https://lokapp.test',
        confirmationPagePath: '/pages/account-loeschen/bestaetigen/',
        backendClient: createAccountDeletionBackendClient({
          internalUrl: `http://127.0.0.1:${port}`,
          internalSecret: SECRET,
        }),
      });
    });

    after(async () => {
      child?.kill();
      await cleanupBackend();
      await backendDb.end();
    });

    it('vollständiger Ablauf: Website-Request → echte Bestätigungsmail → Confirm → echter Deletion-Job → Worker löscht den Account', async () => {
      const requestRes = await request(app).post('/api/v1/account-deletion/request').send({ email: EMAIL });

      assert.equal(requestRes.status, 202);
      assert.equal(mailer.sent.length, 1);
      assert.equal(mailer.sent[0].to, EMAIL);

      const token = mailer.sent[0].text.match(/token=([a-f0-9]+)/u)?.[1];
      assert.ok(token);

      const confirmRes = await request(app).post('/api/v1/account-deletion/confirm').send({ token });
      assert.equal(confirmRes.status, 202);
      assert.equal(confirmRes.body.status, 'pending');

      const jobRow = (
        await backendDb.query('SELECT status FROM account_deletion_jobs WHERE user_id = $1', [USER_ID])
      ).rows[0];
      assert.equal(jobRow.status, 'pending');

      for (let i = 0; i < 10; i += 1) {
        runDeletionTick();

        const row = (
          await backendDb.query('SELECT status FROM account_deletion_jobs WHERE user_id = $1', [USER_ID])
        ).rows[0];

        if (row.status === 'completed') break;
      }

      const finalJob = (
        await backendDb.query('SELECT status FROM account_deletion_jobs WHERE user_id = $1', [USER_ID])
      ).rows[0];
      assert.equal(finalJob.status, 'completed');

      const remainingUser = await backendDb.query('SELECT 1 FROM users WHERE id = $1', [USER_ID]);
      assert.equal(remainingUser.rows.length, 0);

      const remainingAccount = await backendDb.query('SELECT 1 FROM auth_accounts WHERE id = $1', [USER_ID]);
      assert.equal(remainingAccount.rows.length, 0);
    });
  },
);
