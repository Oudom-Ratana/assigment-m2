"use client";

import { useState } from "react";
import Link from "next/link";

const MENU_LINKS = [
  { label: "Browse All Dishes", href: "/menu" },
  { label: "Signature Dishes", href: "/menu/signature" },
  { label: "Dietary Options", href: "/menu/dietary" },
  { label: "Seasonal Specials", href: "/menu/seasonal" },
];

const SOURCING_LINKS = [
  { label: "Our Local Partners", href: "/sourcing/partners" },
  { label: "Sustainability", href: "/sourcing/sustainability" },
  { label: "Farm to Table", href: "/sourcing/farm-to-table" },
];

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/about/team" },
  { label: "Careers", href: "/careers" },
  { label: "Press", href: "/press" },
];

const CARE_LINKS = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Delivery & Returns", href: "/delivery-returns" },
  { label: "FAQs", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];

const BOTTOM_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    // Wire this up to your email provider / API route.
    setEmail("");
  }

  return (
    <footer className="bg-[#6A040F] text-[#FAF6F0]">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr_0.8fr] md:gap-8">
          {/* Brand */}
          <div className="md:pr-6">
            <Link href="/" className="flex items-center gap-2.5">
              <LeafPlateMark className="h-8 w-8 shrink-0" />
              <span className="font-serif text-lg font-semibold tracking-wide text-[#FAF6F0]">
                Tos nham
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#FAF6F0]/70">
              Artisanal comfort food, delivered to your door. Made with love
              and locally sourced ingredients.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <SocialLink label="Facebook">
                <FacebookIcon className="h-4 w-4" />
              </SocialLink>
              <SocialLink label="Instagram">
                <InstagramIcon className="h-4 w-4" />
              </SocialLink>
              <SocialLink label="TikTok">
                <TikTokIcon className="h-4 w-4" />
              </SocialLink>
              <SocialLink label="X">
                <XIcon className="h-4 w-4" />
              </SocialLink>
            </div>
              <img src="" alt="" />
          </div>

          <FooterColumn title="Local Sourcing" links={SOURCING_LINKS} />
          <FooterColumn title="Company" links={COMPANY_LINKS} />
          <FooterColumn title="Customer Care" links={CARE_LINKS} />
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#FAF6F0]/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-6 text-xs text-[#FAF6F0]/60 sm:px-8 md:flex-row md:justify-between">
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 order-2 md:order-1">
            {BOTTOM_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative transition-colors duration-200 hover:text-[#FAF6F0]"
              >
                {link.label}
                <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-[#FAF6F0] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <p className="order-1 md:order-2">
            © 2026 The Healthy Plate. All rights reserved.
          </p>

          <div className="order-3 flex items-center gap-2">
            <PaymentBadge>Visa</PaymentBadge>
            <PaymentBadge>Mastercard</PaymentBadge>
            <PaymentBadge>PayPal</PaymentBadge>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Subcomponents ---------- */

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-[#FAF6F0]">{title}</h4>
      <ul className="mt-4 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group relative text-sm text-[#FAF6F0]/70 transition-colors duration-200 hover:text-[#FAF6F0]"
            >
              {link.label}
              <span className="pointer-events-none absolute -bottom-0.5 left-0 h-px w-0 bg-[#FAF6F0] transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-[#FAF6F0]/20 text-[#FAF6F0]/80 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#FAF6F0]/50 hover:text-[#FAF6F0]"
    >
      {children}
    </a>
  );
}

function PaymentBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded border border-[#FAF6F0]/15 px-2 py-1 text-[10px] font-medium tracking-wide text-[#FAF6F0]/60">
      {children}
    </span>
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

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4 4l7.2 9.6L4.4 20H7l5.4-5.8L16.8 20H20l-7.5-10L19.6 4H17l-5 5.4L8 4H4Z" />
    </svg>
  );
}
import { Camera, Mail } from "lucide-react";

export default function FooterComponent() {
  return <footer className="site-footer"><div className="site-footer__grid"><div><Link href="/" className="brand brand--light"><span className="brand__mark">✦</span><span>Tos<span>Nham</span></span></Link><p>Celebrating Cambodian cuisine, culture, and the stories behind every dish.</p><div className="footer-social"><Camera size={17} /><Mail size={17} /></div></div><div><h3>Quick links</h3><Link href="/">Home</Link><Link href="/recipes">Recipes</Link><Link href="/about">About us</Link><Link href="/contact">Contact</Link></div><div><h3>Categories</h3><Link href="/categories">Breakfast</Link><Link href="/categories">Main dishes</Link><Link href="/categories">Soups</Link><Link href="/categories">Desserts</Link></div><div><h3>Newsletter</h3><p>Get the latest recipes and stories from TosNham.</p><form className="newsletter"><input type="email" placeholder="Your email address" aria-label="Your email address" /><button aria-label="Subscribe">→</button></form></div></div><p className="site-footer__bottom">© 2025 TosNham. All rights reserved.</p></footer>;
}
