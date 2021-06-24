import { Layout } from "../components/";
import "/styles/index.css";

export function reportWebVitals(metric) {
  if (process.env.NODE_ENV === "development") console.log(metric);
}

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
