-- Steady Phase 2 schema
-- This migration defines the data model for authenticated users, sessions, and messages.
-- Not active in Phase 1 (no auth). Run via: supabase db push

create table if not exists public.users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  display_name text,
  child_diagnosis text check (child_diagnosis in ('cp', 'asd', 'both')),
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

create table if not exists public.chat_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.users(id) on delete cascade not null,
  started_at timestamptz default now() not null,
  last_active_at timestamptz default now() not null
);

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  session_id uuid references public.chat_sessions(id) on delete cascade not null,
  role text check (role in ('user', 'assistant')) not null,
  content text not null,
  created_at timestamptz default now() not null
);

create table if not exists public.community_tips (
  id uuid primary key default gen_random_uuid(),
  category text check (
    category in (
      'iep-tips', 'respite-care', 'sensory-strategies',
      'caregiver-self-care', 'communication'
    )
  ) not null,
  tip text not null,
  attribution text,
  approved boolean default false not null,
  submitted_by uuid references public.users(id) on delete set null,
  created_at timestamptz default now() not null
);

-- Row level security (to be configured in Phase 2)
alter table public.users enable row level security;
alter table public.chat_sessions enable row level security;
alter table public.messages enable row level security;
alter table public.community_tips enable row level security;

-- Indexes for performance
create index if not exists messages_session_id_idx on public.messages(session_id);
create index if not exists chat_sessions_user_id_idx on public.chat_sessions(user_id);
create index if not exists community_tips_category_idx on public.community_tips(category);
