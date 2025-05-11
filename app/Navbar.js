"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-3 flex gap-4">
      <Link href="/">Home</Link>
      <Link href="/inspire">Inspire</Link>
      <Link href="/moods">Moods</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
