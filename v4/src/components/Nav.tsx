import Socials from "./Socials";
import Text from "./ui/Text";

import { headers } from "next/headers";
import siteSettings from "@/config/siteSettings";
import { headersSchema, useValidation } from "@/lib/validation";
import Link from "next/link";
import { redirect } from "next/dist/server/api-utils";

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

export default async function Nav() {
  const heads = headers();
  const referrer = heads.get("referer");
  const path = heads.get("next-url");
  console.log(referrer, path);

  // const validPathName = await getValidPathname(rawPath);
  // console.log(validPathName);

  const headersToValidate = { referrer, path };
  console.log(useValidation(headersSchema, headersToValidate));

  // if (useValidation(headersSchema, headersToValidate) === false) {
  //   return null;
  // }

  return (
    <nav id="nav--bar" className="place-content-center place-items-center grid grid-rows-6">
      <Link href={"/"} className="p-3 row-start-2">
        <Text variant={"p"} className={"[writing-mode:vertical-lr] rotate-180 text-[1.3vw] font-extralight capitalize"}>
          {referrer?.split("/")[1]}
        </Text>
      </Link>
      <div className="border-secondary-color border-[.8px] w-[1px] h-24 rounded-full row-start-3 -mt-20" />
      <Socials socials={siteSettings?.socials} iconSize={32} className="row-start-5" />
    </nav>
  );
}
