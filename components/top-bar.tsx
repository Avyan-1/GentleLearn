"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo, cx } from "@/components/ui";

const items = [
  { href: "/lessons", label: "Lessons", short: "Lessons" },
  { href: "/ask", label: "Ask", short: "Ask" },
  { href: "/plans", label: "Plans", short: "Plans" },
  { href: "/family", label: "Family corner", short: "Family" },
  { href: "/help", label: "Help", short: "Help" },
  { href: "/account", label: "Account", short: "Account" },
];

export function TopBar() {
  const pathname = usePathname();

  return (
    <header className="w-full px-3 py-3 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 lg:flex-row lg:items-center lg:justify-between lg:gap-4">
        <Logo />

        <nav
          aria-label="Main"
          className="flex w-full flex-nowrap items-center gap-1 overflow-x-auto pb-1 sm:gap-2 lg:w-auto lg:justify-end lg:gap-3 lg:overflow-visible lg:pb-0"
        >
          {items.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cx(
                  "inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-xl px-1.5 py-2 text-sm font-bold whitespace-nowrap transition-colors sm:px-3 sm:text-base lg:text-lg",
                  active
                    ? "bg-sand-200 text-forest-700"
                    : "text-cocoa-600 hover:bg-sand-200",
                )}
              >
                <span className="sm:hidden">{item.short}</span>
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
