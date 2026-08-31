"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/UseInViewMotion";

const STEPS = [
  {
    number: "01",
    title: "Choose Your Dish",
    description:
      "Browse our signature Khmer dishes, from bright salads to slow-cooked curries.",
  },
  {
    number: "02",
    title: "We Prepare It",
    description:
      "Each order is prepared fresh, using traditional techniques and local ingredients.",
  },
  {
    number: "03",
    title: "Enjoy Khmer Flavor",
    description:
      "Savor an authentic taste of Cambodia, plated with a modern touch.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-28 md:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp()}
          className="mb-20 text-center font-serif text-4xl md:text-5xl"
        >
          How It Works
        </motion.h2>

        <div className="relative grid gap-y-16 md:grid-cols-3 md:gap-x-4">
          <div className="absolute left-[16.5%] right-[16.5%] top-6 hidden h-px bg-[#6A040F]/[0.14] md:block" />
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={viewportOnce}
            transition={{ duration: 1.1, ease: [0.2, 0.7, 0.15, 1] }}
            className="absolute left-[16.5%] top-6 hidden h-px bg-[#6A040F] md:block"
          />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={fadeUp(i * 0.2)}
              className="px-4 text-center"
            >
              <span className="mb-4 block font-serif text-5xl text-[#6A040F]/25">
                {step.number}
              </span>
              <h3 className="mb-3 font-serif text-xl">{step.title}</h3>
              <p className="mx-auto max-w-[220px] text-[13.5px] leading-relaxed text-[#2B1E1A]/70">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}