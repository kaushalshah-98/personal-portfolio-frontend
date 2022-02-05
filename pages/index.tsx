import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
const Home: NextPage = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center w-screen">
      <div className="rounded-full py-5">
        <Image src="/static/profile.png" alt="Profile Image" height="200" width="200" className="rounded-full" />
      </div>
      <article className="prose sm:prose-sm md:prose-lg xl:prose-xl 2xl:prose-2xl text-center">
        <h1> {`Hi, I'm Mohammad Faisal`}</h1>
        <h3>Full-stack Software Engineer & Technical Writer </h3>
      </article>

      <Link href="/blog" passHref>
        <button className="mt-16 flex items-center transition delay-50 border-black border-2 bg-white hover:bg-black text-black  hover:text-white py-5 rounded-lg px-20 w-auto self-center ">
          <div className="px-3"> {`Visit my Blog`} </div>
          <FaArrowRight />
        </button>
      </Link>
    </div>
  );
};

export default Home;

// import * as fs from "fs";
// import { GetServerSidePropsContext } from "next";

// const Sitemap = () => {
//   return null;
// };

// export const getServerSideProps = async ({ res }: GetServerSidePropsContext): Promise<any> => {
//   const BASE_URL =
//     process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_PRODUCTION_ROOT_URL : "http://localhost:3000";

//   const otherPaths: string[] = fs
//     .readdirSync("pages")
//     .filter((staticPage) => {
//       return ![
//         "api",
//         "profile",
//         "index.tsx",
//         "_app.tsx",
//         "_error.tsx",
//         "_document.tsx",
//         "404.tsx",
//         "sitemap.xml.tsx",
//       ].includes(staticPage);
//     })
//     .map((staticPagePath) => {
//       return `${BASE_URL}/${staticPagePath}`;
//     });

//   const postPaths: string[] = fs.readdirSync("_posts").map((staticPagePath) => {
//     return `${BASE_URL}/blog/${staticPagePath.replace(".md", "")}`;
//   });

//   const allPaths = [BASE_URL, ...postPaths, ...otherPaths];

//   const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
//     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//       ${allPaths
//         .map((url) => {
//           return `
//             <url>
//               <loc>${url}</loc>
//               <lastmod>${new Date().toISOString()}</lastmod>
//               <changefreq>monthly</changefreq>
//               <priority>1.0</priority>
//             </url>
//           `;
//         })
//         .join("")}
//     </urlset>
//   `;

//   res.setHeader("Content-Type", "text/xml");
//   res.write(sitemap);
//   res.end();

//   return {
//     props: {},
//   };
// };

// export default Sitemap;
