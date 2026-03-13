import type { Metadata } from "next";
import { Patrick_Hand, Lora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const patrickHand = Patrick_Hand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-caveat",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
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
        className={`${patrickHand.variable} ${lora.variable} antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
