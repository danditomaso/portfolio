import WorkItemTitle from "@/components/work/title"
import WorkItemInfo from "@/components/work/info"
import WorkItemContent from "@/components/work/content"
import type { MDXParsedData } from "@/app/(site)/types"

function WorkEntry(props: MDXParsedData) {
  const { content, frontmatter } = props
  const { title, description, tech, siteUrl } = frontmatter

  return (
    <>
      <div className="h-screen w-full">
        {/* <ArticleMeta date={date} author={author} tags={tags} readingTime={readingTime} /> // */}
        <WorkItemTitle title={title as string} />
        <div className="w-full m-auto max-w-[135ch]">
          <WorkItemInfo description={description as string} tech={tech} url={siteUrl} />
          <WorkItemContent content={content} />
        </div>
      </div>
    </>
  )
}

export default WorkEntry
