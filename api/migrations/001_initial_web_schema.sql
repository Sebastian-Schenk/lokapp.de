CREATE TABLE alpha_signups (
  id UUID PRIMARY KEY,
  email TEXT NOT NULL,
  email_normalized TEXT NOT NULL UNIQUE,
  platform TEXT NOT NULL CHECK (
    platform IN ('ios', 'android', 'multiple')
  ),
  status TEXT NOT NULL CHECK (
    status IN ('pending', 'confirmed', 'unsubscribed')
  ),
  confirmation_token_hash TEXT UNIQUE,
  confirmation_expires_at TIMESTAMPTZ,
  unsubscribe_token_hash TEXT NOT NULL UNIQUE,
  consent_version TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  confirmed_at TIMESTAMPTZ,
  unsubscribed_at TIMESTAMPTZ
);

CREATE INDEX alpha_signups_status_index
  ON alpha_signups (status);

CREATE TABLE polls (
  id UUID PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  type TEXT NOT NULL CHECK (
    type IN ('choice', 'text')
  ),
  status TEXT NOT NULL DEFAULT 'draft' CHECK (
    status IN ('draft', 'active', 'closed')
  ),
  content JSONB NOT NULL DEFAULT '{}'::JSONB,
  max_response_length INTEGER NOT NULL DEFAULT 1200 CHECK (
    max_response_length BETWEEN 1 AND 1200
  ),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  closes_at TIMESTAMPTZ
);

CREATE INDEX polls_status_index
  ON polls (status, closes_at);

CREATE TABLE poll_options (
  id UUID PRIMARY KEY,
  poll_id UUID NOT NULL REFERENCES polls(id) ON DELETE CASCADE,
  option_key TEXT NOT NULL,
  label JSONB NOT NULL DEFAULT '{}'::JSONB,
  position INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (poll_id, option_key)
);

CREATE INDEX poll_options_poll_position_index
  ON poll_options (poll_id, position);

CREATE TABLE poll_votes (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  poll_id UUID NOT NULL REFERENCES polls(id) ON DELETE CASCADE,
  option_id UUID NOT NULL REFERENCES poll_options(id) ON DELETE CASCADE,
  voter_token_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (poll_id, voter_token_hash)
);

CREATE INDEX poll_votes_option_index
  ON poll_votes (option_id);

CREATE TABLE poll_responses (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  poll_id UUID NOT NULL REFERENCES polls(id) ON DELETE CASCADE,
  message TEXT NOT NULL CHECK (
    char_length(message) BETWEEN 1 AND 1200
  ),
  responder_token_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (poll_id, responder_token_hash)
);

CREATE INDEX poll_responses_poll_index
  ON poll_responses (poll_id, created_at DESC);