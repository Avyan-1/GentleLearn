import Link from "next/link";
import { LinkButton, PageTitle } from "@/components/ui";

const plans = [
  {
    name: "Free",
    badge: "Your current plan",
    badgeClass: "bg-forest-600 text-white",
    price: "₹0",
    cadence: "always free",
    features: [
      "All 10 regular lessons",
      "Read this aloud in every lesson",
      "3 questions a day per learner",
    ],
    checkClass: "bg-forest-600 text-white",
    border: "border-forest-600",
    button: null,
  },
  {
    name: "Plus",
    badge: "PLUS",
    badgeClass: "bg-amber-400 text-cocoa-800",
    price: "₹199",
    cadence: "per month",
    features: [
      "60 extra lessons",
      "Hands-free voice guidance",
      "Unlimited questions",
    ],
    checkClass: "bg-amber-400 text-cocoa-800",
    border: "border-amber-400",
    button: "Choose Plus",
  },
  {
    name: "Family",
    badge: "For 10 people",
    badgeClass: "bg-forest-600 text-white",
    price: "₹1799",
    cadence: "per month",
    features: [
      "Everything in Plus",
      "All 60 extra lessons",
      "Hands-free voice and unlimited questions",
    ],
    checkClass: "bg-forest-600 text-white",
    border: "border-cocoa-800",
    button: "Choose Family",
  },
];

export default function PlansPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 pt-10 pb-16">
      <div className="text-center">
        <span className="mx-auto block h-4 w-4 rounded-full bg-amber-400" />
      </div>

      <div className="mt-4">
        <PageTitle
          title="Payment plans"
          subtitle="A simple choice for your family. Free is yours today — nothing to pay."
          center
        />
      </div>

      <ul className="mt-10 grid gap-4 lg:grid-cols-3">
        {plans.map((plan) => (
          <li
            key={plan.name}
            className={`flex flex-col rounded-3xl border-2 bg-white p-6 ${plan.border}`}
          >
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-2xl text-cocoa-800">{plan.name}</h2>
              <span
                className={`rounded-full px-3 py-1 text-xs font-extrabold tracking-wide ${plan.badgeClass}`}
              >
                {plan.badge}
              </span>
            </div>

            <p className="mt-4 flex items-baseline gap-2">
              <span className="display text-4xl text-cocoa-800">{plan.price}</span>
              <span className="font-semibold text-cocoa-600">{plan.cadence}</span>
            </p>

            <ul className="mt-6 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-cocoa-700">
                  <span
                    className={`mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm ${plan.checkClass}`}
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span className="font-semibold">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-6">
              {plan.button ? (
                <>
                  <button
                    type="button"
                    disabled
                    className="min-h-14 w-full rounded-full bg-forest-600 px-6 text-lg font-bold text-white disabled:opacity-100"
                  >
                    {plan.button}
                  </button>
                  <p className="mt-3 text-center text-sm font-bold text-cocoa-600">
                    Coming soon
                  </p>
                </>
              ) : (
                <div className="min-h-14 w-full rounded-full bg-sand-100 px-6 text-center text-lg leading-[3.5rem] font-bold text-cocoa-700">
                  ✓ Your current plan
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-10 text-center">
        <LinkButton href="/welcome" variant="outline" size="lg">
          Back to home
        </LinkButton>
      </div>

      <p className="mt-6 text-center text-sm text-cocoa-600">
        Payments are coming soon. No payment is taken today. Your current plan
        stays the same.{" "}
        <Link href="/help" className="font-semibold underline underline-offset-4">
          Need help?
        </Link>
      </p>
    </div>
  );
}
