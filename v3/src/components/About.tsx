import { BodyText, Section } from "./index";
import { aboutMeText, currentSkills, currentlyLearning } from "../data/content";

function SkillIcon({ src, label }: { src: string; label: string }) {
  return (
    <li key={src} className="p-2">
      <figure className="flex items-center">
        <img
          loading="lazy"
          height="2.75rem"
          width="2.75rem"
          className="h-11 w-11 p-1 bg-white"
          src={`./assets/skills/${src}`}
          alt={`The beautiful ${label} logo.`}
        />
        <figcaption className="skill-item--caption">{label}</figcaption>
      </figure>
    </li>
  );
}

// const MySkills = ({ skillsArr = [] }) => {
//   if (!skillsArr) return null;

//   return (
//     <>
//       <aside className="bg-gray-200 shadow-xl h-full p-3">
//         <h4>Skill Set</h4>
//         <p className="mt-3 font-bold">I am proficient in:</p>
//         <ul className="mt-3">{renderIcons(skillsArr[0])}</ul>
//         <p className="mt-3 font-bold">I am learning the following:</p>
//         <ul className="mt-3">{renderIcons(skillsArr[1])}</ul>
//       </aside>
//     </>
//   );
// };

export default function AboutMe() {
  return (
    <Section title="About." extraClasses={{ containerClass: "mt-9", titleClass: "text-end", childrenClass: "flex, flex-col" }}>
      {aboutMeText.map(({ content }) => (
        <BodyText content={content} key={content} className="max-w-prose leading-6" />
      ))}
    </Section>
  );
}
