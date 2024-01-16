import Text from "@/components/ui/Text";
import Work from "@/components/ui/Work";
import computer from "../../../public/computer.jpg";
import ContactButton from "@/components/ui/ContactButton";

function ProjectHero() {
  return (
    <>
      <Text variant="h1" className="pb-[30px]">
        Selected Work
      </Text>
      <Text variant="h2" className="w-2/4 pb-10">
        Take a look at some of the projects I’ve completed. The apps vary from
        lifestyle to tech and design companies.
      </Text>
    </>
  );
}
export default function Projects() {
  return (
    <>
      <div className="pb-28">
        <ProjectHero />
      </div>
      <Work>
        <Work.Item
          alt={"a computer"}
          description="123"
          link="alsdfjsa"
          imgSrc={computer}
          title="Test"
          year="2022"
          className="mb-[70px]"
        />
        <Work.Item
          alt={"a computer"}
          description="123"
          link="alsdfjsa"
          imgSrc={computer}
          title="Test"
          year="2022"
          className="mb-[70px]"
        />
        <Work.Quote
          title="(002)"
          body="Looking to grow your business through the power of great digital design? Reach out to get the conversation started about your digital design needs."
        >
          <ContactButton />
        </Work.Quote>
      </Work>
    </>
  );
}
