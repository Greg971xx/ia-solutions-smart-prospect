import { defineType } from 'sanity'

/** Schémas Sanity – export requis par sanity.config.ts. À étendre selon vos types de contenu. */
export const schemaTypes = [
  defineType({
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
      { name: 'title', type: 'string', title: 'Titre' },
      { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' } },
    ],
  }),
]
