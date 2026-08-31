"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/UseInViewMotion";

const CTA_IMAGE =
  "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1800&auto=format&fit=crop";

export default function Cta() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [bgX, setBgX] = useState(50);

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    if (prefersReducedMotion || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    setBgX(50 + x * 6);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMove}
      className="relative bg-cover py-36 transition-[background-position] duration-300 ease-out md:py-44"
      style={{
        backgroundImage: `url(${CTA_IMAGE})`,
        backgroundPosition: `${bgX}% center`,
      }}
    >
      <div className="absolute inset-0" style={{ background: "rgba(106,4,15,.72)" }} />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp()}
          className="mb-6 font-serif text-4xl leading-[1.1] text-[#FAF6F0] md:text-6xl"
        >
          Bring the Taste of Cambodia to Your Table
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp(0.1)}
          className="mb-10 text-[15px] text-[#FAF6F0]/80"
        >
          Experience authentic Khmer flavors, made with care.
        </motion.p>
        <motion.a
          href="#menu"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp(0.2)}
          className="inline-block border border-[#FAF6F0]/70 px-9 py-4 text-[13px] tracking-wide text-[#FAF6F0] transition-colors duration-300 hover:bg-[#FAF6F0] hover:text-[#6A040F]"
        >
          Explore Our Menu
        </motion.a>
      </div>
    </section>
  );
}