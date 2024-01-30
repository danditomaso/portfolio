import { cn } from "@/lib/styles"
import Text from "./Text"

export default function TextBlock({
  title,
  line1,
  line2,
  className,
}: {
  title: string
  line1: string
  line2?: string
  className?: string
}) {
  return (
    <div className={cn(className, "flex flex-col place-content-center")}>
      <Text variant="h1">{title}</Text>
      <div className="mt-7 flex flex-col place-content-center gap-5">
        <Text variant="p" className="text-md max-w-[72ch] font-extralight">
          {line1}
        </Text>
        {line2 ? (
          <Text variant="p" className="text-md max-w-[50ch] font-extralight">
            {line2}
          </Text>
        ) : null}
      </div>
    </div>
  )
}
