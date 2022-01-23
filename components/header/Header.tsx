import Link from "next/link";
import React from "react";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/blog" passHref>
        <h3 className="cursor-pointer">Mohammad Faisal </h3>
      </Link>
    </header>
  );
}

export default Header;
