import { Text } from "@/components/text"
import siteSettings from "@/config/siteSettings"
import Link from "next/link"

export default async function ContactPage() {
  const { email } = siteSettings.siteMetadata
  return (
    <section className="ml-48 flex h-screen w-full flex-col gap-9">
      <Text variant={"h1"} className="py-3 font-serif text-[12vw]">
        Let's talk.
      </Text>
      <Text variant="p" className="max-w-[40ch] font-sans">
        Need a front end developer? Want to collaborate? Just want to chat? I'm all ears.
      </Text>
      <div className="flex gap-3">
        <Text variant="p" className="tracking-wider">
          Email:{" "}
        </Text>
        <Link href={`mailto:${email}`}>
          <Text variant="p" className="max-w-[40ch] break-all font-serif">
            {email}
          </Text>
        </Link>
      </div>
    </section>
  )
}
