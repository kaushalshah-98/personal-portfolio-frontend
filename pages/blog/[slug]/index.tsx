import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from "next";
import React from "react";
import { getPosts } from "../../posts";
import styles from "./BlogDetails.module.scss";
import Markdown from "markdown-to-jsx";
import CodeBlock from "../../../components/code-block";

export const getStaticPaths = (): GetStaticPathsResult => {
  const posts = getPosts();
  const paths = posts.map((post: any) => {
    return {
      params: {
        slug: post.slug,
      },
    };
  });
  return {
    paths,
    fallback: "blocking",
  };
};

interface BlogDetailsProps {
  postDetails: any;
}

export const getStaticProps = ({ params }: GetStaticPropsContext): GetStaticPropsResult<BlogDetailsProps> => {
  const posts = getPosts();
  const slug = params?.slug;

  const postToFind = posts.filter((item: any) => item.slug === slug);
  return {
    props: {
      postDetails: postToFind[0],
    },
  };
};

function BlogDetails({ postDetails }: BlogDetailsProps) {
  return (
    <div className={styles.container}>
      <Markdown
        className={styles.blog}
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
        {postDetails.body}
      </Markdown>
    </div>
  );
}

export default BlogDetails;
