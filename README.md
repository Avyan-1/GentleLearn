# GentleLearn (rebuilt)

A calm, senior-friendly site for learning everyday digital skills. This is a
clean rebuild of the design and content at `gentlelearn.vercel.app`, written as a
normal Next.js project you own and can change freely.

## Stack

- Next.js 15 (App Router) + React 19
- Tailwind CSS v4 (design tokens in `app/globals.css`)
- Baloo 2 (headings) and Nunito (body), self-hosted via Fontsource
- **Supabase** for accounts and family data (optional, with a local fallback)
- **Real voice** through ElevenLabs, OpenAI or Azure (optional, with a browser
  voice fallback)

## Run it

```bash
npm install
cp .env.example .env.local   # optional — fill in the keys you have
npm run dev                  # http://localhost:3000
npm run build                # production build
```

Without any keys the app still works: accounts and progress are saved on the
device, and "Read this aloud" uses the best voice the browser has installed.

## Turn on the Supabase backend

1. Create a project at [supabase.com](https://supabase.com).
2. Open **SQL Editor → New query**, paste `supabase/schema.sql`, and run it.
3. Open **Project Settings → API** and copy:
   - Project URL → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon` public key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` key → `SUPABASE_SERVICE_ROLE_KEY` (server only)
4. Put them in `.env.local` and restart `npm run dev`.

What changes when it is on:

- Accounts are real Supabase Auth users, so signing in works on any device.
- Learners, lesson progress and family questions live in Postgres and are
  protected by row-level security (`auth.uid() = user_id`).
- The browser keeps a local cache, so pages still open instantly and keep
  working briefly offline. Changes are written locally first, then synced.
- Phone numbers are mapped to a private `@phone.gentlelearn.app` address for
  Supabase Auth. No email is ever sent. The phone number is kept in user
  metadata.

The `service_role` key is only used by `/api/auth/signup` to confirm the account
immediately. If you leave it out, sign-up falls back to the public client and
you must switch off **Confirm email** in Supabase → Authentication → Providers.

Accounts made before Supabase was switched on stay on the device and do not
migrate automatically. Create the account again with the same phone number to
start a cloud account; learners and progress can then be added fresh.

## Turn on the real human voice

Add **one** of these to `.env.local` and restart:

| Provider | Variables | Notes |
| --- | --- | --- |
| ElevenLabs | `ELEVENLABS_API_KEY`, `ELEVENLABS_VOICE_ID` | Most natural. Multilingual model covers Indian languages. |
| OpenAI | `OPENAI_API_KEY` | Uses `gpt-4o-mini-tts` with a warm, slow delivery. |
| Azure AI Speech | `AZURE_SPEECH_KEY`, `AZURE_SPEECH_REGION` | Uses the `*Neural` voice for the chosen language. |

`/api/tts` tries them in that order. If no provider is configured, the lesson
player falls back to the device's own voice and picks the most natural
installed voice it can find. Lesson text is sent to the provider you choose;
nothing else is shared.

## Pages

| Route | What it is |
| --- | --- |
| `/` | Language chooser (after sign-in) |
| `/welcome` | Marketing page for logged-out visitors |
| `/login` | Create account / sign in |
| `/account` | Phone number, plan, language, sign out |
| `/learners` | Choose who is learning today |
| `/lessons` | Lesson list, free lessons first then Plus categories |
| `/lessons/[slug]` | Step-by-step player with read-aloud and examples |
| `/ask` | Ask a question, saved for the Family corner |
| `/family` | Add learners, progress dropdown, questions |
| `/plans` | Free / Plus / Family pricing |
| `/help` | How to sign in, step by step |
| `/api/auth/signup` | Server-side Supabase account creation |
| `/api/tts` | Server-side human voice |

## Where things live

- `lib/lessons.ts` — all 71 lessons: titles, categories, summaries, steps, quiz
  and example illustrations. Edit copy here; routes come from the titles.
- `lib/store.ts` — local cache, PBKDF2 fallback accounts, learners, progress.
- `lib/supabase.ts` — Supabase client and phone ↔ email mapping.
- `lib/sync.ts` — sign-up/sign-in and two-way sync with Supabase.
- `components/app-provider.tsx` — the one place that reads/writes account state.
- `components/ui.tsx` — buttons, cards, logo and the bunny mark.
- `components/lesson-examples.tsx` — the inline example screens.
- `supabase/schema.sql` — tables, indexes and row-level security policies.

## Notes on the rebuild

- **Free lessons have written content.** The ten free lessons and the safety
  quiz are fully written, and each free lesson has an inline example. The 60
  Plus lessons use a shared four-step template as placeholder content — replace
  `plusSteps()` in `lib/lessons.ts` with real material when you have it.
- **Payments are not implemented.** Plus and Family show "Coming soon", as on
  the original site.
- **Text is intentionally large.** The base size is 18px, body copy is 21.6px
  and lesson steps are 27px. Adjust the `html` size in `app/globals.css` to
  scale the whole site up or down.
- **Phone verification is still not enforced.** Supabase Auth gives real
  server-side accounts, but anyone can register an unused valid-format number.
  To stop that, turn on Supabase phone auth with an SMS provider (Twilio,
  MessageBird, etc.) and add an OTP step at sign-up.

## Deploy

```bash
npx vercel        # or push to GitHub and import the repo at vercel.com
```

Add the same variables from `.env.local` in **Vercel → Project → Settings →
Environment Variables**, then redeploy.
