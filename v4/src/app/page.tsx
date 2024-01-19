import Text from "./components/ui/Text";
import Nav from "./components/Nav";
import Link from "next/link";
import { SiteMapLink } from "./types";
import siteSettings from "./config/siteSettings";

function Heading() {
  return (
    <div className="flex flex-col place-content-end justify-center h-128 pl-[2vw]">
      <div className="flex gap-5 flex-col lg:mt-0 xl:mt-auto">
        <Text variant="h1">Dan Ditomaso</Text>
        <Text variant="p" className="text-bold text-[1vw]">
          {siteSettings.metadata.jobRole}
        </Text>
        <Text variant="p" className="text-[1vw]">
          {siteSettings.metadata.lookingForDescription}
        </Text>
      </div>
    </div>
  );
}

function SiteLinks(props: { links: SiteMapLink }) {
  if (!props) return null;
  const { links } = props;
  const siteMapArr = Object.values(links);

  if (!siteMapArr.length) return null;

  return siteMapArr?.map((s) => {
    return (
      <Link href={s?.url} key={s?.name}>
        <Text variant="p" className="text-[9vw] leading-tight font-extrabold">
          {s?.name}
        </Text>
      </Link>
    );
  });
}

export default function Home() {
  return (
    <main className="h-screen content--grid">
      <Nav />

      <div className="flex w-full">
        <div className="flex flex-col w-2/3 place-content-center">
          <Heading />
        </div>
        <div className="flex flex-col w-full justify-center">
          <SiteLinks links={siteSettings.siteMap} />
        </div>
      </div>
    </main>
  );
}
