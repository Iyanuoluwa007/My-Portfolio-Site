"use client";
import Link from "next/link";

export default function Nav() {
  const Item = ({ href, label }) => (
    <Link
      href={href}
      className="px-3 py-2 rounded-md text-sm text-light/90 hover:text-white hover:bg-white/10 transition"
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-dark/70 border-b border-white/10">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3">
        <Link href="#home" className="font-bold text-white">IO</Link>
        <div className="flex gap-2">
          <Item href="#about" label="About" />
          <Item href="#projects" label="Projects" />
          <Item href="#contact" label="Contact" />
        </div>
      </nav>
    </header>
  );
}
