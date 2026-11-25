"use client";

import { useRef } from "react";
import { useApp } from "@/components/app-provider";
import { useT } from "@/components/i18n";
import { cx } from "@/components/ui";
import { languages } from "@/lib/store";

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.4 2.5 15.6 0 18M12 3c-2.5 2.4-2.5 15.6 0 18" />
    </svg>
  );
}

export function LanguageMenu() {
  const { language, chooseLanguage } = useApp();
  const t = useT();
  const details = useRef<HTMLDetailsElement>(null);

  const current =
    languages.find((item) => item.code === language) ??
    languages[languages.length - 1];

  return (
    <details ref={details} className="relative shrink-0">
      <summary className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-xl border-2 border-sand-200 bg-white px-3 py-2 text-sm font-bold text-cocoa-700 hover:bg-sand-100 [&::-webkit-details-marker]:hidden">
        <GlobeIcon />
        <span className="hidden sm:inline">{current.label}</span>
        <span className="sm:hidden">{current.code.toUpperCase()}</span>
        <span aria-hidden="true" className="text-xs">
          ▾
        </span>
      </summary>

      <div className="absolute top-full right-0 z-50 mt-2 max-h-[70vh] w-72 overflow-auto rounded-2xl border-2 border-sand-200 bg-white p-3 shadow-xl">
        <p className="px-1 pb-2 text-xs font-extrabold tracking-widest text-cocoa-600 uppercase">
          {t("Language")}
        </p>
        <ul className="grid grid-cols-2 gap-2">
          {languages.map((item) => (
            <li key={item.code}>
              <button
                type="button"
                onClick={() => {
                  chooseLanguage(item.code);
                  if (details.current) details.current.open = false;
                }}
                aria-pressed={language === item.code}
                className={cx(
                  "w-full rounded-xl border-2 px-3 py-2 text-left",
                  language === item.code
                    ? "border-forest-500 bg-forest-600 text-white"
                    : "border-sand-200 bg-sand-50 text-cocoa-800 hover:bg-sand-100",
                )}
              >
                <span className="block text-base leading-tight font-bold">
                  {item.native}
                </span>
                <span className="block text-xs font-semibold opacity-80">
                  {item.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}
