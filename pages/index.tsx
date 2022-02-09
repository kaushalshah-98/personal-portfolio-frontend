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
        title="Mohammad Faisal | Personal Website"
        canonical={`${process.env.NEXT_PUBLIC_PRODUCTION_ROOT_URL}`}
        description="Software Engineer | Technical Writer | Interview Engineer | Consultant"
        openGraph={{
          url: `${process.env.NEXT_PUBLIC_PRODUCTION_ROOT_URL}`,
          title: "Mohammad Faisal | Software Engineer",
          description: "Technical Blog of Mohammad Faisal",
          images: [
            {
              url: "https://www.example.ie/og-image-01.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
            {
              url: "https://www.example.ie/og-image-02.jpg",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
              type: "image/jpeg",
            },
            { url: "https://www.example.ie/og-image-03.jpg" },
            { url: "https://www.example.ie/og-image-04.jpg" },
          ],
          site_name: "Mohammad Faisal",
        }}
      />

      <div className="flex flex-col gap-5 justify-center items-center w-screen">
        <div className="rounded-full py-5">
          <Image src="/static/profile.png" alt="Profile Image" height="200" width="200" className="rounded-full" />
        </div>
        <article className="prose sm:prose-sm md:prose-lg xl:prose-xl 2xl:prose-2xl text-center">
          <h1> {`Hi, I'm Mohammad Faisal`}</h1>
          <h3>Software Engineer | Technical Writer | Consultant </h3>
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
