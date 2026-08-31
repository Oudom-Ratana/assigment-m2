"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/UseInViewMotion";

const PATTERN_URL =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='none' stroke='%23FAF6F0' stroke-width='1'%3E%3Cpath d='M60 10c14 0 25 11 25 25s-11 25-25 25-25-11-25-25 11-25 25-25z'/%3E%3Cpath d='M60 35c7 0 12.5 5.5 12.5 12.5S67 60 60 60s-12.5-5.5-12.5-12.5S53 35 60 35z'/%3E%3Cpath d='M10 90c8-8 22-8 30 0M80 90c8-8 22-8 30 0'/%3E%3C/g%3E%3C/svg%3E\")";

export default function Culture() {
  return (
    <section
      id="culture"
      className="relative overflow-hidden py-32 md:py-40"
      style={{ background: "#6A040F" }}
    >
      <motion.div
        aria-hidden
        animate={{ y: [0, -14, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 opacity-10"
        style={{ backgroundImage: PATTERN_URL, backgroundRepeat: "repeat" }}
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 12, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -bottom-16 -right-10 h-72 w-72 opacity-10"
        style={{ backgroundImage: PATTERN_URL, backgroundRepeat: "repeat" }}
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp()}
          className="mb-6 text-[11px] tracking-[0.24em] text-[#FAF6F0]/70"
        >
          Heritage
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp(0.1)}
          className="mb-6 font-serif text-4xl text-[#FAF6F0] md:text-6xl"
        >
          The Taste of Cambodia
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp(0.2)}
          className="mb-8 text-2xl text-[#FAF6F0]/85 md:text-3xl"
          lang="km"
        >
          រសជាតិខ្មែរ
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp(0.3)}
          className="mx-auto max-w-md text-[15px] leading-relaxed text-[#FAF6F0]/75"
        >
          Khmer flavor is a story of home, heritage, and generations.
        </motion.p>
      </div>
    </section>
  );
}