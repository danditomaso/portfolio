import { Text } from "@/components/text"
import { getAllWorkEntries } from "@/lib/mdx"
// import { getAllWorkEntries } from "@/lib/mdx"
import { cn } from "@/lib/styling/styles"
import Link from "next/link"
import { MDXFrontmatter } from "../types"

function WorkItemsList(props: {
  workItems: MDXFrontmatter[]
  className?: string
}) {
  const { workItems, className } = props

  const workItemsArr = workItems?.map((w) => {
    return (
      <li key={w?.slug as string} className="mb-4">
        <Link href={`/work/${w.slug}`} className="flex flex-col">
          <Text variant="p" className="font-serif text-[7vw] font-extrabold leading-[1em]">
            {w?.title as string}
          </Text>
          {w.tech.length > 0 && (
            <div className="flex gap-2">
              <Text variant="span">-</Text>
              <Text variant="p" className="font-light uppercase tracking-widest">
                {w.tech.slice(0, 3).join(", ")}
              </Text>
            </div>
          )}
        </Link>
      </li>
    )
  })
  return <ul className={cn(className)}>{workItemsArr}</ul>
}

export default async function WorkListPage() {
  const listOfWork = await getAllWorkEntries()

  return (
    <section className="flex h-full gap-16 w-full">
      <div className="flex w-1/2 place-content-center">
        <div className="m-auto gap-8 flex-flex-col">
          <Text variant="h1" className="tracking-widest">
            Work
          </Text>
          <Text variant="p" className="max-w-[60ch] text-balance mt-10">
            I wanted to highlight several projects which I think best demonstrates the depth of my
            skills and experience. This selection of projects encompasses a variety of technologies.
            {/* As a frontend web developer, my portfolio demonstrates a fusion of creativity and
          technical prowess in crafting engaging, exceptional user focused experiences. Through
          projects utilizing technologies like [mention specific technologies], I've tackled diverse
          challenges, showcasing my versatility. My hands-on design and development experience,
          combined with effective cross-functional collaboration, underscores my commitment to
          delivering high-quality web applications. Explore my portfolio for a diverse showcase of
          projects highlighting my passion for impactful digital experiences. */}
          </Text>
          {/* <Text variant="p">
          Whether it's optimizing user experiences, implementing innovative features, or
          collaborating seamlessly with cross-functional teams, my portfolio reflects a commitment
          to delivering high-quality solutions that not only meet but exceed user expectations.
          Explore the diverse range of projects below to witness my dedication to building
          compelling and user-centric web applications.
        </Text> */}
        </div>
      </div>
      <div className="flex flex-col w-1/2 mt-[10%]">
        <WorkItemsList workItems={listOfWork} />
      </div>
    </section>
  )
}
