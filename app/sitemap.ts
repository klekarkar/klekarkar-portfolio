import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projects", "/research", "/talks", "/cv"];
  return routes.map((route) => ({
    url: `https://klekarkar.com${route}`,
    lastModified: new Date("2026-10-05"),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : 0.8,
  }));
}
