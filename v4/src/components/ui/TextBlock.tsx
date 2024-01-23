import { cn } from "@/lib/styles";
import Text from "./Text";

export default function TextBlock({ title, line1, line2, className }: { title: string; line1: string; line2?: string; className?: string }) {
  return (
    <div className={cn(className, "flex flex-col place-content-center pt-64")}>
      <Text variant="h1">{title}</Text>
      <div className="flex flex-col mt-7 gap-5 place-content-center">
        <Text variant="p" className="font-extralight text-md max-w-[72ch]">
          {line1}
        </Text>
        {line2 ? (
          <Text variant="p" className="font-extralight text-md max-w-[50ch]">
            {line2}
          </Text>
        ) : null}
      </div>
    </div>
  );
}
