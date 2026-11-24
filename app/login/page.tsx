"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { useApp } from "@/components/app-provider";
import { Bunny, Button, cx } from "@/components/ui";
import { languages } from "@/lib/store";

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const { signIn, signUp, phone, ready, chooseLanguage, language } = useApp();

  const [mode, setMode] = useState<"create" | "signin">(
    params.get("mode") === "signin" ? "signin" : "create",
  );
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (ready && phone) router.replace("/");
  }, [ready, phone, router]);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError("");

    if (mode === "create" && password !== confirm) {
      setError("The two passwords do not match. Please type them again.");
      return;
    }

    setBusy(true);
    const result =
      mode === "create"
        ? await signUp(phoneNumber.replace(/\D/g, ""), password)
        : await signIn(phoneNumber.replace(/\D/g, ""), password);
    setBusy(false);

    if (!result.ok) {
      setError(result.error ?? "Something went wrong. Please try again.");
      return;
    }

    router.replace("/");
  }

  return (
    <div className="mx-auto max-w-xl px-5 pt-6 pb-16">
      <div className="text-center">
        <Bunny className="mx-auto h-24 w-24" />
        <h1 className="mt-5 text-4xl text-cocoa-800 sm:text-5xl">
          {mode === "create" ? "Create your account" : "Welcome back"}
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-cocoa-700">
          {mode === "create"
            ? "Use your phone number and a password. One account for your family."
            : "Type your phone number and password to sign in."}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-lg font-bold text-cocoa-800"
          >
            Phone number
          </label>
          <div className="flex items-center gap-2 rounded-2xl border-2 border-sand-300 bg-white px-4 py-1 focus-within:border-forest-500">
            <span className="text-lg font-bold text-cocoa-700">+91</span>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              required
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              placeholder="98765 43210"
              className="min-h-12 w-full bg-transparent text-lg text-cocoa-800 outline-none placeholder:text-cocoa-500/60"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-lg font-bold text-cocoa-800"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete={mode === "create" ? "new-password" : "current-password"}
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="min-h-14 w-full rounded-2xl border-2 border-sand-300 bg-white px-4 text-lg text-cocoa-800 outline-none focus:border-forest-500"
          />
        </div>

        {mode === "create" ? (
          <div>
            <label
              htmlFor="confirm"
              className="mb-2 block text-lg font-bold text-cocoa-800"
            >
              Type your password again
            </label>
            <input
              id="confirm"
              name="confirm"
              type="password"
              autoComplete="new-password"
              required
              value={confirm}
              onChange={(event) => setConfirm(event.target.value)}
              className="min-h-14 w-full rounded-2xl border-2 border-sand-300 bg-white px-4 text-lg text-cocoa-800 outline-none focus:border-forest-500"
            />
          </div>
        ) : null}

        {error ? (
          <p
            role="alert"
            className="rounded-2xl border-2 border-red-300 bg-red-50 px-4 py-3 font-semibold text-red-600"
          >
            {error}
          </p>
        ) : null}

        <Button type="submit" size="lg" block disabled={busy}>
          {busy
            ? "One moment…"
            : mode === "create"
              ? "Create my account"
              : "Sign in"}
        </Button>
      </form>

      <div className="mt-6 text-center">
        <button
          type="button"
          onClick={() => {
            setMode(mode === "create" ? "signin" : "create");
            setError("");
          }}
          className="text-lg font-semibold text-cocoa-800 underline underline-offset-4"
        >
          {mode === "create"
            ? "Already have an account? Sign in"
            : "New here? Create my account"}
        </button>

        <p className="mt-5 text-cocoa-700">
          Your account is kept private and safe.
        </p>

        <p className="mt-4">
          <Link href="/help" className="font-semibold underline underline-offset-4">
            Help
          </Link>
        </p>
      </div>

      <details className="mt-8 rounded-2xl border-2 border-sand-200 bg-white px-4 py-3">
        <summary className="cursor-pointer font-bold text-cocoa-800">
          Language:{" "}
          {languages.find((item) => item.code === language)?.label ?? "English"}
        </summary>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {languages.map((item) => (
            <button
              key={item.code}
              type="button"
              onClick={() => chooseLanguage(item.code)}
              className={cx(
                "rounded-xl border-2 px-3 py-2 text-left",
                language === item.code
                  ? "border-forest-500 bg-forest-600 text-white"
                  : "border-sand-200 bg-sand-50 text-cocoa-800 hover:bg-sand-100",
              )}
            >
              <span className="block text-lg font-bold">{item.native}</span>
              <span className="block text-xs font-semibold opacity-80">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </details>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-[60vh]" />}>
      <LoginForm />
    </Suspense>
  );
}
