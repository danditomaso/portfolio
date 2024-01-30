import type { Metadata } from "next"
import "./globals.css"
import siteSettings from "@/config/siteSettings"
import { cn } from "@/lib/styles"
import Nav from "@/components/Nav"
import { inter, playfair } from "./fonts"

export const metadata: Metadata = {
  title: siteSettings.metadata.title,
  description: "",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, playfair.variable)}>
        <main id="app--grid" className="min-h-screen">
          <Nav />
          <div className="flex pl-[6vw]">{children}</div>
        </main>
      </body>
    </html>
  )
}
