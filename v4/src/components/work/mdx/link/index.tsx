import Link from "next/link"

interface MDXLinkProps {
  children: React.ReactNode
  href: string
  target?: string
}

function MDXLink({ children, href, target = "_blank" }: MDXLinkProps) {
  let title = ""
  if (typeof children === "object") {
    title = children.props?.alt
  } else {
    title = children
  }

  return (
    <Link href={href} alt={title} title={title} target={target} rel="noreferrer">
      {children}
    </Link>
  )
}

export default MDXLink
