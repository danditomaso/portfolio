import Text from "@/components/ui/Text"
import siteSettings from "@/config/siteSettings"
export default async function WorkitemPage({ params }) {
  console.log(params)
  const { description, name } = siteSettings.workItems[0]

  return (
    <section className="flex h-full w-full flex-col place-items-center text-balance">
      <div className="flex h-screen w-full flex-col place-items-center bg-secondary-color px-8 py-6">
        <Text
          variant="h1"
          className="mb-36 mt-auto font-serif text-[16vw] font-extrabold capitalize leading-tight text-primary-color"
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
