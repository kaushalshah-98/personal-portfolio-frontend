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
  const pages = await globby(["_posts/", "pages", "!pages/api"]);
  console.log("pages", pages);

  const paths = pages.map(addPage).join("\n");
  const ROOT = process.env.NEXT_PUBLIC_PRODUCTION_ROOT_URL;

  const pathsWithExtra = [ROOT, `${ROOT}/blog`, ...paths];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages.map(addPage).join("\n")}
  </urlset>`;

  fs.writeFileSync("public/sitemap.xml", sitemap);
}
generateSitemap();
