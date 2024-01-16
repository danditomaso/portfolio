import Image from "next/image";

import Link from "next/link";

type SocialArray = Array<{ url: string; icon: string; name: string }>;

type SocialsProps = { socials: SocialArray };

export default function Socials(props: SocialsProps) {
  const { socials } = props;
  return (
    <div className="flex flex-col">
      {socials.map(({ url, icon, name }) => (
        <Link href={url} className="">
          <Image priority src={icon} alt={`Follow me on ${name}`} height={25} width={25} />
        </Link>
      ))}
    </div>
  );
}
