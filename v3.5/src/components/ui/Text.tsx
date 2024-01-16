import { cn } from "@/libs/utils";

const stylesMap = {
  h1: "font-bold uppercase xs:text-4xl xs:leading-[35.1px] md:text-[71px] md:leading-[63.9px] -tracking-[4px] lg:text-[102px] lg:leading-[91.8px] xl:text-[123px] xl:leading-[110.7px]",
  h2: "font-medium lg:text-[35px] lg:leading-[47px] lg:-tracking-[1.3px] xl:text-[40px] lg:leading-[47px] -tracking-[1.3px]",
  h3: "text-2xl font-bold",
  p: "text-lg font-medium leading-[24px] -tracking-[0.5px]",
  span: "",
};

export default function Text(props: {
  variant: keyof typeof stylesMap;
  children: React.ReactNode;
  className?: string;
}) {
  const { children, variant, className } = props;

  const Variant = props.variant;

  return (
    <Variant className={cn(className, stylesMap[variant] ?? stylesMap.h3)}>
      {children}
    </Variant>
  );
}
