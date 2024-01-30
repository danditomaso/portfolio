import { WorkItem } from "@/app/types"
import Text from "@/components/ui/Text"
import TextBlock from "@/components/ui/TextBlock"
import siteSettings from "@/config/siteSettings"
import { cn } from "@/lib/styles"
import Link from "next/link"

function WorkItems(props: { workItems: WorkItem[]; className?: string }) {
  const { workItems, className } = props

  const workItemsArr = workItems?.map((w) => {
    return (
      <li key={w.name} className="mb-5">
        <Link href={w?.url} className="flex flex-col gap-4">
          <Text variant="p" className="font-serif text-9xl font-extrabold">
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
    <section className="flex h-full w-full">
      <div className="fixed left-[15%] top-[60%]">
        <TextBlock
          title="Work"
          line1="This is a breakdown of my working history"
          line2="alasjdfslkaf"
          className=""
        />
      </div>
      <div className="ml-auto w-1/2 p-[7%]">
        <WorkItems workItems={siteSettings.workItems} />
      </div>
    </section>
  )
}
