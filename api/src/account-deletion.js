// ---------------------------------------------------------------------------
// Security-Slice 4.4b – Website Account Deletion
//
// Eigenständiges, voll testbares Modul, das NUR von index.js aufgerufen
// wird (registerAccountDeletionRoutes(app, deps)) und NICHTS aus dem
// bestehenden monolithischen index.js importiert. Es schreibt NIE direkt in
// die App-Backend-Datenbank, sondern ausschließlich über den hier
// erzeugten Client gegen die per Shared Secret geschützten internen
// Endpunkte (POST /api/internal/account-deletion/request-token und
// /confirm) des bestehenden App-Backends. Keine zweite Löschlogik: der
// eigentliche Löschauftrag entsteht ausschließlich dort, über das
// bestehende createDeletionJob().
// ---------------------------------------------------------------------------

import crypto from 'node:crypto';

import rateLimit, { ipKeyGenerator } from 'express-rate-limit';

import { sendAccountDeletionConfirmationMail } from './account-deletion-mail.js';

export class AccountDeletionBackendError extends Error {
  constructor(code, { status = null, upstreamCode = null } = {}) {
    super(code);
    this.name = 'AccountDeletionBackendError';
    this.code = code;
    this.status = status;
    this.upstreamCode = upstreamCode;
  }
}

// ---------------------------------------------------------------------------
// Service-to-Service-Client, eigenständig von jedem anderen internen
// App-Backend-Client: eigenes Secret, damit ein geleaktes Secret für eine
// andere interne Fähigkeit niemals auch Account-Löschungen auslösen kann.
// ---------------------------------------------------------------------------
export const createAccountDeletionBackendClient = ({
  internalUrl,
  internalSecret,
  timeoutMs = 8000,
  fetchImpl = globalThis.fetch,
}) => {
  const isConfigured =
    Boolean(internalUrl) &&
    typeof internalSecret === 'string' &&
    internalSecret.length >= 32;

  const call = async (path, body) => {
    if (!isConfigured) {
      throw new AccountDeletionBackendError('ACCOUNT_DELETION_BACKEND_NOT_CONFIGURED');
    }

    let response;

    try {
      response = await fetchImpl(`${internalUrl}${path}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${internalSecret}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
        redirect: 'error',
        signal: AbortSignal.timeout(timeoutMs),
      });
    } catch {
      throw new AccountDeletionBackendError('ACCOUNT_DELETION_BACKEND_UNAVAILABLE');
    }

    let payload = null;

    try {
      payload = await response.json();
    } catch {
      payload = null;
    }

    if (response.status >= 500) {
      throw new AccountDeletionBackendError('ACCOUNT_DELETION_BACKEND_UNAVAILABLE', {
        status: response.status,
        upstreamCode: payload?.code ?? null,
      });
    }

    if (!response.ok) {
      throw new AccountDeletionBackendError('ACCOUNT_DELETION_BACKEND_REJECTED', {
        status: response.status,
        upstreamCode: payload?.code ?? null,
      });
    }

    return payload;
  };

  return {
    isConfigured,

    // `found: false` (unbekannte oder nicht verifizierte E-Mail) ist eine
    // normale, erwartete Antwort, kein Fehler.
    requestAccountDeletionToken: async ({ email }) => {
      const payload = await call('/api/internal/account-deletion/request-token', { email });

      if (!payload || typeof payload.found !== 'boolean') {
        throw new AccountDeletionBackendError('ACCOUNT_DELETION_BACKEND_INVALID_RESPONSE');
      }

      return payload.found
        ? {
          found: true,
          email: payload.email,
          token: payload.token,
          expiresInMinutes: payload.expiresInMinutes,
        }
        : { found: false };
    },

    // Ein abgelehnter Token (TOKEN_INVALID / TOKEN_EXPIRED / TOKEN_ALREADY_USED)
    // ist hier kein durchschlagender Fehler, sondern ein normales,
    // erwartetes Ergebnis.
    confirmAccountDeletion: async ({ token }) => {
      try {
        const payload = await call('/api/internal/account-deletion/confirm', { token });
        return { ok: true, status: payload?.status ?? null };
      } catch (error) {
        if (
          error instanceof AccountDeletionBackendError &&
          error.code === 'ACCOUNT_DELETION_BACKEND_REJECTED' &&
          error.upstreamCode
        ) {
          return { ok: false, code: error.upstreamCode };
        }

        throw error;
      }
    },
  };
};

const sha256 = (value) => crypto.createHash('sha256').update(value).digest('hex');

const normaliseEmail = (email) => String(email || '').trim().toLowerCase();

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/u.test(email);

const GENERIC_ACCOUNT_DELETION_REQUEST_RESPONSE = {
  message:
    'Falls diese E-Mail-Adresse zu einem LokApp-Account gehört, erhältst du in Kürze eine Bestätigungsmail.',
};

const SERVICE_UNAVAILABLE_RESPONSE = {
  error: 'Der Dienst ist vorübergehend nicht verfügbar. Bitte versuche es später erneut.',
};

const CONFIRM_ERROR_MESSAGES = {
  TOKEN_INVALID: 'Dieser Bestätigungslink ist ungültig.',
  TOKEN_EXPIRED: 'Dieser Bestätigungslink ist abgelaufen. Bitte fordere die Löschung erneut an.',
  TOKEN_ALREADY_USED: 'Dieser Bestätigungslink wurde bereits verwendet.',
};

// ---------------------------------------------------------------------------
// Registriert POST /api/v1/account-deletion/request und /confirm auf einer
// bereits existierenden Express-App. Mountet NICHTS anderes, verändert
// keine bestehende Route – reine Ergänzung.
//
// Egal ob die E-Mail-Adresse zu einem Account gehört, nicht verifiziert ist
// oder gar nicht existiert: die Browser-Antwort von /request ist immer
// identisch (GENERIC_ACCOUNT_DELETION_REQUEST_RESPONSE) – keine
// Account-Enumeration möglich. Der Bestätigungslink führt auf eine
// GET-Seite, die selbst noch nichts auslöst; erst ein ausdrücklicher POST
// von dort (/confirm) legt über das bestehende createDeletionJob() im
// App-Backend den Löschjob an.
// ---------------------------------------------------------------------------
export const registerAccountDeletionRoutes = (
  app,
  { mailer, smtpFrom, publicBaseUrl, confirmationPagePath, backendClient },
) => {
  const requestIpLimit = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 10,
    standardHeaders: true,
    legacyHeaders: false,
    keyGenerator: (request) => `ip:${ipKeyGenerator(request.ip)}`,
    message: { error: 'Zu viele Anfragen. Bitte versuche es später erneut.' },
  });

  // Pro Account statt pro Rohtext-E-Mail geschlüsselt (sha256-Digest) – die
  // E-Mail-Adresse selbst landet nie im Rate-Limit-Speicher.
  const requestAccountLimit = rateLimit({
    windowMs: 60 * 60 * 1000,
    limit: 3,
    standardHeaders: true,
    legacyHeaders: false,
    keyGenerator: (request) => `account:${sha256(normaliseEmail(request.body?.email))}`,
    message: { error: 'Zu viele Anfragen. Bitte versuche es später erneut.' },
  });

  const confirmIpLimit = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 20,
    standardHeaders: true,
    legacyHeaders: false,
    keyGenerator: (request) => `ip:${ipKeyGenerator(request.ip)}`,
    message: { error: 'Zu viele Anfragen. Bitte versuche es später erneut.' },
  });

  const confirmationUrl = (token) =>
    `${publicBaseUrl}${confirmationPagePath}?token=${encodeURIComponent(token)}`;

  app.post(
    '/api/v1/account-deletion/request',
    requestIpLimit,
    requestAccountLimit,
    async (request, response, next) => {
      try {
        const email = normaliseEmail(request.body?.email);

        if (!isValidEmail(email)) {
          // Dieselbe Antwort wie "nicht gefunden" – ein ungültiges Format
          // darf nicht von einer unbekannten Adresse unterscheidbar sein.
          return response.status(202).json(GENERIC_ACCOUNT_DELETION_REQUEST_RESPONSE);
        }

        let result;

        try {
          result = await backendClient.requestAccountDeletionToken({ email });
        } catch (error) {
          console.error('Account deletion token request failed:', {
            code: error.code,
            status: error.status,
          });

          return response.status(503).json(SERVICE_UNAVAILABLE_RESPONSE);
        }

        if (result.found) {
          try {
            await sendAccountDeletionConfirmationMail({
              mailer,
              from: smtpFrom,
              email: result.email,
              confirmationUrl: confirmationUrl(result.token),
              expiresInMinutes: result.expiresInMinutes,
            });
          } catch (error) {
            console.error('Account deletion confirmation email could not be sent:', {
              code: error.code,
              command: error.command,
              responseCode: error.responseCode,
              message: error.message,
            });

            return response.status(503).json(SERVICE_UNAVAILABLE_RESPONSE);
          }
        }

        // result.found === false fließt absichtlich in dieselbe Antwort wie
        // oben – keine Account-Enumeration über die API möglich.
        return response.status(202).json(GENERIC_ACCOUNT_DELETION_REQUEST_RESPONSE);
      } catch (error) {
        return next(error);
      }
    },
  );

  app.post('/api/v1/account-deletion/confirm', confirmIpLimit, async (request, response, next) => {
    try {
      const token = String(request.body?.token || '').trim();

      if (!token) {
        return response.status(400).json({ error: 'Token fehlt.' });
      }

      let result;

      try {
        result = await backendClient.confirmAccountDeletion({ token });
      } catch (error) {
        console.error('Account deletion confirmation failed:', {
          code: error.code,
          status: error.status,
        });

        return response.status(503).json(SERVICE_UNAVAILABLE_RESPONSE);
      }

      if (!result.ok) {
        return response.status(400).json({
          code: result.code,
          error:
            CONFIRM_ERROR_MESSAGES[result.code] ||
            'Dieser Bestätigungslink konnte nicht verarbeitet werden.',
        });
      }

      // Absichtlich "wird jetzt verarbeitet", nicht "ist abgeschlossen" – die
      // tatsächliche Storage-/DB-Löschung läuft asynchron im bestehenden
      // Account-Deletion-Worker weiter.
      return response.status(202).json({
        message: 'Deine Löschung wird jetzt verarbeitet.',
        status: result.status,
      });
    } catch (error) {
      return next(error);
    }
  });
};
