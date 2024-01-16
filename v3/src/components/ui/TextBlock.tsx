import { cn } from "@/libs/style";

interface HeadlineProps {
  title: string;
  component: (React.ElementType & "h2") | "h3" | "h4" | "h5" | "h6";
  titleClass?: string;
}

export function BodyText({ content, className }: { content: string; className?: string }) {
  return <p className={cn(className)}>{content}</p>;
}

export function Title({ title, component, titleClass }: HeadlineProps) {
  const Component = component;
  return <Component className={cn("mb-3", titleClass)}>{title}</Component>;
}
