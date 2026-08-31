import Link from "next/link";

const FOOTER_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

export default function FooterComponent() {
  return (
    <footer className="bg-[#241512] text-[#F5EFE4]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-10 sm:px-10">
        {/* Links */}
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#F5EFE4]/80 transition-colors hover:text-[#F5EFE4]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Social icons */}
        <div className="flex items-center gap-5">
          <a href="#" aria-label="Facebook" className="text-[#F5EFE4]/80 hover:text-[#F5EFE4]">
            <FacebookIcon className="h-4 w-4" />
          </a>
          <a href="#" aria-label="Instagram" className="text-[#F5EFE4]/80 hover:text-[#F5EFE4]">
            <InstagramIcon className="h-4 w-4" />
          </a>
          <a href="#" aria-label="TikTok" className="text-[#F5EFE4]/80 hover:text-[#F5EFE4]">
            <TikTokIcon className="h-4 w-4" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-[#F5EFE4]/60">
          Copyright © 2024 The Hungry Plum
        </p>
      </div>
    </footer>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H16.7V3.7C16.4 3.66 15.4 3.57 14.24 3.57c-2.33 0-3.93 1.42-3.93 4.03V9.9H7.6V13h2.71v8h3.19Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.5 3c.4 2.2 1.8 3.6 4 3.9v2.6c-1.4 0-2.7-.4-3.9-1.2v6.4c0 3-2.4 5.3-5.3 5.3S6 17.7 6 14.8c0-2.8 2.2-5.1 5-5.3v2.7c-1.3.2-2.3 1.3-2.3 2.6 0 1.5 1.2 2.7 2.7 2.7s2.7-1.2 2.7-2.7V3h2.4Z" />
    </svg>
  );
}