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
    <div className="flex flex-col">
      <Image width={240} height={240} src={imageUrl} alt="This is the preview image of the blog" />
      <div className="text-lg">{date}</div>
      <div className="text-2xl">{title}</div>
      <Link href={`/blog/${slug}`}> View Full Post</Link>
    </div>
  );
}

export default BlogPreview;
