import Head from "next/head";
import React from "react";
import BlogPreview from "../../components/blog-preview/BlogPreview";
import styles from "./BlogPage.module.scss";

const listOfBlogs = [
  {
    title: "How to add Site maps to NextJS",
    imageUrl:
      "https://images.unsplash.com/photo-1642356407175-5c3d00870d61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    date: "10th December 2022",
  },
  {
    title: "How to add Google Analytics to NextJS",
    imageUrl:
      "https://images.unsplash.com/photo-1642356407175-5c3d00870d61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    date: "10th December 2022",
  },
  {
    title: "How to add Custom Fonts  to NextJS",
    imageUrl:
      "https://images.unsplash.com/photo-1642356407175-5c3d00870d61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    date: "10th December 2022",
  },
  {
    title: "How to add Lead Dyno to NextJS",
    imageUrl:
      "https://images.unsplash.com/photo-1642356407175-5c3d00870d61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    date: "10th December 2022",
  },
];

function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog | Mohammad Faisal</title>
      </Head>
      <div className={styles.container}>
        {listOfBlogs.map((blogItem) => (
          <BlogPreview
            key={blogItem.title}
            title={blogItem.title}
            imageUrl={blogItem.imageUrl}
            date={blogItem.date}
          />
        ))}
      </div>
    </>
  );
}

export default BlogPage;
