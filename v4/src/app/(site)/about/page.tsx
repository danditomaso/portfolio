import { Text } from "@/components/text"
export default async function AboutPage() {
  return (
    <section className="ml-48 flex h-screen w-full flex-col gap-4">
      <Text variant={"h1"} className="py-3 font-serif text-[14vw]">
        About
      </Text>
      <Text variant="p" className="max-w-[40ch] break-all font-serif">
        Something something i'm dan and this is my site
      </Text>
    </section>
  )
}
