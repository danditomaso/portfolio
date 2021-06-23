import React from "react";
import { Section } from "./Section";
import { Button } from "./Button";
import { TextBlock } from "./TextBlock";
import portfolioData from "../data/portfolioData";

const ITEM_HEADER_EXTRA_CLASS = {
  titleClass: "font-serif text-5xl",
};
const BUILT_USING_EXTRA_CLASS = {
  titleClass: "text-[3rem]",
};

const renderPortfolioItems = (arr) => {
  if (!arr) return null;
  return arr.map((item) => {
    const { title, githubLink, workLink, altText, screenshot, techUsed, description, shortDesc } =
      item;

    return (
      <article
        className="border-t-2 border-black px-3 grid lg:grid-cols-2 md:my-10 first:mt-0 items-center justify-center portfolio-item last:mb-0"
        key={githubLink}>
        <div className="">
          <TextBlock title={title} content={shortDesc} extraClass={ITEM_HEADER_EXTRA_CLASS} />
          <TextBlock content={description} />
          <TextBlock
            extraClass={BUILT_USING_EXTRA_CLASS}
            title={"Built Using:"}
            content={
              <ul className="flex flex-wrap">
                {techUsed.map((item, index) => {
                  return (
                    <li className="text-lg">
                      {item}
                      {index === techUsed.length - 1 ? "" : ","}
                    </li>
                  );
                })}
              </ul>
            }
          />
          <div className="flex space-x-5 mt-5">
            <Button
              title={"View Site"}
              url={workLink}
              icon={"./assets/globe.svg"}
              alt="A button that will link to the projects homepage"
            />
            <Button
              title={"View Repo"}
              url={githubLink}
              icon={"./assets/githubIcon.svg"}
              alt="A button that will link to the projects github"
            />
          </div>
        </div>
        <picture className="max-w-2xl xs:hidden md:block md:m-auto lg:ml-auto portfolio-item--img shadow-xl">
          <source srcset={screenshot.webp} type="image/webp" />
          <img loading="lazy" src={screenshot.webp} alt={altText}></img>
        </picture>
      </article>
    );
  });
};

export const Portfolio = () => {
  const SECTION_EXTRA_CLASS = {
    containerClass: "gap-0",
  };

  return (
    <Section
      title="Portfolio."
      spanCols={true}
      column1={renderPortfolioItems(portfolioData)}
      extraClass={SECTION_EXTRA_CLASS}
      id="portfolio"
    />
  );
};
