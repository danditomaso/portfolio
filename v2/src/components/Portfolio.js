import React from "react";
import { Section } from "./Section";
import { DetailsButton } from "./DetailsButton";
import { TextBlock } from "./TextBlock";
import portfolioData from "../data/portfolioData";
import "../styles/Portfolio.css";

const TEXT_BLOCK_EXTRA_CLASS = {
  containerClass: "",
  titleClass: "font-sans",
  bodyClass: "",
};

const renderDetailsSection = (column1, column2) => {
  return (
    <>
      <div className="column1 lg:mr-6 xl:mr-8 my-4">{column1()}</div>
      <div className="column2 my-4">{column2()}</div>
    </>
  );
};

const renderPortfolioItems = (arr) => {
  if (!arr) return null;
  return arr.map((item) => {
    const { title, githubLink, workLink, altText, screenshot, techUsed, description, shortDesc } =
      item;

    const detailsColumn1 = () => (
      <>
        <p>{description}</p>
        <div className="flex space-x-5 mt-5">
          <DetailsButton title={"View Site"} url={workLink} icon={"./assets/globe.svg"} />
          <DetailsButton title={"View Repo"} url={githubLink} icon={"./assets/githubIcon.svg"} />
        </div>
      </>
    );

    const detailsColumn2 = () => {
      console.log(techUsed);

      return (
        <div className="ml-auto">
          <h4>Built Using:</h4>
          <ul>
            {techUsed.map((item) => (
              <li className="block text-lg">{item}</li>
            ))}
          </ul>
        </div>
      );
    };

    return (
      <article
        className="w-full border-t-2 border-black flex flex-col mb-6 portfolio-item"
        key={githubLink}>
        <div className="portfolioItem--details pt-3 flex items-center">
          <TextBlock title={title} content={shortDesc} extraClass={TEXT_BLOCK_EXTRA_CLASS} />
          <picture className="ml-auto max-w-lg my-6 portfolio-item--img">
            <source srcset={screenshot.webp} type="image/webp" />
            <img src={screenshot.webp} alt={altText}></img>
          </picture>
        </div>

        <DetailsButton
          title="More Details"
          icon={"./assets/right-arrow.svg"}
          extraClass="detailsBtn"
        />

        {renderDetailsSection(detailsColumn1, detailsColumn2)}
      </article>
    );
  });
};

export const Portfolio = (props) => {
  return (
    <Section
      title="Portfolio."
      spanCols={true}
      column1={renderPortfolioItems(portfolioData)}
      extraClass="gap-0"
    />
  );
};
