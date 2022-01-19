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
    <div className="flex justify-center flex-wrap">
      <article className="my-10 prose lg:prose-xl">
        <h1>{title}</h1>
        <Markdown
          className="w-500"
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
      <BuyMeACoffeeWidget />
    </div>
  );
}

export default BlogDetails;