import React from "react";
import PropTypes from "prop-types";
import { Section } from "./Section";
import { Button } from "./Button";
import { TextBlock } from "./TextBlock";
import { portfolioData } from "../data/siteData";

const ITEM_HEADER_EXTRA_CLASS = {
  titleClass: "font-serif text-5xl",
};
const BUILT_USING_EXTRA_CLASS = {
  titleClass: "text-[2rem]",
};

const renderBuiltUsing = (techArr) => {
  if (!techArr) return null;
  return techArr.map((item, index) => {
    return (
      <li className="text-md" key={index}>
        {item}
        {index === techArr.length - 1 ? "" : ","}
      </li>
    );
  });
};

const renderPortfolioItems = (arr) => {
  if (!arr) return null;
  return arr.map((item) => {
    const { title, githubLink, workLink, altText, screenshot, techUsed, description, shortDesc } =
      item;

    return (
      <article
        className="border-t-2 border-gray-200 border-b-2 py-8 grid lg:grid-cols-2 items-center justify-center portfolio-item"
        key={githubLink}>
        <div className="">
          <TextBlock title={title} content={shortDesc} extraClass={ITEM_HEADER_EXTRA_CLASS} />
          <TextBlock content={description} />
          <TextBlock extraClass={BUILT_USING_EXTRA_CLASS} title={"Built Using:"}>
            <ul className="flex flex-wrap">{renderBuiltUsing(techUsed)}</ul>
          </TextBlock>

          <div className="flex space-x-5 mb-3">
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
          <source srcSet={screenshot.webp} type="image/webp" />
          <img loading="lazy" src={screenshot.webp} alt={altText}></img>
        </picture>
      </article>
    );
  });
};

const Portfolio = () => {
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

renderPortfolioItems.propTypes = {
  arr: PropTypes.array.isRequired,
};

renderBuiltUsing.propTypes = {
  techUsed: PropTypes.array.isRequired,
};
export default Portfolio;
