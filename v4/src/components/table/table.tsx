interface TableProps {
  headings: string[]
  className?: string
}
export default function Table(props: { className?: string }) {
  return (
    <div className="grid grid-cols-2 w-full">
      {["Tech", "URL"].map((header) => (
        <>
          <div className="bg-red-700 w-full font-bold text-center">{header}</div>
        </>
      ))}
      <div>abc123</div>
    </div>
  )
}
