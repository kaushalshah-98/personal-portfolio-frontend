import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="no-prose text-center flex justify-between p-5 lg:p-8 bg-gray-50">
      <Link href="/" passHref>
        <div className="flex gap-2 align-center text-center">
          <Image src="/static/logo.png" alt="Profile Image" height="30" width="30" className="" />
          <h2 className="cursor-pointer text-lg xl:text-3xl md:text-2xl font-bold py-0.5">Mohammad Faisal </h2>
        </div>
      </Link>
      <div className="flex gap-4">
        <Link href="/blog" passHref>
          <h3 className="cursor-pointer text-xl hover:underline hover:underline-offset-2 transition duration-150">
            {"Blog"}
          </h3>
        </Link>
        {/* <Link href="/contact" passHref>
          <h3 className="cursor-pointer text-xl">Contact </h3>
        </Link>
        <Link href="/contact" passHref>
          <h3 className="cursor-pointer text-xl">Projects </h3>
        </Link>
        <Link href="/contact" passHref>
          <h3 className="cursor-pointer text-xl">Resume </h3>
        </Link>
        <Link href="/contact" passHref>
          <h3 className="cursor-pointer text-xl">Hire Me </h3>
        </Link> */}
      </div>
    </header>
  );
}

export default Header;
