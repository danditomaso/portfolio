import "/styles/index.css";

export function reportWebVitals(metric) {
  if (process.env.NODE_ENV === "development") console.log(metric);
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
