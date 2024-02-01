import Text from "@/components/ui/Text"

export default async function AboutPage() {
  return (
    <section className="flex h-full w-full flex-col">
      <Text variant={"h1"} className="py-3 font-serif text-[14vw]">
        About
      </Text>
      <Text variant="p" className="max-w-[40ch] break-all font-serif">
        Something something i'm dan and this is my site
      </Text>
    </section>
  )
}
