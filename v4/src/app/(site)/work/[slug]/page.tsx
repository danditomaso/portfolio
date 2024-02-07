import WorkEntry from "@/components/work"
import config from "@/lib/config"
import { getWorkBySlug } from "@/lib/mdx"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params

  const { meta } = await getWorkBySlug({ slug })
  const { title, description, keywords } = meta

  const baseUrl = new URL(config.baseUrl)
  // const imagePath = frontmatter.image.startsWith("/") ? frontmatter.image : `/${frontmatter.image}`
  // const imageUrl = new URL(imagePath, baseUrl).toString()

  const dynamicMetadata = {
    ...meta,
    title,
    description,
    keywords,
    openGraph: {
      ...meta.openGraph,
      title,
      description,
      type: "article",
      article: {
        // authors: [frontmatter.author.name],
        // publishedTime: frontmatter.date,
        // modifiedTime: frontmatter.date,
      },
      images: [
        {
          // url: imageUrl,
          // alt: frontmatter.title,
        },
      ],
    },
  }
  return dynamicMetadata
}

export default async function WorkEntryPage() {
  const { meta, content, frontmatter } = await getWorkBySlug({ slug: "abc123" })

  return <WorkEntry frontmatter={frontmatter} content={content} meta={meta} />
}
