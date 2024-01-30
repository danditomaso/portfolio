import Text from "@/components/ui/Text"
import Link from "next/link"
import { SiteMapLink } from "./types"
import siteSettings from "@/config/siteSettings"
import TextBlock from "@/components/ui/TextBlock"

async function SiteMenu(props: { links: SiteMapLink }) {
  if (!props) return null
  const { links } = props
  const siteMapArr = Object.values(links)

  if (!siteMapArr.length) return null

  return siteMapArr?.map((s) => {
    return (
      <Link href={s?.url} key={s?.name}>
        <Text
          variant="p"
          className="font-serift text-9vw font-extrabold leading-tight"
        >
          {s?.name}
        </Text>
      </Link>
    )
  })
}

export default async function Home() {
  return (
    <section className="flex h-full w-full">
      <div className="fixed left-[15%] top-[60%]">
        <TextBlock
          title={siteSettings.metadata.title}
          line1={siteSettings.metadata.jobRole}
          line2={siteSettings.metadata.description}
          className="font-light"
        />
      </div>
      <div className="ml-auto flex w-1/2 flex-col place-content-center p-[2%]">
        <SiteMenu links={siteSettings.siteMap} />
      </div>
    </section>
  )
}
