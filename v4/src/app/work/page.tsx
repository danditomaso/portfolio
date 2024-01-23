import { WorkItem } from "@/app/types";
import Text from "@/components/ui/Text";
import TextBlock from "@/components/ui/TextBlock";
import siteSettings from "@/config/siteSettings";
import Link from "next/link";

function WorkItems(props: { workItems: WorkItem[] }) {
  const { workItems } = props;

  const workItemsArr = workItems?.map((w) => {
    return (
      <li key={w.name} className="mb-4">
        <Link href={w?.url} className="flex flex-col gap-2">
          <Text variant="p" className="text-9xl font-extrabold">
            {w?.name}
          </Text>
          <Text variant="p" className="text-md">
            {w.description}
          </Text>
        </Link>
      </li>
    );
  });
  return <ul className="py-[10%]">{workItemsArr}</ul>;
}

export default async function Work() {
  return (
    <div className="flex w-full h-full gap-10 flex-shrink-0">
      <TextBlock title="Work" line1="This is a breakdown of my working history" line2="alasjdfslkaf" className="flex w-1/3" />
      <WorkItems workItems={siteSettings.workItems} />
    </div>
  );
}
