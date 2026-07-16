import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/investments",
    "/immobilien",
    "/holding",
    "/absicherung",
    "/finanzierung",
    "/steuern-recht",
    "/ueber-uns",
    "/kontakt",
  ];
  return paths.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
