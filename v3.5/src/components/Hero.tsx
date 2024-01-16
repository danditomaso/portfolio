import { cn } from "@/libs/utils";
import Text from "./ui/Text";
import siteSettings from "@/config/siteSettings";

export default function Hero(props: { className?: string }) {
  const { className } = props;
  return (
    <>
      <div className={cn(className)}>
        <Text variant="h1">{siteSettings.title}</Text>
        <Text variant="h1">{siteSettings.jobRole}</Text>
      </div>
    </>
  );
}
