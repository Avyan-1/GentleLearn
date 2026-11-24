import { Bunny, Card, LinkButton, PageTitle } from "@/components/ui";

const signingIn = [
  "Open GentleLearn in your web browser.",
  "Type your phone number and your password.",
  "Tap Sign in.",
  "Then tap your name to begin your lesson.",
];

const makingAccount = [
  "Tap Account at the top of the screen.",
  "Type the family's phone number.",
  "Choose a password and type it again.",
  "Tap Create my account, then add learners in the Family corner.",
];

function StepList({ steps }: { steps: string[] }) {
  return (
    <ol className="mt-4 space-y-3">
      {steps.map((step, index) => (
        <li
          key={step}
          className="flex items-start gap-4 rounded-2xl border-2 border-sand-200 bg-white px-4 py-4"
        >
          <span className="display inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest-600 text-lg font-bold text-white">
            {index + 1}
          </span>
          <p className="pt-1 text-lg text-cocoa-800">{step}</p>
        </li>
      ))}
    </ol>
  );
}

export default function HelpPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 pt-8 pb-16">
      <div className="text-center">
        <Bunny className="mx-auto h-24 w-24" />
        <div className="mt-5">
          <PageTitle
            title="How to sign in"
            subtitle="A few gentle steps. No rush at all."
            center
          />
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-2xl text-cocoa-800 sm:text-3xl">Signing in</h2>
        <StepList steps={signingIn} />
      </section>

      <section className="mt-10">
        <h2 className="text-2xl text-cocoa-800 sm:text-3xl">Making an account</h2>
        <p className="mt-2 text-cocoa-700">A family member does this once.</p>
        <StepList steps={makingAccount} />
      </section>

      <Card className="mt-8">
        <p className="text-cocoa-700">
          Your account is saved on this device. Keep your password safe.
        </p>
      </Card>

      <div className="mt-8 text-center">
        <LinkButton href="/welcome" size="lg">
          Back to home
        </LinkButton>
      </div>
    </div>
  );
}
