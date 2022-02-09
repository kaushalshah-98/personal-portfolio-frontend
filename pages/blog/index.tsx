import Head from "next/head";
import Link from "next/link";
import React from "react";
import BlogPreview from "../../components/blog-preview/BlogPreview";
import { getAllPosts } from "../../lib/blog-api";
import { TypeBlogDetails } from "../../types/TypeBlogDetails";
import { NextSeo } from "next-seo";

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
      <NextSeo
        title={`Blog | Mohammad Faisal`}
        canonical={`${process.env.NEXT_PUBLIC_PRODUCTION_ROOT_URL}/blog/`}
        description={"Technical blog written by Mohammad Faisal"}
        openGraph={{
          title: `Blog | Mohammad Faisal`,
          url: `${process.env.NEXT_PUBLIC_PRODUCTION_ROOT_URL}/blog/`,
          description: "Technical blog written by Mohammad Faisal",
          type: "article",
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_PRODUCTION_ROOT_URL}/static/profile.png`,
              width: 800,
              height: 600,
              alt: "Profile Image",
              type: "image/png",
            },
            {
              url: `${process.env.NEXT_PUBLIC_PRODUCTION_ROOT_URL}/static/profile.png`,
              width: 900,
              height: 800,
              alt: "Profile Image",
              type: "image/png",
            },
          ],
          site_name: "Mohammad Faisal's Blog",
        }}
      />

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
