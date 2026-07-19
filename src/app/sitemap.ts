import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/leistungen",
    "/investments",
    "/immobilien",
    "/holding",
    "/absicherung",
    "/finanzierung",
    "/steuern-recht",
    "/ueber-uns",
    "/kontakt",
  ];
  const lastModified = new Date();
  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
