"use client";

import Link from "next/link";
import { HeroIllustration } from "@/components/hero-illustration";
import { useT } from "@/components/i18n";
import { Bunny, Card, Eyebrow, LinkButton } from "@/components/ui";
import { categories } from "@/lib/lessons";

const reasons = [
  {
    title: "Big, clear lessons",
    body: "Large buttons, simple words, one step at a time.",
    icon: (
      <path d="M4 6h16M4 12h10M4 18h13" strokeLinecap="round" strokeWidth="2.4" />
    ),
  },
  {
    title: "Read aloud",
    body: "Hear every step, hands-free whenever you like.",
    icon: (
      <path
        d="M4 10v4h3l5 4V6L7 10H4Zm12-2a6 6 0 0 1 0 8M18.5 5a10 10 0 0 1 0 14"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
      />
    ),
  },
  {
    title: "Family corner",
    body: "See progress and answer questions with confidence.",
    icon: (
      <path
        d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM2.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5m1-5c2.8 0 5 1.7 5 4.5"
        strokeLinecap="round"
        strokeWidth="2.2"
      />
    ),
  },
];

const steps = [
  { title: "Make an account", body: "Just a phone number and a password." },
  { title: "Add your name", body: "So lessons greet you properly." },
  { title: "Start a lesson", body: "Pause any time — progress is saved." },
];

const plans = [
  {
    name: "Free",
    price: "₹0",
    cadence: "always free",
    feature: "All 10 regular lessons",
    accent: "border-forest-600",
  },
  {
    name: "Plus",
    price: "₹199",
    cadence: "per month",
    feature: "60 extra lessons",
    accent: "border-amber-400",
    badge: "PLUS",
  },
  {
    name: "Family",
    price: "₹1799",
    cadence: "per month",
    feature: "Everything in Plus",
    accent: "border-cocoa-800",
    badge: "For 10 people",
  },
];

export default function WelcomePage() {
  const t = useT();

  return (
    <div className="mx-auto max-w-5xl px-5 pt-4 pb-16">
      <section className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <Eyebrow>{t("For older adults and their families")}</Eyebrow>
          <h1 className="mt-5 text-5xl text-cocoa-800 sm:text-6xl">
            {t("Learn technology, gently.")}
          </h1>
          <p className="mt-5 max-w-md text-lg text-cocoa-700 sm:text-xl">
            {t(
              "One big step at a time — with a voice to read each step and family close by.",
            )}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <LinkButton href="/login" size="lg">
              {t("Create my account")}
            </LinkButton>
            <LinkButton href="/login?mode=signin" size="lg" variant="outline">
              {t("Sign in")}
            </LinkButton>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold text-cocoa-600">
            <li className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-forest-600 text-[11px] text-white">
                ✓
              </span>
              {t("Free to start")}
            </li>
            <li className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-forest-600 text-[11px] text-white">
                ✓
              </span>
              {t("No ads")}
            </li>
            <li className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-forest-600 text-[11px] text-white">
                ✓
              </span>
              {t("No pressure")}
            </li>
          </ul>
        </div>

        <div className="mx-auto w-full max-w-lg">
          <HeroIllustration className="w-full" />
        </div>
      </section>

      <section className="mt-10 rounded-[2rem] bg-sand-100 p-6 sm:p-8">
        <h2 className="text-center text-3xl text-cocoa-800 sm:text-4xl">
          {t("Why families choose GentleLearn")}
        </h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {reasons.map((reason) => (
            <li
              key={reason.title}
              className="rounded-2xl border-2 border-sand-200 bg-white p-5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-300/50 text-cocoa-800">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" aria-hidden="true">
                  {reason.icon}
                </svg>
              </span>
              <h3 className="mt-3 text-xl text-cocoa-800">{t(reason.title)}</h3>
              <p className="mt-1 text-cocoa-700">{t(reason.body)}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-center text-3xl text-cocoa-800 sm:text-4xl">
          {t("How it works")}
        </h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="flex items-start gap-3 rounded-2xl border-2 border-sand-200 bg-white p-4"
            >
              <span className="display inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest-600 text-lg font-bold text-white">
                {index + 1}
              </span>
              <span>
                <span className="display block text-lg font-bold text-cocoa-800">
                  {t(step.title)}
                </span>
                <span className="block text-cocoa-700">{t(step.body)}</span>
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <h2 className="text-3xl text-cocoa-800 sm:text-4xl">
            {t("Everyday skills, made simple")}
          </h2>
          <p className="font-semibold text-cocoa-600">{t("Plus adds 60 more")}</p>
        </div>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <li
              key={category}
              className="flex items-center gap-3 rounded-2xl border-2 border-sand-200 bg-white px-4 py-3"
            >
              <span className="h-3 w-3 shrink-0 rounded-full bg-amber-400" aria-hidden="true" />
              <span className="font-semibold text-cocoa-800">{t(category)}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 rounded-[2rem] bg-sand-100 p-6 sm:p-8">
        <h2 className="text-center text-3xl text-cocoa-800 sm:text-4xl">
          {t("Payment plans")}
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-cocoa-700">
          {t("Free is yours today — nothing to pay.")}
        </p>

        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {plans.map((plan) => (
            <li
              key={plan.name}
              className={`rounded-2xl border-2 bg-white p-5 ${plan.accent}`}
            >
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-xl text-cocoa-800">{t(plan.name)}</h3>
                {plan.badge ? (
                  <span className="rounded-full bg-sand-200 px-2 py-0.5 text-xs font-extrabold tracking-wide text-cocoa-700">
                    {t(plan.badge)}
                  </span>
                ) : null}
              </div>
              <p className="mt-2 flex items-baseline gap-2">
                <span className="display text-3xl text-cocoa-800">{plan.price}</span>
                <span className="text-sm font-semibold text-cocoa-600">
                  {t(plan.cadence)}
                </span>
              </p>
              <p className="mt-3 flex items-start gap-2 text-cocoa-700">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forest-600 text-[11px] text-white">
                  ✓
                </span>
                {t(plan.feature)}
              </p>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-5 max-w-lg rounded-2xl border-2 border-sand-200 bg-white px-4 py-3 text-center text-sm font-semibold text-cocoa-600">
          {t("Payments are coming soon. No payment is taken today.")}
        </p>

        <div className="mt-5 text-center">
          <LinkButton href="/plans" variant="outline" size="lg">
            {t("See all plans")}
          </LinkButton>
        </div>
      </section>

      <section className="mt-12">
        <Card className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
          <Bunny className="h-20 w-20 shrink-0" />
          <div className="flex-1">
            <h2 className="text-2xl text-cocoa-800">
              {t("Not sure how to sign in?")}
            </h2>
            <p className="mt-1 text-cocoa-700">
              {t("A few gentle steps. No rush at all.")}
            </p>
          </div>
          <LinkButton href="/help" variant="outline">
            {t("Help")}
          </LinkButton>
        </Card>
      </section>

      <footer className="mt-10 text-center text-sm text-cocoa-600">
        <p>{t("Made for calm, confident learning.")}</p>
        <div className="mt-2 flex justify-center gap-5 font-semibold">
          <Link href="/help" className="underline underline-offset-4">
            {t("Help")}
          </Link>
          <Link href="/plans" className="underline underline-offset-4">
            {t("Plans")}
          </Link>
          <Link href="/login" className="underline underline-offset-4">
            {t("Sign in")}
          </Link>
        </div>
      </footer>
    </div>
  );
}
