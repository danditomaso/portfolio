/** @type {import('next').NextConfig} */
import nextMDX from "@next/mdx"
import csp from "./csp.js"
import bundleAnalyzer from "@next/bundle-analyzer"

const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === "true" })
const withMDX = nextMDX({
  extension: /\.mdx?$/,
})

const ContentSecurityPolicy = csp
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    mdxRs: true,
  },
  pageExtensions: ["mdx", "ts", "tsx"],
  productionBrowserSourceMaps: true,
  images: {
    domains: ["localhost", process.env.NEXT_PUBLIC_SERVER_URL]
      .filter(Boolean)
      .map((url) => url.replace(/https?:\/\//, "")),
  },
  async headers() {
    const headers = []
    // Set the `Content-Security-Policy` header as a security measure to prevent XSS attacks
    // It works by explicitly whitelisting trusted sources of content for your website
    // This will block all inline scripts and styles except for those that are allowed
    headers.push({
      source: "/(.*)",
      headers: [
        {
          key: "Content-Security-Policy",
          value: ContentSecurityPolicy,
        },
      ],
    })

    return headers
  },
}

export default withMDX(withBundleAnalyzer(nextConfig))
