import Image from "next/image";

import Link from "next/link";
import { NameUrlPair } from "../types";
import { cn } from "@/lib/styles";

type SocialArray = Array<NameUrlPair & { icon: string }>;

type SocialsProps = { socials: SocialArray; iconSize?: number; className?: string };

export default function Socials(props: SocialsProps) {
  const { socials, iconSize = 28, className } = props;
  return (
    <div className={cn(className, "flex flex-col m-auto gap-4")}>
      {socials.map(({ url, icon, name }) => (
        <Link href={url} key={url}>
          <Image priority src={icon} alt={`Follow me on ${name}`} height={iconSize} width={iconSize} />
        </Link>
      ))}
    </div>
  );
}
