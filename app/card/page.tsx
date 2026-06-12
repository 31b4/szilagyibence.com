import type { Metadata } from "next";
import CardContent from "./CardContent";

export const metadata: Metadata = {
  title: "Business Card - Szilagyi Bence",
  description:
    "Digital business card for Szilagyi Bence - developer and entrepreneur.",
  alternates: {
    canonical: "https://szilagyibence.com/card"
  },
  robots: {
    index: false,
    follow: false
  },
  openGraph: {
    title: "Szilagyi Bence - Business Card",
    description: "Tap to call, email, or connect on socials.",
    type: "website",
    url: "https://szilagyibence.com/card"
  }
};

export default function CardPage() {
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "short"
  });

  return <CardContent lastUpdated={lastUpdated} />;
}
