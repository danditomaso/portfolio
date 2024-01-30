import Image from "next/image"

import githubIcon from "../../public/assets/icons/github-icon.svg"
import Link from "next/link"
import { SocialItem } from "../app/types"
import { cn } from "@/lib/styles"

export type SocialsProps = {
  socials: SocialItem[]
  iconSize?: number
  className?: string
}

export default function Socials(props: SocialsProps) {
  const { socials, iconSize = 28, className } = props
  return (
    <div className={cn(className, "m-auto flex flex-col gap-4")}>
      {socials.map(({ url, icon, name }) => (
        <Link href={url} key={url}>
          <Image
            priority
            src={icon}
            alt={`Follow me on ${name}`}
            height={iconSize}
            width={iconSize}
          />
        </Link>
      ))}
    </div>
  )
}
