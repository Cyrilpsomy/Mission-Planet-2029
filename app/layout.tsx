import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CYRILPSOMY | Official Website",

  description:
    "Welcome to CYRILPSOMY — the personal website of Cyril P Somy, featuring Cineliebe, PLANET 2029, creative projects, stories, and personal journeys.",

  keywords: [
    "CYRILPSOMY",
    "Cyril P Somy",
    "Cyril Somy",
    "Cineliebe",
    "PLANET 2029",
    "Personal Website",
    "Creative Projects",
    "Cyril P Somy Website",
  ],

  authors: [
    {
      name: "Cyril P Somy",
    },
  ],

  creator: "Cyril P Somy",
  publisher: "Cyril P Somy",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "CYRILPSOMY | Official Website",
    description:
      "The official website of Cyril P Somy — featuring Cineliebe, PLANET 2029, creative projects, stories, and personal journeys.",
    type: "website",
    siteName: "CYRILPSOMY",
  },

  twitter: {
    card: "summary_large_image",
    title: "CYRILPSOMY | Official Website",
    description:
      "The official website of Cyril P Somy — featuring Cineliebe, PLANET 2029, creative projects, stories, and personal journeys.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}