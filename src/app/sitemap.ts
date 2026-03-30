import type { MetadataRoute } from "next";

// Aligné sur layout.tsx — définir NEXT_PUBLIC_SITE_URL en prod pour une seule URL canonique
const base =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ia-solutions-guadeloupe.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${base}/`, priority: 1, changeFrequency: "weekly" },
    { url: `${base}/contact`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${base}/methode`, priority: 0.85, changeFrequency: "monthly" },
    { url: `${base}/faq`, priority: 0.85, changeFrequency: "monthly" },
    { url: `${base}/about`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/case-studies`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/mentions-legales`, priority: 0.3, changeFrequency: "yearly" },
    { url: `${base}/confidentialite`, priority: 0.3, changeFrequency: "yearly" },
    { url: `${base}/cgv`, priority: 0.3, changeFrequency: "yearly" },
  ];
}
