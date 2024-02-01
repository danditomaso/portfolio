import Text from "@/components/ui/Text"
import siteSettings from "@/config/siteSettings"
export default async function WorkitemPage() {
  const { description, name } = siteSettings.workItems[0]

  return (
    <section className="flex h-full w-full flex-col place-items-center text-balance">
      <div className="flex h-[95vh] w-full flex-col place-items-center bg-secondary-color px-8 py-6">
        <Text
          variant="h1"
          className="mb-96 mt-auto font-serif text-[14vw] capitalize leading-tight text-primary-color"
        >
          {name}
        </Text>
      </div>
      <div className="m-auto w-[70ch] pt-[15vh] text-lg">
        <Text variant="p">{description}</Text>
        {/* <div>
          {["tech stack", "responsibilities", "site"].map((header) => (
            <Text
              key={header.toString()}
              variant="p"
              className="text-sm uppercase underline underline-offset-2"
            >
              {header}
            </Text>
          ))}
        </div> */}
      </div>
    </section>
  )
}
