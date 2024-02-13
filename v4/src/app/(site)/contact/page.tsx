import { Text } from "@/components/text"
import siteSettings from "@/config/siteSettings"
import Link from "next/link"

export default async function ContactPage() {
  const { email } = siteSettings.siteMetadata
  return (
    <section className="h-screen w-full flex flex-col">
      <div className="w-3/5 flex flex-col gap-4 h-full place-content-center">
        <Text variant={"h1"} className="text-[8vw] tracking-">
          Let's talk.
        </Text>
        <Text variant="p" className="max-w-[80ch]">
          Looking to add another expert in frontend engineering to your team? Let's discuss how I
          can contribute to your project's success. Contact me to explore how we can work together
          and bring your orgnizations vision to life.
        </Text>
        <div className="flex gap-3 mt-10">
          <Text variant="p" className="">
            Email:{" "}
          </Text>
          {/* <Link href={`mailto:${email}`}> */}
          <Text variant="p" className="max-w-[40ch] break-all font-serif">
            {email}
          </Text>
          {/* </Link> */}
        </div>
      </div>
    </section>
  )
}
