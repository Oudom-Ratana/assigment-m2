"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/UseInViewMotion";

const INGREDIENTS = [
  {
    name: "Lemongrass",
    image:
      "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Kampot Pepper",
    image:
      "https://images.unsplash.com/photo-1599909533144-cd8c76ac6f52?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Galangal",
    image:
      "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Kaffir Lime",
    image:
      "https://images.unsplash.com/photo-1600326145359-3a44909d1a39?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Turmeric",
    image:
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Coconut",
    image:
      "https://images.unsplash.com/photo-1580984969071-a8da5656c2fb?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Fresh Herbs",
    image:
      "https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Rice",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=500&auto=format&fit=crop",
  },
];

export default function Ingredients() {
  return (
    <section id="ingredients" className="py-28 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 max-w-xl">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp()}
            className="mb-4 font-serif text-4xl md:text-5xl"
          >
            Flavors of Cambodia
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp(0.1)}
            className="text-[15px] text-[#2B1E1A]/70"
          >
            The ingredients that define every Khmer Table dish.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
          {INGREDIENTS.map((ing, i) => (
            <motion.div
              key={ing.name}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={fadeUp((i % 4) * 0.1)}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden"
              style={{ aspectRatio: "3/4" }}
            >
              <img
                src={ing.image}
                alt={ing.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(43,30,26,0) 35%, rgba(43,30,26,.82) 100%)",
                }}
              />
              <span className="absolute bottom-3.5 left-4 font-serif text-lg text-[#FAF6F0] transition-transform duration-300 group-hover:-translate-y-1">
                {ing.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}