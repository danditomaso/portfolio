interface RowProps {
  children: React.ReactNode
}

function Row({ children }: RowProps) {
  return <div className="flex flex-wrap -mx-4">{children}</div>
}

export default Row
