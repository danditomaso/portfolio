import Nav from "@/components/nav/nav"
import siteSettings from "@/config/siteSettings"
import { inter, playfair } from "@/styles/fonts"
import { cn } from "@/lib/styling/styles"
import "@/styles/globals.css"
import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: siteSettings.metadata.title,
  description: "",
}

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, playfair.variable)}>
        <main id="app--grid">
          <Nav />
          <div className="flex">{children}</div>
        </main>
      </body>
    </html>
  )
}
