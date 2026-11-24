"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useApp } from "@/components/app-provider";
import { Button, Card, LinkButton, PageTitle, cx } from "@/components/ui";
import { formatPhone, languages } from "@/lib/store";

export default function AccountPage() {
  const router = useRouter();
  const {
    ready,
    phone,
    learners,
    language,
    chooseLanguage,
    signOut,
  } = useApp();

  useEffect(() => {
    if (ready && !phone) router.replace("/login");
  }, [ready, phone, router]);

  if (!ready || !phone) {
    return <div className="min-h-[60vh]" aria-busy="true" />;
  }

  return (
    <div className="mx-auto max-w-2xl px-5 pt-8 pb-16">
      <PageTitle
        title="Your account"
        subtitle="One account for your family. It is saved on this device."
      />

      <Card className="mt-8">
        <dl className="space-y-3">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <dt className="font-bold text-cocoa-700">Phone number</dt>
            <dd className="text-lg font-bold text-cocoa-800">
              +91 {formatPhone(phone)}
            </dd>
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <dt className="font-bold text-cocoa-700">Plan</dt>
            <dd>
              <span className="rounded-full bg-sand-100 px-3 py-1 font-bold text-cocoa-700">
                Free — your current plan
              </span>
            </dd>
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <dt className="font-bold text-cocoa-700">Learners</dt>
            <dd className="text-cocoa-800">
              {learners.length === 0
                ? "None yet"
                : learners.map((learner) => learner.name).join(", ")}
            </dd>
          </div>
        </dl>

        <div className="mt-6 flex flex-wrap gap-3">
          <LinkButton href="/family" variant="outline">
            Family corner
          </LinkButton>
          <LinkButton href="/plans" variant="outline">
            See plans
          </LinkButton>
        </div>
      </Card>

      <Card className="mt-6">
        <h2 className="text-xl text-cocoa-800">Language</h2>
        <p className="mt-1 text-cocoa-700">
          Tap one — you can change it anytime.
        </p>
        <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {languages.map((item) => (
            <li key={item.code}>
              <button
                type="button"
                onClick={() => chooseLanguage(item.code)}
                aria-pressed={language === item.code}
                className={cx(
                  "w-full rounded-xl border-2 px-3 py-2 text-left",
                  language === item.code
                    ? "border-forest-500 bg-forest-600 text-white"
                    : "border-sand-200 bg-sand-50 text-cocoa-800 hover:bg-sand-100",
                )}
              >
                <span className="block font-bold">{item.native}</span>
                <span className="block text-xs font-semibold opacity-80">
                  {item.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </Card>

      <Card className="mt-6">
        <h2 className="text-xl text-cocoa-800">Signing out</h2>
        <p className="mt-1 text-cocoa-700">
          Your lessons stay saved on this device. You can sign back in with your
          phone number and password.
        </p>
        <Button
          variant="outline"
          className="mt-4"
          onClick={() => {
            signOut();
            router.push("/welcome");
          }}
        >
          Sign out
        </Button>
        <p className="mt-4 text-sm text-cocoa-600">
          Need help?{" "}
          <Link href="/help" className="font-semibold underline underline-offset-4">
            Read the sign-in guide
          </Link>
          .
        </p>
      </Card>
    </div>
  );
}
