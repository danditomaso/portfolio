import dynamic from "next/dynamic";

const dynamicImports = {
  AboutMe: dynamic(() => import("./AboutMe")),
  Button: dynamic(() => import("./Button")),
  ContactMe: dynamic(() => import("./ContactMe")),
  Footer: dynamic(() => import("./Footer")),
  Header: dynamic(() => import("./Header")),
  Portfolio: dynamic(() => import("./Portfolio")),
  Head: dynamic(() => import("./Head")),
  Layout: dynamic(() => import("./Layout")),
  TextBlock: dynamic(() => import("./TextBlock")),
  Section: dynamic(() => import("./Section")),
};

export const {
  AboutMe,
  ContactMe,
  Button,
  Header,
  Footer,
  Portfolio,
  Head,
  Layout,
  Section,
  TextBlock,
} = dynamicImports;
