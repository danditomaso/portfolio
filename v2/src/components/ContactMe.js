import { Section } from "./Section";
import { TextBlock } from "./TextBlock";

export const ContactMe = () => {
  const TEXT_BLOCK_EXTRA_CLASS = {
    containerClass: "flex flex-col justify-center h-full w-[80%]",
    titleClass: "inline-block w-full ",
    bodyClass: "text-5xl w-2/3 inline-block w-[90%]",
  };

  const SECTION_EXTRA_CLASS = {
    containerClass: "gap-0",
  };

  const renderColumn1 = () => {
    return (
      <div className="bg-contactMeBlue text-white h-full w-full flex items-center flex-grow">
        <TextBlock
          content={
            "I am currently employed at a4Media building awesome things. If you have an opportunity that you would like to share I'd love to hear from you!"
          }
          extraClass={TEXT_BLOCK_EXTRA_CLASS}>
          <a href="mailto:dan.ditomaso@gmail.com" className="p-3 my-6 text-5xl w-2/3">
            <span class="underline">dan.ditomaso@gmail.com</span>
          </a>
        </TextBlock>
        <picture className="w-48 inline-block">
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
