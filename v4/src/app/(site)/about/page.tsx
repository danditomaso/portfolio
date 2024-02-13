import { Text } from "@/components/text"
export default async function AboutPage() {
  return (
    <section className="flex h-screen w-full flex-col gap-4">
      {/* <Text variant={"h1"} className="py-3 text-[14vw]"> */}
      <Text variant={"h1"} className="text-[10vw]">
        About
      </Text>
      <Text variant="p" className="max-w-[30ch] break-all quote capitalize">
        Something something i'm dan and this is my site
      </Text>
    </section>
  )
}
