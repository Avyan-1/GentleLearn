import type { Metadata, Viewport } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/components/app-provider";
import { TopBar } from "@/components/top-bar";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-baloo",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
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
    <html lang="en" className={`${baloo.variable} ${nunito.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <AppProvider>
          <TopBar />
          <main className="flex-1">{children}</main>
        </AppProvider>
      </body>
    </html>
  );
}
