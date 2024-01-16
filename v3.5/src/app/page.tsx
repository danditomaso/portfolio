import Description from "@/components/Description";
import Hero from "@/components/Hero";
import ContactButton from "@/components/ui/ContactButton";
import Work from "@/components/ui/Work";
import Text from "@/components/ui/Text";
import computer from "../../public/computer.jpg";
import { cn } from "@/libs/utils";

export default function Home() {
  return (
    <>
      <Hero className="md:pb-[10px] lg:pb-8" />
      <Description />
      <div className="flex flex-col md:pb-32 lg:pb-[165px]">
        <ContactButton />
      </div>
      <Work>
        <div className={"flex pb-4 text-lg"}>
          <Text variant="p">(Selected Work)</Text>
          <Text variant="p" className={"ml-auto"}>
            Discover ↓
          </Text>
        </div>
        <Work.Item
          alt={"a computer"}
          description="123"
          link="alsdfjsa"
          imgSrc={computer}
          title="Test"
          year="2022"
        />
        <Work.Quote
          title="(001)"
          body="As a digital designer and art director I help companies and organisations around the world connect with their audience and grow their business."
        />
        <Work.Item
          alt={"a computer"}
          description="123"
          link="alsdfjsa"
          imgSrc={computer}
          title="Test"
          year="2022"
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
