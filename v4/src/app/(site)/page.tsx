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
    <section className="flex h-full gap-16 w-full place-content-center place-items-center">
      <div className="flex w-1/2 flex-col self-center px-16">
        <Text variant="h1">{siteSettings.siteMetadata.title}</Text>
        <Text variant="p" className="">
          {siteSettings.siteMetadata.jobRole}
        </Text>
        <Text variant="p" className="max-w-[50ch] text-balance font-extralight tracking-wider">
          {siteSettings.siteMetadata.description}
        </Text>
      </div>
      <div className="w-1/2 ml-auto flex flex-col place-content-center items-start">
        <SiteMenu links={siteSettings.siteMenu} />
      </div>
    </section>
  )
}
