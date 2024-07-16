import type { NavMenuItem, SocialItem } from "@/app/(site)/types";

export type siteMeta = {
  siteMetadata: {
    title: string;
    subTitle: string;
    lookingForDescription: string;
    description: string;
    siteUrl: string;
    email: string;
  };
  navMenu: NavMenuItem[]
  socials: SocialItem[];
};

const siteMeta: siteMeta = {
  siteMetadata: {
    title: "Dan Ditomaso",
    subTitle: "Full Stack Developer",
    lookingForDescription: "Currently seeking my next opportunity...",
    description:
      "From Concept to Deployment, I Bring Ideas to Life.",
    siteUrl: "https://www.danditomaso.com",
    email: "dan.ditomaso@gmail.com",
  },
  navMenu: [
    {
      name: "Work",
      url: "/work",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ],
  socials: [
    { url: "https://www.github.com/danditomaso", name: "gh" },
    { url: "https://www.linkedin.com/in/danielditomaso", name: "li" },
  ],
};

export default siteMeta;
