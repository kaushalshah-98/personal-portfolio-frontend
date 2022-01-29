import Image from "next/image";
import Link from "next/link";
import React from "react";
import ArticleTag from "./ArticleTag";

interface BlogPreviewProps {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  slug: string;
  tags: string[];
}

function BlogPreview(props: BlogPreviewProps) {
  const { title, description, imageUrl, tags, date, slug } = props;
  console.log(imageUrl);
  return (
    <Link href={`/blog/${slug}`} passHref>
      <div className="flex max-w-md pb-8 bg-white overflow-hidden shadow-lg flex-col gap-2 rounded-lg hover:cursor-pointer  transition ease-in-out duration-200 hover:scale-105">
        <Image
          objectFit="cover"
          width={400}
          height={200}
          src={imageUrl}
          alt="This is the preview image of the blog"
          className="rounded-t-md"
        />
        <div className="flex flex-wrap justify-starts items-center mt-4 px-4 mb-2">
          {tags.map((tag) => (
            <ArticleTag title={tag} key={tag} />
          ))}
        </div>

        <div className="text-gray-900 font-bold text-2xl px-4 py-2">{title}</div>
        <div className="text-gray-400 line-clamp-3 font-light text-xl px-4">{description}</div>
        <div className="font-medium px-4">{date}</div>
      </div>
    </Link>
  );
}

export default BlogPreview;
