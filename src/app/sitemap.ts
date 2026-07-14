import type { MetadataRoute } from "next";
import { site, portfolio } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: site.url, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/portfolio`, changeFrequency: "weekly", priority: 0.9 },
  ];

  const portfolioRoutes: MetadataRoute.Sitemap = portfolio.map((item) => ({
    url: `${site.url}/portfolio/${item.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
    lastModified: item.date,
  }));

  return [...staticRoutes, ...portfolioRoutes];
}
