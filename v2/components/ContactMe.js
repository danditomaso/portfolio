import { TextBlock, Section, Footer } from "./index";

const ContactMe = () => {
  const TEXT_BLOCK_EXTRA_CLASS = {
    containerClass: "flex flex-col place-content-center lg:ml-8 lg:w-1/2 xs:w-full",
    bodyClass: "md:text-3xl xs:text-lg",
  };

  const SECTION_EXTRA_CLASS = {
    containerClass: "gap-0 h-full",
  };

  const renderColumn1 = () => {
    return (
      <div className="xs:flex lg:flex-row w-full h-full text-white bg-contactMeBlue">
        <TextBlock
          content={
            "I am currently employed full time as a Frontend Developer working with a team of folks building awesome things! If you have an opportunity that you would like to share I'd love to hear from you!"
          }
          extraClass={TEXT_BLOCK_EXTRA_CLASS}>
          <a
            href="mailto:dan.ditomaso@gmail.com"
            className="md:text-4xl xs:text-lg mt-8"
            rel="noreferrer">
            <span className="underline">dan.ditomaso@gmail.com</span>
          </a>
        </TextBlock>
        <picture className="sm:w-36 lg:w-48 sm:flex xs:hidden m-auto w-full h-full items-center">
          <source srcSet="./assets/me-small.webp" type="image/webp" />
          <img
            loading="lazy"
            width="500px"
            height="501px"
            src="./assets/me-small.jpg"
            className="rounded-full"
            alt="Dan Ditomaso the author this amazing site, I am a Front End Developer and this site showcases my portfolio items!"
          />
        </picture>
      </div>
    );
  };

  return (
    <>
      <Section
        title="Contact Me."
        spanCols={true}
        column1={renderColumn1()}
        extraClass={SECTION_EXTRA_CLASS}
        id="contactMe"
      />
      <Footer />
    </>
  );
};

export default ContactMe;
