import { cn } from "@/libs/utils";
import Text from "./Text";
import Image, { StaticImageData } from "next/image";

type WorkItemDetailsProps = {
  alt: string;
  link: string;
  imgSrc: string | StaticImageData;
  title: string;
  description: string;
  year: string;
  className?: string;
} & React.ImgHTMLAttributes<HTMLImageElement>;

function WorkItemQuote(props: {
  title: string;
  body: string;
  children?: React.ReactNode;
  className?: string;
}) {
  const { title, body, className } = props;
  return (
    <div className="flex flex-col gap-2.5 xs:py-32 lg:py-44">
      <div
        className={cn(
          className,
          "flex flex-auto gap-2.5 xs:flex-col lg:flex-row",
        )}
      >
        <Text variant="p" className="w-[27%]">
          {title}
        </Text>
        <Text variant="h2">{body}</Text>
      </div>
    </div>
  );
}
function WorkItemDetails(props: WorkItemDetailsProps) {
  const { alt, link, imgSrc, title, description, year, className } = props;

  return (
    <div className={cn(className, "w-full rounded-xl")}>
      <a href={link} className="rounded-[inherit]">
        <div className="flex h-full flex-col place-content-center place-items-center rounded-[inherit] transition duration-200 ease-in">
          <Image
            style={{
              imageRendering: "auto",
            }}
            src={imgSrc}
            alt={alt}
          />
          <div className="flex w-full flex-1 items-start gap-2.5 pt-3">
            {[title, description, year].map((item, idx) => (
              <Text
                variant="p"
                className={cn(
                  {
                    ["ml-auto text-center"]: idx === 2,
                  },
                  "w-full",
                )}
              >
                {idx === 2 ? `(${item})` : item}
              </Text>
            ))}
            {/* <Text variant="p" className="w-full">
              {title}
            </Text>
            <Text variant="p" className="w-full">
              {description}
            </Text>
            <Text variant="p" className="ml-auto w-full text-end">
              ({year})
            </Text> */}
          </div>
        </div>
      </a>
    </div>
  );
}

function WorkSectionHeading(props: { title: string; className?: string }) {
  const { className, title = "Selected Work" } = props;
  return (
    <div className={cn(className, "flex pb-12 text-lg")}>
      <Text variant="p">{title}</Text>
      <Text variant="p" className={cn("ml-auto")}>
        Discover ↓
      </Text>
    </div>
  );
}

export default function Work(props: { children: React.ReactNode }) {
  const { children } = props;
  return <section>{children}</section>;
}

Work.Quote = WorkItemQuote;
Work.Item = WorkItemDetails;
Work.Heading = WorkSectionHeading;
