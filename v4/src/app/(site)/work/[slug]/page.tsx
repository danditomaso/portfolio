import WorkEntry from "@/components/work"
import config from "@/lib/config"
import { getWorkBySlug } from "@/lib/mdx"
import { redirect } from "next/navigation"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params

  const { meta } = await getWorkBySlug({ slug })

  if (!meta) {
    return redirect("/notfound")
  }

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

export default async function WorkEntryPage({ params }: { params: { slug: string } }) {
  if (!params || !params.slug || params.slug === "") {
    return redirect("/notfound")
  }

  const { meta, content, frontmatter } = await getWorkBySlug({ slug: params?.slug })

  return <WorkEntry frontmatter={frontmatter} content={content} meta={meta} />
}
