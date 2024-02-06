import { Text } from "@/components/text"
import siteSettings from "@/config/siteSettings"
import Link from "next/link"

export default async function ContactPage() {
  const { email } = siteSettings.metadata
  return (
    <section className="ml-48 flex h-screen w-full flex-col gap-9">
      <Text variant={"h1"} className="py-3 font-serif text-[8vw]">
        Let's talk.
      </Text>
      <Text variant="p" className="max-w-[40ch] font-sans">
        Need a front end developer? Want to collaborate? Just want to chat? I'm all ears.
      </Text>
      <div className="flex">
        <Text variant="p">Email: </Text>
        <Link href={`mailto:${email}`}>
          <Text variant="p" className="max-w-[40ch] break-all font-serif">
            {email}
          </Text>
        </Link>
      </div>
    </section>
  )
}
