import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="">
      <Link href="/blog">Go To Blog</Link>
    </div>
  );
};

export default Home;
