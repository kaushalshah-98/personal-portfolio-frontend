import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from "next";
import React from "react";
import Markdown from "markdown-to-jsx";
import CodeBlock from "../../../components/code-block";
import { getPostBySlug, getPostSlugs } from "../../../lib/blog-api";
import { TypeBlogDetails } from "../../../types/TypeBlogDetails";
import BuyMeACoffeeWidget from "../../../components/widgets/BuyMeACoffeeWidget";

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
      content: postDetails.content,
    },
  };
};

interface BlogDetailsProps {
  title: string;
  date: string;
  content: string;
}

function BlogDetails({ title, date, content }: BlogDetailsProps) {
  return (
    <div className="flex justify-center">
      <article className="sm:break-normal my-10">
        <h1>{title}</h1>
        <Markdown
          className="prose prose-indigo  prose-sm sm:prose-base md:prose-lg xl:prose-xl 2xl:prose-2xl"
          options={{
            wrapper: "article",
            forceBlock: true,
            overrides: {
              code: {
                component: CodeBlock,
              },
            },
          }}
        >
          {content}
        </Markdown>
      </article>
      {/* <BuyMeACoffeeWidget /> */}
    </div>
  );
}

export default BlogDetails;
