import { Text } from "@/components/text"

export default function WorkItemTitle(props: { title: string }) {
  const { title } = props
  return (
    <div className="flex h-[95vh] w-full flex-col place-items-center bg-secondary-color px-8 py-6">
      <Text
        variant="h1"
        className="mb-96 mt-auto font-serif text-[14vw] capitalize leading-tight text-primary-color"
      >
        {title}
      </Text>
    </div>
  )
}
