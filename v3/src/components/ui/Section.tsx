import { cn } from "@/libs/style";

type SectionProps = {
  title: string;
  extraClasses?: {
    containerClass?: string;
    childrenClass?: string;
    titleClass?: string;
  };
  children?: React.ReactNode;
};

function Section({ title, extraClasses = {}, children }: SectionProps) {
  const { containerClass, titleClass, childrenClass } = extraClasses;
  return (
    <section className={cn("flex", containerClass)}>
      <h3 className={cn("text-gray-800 lg:text-7xl md:text-6xl xs:text-5xl text-end leading-none font-bold vertical-writing-rl rotate-180 mr-2", titleClass)}>
        {title}
      </h3>
      <div className={cn(childrenClass)}>{children}</div>
    </section>
  );
}

export default Section;
