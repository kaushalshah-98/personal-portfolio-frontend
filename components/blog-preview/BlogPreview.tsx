import Image from "next/image";
import React from "react";
import styles from "./BlogPreview.module.scss";

interface BlogPreviewProps {
  title: string;
  imageUrl: string;
  date: string;
}

function BlogPreview(props: BlogPreviewProps) {
  const { title, imageUrl, date } = props;
  return (
    <div className={styles.container}>
      <Image
        width={240}
        height={240}
        src={imageUrl}
        alt="This is the preview image of the blog"
      />
      <div className={styles.blogPreviewDate}>{date}</div>
      <div className={styles.blogPreviewTitle}>{title}</div>
    </div>
  );
}

export default BlogPreview;
