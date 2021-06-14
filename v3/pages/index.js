import Head from "next/head";
import { Header } from "../partials/Header";
import { Footer } from "../partials/Footer";
import { siteSettings } from "../config";

export default function Home() {
  const { header, footer } = siteSettings;
  console.log(header, footer);

  return (
    <div className="h-screen w-screen">
      <Head>
        <title>Dan Ditomaso - Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Footer links={footer.links} />
    </div>
  );
}
