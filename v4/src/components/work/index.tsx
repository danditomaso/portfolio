// import ArticleMeta from "./meta"
// import ArticleTitle from "./title"
import WorkItemTitle from "./mdx/title"

interface WorkItemProps {
  title: string
}

function WorkItem(props: WorkItemProps) {
  const { title } = props
  return (
    <>
      <div>
        {/* <ArticleMeta date={date} author={author} tags={tags} readingTime={readingTime} /> // */}

        <WorkItemTitle title={title} />
        {/* <WorkItem */}

        {/* <WorkItemContent source={source} /> */}
      </div>
    </>
  )
}

export default WorkItem
