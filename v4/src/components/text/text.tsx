import { cn } from "@/lib/styling/styles"

const styleMap = {
  h1: "font-sans font-bold text-4xl leading-tight",
  h2: "font-sans text-2xl",
  h3: "font-sans text-1xl",
  h4: "font-sans text-xl",
  h5: "font-sans text-lg",
  p: "font-sans text-md",
}

type TextProps = {
  variant: keyof typeof styleMap
  children: React.ReactNode
  className?: string
}
export default function Text({ variant, className = "", children }: TextProps) {
  const Variant = variant

  return <Variant className={cn(styleMap[variant], className)}>{children}</Variant>
}
