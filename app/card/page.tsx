import type { Metadata } from "next";
import { profile } from "@/data/content";
import { absoluteUrl } from "@/data/paths";
import CardContent from "./CardContent";

export const metadata: Metadata = {
  title: "Business Card",
  description:
    "Digital business card for Bence Szilágyi — software engineer and product builder.",
  alternates: {
    canonical: absoluteUrl("/card")
  },
  robots: {
    index: false,
    follow: false
  },
  openGraph: {
    title: "Bence Szilágyi — Business Card",
    description: "Tap to call, email, or connect on socials.",
    type: "website",
    url: absoluteUrl("/card")
  }
};

export default function CardPage() {
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "short"
  });

  return (
    <CardContent
      lastUpdated={lastUpdated}
      cardUrl={absoluteUrl("/card")}
      siteUrl={absoluteUrl("/")}
      email={profile.email}
    />
  );
}
