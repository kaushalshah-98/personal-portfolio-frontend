import Head from "next/head";
import Link from "next/link";
import React from "react";
import BlogPreview from "../../components/blog-preview/BlogPreview";
import { getAllPosts } from "../../lib/blog-api";
import { TypeBlogDetails } from "../../types/TypeBlogDetails";

export const getStaticProps = async () => {
  const postList: TypeBlogDetails[] = getAllPosts();
  console.log(postList);

  return {
    props: {
      posts: postList,
    },
  };
};

const imageUrl =
  "https://images.unsplash.com/photo-1642356407175-5c3d00870d61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80";

interface BlogPageProps {
  posts: TypeBlogDetails[];
}

function BlogPage({ posts }: BlogPageProps) {
  return (
    <>
      <Head>
        <title>Blog | Mohammad Faisal</title>
      </Head>
      <div className="flex flex-wrap p-5 gap-5  justify-evenly bg-gray-50">
        {posts.map((blogItem: TypeBlogDetails) => (
          <BlogPreview
            key={blogItem.slug}
            slug={blogItem.slug}
            title={blogItem.data.title}
            description={blogItem.data.description}
            imageUrl={blogItem.data.banner}
            tags={blogItem.data.tags}
            date={blogItem.data.date}
          />
        ))}
        {/* {posts.map((blogItem: TypeBlogDetails) => (
          <BlogPreview
            key={blogItem.slug}
            slug={blogItem.slug}
            title={blogItem.data.title}
            imageUrl={imageUrl}
            date={blogItem.data.date}
          />
        ))} */}
      </div>
    </>
  );
}

export default BlogPage;
