import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { personSchema, websiteSchema, projectsSchema } from "@/lib/jsonld";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",        // Prevent render-blocking — improves LCP
  preload: true,
});

// ─────────────────────────────────────────────────────────────────────────────
// Site-wide Metadata (Next.js Metadata API)
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://shashidhar-portfolio.netlify.app"),

  title: {
    default: "Shashidhar Naik | Full Stack Developer — React, Node.js, Next.js",
    template: "%s | Shashidhar Naik",
  },
  description:
    "Portfolio of Shashidhar Naik — Software Engineer II with 4+ years building scalable enterprise web apps. Expert in React, Next.js, Node.js, TypeScript, and MERN/MEVN stack. Open source contributor.",

  keywords: [
    // Identity
    "Shashidhar Naik",
    "Shashidhar Naik Portfolio",
    "shashidhar developer",
    // Role keywords
    "Software Engineer II",
    "Full Stack Developer",
    "Full Stack Developer Portfolio",
    "Frontend Lead",
    "JavaScript Engineer",
    "JavaScript Developer",
    // Tech keywords
    "React Developer",
    "React.js Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "MERN Stack Developer",
    "MEVN Stack Developer",
    "Vue.js Developer",
    "Python Developer",
    // Domain
    "Warehouse Management System Developer",
    "Enterprise Web Application Developer",
    "Open Source Developer",
    "NPM Package Author",
    // Location
    "Software Engineer Bangalore",
    "Web Developer India",
    // Portfolio type
    "Developer Portfolio",
    "Web Application Portfolio",
    "Software Engineer Portfolio India",
  ],

  authors: [{ name: "Shashidhar Naik", url: "https://shashidhar-portfolio.netlify.app" }],
  creator: "Shashidhar Naik",
  publisher: "Shashidhar Naik",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // ── Canonical ──────────────────────────────────────────────────────────────
  alternates: {
    canonical: "/",
  },

  // ── Robots ────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type: "profile",
    firstName: "Shashidhar",
    lastName: "Naik",
    username: "shashi089",
    title: "Shashidhar Naik | Full Stack Developer Portfolio",
    description:
      "Software Engineer II with 4+ years of experience. React, Next.js, Node.js, TypeScript. Frontend Lead for enterprise Warehouse Management System. Open source contributor.",
    url: "https://shashidhar-portfolio.netlify.app",
    siteName: "Shashidhar Naik Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/portfolio_hero_section.png",
        width: 1200,
        height: 630,
        alt: "Shashidhar Naik — Full Stack Developer Portfolio Preview",
        type: "image/png",
      },
    ],
  },

  // ── Twitter Card ──────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Shashidhar Naik | Full Stack Developer — React, Node.js, Next.js",
    description:
      "Software Engineer II specializing in scalable enterprise web apps. Expert in MERN/MEVN stack and open source tools.",
    images: [
      {
        url: "/portfolio_hero_section.png",
        alt: "Shashidhar Naik Portfolio Preview",
      },
    ],
    creator: "@shashidhar_dev",
  },

  // ── Icons ─────────────────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  // ── Theme ─────────────────────────────────────────────────────────────────
  other: {
    "theme-color": "#0f172a",       // slate-950 — matches page background
    "color-scheme": "dark",
    "msapplication-TileColor": "#0f172a",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Root Layout
// ─────────────────────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* ── Font Performance: Preconnect to Google Fonts ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* ── Preload OG Image for fast LCP ── */}
        <link
          rel="preload"
          as="image"
          href="/portfolio_hero_section.png"
          type="image/png"
        />

        {/* ── Theme color (supported by Chrome/Android) ── */}
        <meta name="theme-color" content="#0f172a" />
        <meta name="color-scheme" content="dark" />

        {/* ── Geo / Location signals ── */}
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bangalore" />

        {/* ── JSON-LD: Person Schema ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />

        {/* ── JSON-LD: WebSite Schema ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {/* ── JSON-LD: Projects ItemList Schema ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
