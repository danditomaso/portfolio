import { headers } from "next/headers";

import Socials from "./Socials";
import Text from "./ui/Text";

import siteSettings from "@/config/siteSettings";
import Link from "next/link";

async function getValidPathname(pathname: string) {
  // if (pathname === "/" || pathname === "") return "home";
  // siteSettings.siteMap[""];
  // const [_, path] = pathname.split("/");
  // console.log(path);
  // const val = siteMap[""] ? path : "";
  // console.log("val", val);
  // return val;
}

export default async function Nav() {
  const heads = headers();
  const pathname = heads.get("next-url");
  const validPathName = await getValidPathname(pathname ?? "");

  return (
    <nav id="nav--bar" className="place-content-center place-items-center grid grid-rows-6">
      <Link href="/" className="p-3 row-start-2">
        <Text variant={"p"} className={"[writing-mode:vertical-lr] rotate-180 text-[1.5vw] capitalize"}>
          Home
        </Text>
      </Link>
      <div className="border-secondary-color border-[.8px] w-[1px] h-24 rounded-full row-start-3 -mt-20" />
      <Socials socials={siteSettings?.socials} iconSize={32} className="row-start-5" />
    </nav>
  );
}
