import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel Bode — iOS Developer",
  description:
    "Portfolio of Daniel Bode, iOS Developer based in Munich. Native Swift/UIKit apps, Fastlane mobile DevOps, and a full-stack background. B.Sc. Information Systems, TU Munich.",
  keywords: ["Daniel Bode", "iOS Developer", "Swift", "UIKit", "Fastlane", "Munich", "Mobile DevOps", "Portfolio"],
  openGraph: {
    title: "Daniel Bode — iOS Developer",
    description: "Portfolio of Daniel Bode, iOS Developer based in Munich.",
    type: "website",
  },
};

/** Root layout — applies fonts, hydration suppression, and ThemeProvider. */
const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en" suppressHydrationWarning>
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Providers>{children}</Providers>
      <SpeedInsights />
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
