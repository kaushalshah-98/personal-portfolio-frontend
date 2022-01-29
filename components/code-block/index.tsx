import React, { useState } from "react";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaRegCopy, FaRegClipboard } from "react-icons/fa";

SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("javascript", js);

interface CodeBlockProps {
  className: string;
  children: string;
}

const CodeBlock = ({ className = "lang-javascript", children }: CodeBlockProps) => {
  const language = className.replace("lang-", "");

  const [isCopied, setIsCopied] = useState(false);

  return (
    <div className="flex flex-col no-prose">
      <CopyToClipboard text={children} onCopy={() => setIsCopied(true)}>
        <button className="flex self-center">
          {isCopied ? <FaRegClipboard className="mx-2 self-center" /> : <FaRegCopy className="mx-2 self-center" />}{" "}
          {isCopied ? "Copied!" : "Copy to Clipboard"}
        </button>
      </CopyToClipboard>

      <SyntaxHighlighter language={language} style={atomDark} showLineNumbers={true}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
