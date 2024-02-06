import type { SiteMap, SocialItem, Work } from "@/app/(site)/types"
import githubIcon from "../../public/assets/icons/github-icon.svg"
import linkedInIcon from "../../public/assets/icons/linkedin-icon.svg"
import twitterIcon from "../../public/assets/icons/twitter-icon.svg"

export type SiteSettings = {
  metadata: {
    title: string
    jobRole: string
    lookingForDescription: string
    description: string
    siteUrl: string
    email: string
  }
  siteMap: SiteMap
  work: Work[]
  socials: SocialItem[]
}

const siteSettings: SiteSettings = {
  metadata: {
    title: "Dan Ditomaso",
    jobRole: "Fullstack, but front-end addicted developer",
    lookingForDescription: "Currently seeking my next opportunity...",
    description:
      "I build delightful user experiences that thoughtful user experiences that piece together a big picture with simple, impactful and shippable solutions focused on the customer",
    siteUrl: "https://www.danditomaso.com",
    email: "dan.ditomaso@gmail.com",
  },
  siteMap: {
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
  work: [
    {
      name: "abc123",
      url: "work/abc123",
      description:
        "This is a sample description for this project, it should be a short description of the project and what it does. This is important as a way to tell how the project was built and what it does.",
      skills: ["React", "Typescript", "Next.js", "TailwindCSS"],
    },
    {
      name: "bcd456",
      url: "work/bcd456",
      description: "abclajsflksa",
      skills: ["React", "Typescript", "Next.js", "TailwindCSS"],
    },
    {
      name: "efg789",
      url: "work/efg789",
      description: "abclajsflksa",
      skills: ["React", "Typescript", "Next.js", "TailwindCSS"],
    },
    {
      name: "hij101112",
      url: "work/hij101112",
      description: "abclajsflksa",
      skills: ["React", "Typescript", "Next.js", "TailwindCSS"],
    },
    {
      name: "klm131415",
      url: "work/klm131415",
      description: "abclajsflksa",
      skills: ["React", "Typescript", "Next.js", "TailwindCSS"],
    },
    {
      name: "nqo161718",
      url: "work/nqo161718",
      description: "abclajsflksa",
      skills: ["React", "Typescript", "Next.js", "TailwindCSS"],
    },
    {
      name: "abc123",
      url: "work/abc123",
      description:
        "This is a sample description for this project, it should be a short description of the project and what it does. This is important as a way to tell how the project was built and what it does.",
      skills: ["React", "Typescript", "Next.js", "TailwindCSS"],
    },
    {
      name: "bcd456",
      url: "work/bcd456",
      description: "abclajsflksa",
      skills: ["React", "Typescript", "Next.js", "TailwindCSS"],
    },
    {
      name: "efg789",
      url: "work/efg789",
      description: "abclajsflksa",
      skills: ["React", "Typescript", "Next.js", "TailwindCSS"],
    },
    {
      name: "hij101112",
      url: "work/hij101112",
      description: "abclajsflksa",
      skills: ["React", "Typescript", "Next.js", "TailwindCSS"],
    },
    {
      name: "klm131415",
      url: "work/klm131415",
      description: "abclajsflksa",
      skills: ["React", "Typescript", "Next.js", "TailwindCSS"],
    },
    {
      name: "nqo161718",
      url: "work/nqo161718",
      description: "abclajsflksa",
      skills: ["React", "Typescript", "Next.js", "TailwindCSS"],
    },
  ],
  socials: [
    { url: "www.github.com", icon: githubIcon, name: "Github" },
    { url: "www.linkedin.com", icon: linkedInIcon, name: "LinkedIn" },
    { url: "www.twitter.com", icon: twitterIcon, name: "Twitter" },
  ],
}

export default siteSettings
