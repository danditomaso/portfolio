// // export { default as Image } from "./image"
// export { H1 as h1, H2 as h2, H3 as h3, H4 as h4 } from "./heading"
// // export { default as code } from "./code"
// export { default as a } from "./link"
// export { default as Column } from "./column"
// export { default as Row } from "./row"

import type { MDXComponents } from "mdx/types"
import Link from "next/link"
import Row from "./row"
import Column from "./column"

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="font-sans text-4xl text-secondary-color my-4">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-sans text-4xl text-secondary-color mt-8 mb-2 ">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-sans text-lg text-secondary-color mt-8 mb-2 ">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-zinc-500 font-sans text-sm m-0 mb-4 p-0">{children}</h4>
  ),
  // blockquote: ({ children }:) => (
  //   <blockquote className="border-l-2 border-l-[#407C4A] pl-4 italic py-1 my-4 font-light text-zinc-500 >
  //     {children}
  //   </blockquote>
  // ),
  a: ({ children }) => <Link href="/">{children}</Link>,
  ul: ({ children }) => (
    <ul className="list-disc pl-8 text-sans text-secondary-color">{children}</ul>
  ),
  li: ({ children }) => (
    <li className="list-disc pl-8 text-sans text-secondary-color">{children}</li>
  ),
  p: ({ children }) => <p className="text-sans text-xl my-4">{children}</p>,
  Row: ({ children }) => <Row>{children}</Row>,
  Column: ({ children }) => <Column>{children}</Column>,
}
