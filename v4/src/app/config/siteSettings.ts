import twitterIcon from "../../../public/images/twitter-icon.svg";
import githubIcon from "../../../public/images/github-icon.svg";
import linkedInIcon from "../../../public/images/linkedin-icon.svg";

export default {
  metadata: {
    title: "Dan Ditomaso",
    jobRole: "Front-end Developer",
    lookingForDescription: "Currently seeking my next opportunity...",
    description:
      "Front-end Development, Full-stack Development. I build delightful user experiences that  thoughtful user experiences that piece together a big picture with simple, impactful and shippable solutions focused on the customer",
    siteUrl: "https://www.danditomaso.com",
  },
  siteMap: {
    home: {
      name: "Work",
      url: "/work",
    },
    about: {
      name: "About",
      url: "/about",
    },
    contact: {
      name: "Contact",
      url: "/contact",
    },
  },
  socials: [
    { url: "www.github.com", icon: githubIcon, name: "Github" },
    { url: "www.linkedin.com", icon: linkedInIcon, name: "LinkedIn" },
    { url: "www.twitter.com", icon: twitterIcon, name: "Twitter" },
  ],
};
