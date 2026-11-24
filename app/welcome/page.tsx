import Link from "next/link";
import { Bunny, Card, Eyebrow, LinkButton } from "@/components/ui";
import { categories } from "@/lib/lessons";

const reasons = [
  {
    title: "Big, clear lessons",
    body: "Large buttons, simple words, and one step at a time.",
  },
  {
    title: "Read aloud",
    body: "Hear every lesson, and let Plus read each step hands-free.",
  },
  {
    title: "Family corner",
    body: "See progress, answer questions, and help with confidence.",
  },
];

const steps = [
  "Create a free account with your phone number.",
  "Add the name you like to be called.",
  "Pick a lesson and learn at your own pace.",
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
  return (
    <div className="mx-auto max-w-5xl px-5 pt-6 pb-16">
      <section className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Eyebrow>Made for older adults and their families</Eyebrow>
          <h1 className="mt-5 text-5xl text-cocoa-800 sm:text-6xl">
            Learn technology,
            <br />
            gently.
          </h1>
          <p className="mt-5 max-w-lg text-lg text-cocoa-700 sm:text-xl">
            A calm place to learn phones, video calls, safety, payments, and
            everyday online skills — one big step at a time.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <LinkButton href="/login" size="lg">
              Create my account
            </LinkButton>
            <LinkButton href="/login?mode=signin" size="lg" variant="outline">
              Sign in
            </LinkButton>
          </div>

          <p className="mt-4 text-sm font-semibold text-cocoa-600">
            Free to start. No ads. No pressure.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div
            className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] bg-sand-200"
            aria-hidden="true"
          />
          <div className="relative rounded-[2rem] bg-forest-600 p-5 text-white shadow-lg sm:p-6">
            <div className="flex items-center justify-between text-sm font-bold">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-amber-400" aria-hidden="true" />
                Video calls
              </span>
              <span className="text-white/85">about 2 minutes</span>
            </div>

            <h2 className="mt-4 text-3xl">Call my grandchild</h2>

            <div className="mt-4 rounded-2xl bg-white/15 p-4 text-lg leading-relaxed">
              Ask your grandchild to open the video call app on their phone or
              tablet.
            </div>

            <div className="mt-5">
              <div className="flex items-center justify-between text-sm font-bold text-white/85">
                <span>Step 1 of 4</span>
                <span>Read this aloud</span>
              </div>
              <div className="mt-2 h-2.5 rounded-full bg-white/20">
                <div className="h-full w-1/4 rounded-full bg-amber-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14 rounded-[2rem] bg-sand-100 p-6 sm:p-8">
        <h2 className="text-center text-3xl text-cocoa-800 sm:text-4xl">
          Why families choose GentleLearn
        </h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {reasons.map((reason, index) => (
            <li
              key={reason.title}
              className="rounded-2xl border-2 border-sand-200 bg-white p-5"
            >
              <span className="display inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-300/60 text-lg font-bold text-cocoa-800">
                {index + 1}
              </span>
              <h3 className="mt-3 text-xl text-cocoa-800">{reason.title}</h3>
              <p className="mt-2 text-cocoa-700">{reason.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="text-center text-3xl text-cocoa-800 sm:text-4xl">
          How it works
        </h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step}
              className="flex items-start gap-3 rounded-2xl border-2 border-sand-200 bg-white p-4"
            >
              <span className="display inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest-600 text-lg font-bold text-white">
                {index + 1}
              </span>
              <p className="pt-1 text-cocoa-700">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14">
        <h2 className="text-center text-3xl text-cocoa-800 sm:text-4xl">
          Everyday skills, made simple
        </h2>
        <p className="mt-3 text-center text-cocoa-700">
          Start with the basics, then move on when you feel ready.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <li
              key={category}
              className="flex items-center gap-3 rounded-2xl border-2 border-sand-200 bg-white px-4 py-3"
            >
              <span className="h-3 w-3 shrink-0 rounded-full bg-amber-400" aria-hidden="true" />
              <span className="font-semibold text-cocoa-800">{category}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-center font-semibold text-cocoa-700">
          Plus adds 60 more lessons, grouped by difficulty.
        </p>
      </section>

      <section className="mt-14 rounded-[2rem] bg-sand-100 p-6 sm:p-8">
        <h2 className="text-center text-3xl text-cocoa-800 sm:text-4xl">
          Payment plans
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-cocoa-700">
          A simple choice for your family. Free is yours today — nothing to pay.
        </p>

        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {plans.map((plan) => (
            <li
              key={plan.name}
              className={`rounded-2xl border-2 bg-white p-5 ${plan.accent}`}
            >
              <div className="flex items-center gap-2">
                <h3 className="text-xl text-cocoa-800">{plan.name}</h3>
                {plan.badge ? (
                  <span className="rounded-full bg-sand-200 px-2 py-0.5 text-xs font-extrabold tracking-wide text-cocoa-700">
                    {plan.badge}
                  </span>
                ) : null}
              </div>
              <p className="mt-2 flex items-baseline gap-2">
                <span className="display text-3xl text-cocoa-800">{plan.price}</span>
                <span className="text-sm font-semibold text-cocoa-600">
                  {plan.cadence}
                </span>
              </p>
              <p className="mt-3 flex items-start gap-2 text-cocoa-700">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forest-600 text-[11px] text-white">
                  ✓
                </span>
                {plan.feature}
              </p>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-5 max-w-lg rounded-2xl border-2 border-sand-200 bg-white px-4 py-3 text-center text-sm font-semibold text-cocoa-600">
          Payments are coming soon. No payment is taken today. Your current plan
          stays the same.
        </p>

        <div className="mt-5 text-center">
          <LinkButton href="/plans" variant="outline" size="lg">
            See all plans
          </LinkButton>
        </div>
      </section>

      <section className="mt-14">
        <Card className="mx-auto max-w-2xl text-center">
          <Bunny className="mx-auto h-20 w-20" />
          <h2 className="mt-4 text-3xl text-cocoa-800">How to sign in</h2>
          <p className="mt-2 text-cocoa-700">A few gentle steps. No rush at all.</p>
          <LinkButton href="/help" className="mt-6" size="lg">
            Help
          </LinkButton>
        </Card>
      </section>

      <div className="mx-auto mt-10 max-w-2xl rounded-2xl border-2 border-sand-200 bg-white px-4 py-3 text-center font-semibold text-cocoa-700">
        Language: English
      </div>

      <footer className="mt-10 text-center text-sm text-cocoa-600">
        <p>Made for calm, confident learning.</p>
        <div className="mt-2 flex justify-center gap-5 font-semibold">
          <Link href="/help" className="underline underline-offset-4">
            Help
          </Link>
          <Link href="/plans" className="underline underline-offset-4">
            Plans
          </Link>
          <Link href="/login" className="underline underline-offset-4">
            Sign in
          </Link>
        </div>
      </footer>
    </div>
  );
}
