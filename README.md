# GentleLearn (rebuilt)

A calm, senior-friendly site for learning everyday digital skills. This is a
clean rebuild of the design and content at `gentlelearn.vercel.app`, written as a
normal Next.js project you own and can change freely.

## Stack

- Next.js 15 (App Router) + React 19
- Tailwind CSS v4 (design tokens in `app/globals.css`)
- Baloo 2 (headings) and Nunito (body) via `next/font`
- No backend: accounts, learners, progress and questions live in `localStorage`

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Pages

| Route | What it is |
| --- | --- |
| `/` | Language chooser (after sign-in) |
| `/welcome` | Marketing page for logged-out visitors |
| `/login` | Create account / sign in |
| `/account` | Phone number, plan, language, sign out |
| `/lessons` | Lesson list, grouped free first then Plus |
| `/lessons/[slug]` | Step-by-step player with read-aloud |
| `/ask` | Ask a question, saved for the Family corner |
| `/family` | Add learners, see progress, read questions |
| `/plans` | Free / Plus / Family pricing |
| `/help` | How to sign in, step by step |

## Where things live

- `lib/lessons.ts` — all 71 lessons: titles, categories, summaries, steps and the
  safety quiz. Edit copy here; routes are generated from the titles.
- `lib/store.ts` — localStorage keys, PBKDF2 password hashing, learners,
  progress, questions, languages.
- `components/app-provider.tsx` — the one place that reads/writes account state.
- `components/ui.tsx` — buttons, cards, logo and the bunny mark.

## Notes on the rebuild

- **Free lessons have written content.** The ten free lessons and the safety quiz
  are fully written. The 61 Plus lessons use a shared four-step template as
  placeholder content — replace `plusSteps()` output in `lib/lessons.ts` with real
  material when you have it.
- **Auth is device-local by design**, matching the original. Anyone can create an
  account on their own device; there is no server, no email and no password
  reset. For real multi-device accounts you would swap `lib/store.ts` for a
  database and an auth provider.
- **Payments are not implemented.** Plus and Family show "Coming soon", as on the
  original site.
- **Read aloud** uses the browser's speech synthesis in the selected language
  locale. The step text is English, so a device without that voice falls back to
  English.

## Deploy

```bash
npx vercel        # or push to GitHub and import the repo at vercel.com
```

No environment variables are needed.
