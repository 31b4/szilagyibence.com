import type { Metadata, Viewport } from "next";
import { absoluteUrl, assetPath, siteUrl } from "@/data/paths";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Bence Szilágyi — Software Engineer",
  title: {
    default: "Bence Szilágyi — Software Engineer",
    template: "%s — Bence Szilágyi"
  },
  description:
    "Software engineer building AI systems, native iOS products, and the software behind them.",
  keywords: [
    "Szilagyi Bence",
    "Bence Szilagyi",
    "AI Software Engineer",
    "Full-stack Developer",
    "iOS Developer",
    "SwiftUI",
    "HealthKit",
    "AI Agents",
    "LangChain",
    "WebRTC",
    "Core ML",
    "Portfolio"
  ],
  authors: [{ name: "Bence Szilágyi", url: absoluteUrl("/") }],
  creator: "Bence Szilágyi",
  publisher: "Bence Szilágyi",
  category: "technology",
  alternates: {
    canonical: absoluteUrl("/")
  },
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
    siteName: "Bence Szilágyi",
    title: "Bence Szilágyi — Software Engineer",
    description:
      "AI systems, native iOS products, and the software behind them.",
    images: [
      {
        url: absoluteUrl("/og.png"),
        width: 1200,
        height: 630,
        alt: "Bence Szilágyi portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Bence Szilágyi — Software Engineer",
    description:
      "AI systems, native iOS products, and the software behind them.",
    creator: "@31b4_",
    images: [absoluteUrl("/og.png")]
  },
  appleWebApp: {
    capable: true,
    title: "Bence Szilágyi",
    statusBarStyle: "default"
  },
  formatDetection: {
    telephone: false
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#050506",
  colorScheme: "dark"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href={assetPath("/manifest.webmanifest")} />
      </head>
      <body>{children}</body>
    </html>
  );
}
