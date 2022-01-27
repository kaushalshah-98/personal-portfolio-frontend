import React from "react";

interface ArticleTagProps {
  title: string;
}

export default function ArticleTag({ title }: ArticleTagProps) {
  return <div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">{title}</div>;
}
