import fs from "fs"
import { mdxComponents } from "../../mdx-components"
import { globby } from "globby"
import { compileMDX } from "next-mdx-remote/rsc"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeHighlight from "rehype-highlight"
import path from "path"

const FOLDER_PATH = "content"

export async function getWorkEntryBySlug(slug: string) {
  const [filePath] = await globby(`${FOLDER_PATH}/${slug}.mdx`, { onlyFiles: true })

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" })
  console.log(fileContent)

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        // remarkPlugins: [{}],
        // rehypePlugins: [
        //   [rehypeHighlight as any, {}],
        //   [rehypeAutolinkHeadings, {}],
        //   [rehypeSlug, { enableCustomId: true, maintainCase: true, removeAccents: true }],
        // ],
      },
    },
  })
  console.log({ frontmatter, content })

  return { meta: { ...frontmatter, slug }, content }
}

// export const getWorkEntryBySlug = async slug => {

//   const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

//   const { frontmatter, content } = await compileMDX({
//     source: fileContent,
//     options: { parseFrontmatter: true },
//     components: components // <--- remove the curly braces
//   })

//   return { meta: { ...frontmatter, slug: realSlug }, content }
// }

export async function getAllWorkEntries() {
  const files = await globby(`${FOLDER_PATH}/*.mdx`, { onlyFiles: true })
  const fileNames = files.map((file) => file.replace(`${FOLDER_PATH}/`, "").replace(".mdx", ""))
  return fileNames
}

// export const getPostBySlug = async (slug) => {
//   const fileSlug = slug.replace(/\.mdx$/, "")
//   const fileContent = fs.readFileSync(`${FOLDER_PATH}/${fileSlug}.mdx`, {
//     encoding: "utf-8",
//   })
//   const { frontmatter, content } = await compileMDX({
//     source: fileContent,
//     options: {
//       parseFrontmatter: true,
//     },
//     components,
//   })

//   return {
//     meta: { ...frontmatter, slug: fileSlug },
//     content,
//   }
// }
