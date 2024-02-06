import siteSettings from "@/config/siteSettings"
import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: siteSettings.metadata.title,
  description: "",
}

export default function WorkItemLayout({ children }: { children: ReactNode }) {
  return (
    <section className="flex h-full w-full flex-col place-items-center text-balance">
      {children}
    </section>
  )
}
