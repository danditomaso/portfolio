import Socials from "./Socials";

import siteSettings from "../config/siteSettings";
import twitterIcon from "../../../public/images/twitter-icon.svg";
import githubIcon from "../../../public/images/github-icon.svg";
import linkedInIcon from "../../../public/images/linkedin-icon.svg";

export default function Nav() {
  const { linkedInUrl, twitterUrl, githubUrl } = siteSettings.socials;

  const socials = [
    { url: githubUrl, icon: githubIcon, name: "Github" },
    { url: linkedInUrl, icon: linkedInIcon, name: "LinkedIn" },
    { url: twitterUrl, icon: twitterIcon, name: "Twitter" },
  ];
  return (
    <nav className="w-40  bg-slate-600 min-h-screen  flex items-center">
      <Socials socials={socials} />
    </nav>
  );
}
