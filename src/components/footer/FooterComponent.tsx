"use client";

import { useState } from "react";
import Link from "next/link";
import { Camera, Mail } from "lucide-react";

export default function FooterComponent() {
  return <footer className="site-footer"><div className="site-footer__grid"><div><Link href="/" className="brand brand--light"><span className="brand__mark">✦</span><span>Tos<span>Nham</span></span></Link><p>Celebrating Cambodian cuisine, culture, and the stories behind every dish.</p><div className="footer-social"><Camera size={17} /><Mail size={17} /></div></div><div><h3>Quick links</h3><Link href="/">Home</Link><Link href="/recipes">Recipes</Link><Link href="/about">About us</Link><Link href="/contact">Contact</Link></div><div><h3>Categories</h3><Link href="/categories">Breakfast</Link><Link href="/categories">Main dishes</Link><Link href="/categories">Soups</Link><Link href="/categories">Desserts</Link></div><div><h3>Newsletter</h3><p>Get the latest recipes and stories from TosNham.</p><form className="newsletter"><input type="email" placeholder="Your email address" aria-label="Your email address" /><button aria-label="Subscribe">→</button></form></div></div><p className="site-footer__bottom">© 2025 TosNham. All rights reserved.</p></footer>;
}