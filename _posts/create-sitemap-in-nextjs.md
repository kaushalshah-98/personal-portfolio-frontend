---
title: "Create Sitemap in NextJS"
description: "How to create sitemap for search engines in Nextjs"
banner: "/images/posts/create-sitemap-in-nextjs/banner.jpeg"
tags: ["NextJS"]
date: 4 January 2022
---

# How to Create Sitemaps with NextJS

### Let’s learn how to easily add static and dynamic sitemaps for our NextJS websites.

![](/images/posts/create-sitemap-in-nextjs/banner.jpeg)

A Sitemap is an important part of SEO for any public-facing website. This is basically a list of URLs that you want to be crawled by google bots for indexing.

Ideally, if you structure your website properly, your websites should be crawled and indexed by the google bots automatically without any sitemap. But there is no point making google bots' life easier.

`NextJS` makes it really easy for us to achieve this. So let’s see how to add a sitemap to your `NextJS` project.

## Why Sitemap?

The sitemap is a roadmap for your website. It tells others about the important pages of your website.

There are some URLs that are more accessible than others on your website. And you don’t want to leave them behind in SEO. A Sitemap can help with that.

It’s also a best practice to include with any site as you never know how Google Bots do their job. So it never hurts to add a sitemap to a website.

## Step 1: Initialize the project

Run the following command to initialize an empty `Nextjs` project

```
yarn create next-app sitemap-demo
```

Then go into the project directory.

## Step 2: Create `Sitemap` Component

Go inside your project, and you will see there is already a folder named `pages` . And the files under this folder become the URL path for us.

So the `about.jsx` file becomes `http://BASE_URL/about` .

We want our sitemap to be located on `http://BASE_URL/sitemap.xml` path.

So go into the `pages` folder and create a new file named `sitemap.xml.jsx` . Or `.tsx` if you are using typescript. And add the following code there.

```javascript
import React from "react";

const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  const BASE_URL = "http://localhost:3000";

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      // our URL's will go here
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
```

Now, this file is a component that returns null because we don’t want to return or render anything inside this component.

However, we want to take advantage of the `getServerSideProps` function available inside the component. We know that this function gets called once we hit the URL.

So we want to prepare our sitemap when someone tries to access the URL and return it. The base URL is `http://localhost:3000` but you will obviously change it with your production URL.

Notice we are setting the header type to indicate that this is going to be an XML file

```js
res.setHeader("Content-Type", "text/xml");
```

## Step 3: Actually creating the sitemap

We already discussed that the files under the `pages` directory automatically become our URLs to the pages.

So we will take advantage of this concept and generate the URLs dynamically for the actual pages.

Note that we don’t have any URL created for some custom pages in NextJS like `_document.js` , `_app.js` and `404.js` and also no path for our `api` the folder that was automatically created for us while creating the application.

```js
import * as fs from "fs";

const staticPaths = fs
  .readdirSync("pages")
  .filter((staticPage) => {
    return !["api", "_app.js", "_document.js", "404.js", "sitemap.xml.js"].includes(staticPage);
  })
  .map((staticPagePath) => {
    return `${BASE_URL}/${staticPagePath}`;
  });
```

However, we may have some dynamic pages as well. Let’s say we have our product details page. Something like `/product/{productId}` .

And we definitely want google bot’s to crawl those pages, too, right? But how are these pages generated?

We usually have an API or something from where we can get the whole products list, and using that ID; we can predict the URL for that.

```javascript
// example product = {
//   id: 2123,
//   name: "Fantastic Product",
//   price: 12.4
// }

const products = await getAllProducts(); // some remote API call maybe!

const dynamicPaths = products.map((singleProduct) => {
  return `${BASE_URL}/product/${singleProduct.id}`;
});
```

So now we have our `staticPaths` and the `dynamicPaths` . Let’s combine those two and generate the actual sitemap.

Remember the place that we left empty when we started working? Let’s get back there and generate the contents for the `sitemap.xml`

```js
const allPaths = [...staticPaths, ...dynamicPaths];

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
```

So here we just go over all the paths and generate the URL for us.

Now run the project and go over `localhost://3000/sitemap.xml` and you should see something like this

![](/images/posts/create-sitemap-in-nextjs/1.png)

Exactly the way we wanted it.

So That’s it. Play around and make necessary changes according to your needs.

Have a Great Day! :D

## Github Repo:

https://github.com/Mohammad-Faisal/nextjs-sitemap-demo
