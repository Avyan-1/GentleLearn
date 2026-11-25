"use client";

import { useApp } from "@/components/app-provider";
import { translate } from "@/lib/i18n";

/**
 * Returns a small translator bound to the language chosen in the top bar.
 * Anything without a translation falls back to the English wording.
 */
export function useT() {
  const { language } = useApp();
  return (text: string, params?: Record<string, string | number>) =>
    translate(language || "en", text, params);
}
