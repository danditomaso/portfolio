import { cn } from "@/libs/utils";
import Link from "next/link";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function CustomLink({ href, children, className }: LinkProps) {
  return (
    <Link
      href={href}
      referrerPolicy="strict-origin-when-cross-origin"
      className={cn(className, "w-full")}
    >
      {children}
    </Link>
  );
}
