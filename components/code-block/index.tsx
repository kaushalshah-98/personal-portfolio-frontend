import React, { useState, useEffect } from "react";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
// import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaRegCopy, FaRegClipboard } from "react-icons/fa";

import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
// import "./styles.css";

import { PrismLight, PrismAsyncLight } from "react-syntax-highlighter";

const SyntaxHighlighter = typeof window === "undefined" ? PrismLight : PrismAsyncLight;

// SyntaxHighlighter.registerLanguage("jsx", jsx);
// SyntaxHighlighter.registerLanguage("javascript", js);

interface CodeBlockProps {
  className: string;
  children: string;
}

const CodeBlock = ({ className = "lang-javascript", children }: CodeBlockProps) => {
  const language = className.replace("lang-", "");

  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="flex flex-col no-prose">
      <CopyToClipboard text={children} onCopy={() => setIsCopied(true)}>
        <button className="flex self-center">
          {isCopied ? <FaRegClipboard className="mx-2 self-center" /> : <FaRegCopy className="mx-2 self-center" />}{" "}
          {isCopied ? "Copied!" : "Copy to Clipboard"}
        </button>
      </CopyToClipboard>

      {/* <SyntaxHighlighter language={language} style={atomDark} showLineNumbers={false}>
        {children}
      </SyntaxHighlighter> */}

      <pre>
        <code className={`language-${language}`}>{children}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
