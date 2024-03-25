import fs from "node:fs"
import { mdxComponents } from "@/components/work/mdx/mdx-components"
import { defaultFrontmatter, defaultMetadata } from "@/lib/config/metadata"
import { globby } from "globby"
import { compileMDX } from "next-mdx-remote/rsc"
import type { MDXContent, MDXFrontmatter } from "@/app/(site)/types"
import type { Metadata } from "next"
import { redirect } from "next/navigation"

const FOLDER_PATH = "content"

interface MDXParsedData {
  frontmatter: MDXFrontmatter
  meta: Metadata & { slug: string }
  content: MDXContent
}

const workCache = new Map<string, MDXParsedData>()

export async function getWorkBySlug({ slug }: { slug: string }) {
  const parsedData = await getWorkData({ slug })

  return parsedData
}

export async function getAllWorkEntries() {
  const slugs = await getAllWorkSlugs()
  const workEntries = []
  for (const slug of slugs) {
    const { frontmatter } = await getWorkData({ slug })
    workEntries.push({ ...frontmatter, slug })
  }
  return workEntries.sort((a, b) => (a.date > b.date ? -1 : 1))
}

async function getAllWorkSlugs() {
  const files = await globby(`${FOLDER_PATH}/*.mdx`, { onlyFiles: true })
  const fileNames = files.map((file) => file.replace(`${FOLDER_PATH}/`, "").replace(".mdx", ""))
  return fileNames
}

async function parseWorkData({
  raw,
  slug = "",
}: { raw: string; slug: string }): Promise<MDXParsedData> {
  const { frontmatter, content } = await compileMDX({
    source: raw,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
    },
  })

  // const baseUrl = new URL(config.baseUrl)
  // const permalink = new URL(articlePath, baseUrl).toString()

  return {
    frontmatter: {
      ...defaultFrontmatter,
      ...frontmatter,
    },
    meta: {
      ...defaultMetadata,
      slug,
      // date: data?.date ? new Date(data.date)?.toISOString() : new Date().toISOString(),
    },
    content,
  }
}

async function getWorkData({ slug }: { slug: string }): Promise<MDXParsedData> {
  const [filePath] = await globby(`${FOLDER_PATH}/${slug}.mdx`, { onlyFiles: true }).catch((e) => {
    console.error(e)
    return []
  })

  if (!filePath) {
    console.error("requestd file path not found")
    return redirect("/notfound")
  }

  const raw = fs.readFileSync(filePath, { encoding: "utf8" })

  const parsedData = await parseWorkData({ raw, slug })

  workCache.set(slug, parsedData)

  return parsedData
}
