import type { SiteMap, SocialItem } from "@/app/(site)/types"
import githubIcon from "../../public/assets/icons/github-icon.svg"
import linkedInIcon from "../../public/assets/icons/linkedin-icon.svg"
import twitterIcon from "../../public/assets/icons/twitter-icon.svg"

export type SiteSettings = {
  siteMetadata: {
    title: string
    jobRole: string
    lookingForDescription: string
    description: string
    siteUrl: string
    email: string
  }
  siteMenu: SiteMap
  socials: SocialItem[]
}

const siteSettings: SiteSettings = {
  siteMetadata: {
    title: "Dan Ditomaso",
    jobRole: "Fullstack, but front-end addicted developer",
    lookingForDescription: "Currently seeking my next opportunity...",
    description:
      "I build delightful user experiences that thoughtful user experiences that piece together a big picture with simple, impactful and shippable solutions focused on the customer",
    siteUrl: "https://www.danditomaso.com",
    email: "dan.ditomaso@gmail.com",
  },
  siteMenu: {
    work: {
      name: "Work",
      url: "/work",
    },
    about: {
      name: "About",
      url: "/about",
    },
    contact: {
      name: "Contact",
      url: "/contact",
    },
  },
  socials: [
    { url: "www.github.com", icon: githubIcon, name: "Github" },
    { url: "www.linkedin.com", icon: linkedInIcon, name: "LinkedIn" },
    { url: "www.twitter.com", icon: twitterIcon, name: "Twitter" },
  ],
}

export default siteSettings
