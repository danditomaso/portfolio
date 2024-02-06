import config from "."

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

const metadata = {
  title: {
    template: "%s | @mateonunez",
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
    "typescript",
    "tailwind",
    "tailwindcss",
    "canada",
  ],
  author,
  authors: [author],
  colorSchema: "dark",
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

export default metadata
