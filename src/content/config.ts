import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),

      canonical: z.string().url().optional(),

      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),

      description: z.string().optional(),

      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),

      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

const postCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/post' }),
  schema: z.object({
    publishDate: z.date().optional(),
    updateDate: z.date().optional(),
    draft: z.boolean().optional(),

    title: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(),
    featured: z.boolean().optional(),
    grid_span: z.number().int().positive().optional(),

    category: z.string().optional(),
    tags: z.union([z.array(z.string()), z.string()]).optional(),
    author: z.string().optional(),
    date: z.union([z.string(), z.date()]).optional(),

    metadata: metadataDefinition(),
  }),
});

const projectCollection = defineCollection({
  loader: glob({ pattern: ['**/*.{md,mdx}'], base: 'src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    status: z.enum(['active', 'completed', 'Active', 'Completed']),
    featured: z.boolean().optional(),
    launchDate: z.date().optional(),
    date: z.union([z.string(), z.date()]).optional(),
    excerpt: z.string().optional(),
    technologies: z.union([z.array(z.string()), z.string()]).optional(),
    grid_span: z.number().int().positive().optional(),
    link: z.string().url().optional(),
    cover: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    metadata: metadataDefinition(),
  }),
});

const archiveCollection = defineCollection({
  loader: glob({ pattern: ['**/*.{md,mdx}'], base: 'src/content/archive' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    period: z.string().optional(),
    discipline: z.string().optional(),
    type: z.enum(['Poem', 'Manifesto', 'Technical Note']).optional(),
    date: z.union([z.string(), z.date()]).optional(),
    excerpt: z.string().optional(),
    featured: z.boolean().optional(),
    grid_span: z.number().int().positive().optional(),
    link: z.string().url().optional(),
    metadata: metadataDefinition(),
  }),
});

const logCollection = defineCollection({
  loader: glob({ pattern: ['**/*.{md,mdx}'], base: 'src/content/log' }),
  schema: z.object({
    title: z.string(),
    date: z.union([z.string(), z.date()]),
    featured: z.boolean().optional(),
    grid_span: z.number().int().positive().optional(),
    metadata: metadataDefinition(),
  }),
});

export const collections = {
  post: postCollection,
  projects: projectCollection,
  archive: archiveCollection,
  log: logCollection,
};
