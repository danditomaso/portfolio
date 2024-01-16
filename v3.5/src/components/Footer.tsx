import { cn } from "@/libs/utils";
import Text from "./ui/Text";
import Heading from "./Hero";
import Socials from "./Socials";
import BackToTop from "./BackToTop";

export default function Footer(props: { className?: string }) {
  const { className } = props;

  return (
    <footer
      className={cn(
        className,
        "text-body mt-auto flex w-full flex-col gap-2.5",
      )}
    >
      <Heading />
      <div className="flex items-center justify-between">
        <Socials />
        <BackToTop />
        <div>
          <Text variant="p">© {new Date().getFullYear()} Dan Ditomaso</Text>
        </div>
      </div>
    </footer>
  );
}
