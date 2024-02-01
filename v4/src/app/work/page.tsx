import { WorkItem } from "@/app/types"
import Text from "@/components/ui/Text"
import siteSettings from "@/config/siteSettings"
import { cn } from "@/lib/styles"
import Link from "next/link"

function WorkItems(props: { workItems: WorkItem[]; className?: string }) {
  const { workItems, className } = props

  const workItemsArr = workItems?.map((w) => {
    return (
      <li key={w.name} className="mb-4">
        <Link href={w?.url} className="flex flex-col">
          <Text
            variant="p"
            className="font-serif text-[7vw] font-black leading-tight"
          >
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

export default async function WorkPage() {
  return (
    <section className="flex h-screen w-full place-content-center">
      <div className="mb-96 mt-auto flex w-1/3 flex-col gap-8 self-center pl-16">
        <Text variant="h1">Work</Text>
        <Text variant="p">This is a breakdown of my working histor</Text>
        <Text variant="p">aslkdfjsaflkjsaflksa</Text>
      </div>
      <div className="lg:3/4 ml-auto flex flex-col 2xl:w-3/5">
        <WorkItems workItems={siteSettings.workItems} />
      </div>
    </section>
  )
}
