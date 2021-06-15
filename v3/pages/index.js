import Head from "next/head";
import { Header } from "../partials/Header";
import { Footer } from "../partials/Footer";
import { siteSettings } from "../config";

export default function Home() {
  const { header, footer } = siteSettings;
  return (
    <div className="h-screen w-screen">
      <Head>
        <title>Dan Ditomaso - Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Footer links={footer.links} />
    </div>
  );
}
