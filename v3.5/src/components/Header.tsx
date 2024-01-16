import { cn } from "@/libs/utils";
import Text from "./ui/Text";
import CustomLink from "./ui/CustomLink";
import siteSettings from "@/config/siteSettings";

interface HeaderProps {
  className?: string;
}
export default function Header(props: HeaderProps) {
  const { className } = props;
  const { links } = siteSettings;
  return (
    <header className={cn("h-[90px]", className)}>
      <div className="flex flex-auto items-center gap-2.5">
        <div className="mr-56">
          <Text variant="p">Dan</Text>
        </div>
        <div className="xs:hidden  lg:block">
          <Text variant="p">{siteSettings.cta}</Text>
        </div>
        <nav className="ml-auto flex gap-1 text-end">
          <CustomLink href={links.projects.url}>
            <Text variant="p">{links.projects.label},</Text>
          </CustomLink>
          <CustomLink href={links.about.url}>
            <Text variant="p">{links.about.label}</Text>
          </CustomLink>
        </nav>
        <div className="ml-32 text-end xs:hidden lg:block">
          <CustomLink href={"mailto:dan.ditomaso@gmail.com"}>
            <Text variant="p">dan.ditomaso@gmail.com</Text>
          </CustomLink>
        </div>
      </div>
    </header>
  );
}
