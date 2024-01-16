import React from "react";
import { Section, Button, Title, BodyText } from "./index";
import { portfolioData } from "../data/content";
import { cn } from "@/libs/style";

const formatter = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction",
});

type PortfolioDataProps = (typeof portfolioData)[0];

type WorkItemTechStack = PortfolioDataProps["techUsed"];
const renderBuiltUsing = (techArr: WorkItemTechStack) => {
  if (!techArr) return null;
  return <p className="font-light">{formatter.format(techArr)}</p>;
  // return techArr.map((item, index) => (
  // <li className="text-md" key={index}>
  // {item}
  {
    /* {index === techArr.length - 1 ? "" : ","} */
  }
  // </li>
  // ));
};

function PortfolioItems({ content }: { content: PortfolioDataProps[] }) {
  if (!content) return null;
  const lastItemIdx = content.length - 1;

  return content.map((item, idx) => {
    const { title, githubLink, workLink, altText, screenshot, techUsed, description, shortDesc } = item;

    return (
      <article className={cn("border-t-2 border-gray-200 border-b-2 py-8 grid grid-cols-2 items-center justify-center")} key={workLink}>
        <div>
          <div className="">
            <Title component={"h3"} title={title} titleClass="text-xl mb-0 font-light" />
            {/* <BodyText content={shortDesc} className="text-3xl font-medium" /> */}
            <BodyText content={shortDesc} className="text-4xl font-medium font-serif" />
          </div>
          {/* <Title component={"h3"} title={title} titleClass="font-serif, xs:text-3xl" /> */}

          <BodyText className="font-extralight" content={description} />

          <Title component={"h3"} title={"Tech Stack:"} titleClass="text-lg " />
          <ul className="flex flex-wrap ">{renderBuiltUsing(techUsed)}</ul>

          <div className="flex">
            <Button type="link" title={"View Site"} url={workLink} icon={"./assets/globe.svg"} alt="A button that will link to the projects homepage" />
            <Button type="link" title={"View Repo"} url={githubLink} icon={"./assets/githubIcon.svg"} alt="A button that will link to the projects github" />
          </div>
        </div>
        <picture className="max-w-2xl xs:hidden md:block md:m-auto lg:mskillsLearningl-auto shadow-xl">
          <source srcSet={screenshot.webp} type="image/webp" />
          <img width="672px" height="328.2px" loading="lazy" src={screenshot.webp} alt={altText}></img>
        </picture>
      </article>
    );
  });
}

const Portfolio = () => {
  const SECTION_EXTRA_CLASS = {
    containerClass: "gap-0",
  };

  return (
    <Section title="Portfolio." extraClasses={SECTION_EXTRA_CLASS}>
      <PortfolioItems content={portfolioData} />
    </Section>
  );
};

export default Portfolio;
