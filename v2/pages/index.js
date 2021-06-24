import React from "react";
import { Header, AboutMe, Portfolio, ContactMe, Social } from "../components/index";

export default function Home() {
  const scrollRef = React.useRef(null);

  return (
    <>
      <div className="xs:border-0 md:border-24 border-solid border-white h-screen relative">
        <Social />
        <Header scrollRef={scrollRef} />
        <AboutMe />
        <Portfolio />
        <div ref={scrollRef}>
          <ContactMe />
          <sub className="absolute bottom-4 text-black">
            Made with lots of ❤️ using NextJS and TailwindCSS. © 2021 Dan Ditomaso
          </sub>
        </div>
      </div>
    </>
  );
}
