import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./BlogPreview.module.scss";

interface BlogPreviewProps {
  title: string;
  imageUrl: string;
  date: string;
  slug: string;
}

function BlogPreview(props: BlogPreviewProps) {
  const { title, imageUrl, date, slug } = props;
  return (
    <div className={styles.container}>
      <Image width={240} height={240} src={imageUrl} alt="This is the preview image of the blog" />
      <h1 className="font-bold underline"> what the fuck</h1>
      <div className={styles.blogPreviewDate}>{date}</div>
      <div className={styles.blogPreviewTitle}>{title}</div>
      <Link href={`/blog/${slug}`}> View Full Post</Link>
    </div>
  );
}

export default BlogPreview;
