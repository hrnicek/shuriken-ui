import { defineCollection, z } from '@nuxt/content'

export const collections = {
  content: defineCollection({
    type: 'page',
    source: '**',
    schema: z.object({
      //
    }),
  }),
}
