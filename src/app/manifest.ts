import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name}: Vermögensaufbau, ganzheitlich beraten`,
    short_name: site.name,
    description:
      "Ganzheitliche Beratung für Vermögensaufbau: Investments, Off-Market-Immobilien, Holding-Strukturen, Finanzierung, bAV/bKV und Absicherung.",
    start_url: "/",
    display: "standalone",
    background_color: "#0d1a2d",
    theme_color: "#0d1a2d",
    lang: "de",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
