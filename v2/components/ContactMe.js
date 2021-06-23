import { Section } from "./Section";
import { TextBlock } from "./TextBlock";

export const ContactMe = () => {
  const TEXT_BLOCK_EXTRA_CLASS = {
    containerClass: "flex flex-col justify-center h-full w-[80%]",
    titleClass: "w-full ",
    bodyClass: "w-2/3 ml-8 text-3xl",
  };

  const SECTION_EXTRA_CLASS = {
    containerClass: "gap-0",
  };

  const renderColumn1 = () => {
    return (
      <div className="bg-contactMeBlue text-white h-full w-full flex items-center flex-grow">
        <TextBlock
          content={
            "I am currently employed full time as a Frontend Developer who's building awesome things. If you have an opportunity that you would like to share I'd love to hear from you!"
          }
          extraClass={TEXT_BLOCK_EXTRA_CLASS}>
          <a href="mailto:dan.ditomaso@gmail.com" className="text-4xl ml-8 mt-8">
            <span class="underline">dan.ditomaso@gmail.com</span>
          </a>
        </TextBlock>
        <picture className="w-48 inline-block mr-12">
          <source srcset="./assets/me-small.webp" type="image/webp" />
          <img
            loading="lazy"
            src="./assets/me-small.png"
            className="rounded-full"
            alt="Dan Ditomaso the author this amazing site, I am a Front End Developer and this site showcases my portfolio items!"
          />
        </picture>
      </div>
    );
  };

  return (
    <Section
      title="Contact Me."
      spanCols={true}
      column1={renderColumn1()}
      extraClass={SECTION_EXTRA_CLASS}
      id="contactMe"
    />
  );
};
