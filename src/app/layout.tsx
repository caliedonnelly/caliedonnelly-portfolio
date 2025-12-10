import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Calie Donnelly — Senior UI/UX Designer",
  description: "Crafting cosmic digital experiences with code & soul",
  openGraph: {
    images: "/og.png",
  },
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white overflow-x-hidden`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
