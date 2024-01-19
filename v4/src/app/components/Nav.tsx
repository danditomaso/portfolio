import Socials from "./Socials";
import Text from "./ui/Text";

import siteSettings from "../config/siteSettings";

export default function Nav() {
  return (
    <nav className="py-12  min-h-screen flex-col place-content-center place-items-center nav--bar grid grid-rows-12">
      <Text variant={"p"} className={"[writing-mode:vertical-lr] rotate-180 row-start-3 text-[0.7vw]"}>
        Home
      </Text>
      <div className="border-dark-brand border-[.8px] h-24 rounded-full row-start-4" />
      <Socials socials={siteSettings?.socials} iconSize={32} className="row-start-11" />
    </nav>
  );
}
