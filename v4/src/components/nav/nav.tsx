"use client"
import useNavbarPath from "@/lib/hooks/useNavbarPath"
import Socials from "../socials"
import { Text } from "../text/"
import { cn } from "@/lib/styling/styles"
import s from "./nav.module.css"

import siteSettings from "@/config/siteSettings"
import Link from "next/link"

export default function Nav() {
  const { page, url } = useNavbarPath()

  return (
    <nav
      id={"nav--bar"}
      className="grid w-full grid-rows-8 place-items-center place-content-center"
    >
      <Link href={url} className={cn(s.hr_line, "row-start-1 mt-10 p-6")}>
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
