import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { remarkGfm, remarkHeading, remarkStructure } from "fumadocs-core/mdx-plugins";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

const projects = defineCollection({
  name: "projects",
  directory: "./content/projects",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    published: z.boolean().optional(),
    date: z.string().optional(),
    url: z.string().optional(),
    repository: z.string().optional(),
    tech: z.array(z.string()),
    display: z.enum(["featured", "top3", "top2"]).optional(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm, remarkHeading, remarkStructure],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypePrettyCode,
          {
            theme: "github-dark",
            onVisitLine(node: any) {
              // Prevent lines from collapsing in `display: grid` mode, and allow empty
              // lines to be copy/pasted
              if (node.children.length === 0) {
                node.children = [{ type: "text", value: " " }];
              }
            },
            onVisitHighlightedLine(node: any) {
              node.properties.className.push("line--highlighted");
            },
            onVisitHighlightedWord(node: any) {
              node.properties.className = ["word--highlighted"];
            },
          },
        ],
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["subheading-anchor"],
              ariaLabel: "Link to section",
            },
          },
        ],
      ],
    });
    return {
      ...document,
      mdx,
      slug: document._meta.path,
      contentType: "mdx",
    };
  },
});

export default defineConfig({
  collections: [projects],
});
