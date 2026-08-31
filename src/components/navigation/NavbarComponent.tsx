import Link from "next/link";

const NAV_LINKS = [
  { label: "Our Menu", href: "/menu" },
  { label: "Local Sourcing", href: "/sourcing" },
  { label: "How It Works", href: "/how-it-works" },
];

export default function NavbarComponent() {
  return (
    <header className="bg-[#6E1E2A] text-[#F5EFE4]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <PlumMark className="h-9 w-9 shrink-0" />
          <span className="font-serif text-lg font-semibold leading-tight tracking-wide">
            The Hungry
            <br />
            Plum
          </span>
        </Link>

        {/* Nav links */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#F5EFE4]/90 transition-colors hover:text-[#F5EFE4]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/order"
          className="rounded-sm bg-[#F5EFE4] px-5 py-2 text-sm font-medium text-[#6E1E2A] transition-colors hover:bg-white"
        >
          Order Now
        </Link>
      </div>
    </header>
  );
}

function PlumMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="20" cy="22" r="14" stroke="#F5EFE4" strokeWidth="1.5" />
      <path
        d="M20 8c0-3 2-5 5-6"
        stroke="#F5EFE4"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M20 8c1.5-1.5 4-2 5-1"
        stroke="#F5EFE4"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}