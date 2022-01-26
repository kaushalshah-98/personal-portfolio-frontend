import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogPreviewProps {
  title: string;
  imageUrl: string;
  date: string;
  slug: string;
}

function BlogPreview(props: BlogPreviewProps) {
  const { title, imageUrl, date, slug } = props;
  return (
    <Link href={`/blog/${slug}`} passHref>
      <div className="flex flex-col gap-2 hover:cursor-pointer">
        <Image width={500} height={300} src={imageUrl} alt="This is the preview image of the blog" />
        <div className="text-lg">{date}</div>
        <div className="text-2xl">{title}</div>
        View Full Post
      </div>
    </Link>
  );
}

export default BlogPreview;
