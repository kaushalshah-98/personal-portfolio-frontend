import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
SyntaxHighlighter.registerLanguage("jsx", jsx);

interface CodeBlockProps {
  className: string;
  children: string;
}

const CodeBlock = ({ className, children }: CodeBlockProps) => {
  const language = className.replace("lang-", "");

  return (
    <SyntaxHighlighter language={language} style={atomDark} showLineNumbers={true}>
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
