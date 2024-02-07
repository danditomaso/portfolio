import siteSettings from "@/config/siteSettings"
import type { Metadata } from "next"
import type { ReactNode } from "react"

// TODO: Add NextJS metadata function here
// export const metadata: Metadata = {
//   title: siteSettings.metadata.title,
//   description: "",
// }

export default function WorkItemLayout({ children }: { children: ReactNode }) {
  return (
    <section className="flex flex-col w-full  place-items-center text-balance">{children}</section>
  )
}
