const fs = require("fs");
const globby = require("globby");

function addPage(page) {
  const path = page.replace("_posts/", "").replace(".md", "").replace("pages/", "").replace(".tsx", "");
  const route = path === "/index" ? "" : path;
  return `<url>
    <loc>${`${process.env.NEXT_PUBLIC_PRODUCTION_ROOT_URL}/${route}`}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`;
}

async function generateSitemap() {
  let blogs = await globby(["_posts/"]);
  let pages = await globby([
    "pages/",
    "!pages/api/",
    "!pages/blog/[slug]",
    "!pages/_app.tsx",
    "!pages/_document.tsx",
    "!pages/_error.tsx",
    "!pages/404.tsx",
  ]);

  console.log("pages are ", pages);
  console.log("blogs are ", blogs);

  blogs = blogs.map((rawBlogName) => "blog" + rawBlogName.replace("_posts", "").replace(".md", ""));

  pages = pages.map((rawPageName) => rawPageName.replace("pages/", "").replace(".tsx", "").replace("index", ""));

  const allPages = [...pages, ...blogs];
  console.log("all apges ", allPages);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${allPages.map(addPage).join("\n")}
  </urlset>`;

  fs.writeFileSync("public/sitemap.xml", sitemap);
}
generateSitemap();
