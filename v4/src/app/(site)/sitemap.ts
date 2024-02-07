import siteSettings from "@/config/siteSettings"
import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const { about, contact, work } = siteSettings.siteMap
  return [
    {
      url: siteSettings.siteMetadata.siteUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: siteSettings.siteMetadata.siteUrl.concat(contact.url),
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: siteSettings.siteMetadata.siteUrl.concat(about.url),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: siteSettings.siteMetadata.siteUrl.concat(work.url),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ]
}
