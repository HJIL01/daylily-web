"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const test = document.cookie;
    console.log(test);
  }, []);
  return <div>paasdsage</div>;
}
