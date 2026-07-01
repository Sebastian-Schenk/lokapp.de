import fs from 'node:fs/promises';
import path from 'node:path';

import pg from 'pg';

const { Pool } = pg;

const requiredEnv = (name) => {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
};

const db = new Pool({
  host: requiredEnv('DB_HOST'),
  port: Number(process.env.DB_PORT || 5432),
  database: requiredEnv('DB_NAME'),
  user: requiredEnv('DB_USER'),
  password: requiredEnv('DB_PASSWORD'),
  max: 1,
  connectionTimeoutMillis: 5_000,
});

const migrationsDirectory = path.resolve('migrations');

const run = async () => {
  const client = await db.connect();

  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS schema_migrations (
        filename TEXT PRIMARY KEY,
        applied_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `);

    const files = (await fs.readdir(migrationsDirectory))
      .filter((file) => file.endsWith('.sql'))
      .sort();

    if (files.length === 0) {
      throw new Error('No SQL migration files found.');
    }

    const appliedResult = await client.query(
      'SELECT filename FROM schema_migrations',
    );

    const applied = new Set(
      appliedResult.rows.map((row) => row.filename),
    );

    for (const file of files) {
      if (applied.has(file)) {
        console.log(`Already applied: ${file}`);
        continue;
      }

      const sql = await fs.readFile(
        path.join(migrationsDirectory, file),
        'utf8',
      );

      if (!sql.trim()) {
        throw new Error(`Migration file is empty: ${file}`);
      }

      console.log(`Applying migration: ${file}`);

      await client.query('BEGIN');

      try {
        await client.query(sql);

        await client.query(
          'INSERT INTO schema_migrations (filename) VALUES ($1)',
          [file],
        );

        await client.query('COMMIT');

        console.log(`Applied: ${file}`);
      } catch (error) {
        await client.query('ROLLBACK');
        throw error;
      }
    }

    console.log('Migrations completed.');
  } finally {
    client.release();
    await db.end();
  }
};

run().catch((error) => {
  console.error('Migration failed:', error);
  process.exit(1);
});