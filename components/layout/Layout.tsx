import Head from "next/head";
import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import styles from "./Layout.module.scss";
import Script from "next/script";

interface LayoutProps {
  pageTitle: string;
  children: React.ReactElement;
}

function Layout({ children, pageTitle }: LayoutProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY}`}
      />

      <Script
        id="google-analytics-key"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY}', {
            page_path: window.location.pathname,
            });
        `,
        }}
      />

      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>
      <div className={styles.container}>
        <Header />
        <main> {children} </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
