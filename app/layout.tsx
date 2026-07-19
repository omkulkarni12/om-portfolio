import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import ScrollProgress from "@/components/ui/ScrollProgress";
import GalaxyBackground from "@/components/ui/GalaxyBackground";
import GalaxyLoader from "@/components/ui/GalaxyLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://om-portfolio.dev"),
  title: {
    default: "Om Rajendra Kulkarni | Engineering Portfolio",
    template: "%s | Om Rajendra Kulkarni",
  },
  description:
    "Portfolio of Om Rajendra Kulkarni - AI Engineer, Electrical Engineer, Researcher & Founder of Raghava Innovations.",
  keywords: [
    "Om Rajendra Kulkarni",
    "Om Kulkarni",
    "Raghava Innovations",
    "Electrical Engineer",
    "AI Engineer",
    "Robotics",
    "Embedded Systems",
    "Electric Vehicles",
    "Patents",
    "Indian Design Patents",
    "Techgium Winner",
  ],
  authors: [{ name: "Om Rajendra Kulkarni" }],
  creator: "Om Rajendra Kulkarni",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://om-portfolio.dev",
    title: "Om Rajendra Kulkarni | Engineering Portfolio",
    description:
      "Explore the projects, patents, and engineering research of Om Rajendra Kulkarni - Founder of Raghava Innovations.",
    siteName: "Om Rajendra Kulkarni Portfolio",
    images: [
      {
        url: "/images/awards/management-recognition.jpg",
        width: 1200,
        height: 630,
        alt: "Om Rajendra Kulkarni Portfolio Header",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Om Rajendra Kulkarni | Engineering Portfolio",
    description:
      "Explore the projects, patents, and engineering research of Om Rajendra Kulkarni.",
    images: ["/images/awards/management-recognition.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GalaxyLoader />
        <GalaxyBackground />
        <ScrollProgress />

        {children}
      </body>
    </html>
  );
}