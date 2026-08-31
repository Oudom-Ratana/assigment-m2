"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/UseInViewMotion";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp()}
          className="mb-5 text-[11px] tracking-[0.24em] text-[#6A040F]"
        >
          Visit Us
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp(0.1)}
          className="mb-6 font-serif text-3xl md:text-4xl"
        >
          We&apos;d Love to Welcome You
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp(0.2)}
          className="mx-auto max-w-md text-[15px] text-[#2B1E1A]/70"
        >
          Open daily, 11am – 10pm · #24 Street 240, Phnom Penh, Cambodia
        </motion.p>
      </div>
    </section>
  );
}