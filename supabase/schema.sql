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

-- Signed-in users reach these tables through the API. Row-level security below
-- decides which rows they can touch; these grants only open the tables.
grant usage on schema public to anon, authenticated;
grant select, insert, update, delete on public.learners to authenticated;
grant select, insert, update, delete on public.progress to authenticated;
grant select, insert, update, delete on public.questions to authenticated;
revoke all on public.learners from anon;
revoke all on public.progress from anon;
revoke all on public.questions from anon;

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

-- ---------------------------------------------------------------------------
-- One profile row per account.
-- Created automatically the moment Supabase Auth creates a user, so a brand new
-- sign-up always leaves a row behind — even before any learner is added.
-- ---------------------------------------------------------------------------

create table if not exists public.profiles (
  user_id uuid primary key references auth.users (id) on delete cascade,
  phone text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists profiles_phone_idx on public.profiles (phone);

grant usage on schema public to anon, authenticated;
grant select, insert, update, delete on public.profiles to authenticated;
revoke all on public.profiles from anon;

alter table public.profiles enable row level security;

drop policy if exists "profiles are private to their account" on public.profiles;
create policy "profiles are private to their account"
  on public.profiles
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Runs as the table owner so it can write the row even though the new account
-- has no session yet.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (user_id, phone)
  values (
    new.id,
    coalesce(
      new.raw_user_meta_data ->> 'phone',
      split_part(new.email, '@', 1)
    )
  )
  on conflict (user_id) do update
    set phone = excluded.phone,
        updated_at = now();
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Backfill profiles for accounts that existed before the trigger was added.
insert into public.profiles (user_id, phone)
select
  u.id,
  coalesce(u.raw_user_meta_data ->> 'phone', split_part(u.email, '@', 1))
from auth.users u
on conflict (user_id) do nothing;

