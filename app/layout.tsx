import type { Metadata, Viewport } from "next";
import "@fontsource-variable/baloo-2";
import "@fontsource-variable/nunito";
import "./globals.css";
import { AppProvider } from "@/components/app-provider";
import { TopBar } from "@/components/top-bar";

export const metadata: Metadata = {
  referrer: "no-referrer",
  title: "GentleLearn — Learn safely, at your own pace",
  description:
    "A calm, friendly place for seniors to learn digital skills — one big lesson at a time.",
};

export const viewport: Viewport = {
  themeColor: "#fdf9f0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col">
        <AppProvider>
          <TopBar />
          <main className="flex-1">{children}</main>
        </AppProvider>
      </body>
    </html>
  );
}
