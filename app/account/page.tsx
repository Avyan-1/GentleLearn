"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useApp } from "@/components/app-provider";
import { useT } from "@/components/i18n";
import { GameSummary } from "@/components/game-summary";
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
    game,
  } = useApp();
  const t = useT();

  useEffect(() => {
    if (ready && !phone) router.replace("/login");
  }, [ready, phone, router]);

  if (!ready || !phone) {
    return <div className="min-h-[60vh]" aria-busy="true" />;
  }

  return (
    <div className="mx-auto max-w-2xl px-5 pt-8 pb-16">
      <PageTitle
        title={t("Your account")}
        subtitle={t("One account for your family, kept private and safe.")}
      />

      <Card className="mt-8">
        <dl className="space-y-3">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <dt className="font-bold text-cocoa-700">{t("Phone number")}</dt>
            <dd className="text-lg font-bold text-cocoa-800">
              +91 {formatPhone(phone)}
            </dd>
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <dt className="font-bold text-cocoa-700">{t("Plan")}</dt>
            <dd>
              <span className="rounded-full bg-sand-100 px-3 py-1 font-bold text-cocoa-700">
                {t("Free — your current plan")}
              </span>
            </dd>
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <dt className="font-bold text-cocoa-700">{t("Learners")}</dt>
            <dd className="text-cocoa-800">
              {learners.length === 0
                ? t("None yet")
                : learners.map((learner) => learner.name).join(", ")}
            </dd>
          </div>
        </dl>

        <div className="mt-6 flex flex-wrap gap-3">
          <LinkButton href="/family" variant="outline">
            {t("Family corner")}
          </LinkButton>
          <LinkButton href="/community" variant="outline">
            {t("Community stories")}
          </LinkButton>
          <LinkButton href="/plans" variant="outline">
            {t("See plans")}
          </LinkButton>
        </div>
      </Card>

      <GameSummary game={game} className="mt-6" />

      <Card className="mt-6">
        <h2 className="text-xl text-cocoa-800">{t("Language")}</h2>
        <p className="mt-1 text-cocoa-700">
          {t("Tap one — you can change it anytime.")}
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
        <h2 className="text-xl text-cocoa-800">{t("Signing out")}</h2>
        <p className="mt-1 text-cocoa-700">
          {t(
            "Your lessons stay saved. You can sign back in with your phone number and password.",
          )}
        </p>
        <Button
          variant="outline"
          className="mt-4"
          onClick={async () => {
            await signOut();
            router.push("/welcome");
          }}
        >
          {t("Sign out")}
        </Button>
        <p className="mt-4 text-sm text-cocoa-600">
          {t("Need help?")}{" "}
          <Link href="/help" className="font-semibold underline underline-offset-4">
            {t("Read the sign-in guide")}
          </Link>
          .
        </p>
      </Card>
    </div>
  );
}
