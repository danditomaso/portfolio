import dynamic from "next/dynamic";

const dynamicImports = {
  AboutMe: dynamic(() => import("./AboutMe")),
  Button: dynamic(() => import("./Button")),
  ContactMe: dynamic(() => import("./ContactMe")),
  Header: dynamic(() => import("./Header")),
  Portfolio: dynamic(() => import("./Portfolio")),
  Social: dynamic(() => import("./Social")),
};

export const { AboutMe, ContactMe, Button, Header, Portfolio, Social } = dynamicImports;
