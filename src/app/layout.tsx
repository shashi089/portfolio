import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://shashidhar-portfolio.netlify.app"),
  title: "Shashidhar Naik | Full Stack Software Engineer - Portfolio",
  description: "Senior Software Engineer specializing in MERN & MEVN stack. Expert in React, Next.js, Node.js, and scaling enterprise web applications.",
  keywords: [
    "Shashidhar Naik",
    "Shashidhar Portfolio",
    "Software Engineer II",
    "Full Stack Developer",
    "MERN Stack Developer",
    "MEVN Stack Developer",
    "React Developer",
    "Next.js Portfolio",
    "Frontend Lead",
    "JavaScript Architect",
    "TypeScript Developer",
    "Portfolio website",
    "Web Application Developer",
    "Panasonic WMS Lead"
  ],
  authors: [{ name: "Shashidhar Naik" }],
  creator: "Shashidhar Naik",
  publisher: "Shashidhar Naik",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
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
  openGraph: {
    title: "Shashidhar Naik | Full Stack Software Engineer Portfolio",
    description: "Professional portfolio of Shashidhar Naik, a Software Engineer II with 4+ years of experience in high-performance web applications.",
    url: "https://shashidhar-portfolio.netlify.app",
    siteName: "Shashidhar Naik Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/portfolio_hero_section.png",
        width: 1200,
        height: 630,
        alt: "Shashidhar Naik Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shashidhar Naik | Full Stack Software Engineer",
    description: "Software Engineer II specializing in building scalable enterprise web applications.",
    images: ["/portfolio_hero_section.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shashidhar Naik",
  url: "https://shashidhar-portfolio.netlify.app",
  jobTitle: "Software Engineer II",
  sameAs: [
    "https://github.com/shashi089",
    "https://www.linkedin.com/in/shashidhar-naik-aab5b512a/",
  ],
  description: "Software Engineer II specializing in MERN & MEVN stack development with experience in enterprise-scale applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
