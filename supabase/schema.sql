-- GentleLearn Supabase schema
-- Paste this into Supabase → SQL Editor → New query, then press Run.

create table if not exists public.learners (
  id uuid primary key,
  user_id uuid not null references auth.users (id) on delete cascade,
  name text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.progress (
  learner_id uuid not null references public.learners (id) on delete cascade,
  user_id uuid not null references auth.users (id) on delete cascade,
  lesson_slug text not null,
  completed_at timestamptz not null default now(),
  primary key (learner_id, lesson_slug)
);

create table if not exists public.questions (
  id uuid primary key,
  user_id uuid not null references auth.users (id) on delete cascade,
  learner_id uuid not null references public.learners (id) on delete cascade,
  learner_name text not null,
  text text not null,
  created_at timestamptz not null default now()
);

create index if not exists learners_user_id_idx on public.learners (user_id);
create index if not exists progress_user_id_idx on public.progress (user_id);
create index if not exists progress_learner_id_idx on public.progress (learner_id);
create index if not exists questions_user_id_idx on public.questions (user_id);

alter table public.learners enable row level security;
alter table public.progress enable row level security;
alter table public.questions enable row level security;

drop policy if exists "learners are private to their account" on public.learners;
create policy "learners are private to their account"
  on public.learners
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "progress is private to its account" on public.progress;
create policy "progress is private to its account"
  on public.progress
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "questions are private to their account" on public.questions;
create policy "questions are private to their account"
  on public.questions
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
