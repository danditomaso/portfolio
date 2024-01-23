import twitterIcon from "../../public/images/twitter-icon.svg";
import githubIcon from "../../public/images/github-icon.svg";
import linkedInIcon from "../../public/images/linkedin-icon.svg";
import { NameUrlPair, WorkItem, SocialItem, SiteMapLink } from "@/app/types";

export type SiteSettings = {
  metadata: {
    title: string;
    jobRole: string;
    lookingForDescription: string;
    description: string;
    siteUrl: string;
  };
  siteMap: SiteMapLink;
  workItems: WorkItem[];
  socials: SocialItem[];
};

const siteSettings: SiteSettings = {
  metadata: {
    title: "Dan Ditomaso",
    jobRole: "Fullstack, but front-end addicted developer",
    lookingForDescription: "Currently seeking my next opportunity...",
    description:
      "I build delightful user experiences that thoughtful user experiences that piece together a big picture with simple, impactful and shippable solutions focused on the customer",
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
  workItems: [
    {
      name: "abc123",
      url: "https://www.google.com",
      description: "abclajsflksa",
      skills: ["React", "Typescript", "Next.js", "TailwindCSS"],
    },
    {
      name: "bcd456",
      url: "https://www.google.com",
      description: "abclajsflksa",
      skills: ["React", "Typescript", "Next.js", "TailwindCSS"],
    },
    {
      name: "efg789",
      url: "https://www.google.com",
      description: "abclajsflksa",
      skills: ["React", "Typescript", "Next.js", "TailwindCSS"],
    },
    {
      name: "hij101112",
      url: "https://www.google.com",
      description: "abclajsflksa",
      skills: ["React", "Typescript", "Next.js", "TailwindCSS"],
    },
    {
      name: "klm131415",
      url: "https://www.google.com",
      description: "abclajsflksa",
      skills: ["React", "Typescript", "Next.js", "TailwindCSS"],
    },
    {
      name: "nqo161718",
      url: "https://www.google.com",
      description: "abclajsflksa",
      skills: ["React", "Typescript", "Next.js", "TailwindCSS"],
    },
  ],
  socials: [
    { url: "www.github.com", icon: githubIcon, name: "Github" },
    { url: "www.linkedin.com", icon: linkedInIcon, name: "LinkedIn" },
    { url: "www.twitter.com", icon: twitterIcon, name: "Twitter" },
  ],
};

export default siteSettings;
