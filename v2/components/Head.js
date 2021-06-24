import Head from "next/head";
import { siteSettings } from "../data/siteSettings";

const Social = () => {
  const { siteName, description, image, url, twitter } = siteSettings;
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Playfair+Display:wght@700&display=block"
        rel="stylesheet"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>Dan Ditomaso</title>
      <meta property="og:title" content={siteName} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:creator" content={twitter} />
    </Head>
  );
};

export default Social;
