import { Text } from "@/components/text"
import siteSettings from "@/config/siteSettings"
import Link from "next/link"
import { SiteMap } from "./types"

async function SiteMenu(props: { links: SiteMap }) {
  if (!props) return null
  const { links } = props
  const siteMapArr = Object.values(links)

  if (!siteMapArr.length) return null

  return siteMapArr?.map((s) => {
    return (
      <Link href={s?.url} key={s?.name} className="w-full">
        <Text variant="p" className="font-serif text-[9vw] font-extrabold leading-tight">
          {s?.name}
        </Text>
      </Link>
    )
  })
}

export default async function Home() {
  return (
    <section className="ml-48 flex h-full w-full place-content-center place-items-center">
      <div className="flex w-1/3 flex-col gap-8 self-center pl-16">
        <Text variant="h1">{siteSettings.metadata.title}</Text>
        <Text variant="p" className="">
          {siteSettings.metadata.jobRole}
        </Text>
        <Text variant="p" className="max-w-[50ch] text-balance font-extralight tracking-wider">
          {siteSettings.metadata.description}
        </Text>
      </div>
      <div className="lg:3/4 ml-auto flex flex-col place-content-center items-start 2xl:w-3/5">
        <SiteMenu links={siteSettings.siteMap} />
      </div>
    </section>
  )
}
