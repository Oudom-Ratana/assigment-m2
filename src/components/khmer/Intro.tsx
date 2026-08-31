"use client";

import { motion } from "framer-motion";
import { fadeUp, clipReveal, viewportOnce } from "@/lib/UseInViewMotion";

export default function Intro() {
  return (
    <section id="story" className="relative overflow-hidden py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2 md:gap-20 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={clipReveal()}
          className="relative"
        >
          <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
            <img
              src="https://www.cambodiaembassyuk.org/wp-content/uploads/2023/11/Num-Banh-Chok-Khmer-768x564.jpg"
              alt="Traditional Khmer meal being prepared with fresh herbs and rice"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        <div>
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp()}
            className="mb-5 text-[11px] tracking-[0.24em] text-[#6A040F]"
          >
            The Khmer Table
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp(0.1)}
            className="mb-7 font-serif text-4xl leading-[1.08] md:text-5xl"
          >
            More Than Food.
            <br />A Story Passed Through Generations.
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp(0.2)}
            className="mb-7 h-0.5 w-16 bg-[#6A040F]"
          />

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp(0.2)}
            className="mb-5 max-w-md text-[15px] leading-relaxed text-[#2B1E1A]/80"
          >
            Khmer cuisine is built on balance — the sour brightness of
            tamarind, the warmth of galangal, the depth of prahok. Every
            family carries its own version of these recipes, refined over
            generations at home kitchens across Cambodia.
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp(0.3)}
            className="max-w-md text-[15px] leading-relaxed text-[#2B1E1A]/80"
          >
            From fragrant herbs to slow-cooked curries, Khmer cuisine carries
            generations of tradition in every dish.
          </motion.p>
        </div>
      </div>
    </section>
  );
}