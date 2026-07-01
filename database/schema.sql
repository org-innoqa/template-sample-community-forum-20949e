CREATE TABLE IF NOT EXISTS categories (
  id bigint generated always as identity primary key,
  name text not null,
  description text
);

CREATE TABLE IF NOT EXISTS threads (
  id bigint generated always as identity primary key,
  category_id bigint references categories(id),
  title text not null,
  author_id text not null,
  created_at timestamptz default now(),
  upvotes int default 0
);

CREATE TABLE IF NOT EXISTS replies (
  id bigint generated always as identity primary key,
  thread_id bigint references threads(id),
  parent_id bigint references replies(id),
  content text not null,
  author_id text not null,
  created_at timestamptz default now()
);

INSERT INTO categories (name) VALUES ('Frontend'), ('Backend'), ('DevOps') ON CONFLICT DO NOTHING;