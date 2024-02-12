import { Table } from "@/components/table"
import { Text } from "@/components/text"
import { cn } from "@/lib/styling/styles"
interface WorkEntryInfoProps {
  description: string
  tech: string[]
  url: string
}

export default function WorkEntryInfo(props: WorkEntryInfoProps & { className?: string }) {
  const { description, tech, url, className } = props

  return (
    <div className={cn(className, "w-full m-auto")}>
      <div className="w-full">
        <Text variant="p" className="text-2xl font-serif">
          {description}
        </Text>
      </div>
      <div className="mt-10">
        <Table />
      </div>
    </div>
  )
}
