import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ponytail: local markdown images + optional frontmatter cover. Add remote image domains in astro.config.mjs when fetching external images.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      pubDate: z.coerce.date(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      tags: z.array(z.string()).default([]),
    }),
});

export const collections = { blog };
