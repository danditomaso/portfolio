import React from "react";
import { Header, AboutMe, Portfolio, ContactMe } from "../components/";

export default function Home() {
  const scrollRef = React.useRef(null);

  return (
    <>
      <Header scrollRef={scrollRef} />
      <main className="xs:border-10 md:border-24 border-solid border-white h-screen">
        <AboutMe />
        <Portfolio />
        <div ref={scrollRef} className="h-[30rem] w-full">
          <ContactMe />
        </div>
      </main>
    </>
  );
}
