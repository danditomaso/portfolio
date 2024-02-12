import type { WorkEntryProps } from ".."

type WorkEntryContentProps = Omit<WorkEntryProps, "title" | "meta">

function WorkEntryContent({ content }: WorkEntryContentProps) {
  return <div className="w-full max-w-[135ch]">{content}</div>
}
export default WorkEntryContent
