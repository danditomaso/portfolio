import { Section } from "./Section";
import { TextBlock } from "./TextBlock";
import "../styles/AboutMe.css";

const aboutMeText = [
  {
    title: "Who I Am",
    content:
      "Hi! My name is Dan Ditomaso, and I'm a Toronto-based Front-End Web Developer. I enjoy designing and building beautiful, accessible, and responsive websites. I graduated in 2018 from the Immersive Web Development Program at HackerYou (renamed to Juno College in 2019). Prior to that, I worked as IT Infrastructure architect working with a number of cloud providers including Microsoft Azure, Amazon, AWS, and GCP. I have over 10 years experience in IT Infrastructure consulting, I realized while working in that role the importance of being a part of a team to deliver a steller customer experience. One of my goals of being a Front End Developer it to always build beautiful, functional web applications that also have a great user experience.",
  },
  {
    title: "What I Do",
    content:
      "I am a self motivated learner with a thirst for knowledge on the latest web technologies and development best practices. I am a developer with a repertoire of projects that have taught me the value of excellence in all that I do. When you don’t find me behind a computer, I'll be spending my time either playing Ultimate Frisbee in one of the leagues around the city, or on rock climbing at one of the many cliffs that are located around Ontario.",
  },
  {
    title: "What I Bring",
    content:
      "I love what I do, and hold myself to very high standards. I bring with me a keen desire to continue learning paired with my years of demonstrable experience working with a variety of technologies both infrastructure and web based. I strive for excellence in everything I develop.",
  },
];

const allSkills = [
  [
    {
      icon: "html5.svg",
      label: "HTML",
    },
    {
      icon: "css3.svg",
      label: "CSS",
    },
    {
      icon: "js.svg",
      label: "Javascript",
    },
    {
      icon: "nodejs.svg",
      label: "NodeJS",
    },
    {
      icon: "nextjs.svg",
      label: "NextJs",
    },
    {
      icon: "react.svg",
      label: "React",
    },
    {
      icon: "redux.svg",
      label: "Redux",
    },
    {
      icon: "webpack.svg",
      label: "Webpack",
    },
    {
      icon: "pairprogram.webp",
      label: "Pair Programming",
    },
    {
      icon: "funcprogram.png",
      label: "Functional Programming",
    },
    {
      icon: "sass.svg",
      label: "Sass",
    },
    {
      icon: "linux.svg",
      label: "Linux",
    },
    {
      icon: "responsive-design.svg",
      label: "Responsive Design",
    },
    {
      icon: "graphql.webp",
      label: "GraphQL",
    },
    {
      icon: "docker.svg",
      label: "Primsa",
    },
    {
      icon: "aws.svg",
      label: "AWS",
    },
    {
      icon: "azure.svg",
      label: "Azure",
    },
  ],
  [
    {
      icon: "prisma.png",
      label: "Primsa",
    },
    {
      icon: "mongodb.webp",
      label: "MongoDB",
    },
    {
      icon: "postgres.svg",
      label: "Postgres",
    },
    {
      icon: "golang.svg",
      label: "Go",
    },
    {
      icon: "ts.svg",
      label: "TypeScript",
    },
    {
      icon: "kubernetes.svg",
      label: "Kubernetes",
    },
  ],
];

const renderIcons = (arr = []) => {
  if (!arr) return null;
  return arr.map(({ icon, label }, index) => {
    return (
      <li key={index} className="p-2">
        <figure className="flex items-center">
          <img
            className="h-10 w-10 p-1 bg-white"
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
        <p className="row-start-1 row-end-1 mt-4 font-bold">I am proficient in:</p>
        <ul className="skills--list">{renderIcons(skillsArr[0])}</ul>
        <p className="row-start-1 row-end-1 mt-4 font-bold">I am learning the following:</p>
        <ul className="skills--list">{renderIcons(skillsArr[1])}</ul>
      </aside>
    </>
  );
};

export const AboutMe = (props) => {
  return (
    <Section
      title="About Me."
      spanCols={false}
      column1={aboutMeText.map(({ title, content }, index) => (
        <TextBlock title={title} content={content} key={index} />
      ))}
      column2={<MySkills skillsArr={allSkills} />}
    />
  );
};
