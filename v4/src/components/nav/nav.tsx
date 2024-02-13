"use client"
import useNavbarPath from "@/lib/hooks/useNavbarPath"
import Socials from "../Socials"
import { Text } from "../text/"

import siteSettings from "@/config/siteSettings"
import Link from "next/link"

export default function Nav() {
  const { page, url } = useNavbarPath()

  return (
    <nav
      id="nav--bar"
      className="fixed bottom-0 left-0 top-0 grid w-[6%] grid-rows-8 place-content-center place-items-center"
    >
      <Link href={url} className="hr-line row-start-1 mt-10 p-6">
        <Text
          variant={"p"}
          className={
            "flex rotate-180 text-[14px] font-medium tracking-[5px] uppercase [writing-mode:vertical-lr]"
          }
        >
          {page}
        </Text>
      </Link>
      <Socials socials={siteSettings?.socials} iconSize={32} className="row-start-7" />
    </nav>
  )
}
