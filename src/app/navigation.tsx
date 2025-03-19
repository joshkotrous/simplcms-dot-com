"use client";

import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 p-4 grid grid-cols-3 items-center">
      <h2 className="font-bold">SimplCMS</h2>
      <ul className="flex justify-center gap-4">
        <Link href="/">Home</Link>
        <Link href="https://docs.simplcms.com">Docs</Link>
      </ul>
      <div></div>
    </nav>
  );
}
