import { WorkItem } from "@/app/types"
import Text from "@/components/ui/Text"
import TextBlock from "@/components/ui/TextBlock"
import siteSettings from "@/config/siteSettings"
import { cn } from "@/lib/styles"
import Link from "next/link"

export default async function ContactPage() {
  return (
    <section className="place flex h-full w-full flex-col place-content-center">
      <Text variant={"h1"} className="py-3 font-serif text-[8vw]">
        Let's talk.
      </Text>
      <Text variant="p" className="max-w-[40ch] font-sans">
        Need a front end developer? Want to collaborate? Just want to chat? I'm
        all ears.
      </Text>
    </section>
  )
}
