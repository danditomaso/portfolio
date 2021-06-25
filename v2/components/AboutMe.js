import PropTypes from "prop-types";
import { Section, TextBlock } from "./index";
import { aboutMeText, allSkills } from "../data/siteData";

const renderIcons = (arr = []) => {
  if (!arr) return null;
  return arr.map(({ icon, label }, index) => {
    return (
      <li key={index} className="p-2">
        <figure className="flex items-center">
          <img
            loading="lazy"
            height="44px"
            width="44px"
            className="h-11 w-11 p-1 bg-white"
            src={`./assets/skills/${icon}`}
            alt={`The beautiful ${label} logo.`}
          />
          <figcaption className="skill-item--caption">{label}</figcaption>
        </figure>
      </li>
    );
  });
};

const MySkills = ({ skillsArr = [] }) => {
  if (!skillsArr) return null;

  return (
    <>
      <aside className="bg-gray-200 shadow-xl h-full p-3">
        <h4 className="skillSection--title">Skill Set</h4>
        <p className="mt-3 font-bold">I am proficient in:</p>
        <ul className="mt-3">{renderIcons(skillsArr[0])}</ul>
        <p className="mt-3 font-bold">I am learning the following:</p>
        <ul className="mt-3">{renderIcons(skillsArr[1])}</ul>
      </aside>
    </>
  );
};

const AboutMe = () => {
  return (
    <Section
      title="About Me."
      spanCols={false}
      column1={aboutMeText.map(({ title, content }, index) => (
        <TextBlock title={title} content={content} key={index} />
      ))}
      column2={<MySkills skillsArr={allSkills} id="aboutMe" />}
    />
  );
};
export default AboutMe;

MySkills.propTypes = {
  skillsArr: PropTypes.array.isRequired,
};

renderIcons.propTypes = {
  arr: PropTypes.array.isRequired,
};
