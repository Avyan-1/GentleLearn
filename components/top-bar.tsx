"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useT } from "@/components/i18n";
import { LanguageMenu } from "@/components/language-menu";
import { Logo, cx } from "@/components/ui";

const items = [
  { href: "/lessons", label: "Lessons", short: "Lessons" },
  { href: "/ask", label: "Ask", short: "Ask" },
  { href: "/community", label: "Community", short: "Community" },
  { href: "/plans", label: "Plans", short: "Plans" },
  { href: "/family", label: "Family corner", short: "Family" },
  { href: "/help", label: "Help", short: "Help" },
  { href: "/account", label: "Account", short: "Account" },
];

function NavLink({
  item,
  active,
}: {
  item: (typeof items)[number];
  active: boolean;
}) {
  const t = useT();

  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      className={cx(
        "inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-xl px-2 py-2 text-sm font-bold whitespace-nowrap transition-colors sm:px-3 sm:text-base lg:text-lg",
        active
          ? "bg-sand-200 text-forest-700"
          : "text-cocoa-600 hover:bg-sand-200",
      )}
    >
      <span className="sm:hidden">{t(item.short)}</span>
      <span className="hidden sm:inline">{t(item.label)}</span>
    </Link>
  );
}

export function TopBar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header className="w-full px-3 py-3 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between gap-2">
          <Logo />

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageMenu />
          </div>

          <nav
            aria-label="Main"
            className="hidden items-center gap-2 lg:flex lg:gap-3"
          >
            {items.map((item) => (
              <NavLink key={item.href} item={item} active={isActive(item.href)} />
            ))}
            <LanguageMenu />
          </nav>
        </div>

        <nav
          aria-label="Main"
          className="mt-2 flex w-full items-center gap-1 overflow-x-auto pb-1 lg:hidden"
        >
          {items.map((item) => (
            <NavLink key={item.href} item={item} active={isActive(item.href)} />
          ))}
        </nav>
      </div>
    </header>
  );
}
