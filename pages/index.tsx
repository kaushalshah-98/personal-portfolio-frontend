import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
const Home: NextPage = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center w-screen">
      <div className="rounded-full py-5">
        <Image src="/static/profile_image.jpeg" alt="Profile Image" height="200" width="200" className="rounded-full" />
      </div>
      <article className="prose sm:prose-sm md:prose-lg xl:prose-xl 2xl:prose-2xl text-center">
        <h1> {`Hi, I'm Mohammad Faisal`}</h1>
        <h3>Full-stack Software Engineer & Technical Writer </h3>
      </article>

      <Link href="/blog" passHref>
        <button className="mt-32 flex items-center transition delay-50 border-black border-2 bg-white hover:bg-black text-black  hover:text-white py-5 rounded-lg px-20 w-auto self-center ">
          <div className="px-3"> {`Visit my Blog`} </div>
          <FaArrowRight />
        </button>
      </Link>
    </div>
  );
};

export default Home;
