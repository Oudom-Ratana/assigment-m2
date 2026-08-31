import Link from "next/link";
import { Moon, Sun } from "lucide-react";

const NAV_LINKS = ["Home", "Recipes", "Categories", "Bookmarks", "About", "Contact"];

export default function NavbarComponent() {
  return <header className="site-header"><div className="site-header__inner"><Link href="/" className="brand"><span className="brand__mark">✦</span><span>Tos<span>Nham</span></span></Link><nav className="site-nav" aria-label="Main navigation">{NAV_LINKS.map((label) => <Link key={label} href={label === "Home" ? "/" : `/${label.toLowerCase()}`} className={label === "About" ? "is-active" : ""}>{label}</Link>)}</nav><div className="site-header__actions"><button aria-label="Toggle theme"><Sun size={17} /><Moon size={15} /></button><Link href="/login" className="button button--primary">Login</Link></div></div></header>;
}
