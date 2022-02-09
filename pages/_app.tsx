import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { DefaultSeo } from "next-seo";
import seoConfig from "../next-seo.config";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...seoConfig} />
      <Layout pageTitle={"Blog | Mohammad Faisal"}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
