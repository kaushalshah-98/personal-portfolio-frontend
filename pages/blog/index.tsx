import Head from "next/head";
import Link from "next/link";
import React from "react";
import BlogPreview from "../../components/blog-preview/BlogPreview";
import { getAllPosts } from "../../lib/blog-api";
import { TypeBlogDetails } from "../../types/TypeBlogDetails";

export const getStaticProps = async () => {
  const postList: TypeBlogDetails[] = getAllPosts();

  return {
    props: {
      posts: postList,
    },
  };
};

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
      </div>
    </>
  );
}

export default BlogPage;
