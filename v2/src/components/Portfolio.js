import React from "react";
import { Section } from "./Section";
import { Button } from "./Button";
import { TextBlock } from "./TextBlock";
import portfolioData from "../data/portfolioData";
import "../styles/Portfolio.css";

const ITEM_HEADER_EXTRA_CLASS = {
  titleClass: "font-serif text-[3.6rem]",
};

const BUTTON_EXTRA_CLASS = {
  containerClass: "detailsBtn",
};

const renderDetailsSection = (column1, column2) => {
  return (
    <div className="grid grid-cols-2">
      <div className="column1 lg:mr-6 xl:mr-8 my-4 ">{column1()}</div>
      <div className="column2 my-4 flex-col">{column2()}</div>
    </div>
  );
};

const renderPortfolioItems = (arr) => {
  if (!arr) return null;
  return arr.map((item) => {
    const { title, githubLink, workLink, altText, screenshot, techUsed, description, shortDesc } =
      item;

    const detailsColumn1 = () => (
      <>
        <TextBlock content={description} />
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
      </>
    );

    const detailsColumn2 = () => {
      return (
        <div className="ml-auto">
          <h4>Built Using:</h4>
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
        </div>
      );
    };

    return (
      <article
        className="w-full border-t-2 border-black flex flex-col mb-6 portfolio-item"
        key={githubLink}>
        <div className="pt-3 flex items-center">
          <div className="flex flex-col">
            <TextBlock title={title} content={shortDesc} extraClass={ITEM_HEADER_EXTRA_CLASS} />
            {/* <Button
              title="More Details"
              icon={"./assets/right-arrow.svg"}
              extraClass={BUTTON_EXTRA_CLASS}
            /> */}
          </div>
          <picture className="ml-auto max-w-lg mt-6 portfolio-item--img w-auto">
            <source srcset={screenshot.webp} type="image/webp" />
            <img loading="lazy" src={screenshot.webp} alt={altText}></img>
          </picture>
        </div>

        {renderDetailsSection(detailsColumn1, detailsColumn2)}
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
