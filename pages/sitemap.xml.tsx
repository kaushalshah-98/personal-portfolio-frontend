import * as fs from "fs";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { getPostSlugs } from "../lib/blog-api";

const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }: GetServerSidePropsContext): Promise<any> => {
  try {
    const BASE_URL =
      process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_PRODUCTION_ROOT_URL : "http://localhost:3000";

    const otherPaths: string[] = fs
      .readdirSync("pages")
      .filter((staticPage) => {
        return ![
          "api",
          "profile",
          "index.tsx",
          "_app.tsx",
          "_error.tsx",
          "_document.tsx",
          "404.tsx",
          "sitemap.xml.tsx",
        ].includes(staticPage);
      })
      .map((staticPagePath) => {
        return `${BASE_URL}/${staticPagePath}`;
      });

    const postPaths: string[] = fs.readdirSync("_posts").map((staticPagePath) => {
      return `${BASE_URL}/blog/${staticPagePath.replace(".md", "")}`;
    });

    const allPaths = [BASE_URL, ...postPaths, ...otherPaths];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allPaths
      .map((url) => {
        return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
      })
      .join("")}
    </urlset>
  `;

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();

    return {
      props: {},
    };
  } catch (err) {
    console.log(err);
  }
};

export default Sitemap;
