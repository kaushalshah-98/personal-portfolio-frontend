import React from "react";
import * as fs from "fs";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";

const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({
  res,
}: GetServerSidePropsContext): Promise<GetServerSidePropsResult<Record<string, string>>> => {
  const BASE_URL = "http://localhost:3000";

  const otherPaths: string[] = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return !["api", "blog", "posts", "index.tsx", "_app.tsx", "_document.tsx", "404.tsx", "sitemap.xml.tsx"].includes(
        staticPage
      );
    })
    .map((staticPagePath) => {
      return `${BASE_URL}/${staticPagePath}`;
    });

  const postPaths: string[] = fs
    .readdirSync("pages/posts")
    .filter((staticPage) => {
      return !["index.ts"].includes(staticPage);
    })
    .map((staticPagePath) => {
      const pathToReturn = `${BASE_URL}/${staticPagePath}`;
      return pathToReturn.substring(0, pathToReturn.length - 3);
    });

  const allPaths = [...postPaths, ...otherPaths];

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
};

export default Sitemap;
