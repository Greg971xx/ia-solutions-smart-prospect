// src/lib/sanity.client.ts
import { createClient } from "next-sanity"

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!, // défini dans .env.local
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2025-01-01", // tu peux mettre une date figée (ex : 2023-01-01)
  useCdn: true, // true = cache rapide (lecture seule)
})
