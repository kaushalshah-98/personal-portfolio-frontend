---
title: "Production Checklist for NextJS"
description: "Techniques for a fast NextJS website"
banner: "/images/posts/production-checklist-for-nextjs/banner.jpeg"
tags: ["NextJS"]
date: 6 January 2022
---

# Production Checklist for NextJS

### Techniques for a fast NextJS website

![](/images/posts/production-checklist-for-nextjs/banner.jpeg)Photo by [Sourav Mishra](https://www.pexels.com/@photosbymishra?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels) from [Pexels](https://www.pexels.com/photo/grey-coupe-on-road-3136673/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels)

**Next.js** is an extension of already performant React. We use this awesome framework to create public-facing applications.

But often we fail to take advantage of the full potential of Next.js applications. Today we will see some optimizations that you can implement to the application before going into production.

Let’s get started.

## Route based code splitting

When you set up an application with create-next-app then automatically your application has a default code-splitting based on the routes of your application.

So when we create a new Next.js project using `create-next-app`

```sh
npx create-next-app my-app
```

It creates a folder named `/pages` where you can build pages using declarative routing. So let’s create two files under `/pages`

**/pages/home.jsx** ->`http:localhost:3000/home`

**/pages/about.jsx** ->`http:localhost:3000/about`

Now when you load your application the codes for the `home.jsx` is loaded only when you go to `http:localhost:3000/home` . So when any user visits the homepage of your application only the related javascript will be shipped.

So this is a great performance benefit by default that Next.js is providing us. But we can do even better!

## Component Code Splitting

You can further minimize the initial page size by dynamically importing the components of your application.

So let’s say inside your `home.jsx` you have another component. Normally what you do is

```js
import AnotherComponent from "../components/AnotherComponent.jsx";
```

And then use that inside the component

```js
export function HomePage() {
  return (
    <div>
      <AnotherComponent />
    </div>
  );
}
```

Now when your `HomePage` is loaded then immediately all of the components of your page get loaded with it. It can make the component unresponsive until it’s fully loaded. Which is bad for performance

But with the introduction of `dynamic` you now can dynamically import components

```js
import dynamic from "next/dynamic";
const AnotherComponent = dynamic(() => import("../components/AnotherComponent.jsx"));
```

So this can give you a huge performance bonus if used properly.

## Reducing the Image Size

If you have a lot of static images served by the component of your application you should reduce the size of the images.

There are lots of free services to do that online. the best one is [TinyPNG](https://tinypng.com/)

## Loading of the Image

Use the priority property of your image component to specify if it’s going to be loaded immediately or not.

By default, its value is set to false. But if you set it to true (not for every image) then Next.js will try to preload the image. Which will eventually reduce the time for FCP (First Contentful Paint)

```js
import Image from 'next/image'
.
.
.
<Image priority={true} src={"src-url"}/>
```

Do this only for the content that is above the fold.

## Fixed Image size

Images have 2 required properties named `width` and `length` and you should provide values for these 2 properties. They are defined in pixels. You can do this like the following.

```js
<Image width={450} height={300} src={"src-url"} />
```

The image size should be fixed to avoid CLS(cumulative layout shift).

## Optimizing the CSS

You don’t need all the CSS for the initial load. maybe you have used a component library like (Semantic UI or AntD) but used only a few components. Your application will still try to load the whole CSS of those libraries.

It can be super costly and harmful for an application.

There is a super cool tool that will remove unused CSS and it’s super easy to do with Next.js. Check out the [PurgeCSS](https://purgecss.com/guides/next.html)

This optimization will reduce the FCP (First contentful paint) time which is an important factor of Core Web Vitals.

## Optimizing the loading of the scripts

Many times you have to use external scripts inside your application. Maybe it’s a plugin to track your users or an external chat service like Olark.

But these scripts have no business in the first load of your application (most of the time).

For example, user tracking is only required only when users start interacting with the website. And for that, you will need to load the whole page anyway.

Try to use the `[<Script />](https://nextjs.org/docs/basic-features/script)` tags of Next.js and use lazyOnLoad to optimize the loading of the scripts (instead of the default `script`).

Specify the `strategy` property depending on the importance of the script. Possible values are

- `beforeInteractive` -> if the script is required before the page is interactive
- `afterInteractive` -> after the page is interactive
- `lazyOnLoad` -> load the script after the page loads.

There you go. These are the features that you can take advantage of in order to get a super performant Next.js application.

## Resources:

- [Code Split](https://web.dev/code-splitting-with-dynamic-imports-in-nextjs/)
- [Image](https://nextjs.org/docs/basic-features/image-optimization)
- [PurgeCSS](https://purgecss.com/guides/next.html)
