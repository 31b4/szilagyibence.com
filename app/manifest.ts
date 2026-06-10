import type { MetadataRoute } from "next";
import { assetPath } from "@/data/paths";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Szilagyi Bence - Building Health",
    short_name: "Szilagyi Bence",
    description:
      "Portfolio of Szilagyi Bence, an AI software engineer and fullstack builder focused on privacy-first health products.",
    start_url: assetPath("/"),
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [
      {
        src: assetPath("/favicon.svg"),
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };
}
