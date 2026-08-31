"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Food", href: "/food" },
  { label: "About Us", href: "/about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative z-50 bg-[#6A040F]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <LeafPlateMark className="h-8 w-8 shrink-0" />
          <span className="whitespace-nowrap font-serif text-lg font-semibold tracking-wide text-[#FAF6F0]">
            The Healthy Plate
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group relative py-2 text-sm transition-colors duration-200 ${
                link.label === "Home"
                  ? "text-[#FAF6F0]"
                  : "text-[#FAF6F0]/85 hover:text-[#FAF6F0]"
              }`}
            >
              {link.label}
              <span
                className={`pointer-events-none absolute bottom-1 left-0 h-px bg-[#FAF6F0] transition-all duration-300 ${
                  link.label === "Home" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/order"
          className="hidden shrink-0 items-center gap-2 rounded-md bg-[#FAF6F0] px-5 py-2.5 text-sm font-medium text-[#6A040F] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg lg:flex"
        >
          <BagIcon className="h-4 w-4" />
          Order Now
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex items-center justify-center lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <CloseIcon className="h-6 w-6 text-[#FAF6F0]" />
          ) : (
            <HamburgerIcon className="h-6 w-6 text-[#FAF6F0]" />
          )}
        </button>
      </div>

      {/* Mobile panel */}
      <div
        className={`overflow-hidden bg-[#FAF6F0] transition-[max-height] duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <div className="px-6 py-6">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 text-sm font-medium text-[#2B1E1A]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/order"
            className="mt-4 flex items-center justify-center gap-2 rounded-md bg-[#6A040F] px-5 py-3.5 text-sm font-medium text-[#FAF6F0] transition-transform duration-200 active:scale-[0.98]"
            onClick={() => setMobileOpen(false)}
          >
            <BagIcon className="h-4 w-4" />
            Order Now
          </Link>
        </div>
      </div>
    </header>
  );
}

/* ---------- Icons ---------- */

function LeafPlateMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="12" stroke="#FAF6F0" strokeWidth="1.6" />
      <path
        d="M16 8c2.5 0 4.5 2 4.5 4.5S18.5 17 16 17s-4.5-2-4.5-4.5S13.5 8 16 8Z"
        stroke="#FAF6F0"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function BagIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 8h12l-1 12H7L6 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

function HamburgerIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}