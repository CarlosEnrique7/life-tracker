CREATE TABLE users (
  id          SERIAL PRIMARY KEY,
  password    TEXT NOT NULL,
  email       TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
  is_admin    BOOLEAN NOT NULL DEFAULT FALSE,
  created_at  TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE exercises (
  id          SERIAL PRIMARY KEY,
  name        TEXT NOT NULL,
  category    TEXT,
  duration    INTEGER,
  intensity   INTEGER,
  user_id     INTEGER REFERENCES users(id) ON DELETE CASCADE,
  timestamp   TIMESTAMP DEFAULT NOW()
);

CREATE TABLE food (
  id          SERIAL PRIMARY KEY,
  name        TEXT NOT NULL,
  category    TEXT,
  quantity    INTEGER DEFAULT 1,
  calories    INTEGER,
  image_url   TEXT,
  user_id     INTEGER REFERENCES users(id) ON DELETE CASCADE,
  timestamp   TIMESTAMP DEFAULT NOW()
);

CREATE TABLE sleep (
  id          SERIAL PRIMARY KEY,
  start_time  TIMESTAMP NOT NULL,
  end_time    TIMESTAMP NOT NULL,
  duration    INTEGER,
  user_id     INTEGER REFERENCES users(id) ON DELETE CASCADE,
  timestamp   TIMESTAMP DEFAULT NOW ()
);
