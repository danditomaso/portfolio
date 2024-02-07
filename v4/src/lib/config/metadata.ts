import { Metadata } from "next"
import config from "."
import { MDXFrontmatter } from "@/app/(site)/types"

export const defaultFrontmatter: MDXFrontmatter = {
  title: "Dan Ditomaso",
  siteUrl: "https://danditomaso.com",
  description: "",
  date: "",
  slug: "",
  tags: [],
  tech: [],
  publish_date: new Date(),
}

const author = {
  name: "Dan Ditomaso",
  twitter: "@danditomaso",
  github: "@danditomaso",
  email: "dan.ditomaso@gmail.com",
  website: "https://danditomaso.com",
}

const defaultTitle = "@danditomaso"
const defaultDescription =
  "Hi folks! I'm Dan Ditomaso, a Software Engineer from Colombia based in Milan. I ❤️ Open Source, JavaScript, the music, the food, the challenges and the continous improvement."

export const defaultMetadata: Metadata = {
  title: {
    template: "%s | @danditomaso",
    default: defaultTitle,
  },
  description: defaultDescription,
  keywords: [
    "dan ditomaso",
    "danditomaso",
    "software developer",
    "software engineer",
    "open source",
    "typescript",
    "javascript",
    "nodejs",
    "deno",
    "hono",
    "react",
    "nextjs",
    "tailwind",
    "tailwindcss",
    "canada",
  ],
  authors: [author],
  colorScheme: "dark",
  metadataBase: new URL(config.baseUrl),
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: config.baseUrl,
    siteName: defaultTitle,
    images: [
      {
        url: "https://danditomaso.com/card.png",
        width: 512,
        height: 512,
        alt: "Dan Ditomaso",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  icons: {
    icon: "/favicon-16x16.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    creator: "@danditomaso",
  },
}
