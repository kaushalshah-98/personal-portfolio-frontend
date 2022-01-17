import Head from "next/head";
import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import styles from "./Layout.module.scss";

interface LayoutProps {
  pageTitle: string;
  children: React.ReactElement;
}

function Layout({ children, pageTitle }: LayoutProps) {
  return (
    <>
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
