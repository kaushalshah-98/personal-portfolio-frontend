import Head from "next/head";
import Link from "next/link";
import React from "react";
import BlogPreview from "../../components/blog-preview/BlogPreview";
import { getPosts } from "../posts";
import styles from "./BlogPage.module.scss";

export const getStaticProps = async () => {
  const postList = await getPosts();
  return {
    props: {
      posts: postList,
    },
  };
};

const imageUrl =
  "https://images.unsplash.com/photo-1642356407175-5c3d00870d61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80";

function BlogPage({ posts }: any) {
  console.log("posts are ", posts);
  return (
    <>
      <Head>
        <title>Blog | Mohammad Faisal</title>
      </Head>
      <div className={styles.container}>
        {posts.map((blogItem: any) => (
          <BlogPreview
            key={blogItem.slug}
            slug={blogItem.slug}
            title={blogItem.frontmatter.title}
            imageUrl={imageUrl}
            date={blogItem.frontmatter.date}
          />
        ))}
      </div>
    </>
  );
}

export default BlogPage;
