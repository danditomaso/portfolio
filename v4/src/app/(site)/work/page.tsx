import type { Work } from "@/app/(site)/types"
import { Text } from "@/components/text"
import siteSettings from "@/config/siteSettings"
import { cn } from "@/lib/styling/styles"
import Link from "next/link"

function WorkItemsList(props: { workItems: Work[]; className?: string }) {
  const { workItems, className } = props

  const workItemsArr = workItems?.map((w) => {
    return (
      <li key={w.name} className="mb-4">
        <Link href={w?.url} className="flex flex-col">
          <Text variant="p" className="font-serif text-[7vw] font-black leading-tight">
            {w?.name}
          </Text>
          <Text variant="p" className="font-light">
            {w.skills.slice(0, 2).join(", ")}
          </Text>
        </Link>
      </li>
    )
  })
  return <ul className={cn(className)}>{workItemsArr}</ul>
}

export default async function WorkListPage() {
  return (
    <section className="ml-48 flex h-screen w-full place-content-center">
      <div className="mb-96 mt-auto flex w-1/3 flex-col gap-8 self-center pl-16">
        <Text variant="h1">Work</Text>
        <Text variant="p">This is a breakdown of my working history.</Text>
        <Text variant="p">some other text</Text>
      </div>
      <div className="lg:3/4 ml-auto flex flex-col 2xl:w-3/5">
        <WorkItemsList workItems={siteSettings.work} />
      </div>
    </section>
  )
}
