"use client";

import { motion } from "framer-motion";
import { fadeUp, scaleIn, viewportOnce } from "@/lib/UseInViewMotion";

export default function LocalSourcing() {
  return (
    <section className="bg-white/40 py-28 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <div className="order-2 lg:order-1">
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp()}
            className="mb-5 text-[11px] tracking-[0.24em] text-[#6A040F]"
          >
            Where It Begins
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp(0.1)}
            className="mb-7 font-serif text-4xl leading-[1.08] md:text-5xl"
          >
            From Local Farms
            <br />to Your Table
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp(0.2)}
            className="mb-9 max-w-md text-[15px] leading-relaxed text-[#2B1E1A]/80"
          >
            We believe great Khmer food begins with great ingredients —
            sourced from farmers across Kampot, Kandal, and Battambang who
            grow the way their families always have.
          </motion.p>

          <motion.a
            href="#ingredients"
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp(0.3)}
            className="inline-block border border-[#6A040F]/30 px-8 py-4 text-[13px] tracking-wide text-[#6A040F] transition-colors duration-300 hover:bg-[#6A040F] hover:text-[#FAF6F0]"
          >
            Discover Our Ingredients
          </motion.a>
        </div>

        <div className="order-1 grid grid-cols-2 gap-4 lg:order-2">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={scaleIn()}
            className="col-span-2 overflow-hidden"
            style={{ aspectRatio: "16/9" }}
          >
            <img
              src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=1100&auto=format&fit=crop"
              alt="Rice paddies in the Cambodian countryside"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={scaleIn(0.1)}
            className="overflow-hidden"
            style={{ aspectRatio: "3/4" }}
          >
            <img
              src="https://images.unsplash.com/photo-1595855709940-16db5ed19d55?q=80&w=700&auto=format&fit=crop"
              alt="Farmer harvesting fresh produce"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={scaleIn(0.2)}
            className="overflow-hidden"
            style={{ aspectRatio: "3/4" }}
          >
            <img
              src="https://images.unsplash.com/photo-1597362925123-77861d3fbac7?q=80&w=700&auto=format&fit=crop"
              alt="Fresh market produce"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}