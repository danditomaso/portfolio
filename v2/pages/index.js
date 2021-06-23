import Head from "next/head";
import { Header, AboutMe, Portfolio, ContactMe } from "../components/index";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&family=Playfair+Display:wght@700&display=block"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="xs:border-0 md:border-24 border-solid border-white h-screen">
        <Header />
        <AboutMe />
        <Portfolio />
        <ContactMe />
      </div>
    </div>
  );
}
