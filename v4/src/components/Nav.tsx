"use client"
import Socials from "./Socials"
import Text from "./ui/Text"

import siteSettings from "@/config/siteSettings"
import { usePathname, useParams } from "next/navigation"
import Link from "next/link"

// async function getValidPathname(pathname: string) {
//   console.log(pathname);
//   if (pathname === undefined || pathname === null) return "";
//   if (pathname === "/" || pathname === "") return "home";

//   const { siteMap } = siteSettings;
//   const [_, path] = pathname.split("/");
//   console.log(siteMap[path]);
//   const val = siteMap[path] ? path : "";
//   return val;
// }

export default function Nav() {
  const path = usePathname()

  console.log({ path })

  // const validPathName = await getValidPathname(rawPath);

  // const headersToValidate = { referrer, path };
  // console.log(useValidation(headersSchema, headersToValidate));

  // if (useValidation(headersSchema, headersToValidate) === false) {
  //   return null;
  // }

  return (
    <nav
      id="nav--bar"
      className="fixed bottom-0 left-0 top-0 grid w-[6%] grid-rows-6 place-content-center place-items-center px-6"
    >
      <Link href={"/"} className="row-start-2 mt-8">
        <Text
          variant={"p"}
          className={
            "rotate-180 text-lg font-medium capitalize tracking-wide [writing-mode:vertical-lr]"
          }
        >
          {path.toString().split("/")[1]}
        </Text>
      </Link>
      <div className="row-start-3 h-36 w-[1px] rounded-full border-[.8px] border-secondary-color" />
      <Socials
        socials={siteSettings?.socials}
        iconSize={32}
        className="row-start-5"
      />
    </nav>
  )
}
