import type { Metadata } from "next";
import { Space_Grotesk, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

/* ── Google Fonts ─────────────────────────────────────────── */

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

/* ── SEO Metadata ─────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "B Pavvan Kumaar — Full-Stack Developer & Designer",
  description:
    "Portfolio of B Pavvan Kumaar — 3rd-year Integrated M.Sc. Software Systems student at PSG College of Technology. Full-stack developer with Flutter, React, FastAPI, and a flair for graphic design.",
  keywords: [
    "Pavvan Kumaar",
    "Portfolio",
    "Full-Stack Developer",
    "Flutter",
    "React",
    "FastAPI",
    "PSG College of Technology",
    "Software Engineer",
    "Graphic Design",
  ],
  authors: [{ name: "B Pavvan Kumaar", url: "https://github.com" }],
  openGraph: {
    type: "website",
    title: "B Pavvan Kumaar — Full-Stack Developer & Designer",
    description:
      "Personal portfolio showcasing dev projects, design work, and skills.",
    siteName: "Pavvan Kumaar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "B Pavvan Kumaar — Full-Stack Developer & Designer",
    description:
      "Personal portfolio showcasing dev projects, design work, and skills.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ── Root Layout ──────────────────────────────────────────── */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${spaceMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
