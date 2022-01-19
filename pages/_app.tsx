import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout pageTitle={"Blog | Mohammad Faisal"}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
