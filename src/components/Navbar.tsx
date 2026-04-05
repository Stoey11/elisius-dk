"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Forside", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Cases", href: "/cases" },
  { label: "Om Elisius", href: "/om" },
  { label: "Pris", href: "/pris" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span className="text-indigo-600">elisius</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-gray-900 transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/book"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
        >
          Book Gratis AI Sparring
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 pb-4">
          <ul className="flex flex-col gap-3 py-3 text-sm font-medium text-gray-600">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setOpen(false)} className="block py-1">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white"
          >
            Book Gratis AI Sparring
          </Link>
        </div>
      )}
    </header>
  );
}
