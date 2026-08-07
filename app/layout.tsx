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
  title: "PLANET 2029 | A Journey Beyond Borders",
  description:
    "PLANET 2029 is a personal global exploration mission — a journey to discover places, cultures, and experiences across the world.",
  keywords: [
    "PLANET 2029",
    "Travel Mission",
    "World Exploration",
    "Global Journey",
    "Travel Diary",
  ],
  authors: [
    {
      name: "Cyril P. Somy",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-slate-950">
        {children}
      </body>
    </html>
  );
}