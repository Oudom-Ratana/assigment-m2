"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=1800&auto=format&fit=crop";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isTouch, setIsTouch] = useState(false);

  // parallax targets
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none), (pointer: coarse)").matches);
  }, []);

  const enhancedFX = !prefersReducedMotion && !isTouch;

  useEffect(() => {
    if (!enhancedFX) return;
    const el = heroRef.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      current.current = { x, y };
    };

    const loop = () => {
      setTilt((prev) => ({
        x: prev.x + (current.current.x - prev.x) * 0.06,
        y: prev.y + (current.current.y - prev.y) * 0.06,
      }));
      raf.current = requestAnimationFrame(loop);
    };

    el.addEventListener("mousemove", handleMove);
    raf.current = requestAnimationFrame(loop);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [enhancedFX]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative flex min-h-screen items-end overflow-hidden"
    >
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.2, 0.7, 0.1, 1] }}
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
          transform: enhancedFX
            ? `translate(${tilt.x * 8}px, ${tilt.y * 8}px)`
            : undefined,
        }}
        className="absolute inset-0 bg-cover bg-center"
      />

      {/* Burgundy overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(43,30,26,.55) 0%, rgba(106,4,15,.55) 55%, rgba(43,30,26,.75) 100%)",
        }}
      />

      {/* Decorative Khmer pattern */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 1, delay: 1.1 }}
        style={{
          transform: enhancedFX
            ? `translate(${tilt.x * 15}px, ${tilt.y * 15}px)`
            : undefined,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='none' stroke='%23FAF6F0' stroke-width='1'%3E%3Cpath d='M60 10c14 0 25 11 25 25s-11 25-25 25-25-11-25-25 11-25 25-25z'/%3E%3Cpath d='M60 35c7 0 12.5 5.5 12.5 12.5S67 60 60 60s-12.5-5.5-12.5-12.5S53 35 60 35z'/%3E%3Cpath d='M10 90c8-8 22-8 30 0M80 90c8-8 22-8 30 0'/%3E%3C/g%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
        }}
        className="pointer-events-none absolute -right-10 -top-10 h-72 w-72"
      />

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 1 }}
        style={{
          transform: enhancedFX
            ? `translate(${tilt.x * 4}px, ${tilt.y * 4}px)`
            : undefined,
        }}
        className="pointer-events-none absolute left-10 top-1/3 h-2 w-2 rounded-full bg-[#FAF6F0]"
      />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 md:pb-28 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.2, 0.7, 0.15, 1] }}
          className="mb-5 text-[11px] tracking-[0.28em] text-[#FAF6F0]/80"
        >
          Authentic Khmer Cuisine
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.32, ease: [0.2, 0.7, 0.15, 1] }}
          className="mb-6 font-serif text-[13vw] leading-[0.98] text-[#FAF6F0] sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          Discover the Soul
          <br />
          of Khmer Cuisine
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.2, 0.7, 0.15, 1] }}
          className="mb-6 text-xl text-[#FAF6F0]/85 md:text-2xl"
          lang="km"
        >
          ស្វែងយល់ពីរសជាតិខ្មែរ
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.66 }}
          className="mb-10 max-w-md text-[15px] leading-relaxed text-[#FAF6F0]/75"
        >
          Traditional Cambodian flavors, prepared with authentic ingredients
          and presented with a modern touch.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.82, ease: [0.2, 0.7, 0.15, 1] }}
          className="flex flex-wrap gap-4"
        >
          <MagneticLink href="#menu" enabled={enhancedFX} variant="primary">
            Explore Our Menu
          </MagneticLink>
          <MagneticLink href="#story" enabled={enhancedFX} variant="outline">
            Discover Our Story
          </MagneticLink>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 right-8 hidden flex-col items-center gap-2 text-[#FAF6F0]/60 md:flex"
      >
        <span className="text-[10px] tracking-[0.2em] [writing-mode:vertical-rl]">
          Scroll
        </span>
        <span className="h-10 w-px bg-[#FAF6F0]/40" />
      </motion.div>
    </section>
  );
}

function MagneticLink({
  href,
  children,
  enabled,
  variant,
}: {
  href: string;
  children: React.ReactNode;
  enabled: boolean;
  variant: "primary" | "outline";
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!enabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mx = e.clientX - (rect.left + rect.width / 2);
    const my = e.clientY - (rect.top + rect.height / 2);
    ref.current.style.transform = `translate(${mx * 0.18}px, ${my * 0.35}px)`;
  };

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  const base =
    "inline-block px-8 py-4 text-[13px] tracking-wide transition-[background-color,color,border-color,transform] duration-300";
  const styles =
    variant === "primary"
      ? "bg-[#6A040F] text-[#FAF6F0] border border-[#6A040F] hover:bg-[#8a0a17]"
      : "bg-transparent text-[#FAF6F0] border border-[#FAF6F0]/70 hover:bg-[#FAF6F0] hover:text-[#6A040F]";

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`${base} ${styles}`}
      style={{ willChange: "transform" }}
    >
      {children}
    </a>
  );
}