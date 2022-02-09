import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from "next";
import React from "react";
import Markdown from "markdown-to-jsx";
import CodeBlock from "../../../components/code-block";
import { getPostBySlug, getPostSlugs } from "../../../lib/blog-api";
import { TypeBlogDetails } from "../../../types/TypeBlogDetails";
import BuyMeACoffeeWidget from "../../../components/widgets/BuyMeACoffeeWidget";
import { NextSeo } from "next-seo";

export const getStaticPaths = (): GetStaticPathsResult => {
  const posts = getPostSlugs();
  const paths = posts.map((postSlug: string) => {
    return {
      params: {
        slug: postSlug.replace(".md", ""),
      },
    };
  });
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = ({ params }: GetStaticPropsContext): GetStaticPropsResult<BlogDetailsProps> => {
  const slug = params?.slug ?? "";
  const postDetails = getPostBySlug(slug.toString());

  return {
    props: {
      title: postDetails.data.title,
      date: postDetails.data.date,
      description: postDetails.data.description,
      slug: postDetails.slug,
      content: postDetails.content,
      tags: postDetails.data.tags,
      banner: postDetails.data.banner,
    },
  };
};

interface BlogDetailsProps {
  title: string;
  date: string;
  content: string;
  description: string;
  slug: string;
  tags: string[];
  banner: string;
}

function BlogDetails({ banner, title, tags, date, slug, description, content }: BlogDetailsProps) {
  return (
    <>
      <NextSeo
        title={`${title} | Mohammad Faisal`}
        canonical={`${process.env.NEXT_PUBLIC_PRODUCTION_ROOT_URL}/blog/${slug}`}
        description={description}
        openGraph={{
          title: `${title} | Mohammad Faisal`,
          url: `${process.env.NEXT_PUBLIC_PRODUCTION_ROOT_URL}/blog/${slug}`,
          description: description,
          type: "article",
          article: {
            publishedTime: date,
            // modifiedTime: date,
            // expirationTime: date,
            section: "Technology",
            authors: [`${process.env.NEXT_PUBLIC_PRODUCTION_ROOT_URL}`],
            tags: tags,
          },
          images: [
            {
              url: banner,
              width: 800,
              height: 600,
              alt: title,
              type: "image/jpeg",
            },
            {
              url: banner,
              width: 900,
              height: 800,
              alt: title,
              type: "image/jpeg",
            },
          ],
          site_name: "Mohammad Faisal's Portfolio",
        }}
      />
      <div className="flex justify-center">
        <article className="sm:break-normal my-10 mx-10 prose prose-indigo prose-base md:prose-lg xl:prose-xl 2xl:prose-xl">
          <Markdown
            options={{
              wrapper: "article",
              forceBlock: false,
              // overrides: {
              //   code: {
              //     component: CodeBlock,
              //   },
              // },
            }}
          >
            {content}
          </Markdown>
        </article>
        {/* <BuyMeACoffeeWidget /> */}
      </div>
    </>
  );
}

export default BlogDetails;
