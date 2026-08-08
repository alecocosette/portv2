import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://alejaimes.dev";
  const lastModified = new Date();

  return [
    { url: `${base}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/projects`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/experience`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
