import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const linkField = z
  .string()
  .refine(
    (value) =>
      value.startsWith("/") || value.startsWith("http://") || value.startsWith("https://"),
    "Expected an absolute path or a full URL"
  );

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    year: z.string(),
    role: z.string(),
    cover: z.string(),
    coverAlt: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    status: z.string().default("In Progress"),
    github: linkField.optional(),
    demo: linkField.optional(),
    writeup: linkField.optional()
  })
});

const research = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/research" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    kind: z.enum(["Paper", "Competition", "Report", "Achievement"]),
    venue: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false)
  })
});

const notes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/notes" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    kind: z.enum(["Note", "Tech Record", "Essay", "Summary"]),
    featured: z.boolean().default(false)
  })
});

const gallery = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/gallery" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    kind: z.enum(["Artwork", "Collection", "Quote"]),
    medium: z.string(),
    image: z.string().optional(),
    source: z.string().optional(),
    featured: z.boolean().default(false)
  })
});

export const collections = { projects, research, notes, gallery };
