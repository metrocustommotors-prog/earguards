/*
  # Create contact_submissions and newsletter_subscribers tables

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text) — sender's name
      - `email` (text) — sender's email
      - `topic` (text) — selected topic category
      - `message` (text) — message body
      - `created_at` (timestamptz) — submission timestamp

    - `newsletter_subscribers`
      - `id` (uuid, primary key)
      - `email` (text, unique) — subscriber email
      - `created_at` (timestamptz) — signup timestamp

  2. Security
    - RLS enabled on both tables
    - INSERT-only policy for anonymous users on contact_submissions (anyone can submit)
    - INSERT-only policy for anonymous users on newsletter_subscribers (anyone can subscribe)
    - Duplicate email on newsletter_subscribers handled via unique constraint + upsert
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL DEFAULT '',
  email text NOT NULL DEFAULT '',
  topic text NOT NULL DEFAULT '',
  message text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a contact form"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe to the newsletter"
  ON newsletter_subscribers
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
