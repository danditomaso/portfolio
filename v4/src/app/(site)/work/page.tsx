import { Text } from "@/components/text"
import { getAllWorkEntries } from "@/lib/mdx"
// import { getAllWorkEntries } from "@/lib/mdx"
import { cn } from "@/lib/styling/styles"
import Link from "next/link"
import { MDXFrontmatter } from "../types"

function WorkItemsList(props: {
  workItems: MDXFrontmatter[]
  className?: string
}) {
  const { workItems, className } = props

  const workItemsArr = workItems?.map((w) => {
    return (
      <li key={w?.slug as string} className="mb-4">
        <Link href={`/work/${w.slug}`} className="flex flex-col">
          <Text variant="p" className="font-serif text-[7vw] font-black leading-tight">
            {w?.title as string}
          </Text>
          <Text variant="p" className="font-light capitalize">
            {w.tech.slice(0, 2).join(", ")}
          </Text>
        </Link>
      </li>
    )
  })
  return <ul className={cn(className)}>{workItemsArr}</ul>
}

export default async function WorkListPage() {
  const listOfWork = await getAllWorkEntries()

  return (
    <section className="ml-48 flex h-screen w-full place-content-center">
      <div className="mb-96 mt-auto flex w-1/3 flex-col gap-8 self-center pl-16">
        <Text variant="h1">Work</Text>
        <Text variant="p">This is a breakdown of my working history.</Text>
        <Text variant="p">some other text</Text>
      </div>
      <div className="lg:3/4 ml-auto flex flex-col 2xl:w-3/5">
        <WorkItemsList workItems={listOfWork} />
      </div>
    </section>
  )
}
