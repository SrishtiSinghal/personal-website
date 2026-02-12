import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Srishti Singhal | Product Manager & AI Strategist",
  description:
    "Product Manager building AI-powered platforms from 0→1. MBA Candidate at Rotman (2026) with 4 years shipping enterprise data & AI products.",
  keywords: [
    "Product Manager",
    "AI",
    "Data Platform",
    "MBA",
    "Rotman",
    "Full-Stack Developer",
    "Enterprise Software",
  ],
  authors: [{ name: "Srishti Singhal" }],
  openGraph: {
    title: "Srishti Singhal | Product Manager & AI Strategist",
    description:
      "Product Manager building AI-powered platforms from 0→1. MBA Candidate at Rotman (2026) with 4 years shipping enterprise data & AI products.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Srishti Singhal | Product Manager & AI Strategist",
    description:
      "Product Manager building AI-powered platforms from 0→1. MBA Candidate at Rotman (2026).",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
