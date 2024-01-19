import { cn } from "@/lib/styles";

const styleMap = {
  h1: "font-sans font-bold text-[2vw]",
  h2: "font-sans text-2xl",
  h3: "font-sans text-2xl",
  p: "font-sans text-md",
};

type TextProps = {
  variant: keyof typeof styleMap;
  children: string;
  className?: string;
};
export default function Text({ variant, className = "", children }: TextProps) {
  const Variant = variant;

  return <Variant className={cn(styleMap[variant], className)}>{children}</Variant>;
}
