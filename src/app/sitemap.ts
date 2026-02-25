import type { MetadataRoute } from "next";
const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ia-solutions-guadeloupe.fr";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${base}/`, priority: 1.0 },
    { url: `${base}/smartprospect`, priority: 0.95 },
    { url: `${base}/services`, priority: 0.9 },
    { url: `${base}/about`, priority: 0.7 },
    { url: `${base}/contact`, priority: 0.7 },
  ];
}
