"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useApp } from "@/components/app-provider";
import { useT } from "@/components/i18n";
import { Bunny, cx } from "@/components/ui";
import { languages } from "@/lib/store";

export default function ChooseLanguagePage() {
  const router = useRouter();
  const { ready, phone, language, chooseLanguage } = useApp();
  const t = useT();

  useEffect(() => {
    if (ready && !phone) router.replace("/welcome");
  }, [ready, phone, router]);

  if (!ready || !phone) {
    return <div className="min-h-[60vh]" aria-busy="true" />;
  }

  return (
    <div className="mx-auto max-w-3xl px-5 pt-10 pb-16">
      <div className="text-center">
        <Bunny className="mx-auto h-24 w-24" />
      </div>

      <h1 className="mt-6 text-3xl text-forest-700 sm:text-4xl">
        {t("Choose your language")}
      </h1>
      <p className="mt-2 text-lg text-cocoa-700">
        {t("Tap one — you can change it anytime.")}
      </p>

      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {languages.map((item) => {
          const selected = language === item.code;
          return (
            <li key={item.code}>
              <button
                type="button"
                onClick={() => {
                  chooseLanguage(item.code);
                  router.push("/lessons");
                }}
                className={cx(
                  "w-full rounded-2xl border-2 px-4 py-3 text-left transition-colors",
                  selected
                    ? "border-forest-600 bg-forest-600 text-white"
                    : "border-sand-200 bg-white text-cocoa-800 hover:border-sand-300 hover:bg-sand-100",
                )}
              >
                <span className="block text-xl font-bold">{item.native}</span>
                <span
                  className={cx(
                    "block text-sm font-semibold",
                    selected ? "text-white/85" : "text-cocoa-600",
                  )}
                >
                  {item.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
