import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shashidhar Naik | Portfolio",
  description: "Software Engineer II specializing in building scalable enterprise web applications with the MERN & MEVN stacks.",
  keywords: ["Shashidhar Naik", "Portfolio", "Software Engineer", "MERN Stack", "React Developer", "Next.js", "Frontend Lead"],
  authors: [{ name: "Shashidhar Naik" }],
  openGraph: {
    title: "Shashidhar Naik | Portfolio",
    description: "Software Engineer II specializing in building scalable enterprise web applications with the MERN & MEVN stacks.",
    type: "website",
    locale: "en_US",
    siteName: "Shashidhar Naik Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shashidhar Naik | Portfolio",
    description: "Software Engineer II specializing in MERN & MEVN stacks.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
