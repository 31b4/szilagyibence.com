import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/data/paths";

const lastModified = new Date("2026-06-10T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}
