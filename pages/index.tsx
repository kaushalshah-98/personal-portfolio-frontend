import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { NextSeo } from "next-seo";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Mohammad Faisal | Portfolio"
        canonical={`${process.env.NEXT_PUBLIC_PRODUCTION_ROOT_URL}`}
        description="Software Engineer | Technical Writer | Consultant | Interview Engineer"
        openGraph={{
          url: `${process.env.NEXT_PUBLIC_PRODUCTION_ROOT_URL}`,
          title: "Mohammad Faisal | Portfolio",
          description: "Portfolio of Mohammad Faisal",
          type: "profile",
          profile: {
            firstName: "Mohammad",
            lastName: "Faisal",
            username: "56faisal",
            gender: "male",
          },
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_PRODUCTION_ROOT_URL}/static/profile.png`,
              width: 800,
              height: 600,
              alt: "Profile Image",
              type: "image/png",
            },
            {
              url: `${process.env.NEXT_PUBLIC_PRODUCTION_ROOT_URL}/static/profile.png`,
              width: 900,
              height: 800,
              alt: "Profile Image",
              type: "image/png",
            },
          ],
          site_name: "Mohammad Faisal's Portfolio",
        }}
      />

      <div className="flex flex-col gap-5 justify-center items-center w-screen">
        <div className="rounded-full py-5">
          <Image src="/static/profile.png" alt="Profile Image" height="200" width="200" className="rounded-full" />
        </div>
        <article className="prose sm:prose-sm md:prose-lg xl:prose-xl 2xl:prose-2xl text-center">
          <h1> {`Hi, I'm Mohammad Faisal`}</h1>
          <h3>Software Engineer | Technical Writer </h3>
          <h4>ReactJS | NodeJS | AWS </h4>
        </article>

        <Link href="/blog" passHref>
          <button className="mt-16 flex items-center transition delay-50 border-black border-2 bg-white hover:bg-black text-black  hover:text-white py-5 rounded-lg px-20 w-auto self-center ">
            <div className="px-3"> {`Visit my Blog`} </div>
            <FaArrowRight />
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
