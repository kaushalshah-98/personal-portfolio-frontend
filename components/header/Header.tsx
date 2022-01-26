import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="w-full no-prose text-center flex justify-betwen ">
      <Link href="/" passHref>
        <h2 className="cursor-pointer">Mohammad Faisal </h2>
      </Link>

      <div>
        <Link href="/blog" passHref>
          <h3 className="cursor-pointer">Blog </h3>
        </Link>
      </div>
    </header>
  );
}

export default Header;
