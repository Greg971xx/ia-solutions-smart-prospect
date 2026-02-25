// next.config.ts
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },

  // ✅ Fallback automatique de l'URL publique
  env: {
    NEXT_PUBLIC_SITE_URL:
      process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.NODE_ENV === "production"
        ? "https://ia-solutions-guadeloupe.fr"
        : "http://localhost:3000"),
  },

  async redirects() {
    return [
      { source: "/diagnostic", destination: "/contact", permanent: true },
    ]
  },
}

export default nextConfig
