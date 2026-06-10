import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import { absoluteUrl, assetPath, siteUrl } from "@/data/paths";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Szilagyi Bence Portfolio",
  title: {
    default: "Szilagyi Bence - AI Software Engineer",
    template: "%s - Szilagyi Bence"
  },
  description:
    "AI software engineer and fullstack builder specializing in autonomous agent systems, privacy-first iOS apps, and health data products.",
  keywords: [
    "Szilagyi Bence",
    "Bence Szilagyi",
    "AI Software Engineer",
    "Fullstack Developer",
    "iOS Developer",
    "SwiftUI",
    "HealthKit",
    "AI Agents",
    "LangChain",
    "Portfolio"
  ],
  authors: [{ name: "Szilagyi Bence", url: absoluteUrl("/") }],
  creator: "Szilagyi Bence",
  publisher: "Szilagyi Bence",
  category: "technology",
  alternates: {
    canonical: absoluteUrl("/")
  },
  manifest: assetPath("/manifest.webmanifest"),
  icons: {
    icon: assetPath("/favicon.svg"),
    shortcut: assetPath("/favicon.svg"),
    apple: assetPath("/favicon.svg")
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: absoluteUrl("/"),
    siteName: "Szilagyi Bence",
    title: "Szilagyi Bence - AI Software Engineer",
    description:
      "AI software engineer and fullstack builder creating autonomous agents, privacy-first iOS apps, and health data products.",
    images: [
      {
        url: assetPath("/images/hero-poster.avif"),
        width: 1200,
        height: 630,
        alt: "Szilagyi Bence portfolio hero artwork"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Szilagyi Bence - AI Software Engineer",
    description:
      "Autonomous agents, privacy-first iOS apps, and fullstack health data products.",
    creator: "@31b4_",
    images: [assetPath("/images/hero-poster.avif")]
  },
  appleWebApp: {
    capable: true,
    title: "Szilagyi Bence",
    statusBarStyle: "black-translucent"
  },
  formatDetection: {
    telephone: false
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0a0a",
  colorScheme: "dark"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} ${instrumentSerif.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
