import type { MetadataRoute } from "next";

const BASE = "https://camerepse.it";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/es-vedra", "/via-romagna", "/prenota", "/privacy"];
  return routes.map((r) => ({
    url: `${BASE}${r}`,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.8,
  }));
}
