import { BodyText, Section, Footer } from "./index";

export default function Contact() {
  return (
    <>
      <Section title="Contact." extraClasses={{ containerClass: "h-128 flex w-full mt-8" }}>
        <div className="flex flex-col w-full   h-full">
          <BodyText
            content={
              "I am currently employed full time as a Frontend Developer working with a team of folks building awesome things! If you have an opportunity that you would like to share I'd love to hear from you!"
            }
            className={"md:text-3xl xs:text-lg"}
          />
          <a href="mailto:dan.ditomaso@gmail.com" className="md:text-4xl xs:text-lg mt-8" rel="noreferrer">
            <span className="underline">dan.ditomaso@gmail.com</span>
          </a>
        </div>
        {/* <picture className="sm:w-36 lg:w-48 sm:flex xs:hidden w-full h-full">
          <source srcSet="./assets/me-small.webp" type="image/webp" />
          <img
            loading="lazy"
            width="500px"
            height="501px"
            src="./assets/me-small.jpg"
            className="rounded-full"
            alt="Dan Ditomaso the author this amazing site, I am a Front End Developer and site showcases some of my many portfolio items."
          />
        </picture> */}
      </Section>
    </>
  );
}
