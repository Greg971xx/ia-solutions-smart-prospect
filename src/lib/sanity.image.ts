// src/lib/sanity.image.ts
import imageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'
import { client } from '@/lib/sanity.client'

const builder = imageUrlBuilder(client)

/** Construit un builder d'URL Sanity pour une image */
export function urlFor(source: Image) {
  return builder.image(source)
}
