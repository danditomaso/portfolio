import React from "react";
import Head from "next/head";
import { Header, AboutMe, Portfolio, ContactMe } from "../components/index";

export default function Home() {
  const scrollRef = React.useRef(null);

  return (
    <>
      <Head>
        <title>Dan Ditomaso</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Playfair+Display:wght@700&display=block"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="xs:border-0 md:border-24 border-solid border-white h-screen relative">
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
