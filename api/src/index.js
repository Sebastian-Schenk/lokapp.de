import crypto from 'node:crypto';

import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import nodemailer from 'nodemailer';
import pg from 'pg';

const { Pool } = pg;

const requiredEnv = (name) => {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
};

const config = {
  nodeEnv: process.env.NODE_ENV || 'production',
  apiPort: Number(process.env.API_PORT || 3000),
  publicBaseUrl: requiredEnv('PUBLIC_BASE_URL').replace(/\/$/, ''),
  privacyVersion: requiredEnv('PRIVACY_VERSION'),

  db: {
    host: requiredEnv('DB_HOST'),
    port: Number(process.env.DB_PORT || 5432),
    database: requiredEnv('DB_NAME'),
    user: requiredEnv('DB_USER'),
    password: requiredEnv('DB_PASSWORD'),
  },

  smtp: {
    host: requiredEnv('SMTP_HOST'),
    port: Number(process.env.SMTP_PORT || 587),
    user: requiredEnv('SMTP_USER'),
    password: requiredEnv('SMTP_PASSWORD'),
    from: requiredEnv('SMTP_FROM'),
    tlsServername: requiredEnv('SMTP_TLS_SERVERNAME'),
  },
};

const db = new Pool({
  ...config.db,
  max: 10,
  idleTimeoutMillis: 30_000,
  connectionTimeoutMillis: 5_000,
});

const mailer = nodemailer.createTransport({
  host: config.smtp.host,
  port: config.smtp.port,
  secure: false,
  requireTLS: true,
  auth: {
    user: config.smtp.user,
    pass: config.smtp.password,
  },
  tls: {
    minVersion: 'TLSv1.2',
    servername: config.smtp.tlsServername,
  },
});

const app = express();

app.disable('x-powered-by');
app.set('trust proxy', 1);

app.use(
  helmet({
    contentSecurityPolicy: false,
  }),
);

app.use(express.json({ limit: '16kb' }));

const publicRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: 'Too many requests. Please try again later.',
  },
});

const alphaRateLimit = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 8,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: 'Too many sign-up attempts. Please try again later.',
  },
});

app.use('/api/', publicRateLimit);

const sha256 = (value) =>
  crypto.createHash('sha256').update(value).digest('hex');

const randomToken = () =>
  crypto.randomBytes(32).toString('hex');

const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/u.test(email);

const normaliseEmail = (email) =>
  String(email || '').trim().toLowerCase();

const readCookies = (request) => {
  const rawCookieHeader = request.headers.cookie;

  if (!rawCookieHeader) {
    return {};
  }

  return rawCookieHeader
    .split(';')
    .map((part) => part.trim())
    .filter(Boolean)
    .reduce((cookies, part) => {
      const separatorIndex = part.indexOf('=');

      if (separatorIndex < 1) {
        return cookies;
      }

      const key = part.slice(0, separatorIndex);
      const value = part.slice(separatorIndex + 1);

      try {
        cookies[key] = decodeURIComponent(value);
      } catch {
        // Ungültige Cookies werden ignoriert.
      }

      return cookies;
    }, {});
};

const sendAlphaConfirmation = async ({
  email,
  confirmationToken,
}) => {
  const confirmationUrl =
    `${config.publicBaseUrl}/api/v1/alpha/confirm?token=${confirmationToken}`;

  await mailer.sendMail({
    from: config.smtp.from,
    to: email,
    subject: 'Bestätige deine LokApp Alpha-Anmeldung',
    text: [
      'Hallo,',
      '',
      'bitte bestätige deine Anmeldung zur LokApp Alpha über diesen Link:',
      confirmationUrl,
      '',
      'Wenn du dich nicht selbst angemeldet hast, kannst du diese E-Mail ignorieren.',
      '',
      'Viele Grüße',
      'LokApp',
    ].join('\n'),
  });
};

const getPollVisitorToken = (request, response) => {
  const cookies = readCookies(request);
  const existingToken = cookies.lokapp_poll_token;

  if (existingToken && /^[a-f0-9]{64}$/u.test(existingToken)) {
    return existingToken;
  }

  const newToken = randomToken();

  response.cookie('lokapp_poll_token', newToken, {
    httpOnly: true,
    sameSite: 'lax',
    secure: config.nodeEnv === 'production',
    maxAge: 365 * 24 * 60 * 60 * 1000,
    path: '/api',
  });

  return newToken;
};

app.get('/api/health', async (_request, response) => {
  try {
    await db.query('SELECT 1');

    response.status(200).json({
      status: 'ok',
    });
  } catch {
    response.status(503).json({
      status: 'unavailable',
    });
  }
});

app.post(
  '/api/v1/alpha/signups',
  alphaRateLimit,
  async (request, response, next) => {
    try {
      const email = normaliseEmail(request.body?.email);
      const platform = String(request.body?.platform || '').trim();
      const privacyAccepted = request.body?.privacyAccepted === true;

      const supportedPlatforms = new Set([
        'ios',
        'android',
        'multiple',
      ]);

      if (
        !isValidEmail(email) ||
        !supportedPlatforms.has(platform) ||
        !privacyAccepted
      ) {
        return response.status(400).json({
          error: 'Please check the submitted information.',
        });
      }

      const confirmationToken = randomToken();
      const unsubscribeToken = randomToken();

      const confirmationTokenHash = sha256(confirmationToken);
      const unsubscribeTokenHash = sha256(unsubscribeToken);

      const client = await db.connect();

      let shouldSendConfirmation = false;

      try {
        await client.query('BEGIN');

        const existingResult = await client.query(
          `
            SELECT id, status
            FROM alpha_signups
            WHERE email_normalized = $1
            FOR UPDATE
          `,
          [email],
        );

        const existing = existingResult.rows[0];

        if (!existing) {
          await client.query(
            `
              INSERT INTO alpha_signups (
                id,
                email,
                email_normalized,
                platform,
                status,
                confirmation_token_hash,
                confirmation_expires_at,
                unsubscribe_token_hash,
                consent_version
              )
              VALUES (
                $1,
                $2,
                $3,
                $4,
                'pending',
                $5,
                NOW() + INTERVAL '7 days',
                $6,
                $7
              )
            `,
            [
              crypto.randomUUID(),
              email,
              email,
              platform,
              confirmationTokenHash,
              unsubscribeTokenHash,
              config.privacyVersion,
            ],
          );

          shouldSendConfirmation = true;
        } else if (existing.status !== 'confirmed') {
          await client.query(
            `
              UPDATE alpha_signups
              SET
                email = $1,
                platform = $2,
                status = 'pending',
                confirmation_token_hash = $3,
                confirmation_expires_at = NOW() + INTERVAL '7 days',
                unsubscribe_token_hash = $4,
                consent_version = $5,
                updated_at = NOW()
              WHERE id = $6
            `,
            [
              email,
              platform,
              confirmationTokenHash,
              unsubscribeTokenHash,
              config.privacyVersion,
              existing.id,
            ],
          );

          shouldSendConfirmation = true;
        }

        await client.query('COMMIT');
      } catch (error) {
        await client.query('ROLLBACK');
        throw error;
      } finally {
        client.release();
      }

      if (shouldSendConfirmation) {
        try {
          await sendAlphaConfirmation({
            email,
            confirmationToken,
          });
        } catch (error) {
          console.error('Alpha confirmation email could not be sent.');

          return response.status(503).json({
            error:
              'The registration service is temporarily unavailable. Please try again later.',
          });
        }
      }

      return response.status(202).json({
        message:
          'If registration is possible, you will receive a confirmation email shortly.',
      });
    } catch (error) {
      return next(error);
    }
  },
);

app.get('/api/v1/alpha/confirm', async (request, response, next) => {
  try {
    const token = String(request.query?.token || '');

    if (!/^[a-f0-9]{64}$/u.test(token)) {
      return response.redirect(303, '/pages/alpha/?confirmed=0');
    }

    const result = await db.query(
      `
        UPDATE alpha_signups
        SET
          status = 'confirmed',
          confirmed_at = COALESCE(confirmed_at, NOW()),
          confirmation_token_hash = NULL,
          confirmation_expires_at = NULL,
          updated_at = NOW()
        WHERE
          confirmation_token_hash = $1
          AND status = 'pending'
          AND confirmation_expires_at > NOW()
      `,
      [sha256(token)],
    );

    return response.redirect(
      303,
      result.rowCount > 0
        ? '/pages/alpha/?confirmed=1'
        : '/pages/alpha/?confirmed=0',
    );
  } catch (error) {
    return next(error);
  }
});

app.post('/api/v1/alpha/unsubscribe', async (request, response, next) => {
  try {
    const token = String(request.body?.token || '');

    if (!/^[a-f0-9]{64}$/u.test(token)) {
      return response.status(400).json({
        error: 'Invalid request.',
      });
    }

    await db.query(
      `
        UPDATE alpha_signups
        SET
          status = 'unsubscribed',
          unsubscribed_at = NOW(),
          updated_at = NOW()
        WHERE unsubscribe_token_hash = $1
      `,
      [sha256(token)],
    );

    return response.status(200).json({
      message: 'Your request has been processed.',
    });
  } catch (error) {
    return next(error);
  }
});

app.get('/api/v1/polls/active', async (_request, response, next) => {
  try {
    const result = await db.query(
      `
        SELECT
          polls.id,
          polls.slug,
          polls.type,
          polls.content,
          polls.max_response_length,
          COALESCE(
            json_agg(
              json_build_object(
                'key', poll_options.option_key,
                'label', poll_options.label,
                'position', poll_options.position
              )
              ORDER BY poll_options.position ASC
            ) FILTER (WHERE poll_options.id IS NOT NULL),
            '[]'::json
          ) AS options
        FROM polls
        LEFT JOIN poll_options
          ON poll_options.poll_id = polls.id
        WHERE
          polls.status = 'active'
          AND (
            polls.closes_at IS NULL
            OR polls.closes_at > NOW()
          )
        GROUP BY
          polls.id,
          polls.slug,
          polls.type,
          polls.content,
          polls.max_response_length
        ORDER BY polls.created_at DESC
        LIMIT 1
      `,
    );

    const poll = result.rows[0];

    if (!poll) {
      return response.status(404).json({
        error: 'No active poll found.',
      });
    }

    return response.status(200).json({
      poll,
    });
  } catch (error) {
    return next(error);
  }
});

app.post('/api/v1/polls/:slug/votes', async (request, response, next) => {
  try {
    const slug = String(request.params.slug || '').trim();
    const optionKey = String(request.body?.optionKey || '').trim();

    if (!slug || !optionKey) {
      return response.status(400).json({
        error: 'Invalid vote.',
      });
    }

    const client = await db.connect();
    const visitorToken = getPollVisitorToken(request, response);

    try {
      await client.query('BEGIN');

      const pollResult = await client.query(
        `
          SELECT id, type
          FROM polls
          WHERE
            slug = $1
            AND status = 'active'
            AND (
              closes_at IS NULL
              OR closes_at > NOW()
            )
          FOR UPDATE
        `,
        [slug],
      );

      const poll = pollResult.rows[0];

      if (!poll || poll.type !== 'choice') {
        await client.query('ROLLBACK');

        return response.status(404).json({
          error: 'Poll not found.',
        });
      }

      const optionResult = await client.query(
        `
          SELECT id
          FROM poll_options
          WHERE
            poll_id = $1
            AND option_key = $2
        `,
        [poll.id, optionKey],
      );

      const option = optionResult.rows[0];

      if (!option) {
        await client.query('ROLLBACK');

        return response.status(400).json({
          error: 'Invalid option.',
        });
      }

      const voteResult = await client.query(
        `
          INSERT INTO poll_votes (
            poll_id,
            option_id,
            voter_token_hash
          )
          VALUES ($1, $2, $3)
          ON CONFLICT (poll_id, voter_token_hash)
          DO NOTHING
          RETURNING id
        `,
        [poll.id, option.id, sha256(visitorToken)],
      );

      await client.query('COMMIT');

      return response.status(200).json({
        accepted: true,
        alreadyVoted: voteResult.rowCount === 0,
      });
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  } catch (error) {
    return next(error);
  }
});

app.post(
  '/api/v1/polls/:slug/responses',
  async (request, response, next) => {
    try {
      const slug = String(request.params.slug || '').trim();
      const message = String(request.body?.message || '').trim();

      if (!slug || !message) {
        return response.status(400).json({
          error: 'Invalid response.',
        });
      }

      const client = await db.connect();
      const visitorToken = getPollVisitorToken(request, response);

      try {
        await client.query('BEGIN');

        const pollResult = await client.query(
          `
            SELECT id, type, max_response_length
            FROM polls
            WHERE
              slug = $1
              AND status = 'active'
              AND (
                closes_at IS NULL
                OR closes_at > NOW()
              )
            FOR UPDATE
          `,
          [slug],
        );

        const poll = pollResult.rows[0];

        if (!poll || poll.type !== 'text') {
          await client.query('ROLLBACK');

          return response.status(404).json({
            error: 'Poll not found.',
          });
        }

        const maxLength = Math.min(
          Number(poll.max_response_length || 1200),
          1200,
        );

        if (message.length > maxLength) {
          await client.query('ROLLBACK');

          return response.status(400).json({
            error: 'Response is too long.',
          });
        }

        const insertResult = await client.query(
          `
            INSERT INTO poll_responses (
              poll_id,
              message,
              responder_token_hash
            )
            VALUES ($1, $2, $3)
            ON CONFLICT (poll_id, responder_token_hash)
            DO NOTHING
            RETURNING id
          `,
          [poll.id, message, sha256(visitorToken)],
        );

        await client.query('COMMIT');

        return response.status(200).json({
          accepted: true,
          alreadyResponded: insertResult.rowCount === 0,
        });
      } catch (error) {
        await client.query('ROLLBACK');
        throw error;
      } finally {
        client.release();
      }
    } catch (error) {
      return next(error);
    }
  },
);

app.use((_request, response) => {
  response.status(404).json({
    error: 'Not found.',
  });
});

app.use((error, _request, response, _next) => {
  console.error('Unhandled API error.');

  response.status(500).json({
    error: 'Internal server error.',
  });
});

const start = async () => {
  await db.query('SELECT 1');

  app.listen(config.apiPort, () => {
    console.log(`LokApp web API listening on port ${config.apiPort}.`);
  });

  mailer.verify()
  .then(() => {
    console.log('SMTP connection verified.');
  })
  .catch((error) => {
    console.error('SMTP connection could not be verified:', {
      code: error.code,
      command: error.command,
      responseCode: error.responseCode,
      message: error.message,
    });
  });
};

const shutdown = async () => {
  await db.end();
  process.exit(0);
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

start().catch(() => {
  console.error('API startup failed.');
  process.exit(1);
});