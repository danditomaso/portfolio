"use client";
import useNavbarPath from "@/lib/hooks/useNavbarPath";
import Socials from "../socials";
import { Text } from '../text'
import { cn } from "@/lib/styling/styles";
import type siteMeta from "@/siteMetadata";
import Link from "next/link";
import loadConfig from "next/dist/server/config";

// function SiteNavList({ links, renderLink }) {
//   if (!links) return null
//   if (links.length === 0) return <div>No links found</div>
//   return (
//     <nav>
//       <ul>
//         {links.map((s) => {
//           return (
//             <li key={s?.name}>
//               {renderLink(s)}
//             </li>
//           )
//         })}
//       </ul>
//     </nav>
//   )
// }

type SiteNavProps = {
  socialMetadata: (typeof siteMeta)["socials"];
  className?: string;
};

export default function SiteNav({ socialMetadata, className, ...rest }: SiteNavProps) {
  const { page, url } = useNavbarPath();
  console.log(page);

  const isHomePage = page === 'home'

  return (
    <aside
      className={cn(
        "w-full h-auto pt-[5%] flex gap-12 md:w-[10%] ml-16 md:ml-0 md:mt-16 md:flex-col md:place-items-center",
      )}
    >
      {isHomePage ? (
        <Socials
          socials={socialMetadata}
          className="md:-rotate-90 flex items-center gap-6"
        />
      ) :
        (<Link href={url} className={""}>
          <Text
            variant={"p"}
            className={"uppercase md:-rotate-90"
            }
          >

            {page}
          </Text>
        </Link>)}

      <div className="md:h-40 md:w-px w-20 sm:w-40 h-px bg-secondary-color self-center md:self-auto" />
    </aside>
  );
}
