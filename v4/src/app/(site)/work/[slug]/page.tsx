import fs from "fs"
import { mdxComponents } from "../../../mdx-components"
import { getWorkEntryBySlug } from "@/lib/mdx"
import { MDXRemote } from "next-mdx-remote/rsc"

// export default ({children}) => (<div>{children}</div>)
export default async function WorkEntryPage() {
  const { content, meta } = await getWorkEntryBySlug("abc123")

  return (
    <>
      {/* <MDXRemote
        // source={`# Hello World

        // This is from Server Components!
        // `}
        source={fileContent}
        components={mdxComponents}
        options={{ parseFrontmatter: true }} */}
      {/* /> */}
      {content}
    </>
  )
}
