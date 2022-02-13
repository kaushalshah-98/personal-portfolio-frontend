import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaRegCopy, FaRegClipboard } from "react-icons/fa";

import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";

interface CodeBlockProps {
  className: string;
  children: string;
}

const CodeBlock = ({ className = "lang-javascript", children }: CodeBlockProps) => {
  const language = className.replace("lang-", "");

  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, []);

  const isSingle = children.split(" ").length === 1;

  if (isSingle) return <code>{children}</code>;

  return (
    <div className="flex flex-col not-prose">
      <CopyToClipboard text={children} onCopy={() => setIsCopied(true)}>
        <button className="flex self-center">
          {isCopied ? <FaRegClipboard className="mx-2 self-center" /> : <FaRegCopy className="mx-2 self-center" />}{" "}
          {isCopied ? "Copied!" : "Copy to Clipboard"}
        </button>
      </CopyToClipboard>

      <pre>
        <code className={`language-${language}`}>{children}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
