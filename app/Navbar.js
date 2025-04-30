// components/Navbar.js
"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-3 flex gap-4">
      <Link href="/" className="hover:underline">Home</Link>
      <Link href="/inspire" className="hover:underline">Inspire</Link>
      <Link href="/moods" className="hover:underline">Moods</Link>
      <Link href="/settings" className="hover:underline">Settings</Link>
    </nav>
  );
}
