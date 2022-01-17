import Link from "next/link";
import React from "react";

function NotFoundPage() {
  return (
    <div>
      <h1>Opps....</h1>
      <h2> The Url you Tried to Access Does Not Exists</h2>
      <p>
        {"Go back to "}
        <Link href="/blog"> Home Page </Link>
      </p>
    </div>
  );
}

export default NotFoundPage;
