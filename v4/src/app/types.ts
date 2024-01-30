export type NameUrlPair = {
  name: string
  url: string
}

export type Icon = {
  icon: string
}

export type SocialItem = NameUrlPair & Icon

export type WorkItem = {
  name: string
  url: string
  description: string
  skills: string[]
}

export type SiteMapLink = {
  work: NameUrlPair
  about: NameUrlPair
  contact: NameUrlPair
  home?: NameUrlPair
}
