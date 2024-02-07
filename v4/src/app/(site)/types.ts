import type { Metadata } from "next/types"
import { JSXElementConstructor, ReactElement } from "react"

export type NameUrlPair = {
  name: string
  url: string
}

export type Icon = {
  icon: string
}

export type SocialItem = NameUrlPair & Icon

export type MDXContent = ReactElement<unknown, string | JSXElementConstructor<unknown>>

export interface MDXFrontmatter {
  title: string
  description: string
  siteUrl: string
  tags: string[]
  tech: string[]
  date: string
  slug: string
  publish_date: Date
}

export interface MDXParsedData {
  frontmatter: MDXFrontmatter
  meta: Metadata
  content: MDXContent
}

export type SiteMap = {
  work: NameUrlPair
  about: NameUrlPair
  contact: NameUrlPair
  home?: NameUrlPair
}
