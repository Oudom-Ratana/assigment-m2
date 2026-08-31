"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/UseInViewMotion";

const TESTIMONIALS = [
  {
    name: "Sophea R.",
    quote:
      "The Fish Amok was incredible. Rich, fragrant, and beautifully presented.",
  },
  {
    name: "Daniel W.",
    quote:
      "Every dish tastes like it came straight from a Phnom Penh family kitchen.",
  },
  {
    name: "Chenda K.",
    quote:
      "The Lok Lak and jasmine rice were perfectly balanced. A true find.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white/40 py-28 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp()}
          className="mb-16 text-center font-serif text-4xl md:text-5xl"
        >
          What Our Guests Say
        </motion.h2>

        <div className="grid gap-7 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={fadeUp(i * 0.1)}
              whileHover={{ y: -6 }}
              className="group border border-[#6A040F]/[0.14] bg-[#FAF6F0] p-8 transition-shadow duration-300 hover:bg-white hover:shadow-[0_24px_46px_-22px_rgba(43,30,26,0.3)]"
            >
              <span className="mb-2 block font-serif text-4xl text-[#6A040F]/30 transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]">
                "
              </span>
              <p className="mb-6 text-[14.5px] leading-relaxed text-[#2B1E1A]/85">
                {t.quote}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{t.name}</span>
                <span className="text-xs text-[#6A040F]">★★★★★</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}