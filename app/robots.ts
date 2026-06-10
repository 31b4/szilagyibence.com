import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/data/paths";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: absoluteUrl("/sitemap.xml")
  };
}
