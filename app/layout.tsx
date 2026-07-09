import type { Metadata, Viewport } from "next";
import { profile } from "@/data/content";
import { absoluteUrl, assetPath, siteUrl } from "@/data/paths";
import "./globals.css";

const homeUrl = absoluteUrl("/");
const personId = `${homeUrl}#person`;
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${homeUrl}#website`,
      name: "Bence Szilágyi",
      alternateName: ["Bence Szilagyi", "31b4"],
      url: homeUrl
    },
    {
      "@type": "ProfilePage",
      "@id": `${homeUrl}#profile`,
      url: homeUrl,
      name: "Bence Szilágyi — Software Engineer",
      dateModified: "2026-07-10",
      mainEntity: { "@id": personId }
    },
    {
      "@type": "Person",
      "@id": personId,
      name: profile.name,
      alternateName: ["Bence Szilagyi", "Szilagyi Bence", "31b4"],
      jobTitle: profile.role,
      description: profile.focus,
      url: homeUrl,
      sameAs: [profile.github, profile.linkedin, profile.x],
      knowsAbout: [
        "AI engineering",
        "iOS development",
        "SwiftUI",
        "LLM systems",
        "FastAPI",
        "Laravel"
      ]
    }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Bence Szilágyi — Software Engineer",
  title: {
    default: "Bence Szilágyi — Software Engineer | 31b4",
    template: "%s — Bence Szilágyi"
  },
  description:
    "Bence Szilágyi (31b4) is a software engineer building AI systems, secure iOS products, and full-stack software.",
  keywords: [
    "Szilagyi Bence",
    "Bence Szilagyi",
    "Bence Szilágyi",
    "31b4",
    "31b4 GitHub",
    "Bence developer",
    "Bence Szilagyi developer",
    "AI Software Engineer",
    "Software Developer",
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
    icon: [
      { url: assetPath("/icon-512.png"), sizes: "512x512", type: "image/png" },
      { url: assetPath("/icon-192.png"), sizes: "192x192", type: "image/png" }
    ],
    shortcut: assetPath("/icon-192.png"),
    apple: [{ url: assetPath("/icon-192.png"), sizes: "192x192", type: "image/png" }]
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
    title: "Bence Szilágyi — Software Engineer | 31b4",
    description:
      "AI systems, secure iOS products, and full-stack software.",
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
    title: "Bence Szilágyi — Software Engineer | 31b4",
    description:
      "AI systems, secure iOS products, and full-stack software.",
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
  themeColor: "#f8fafc",
  colorScheme: "light"
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
