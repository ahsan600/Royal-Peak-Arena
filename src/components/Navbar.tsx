"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Games", href: "/games" },
  { name: "About", href: "/about" },
  { name: "Privacy", href: "/privacy" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 glass-effect border-b border-brand-text/5">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-secondary to-brand-accent flex items-center justify-center shadow-lg shadow-brand-secondary/20 group-hover:shadow-brand-secondary/40 transition-all duration-300">
              <span className="text-brand-text font-bold text-xl tracking-tighter">RP</span>
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block">
              Royal Peak <span className="text-brand-secondary">Arena</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? "bg-brand-text/10 text-brand-text"
                    : "text-brand-muted hover:text-brand-text hover:bg-brand-text/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-muted hover:text-brand-text p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-brand-surface border-b border-brand-text/5 absolute w-full">
          <div className="px-4 pt-2 pb-4 space-y-1 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  pathname === link.href
                    ? "bg-brand-text/10 text-brand-text"
                    : "text-brand-muted hover:text-brand-text hover:bg-brand-text/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
