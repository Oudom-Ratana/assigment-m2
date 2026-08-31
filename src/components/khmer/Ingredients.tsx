"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/UseInViewMotion";

const INGREDIENTS = [
  {
    name: "Lemongrass",
    image:
      "https://kroya.restaurant/media/pages/glossary/lemongrass/9e15e5e57d-1709213048/lemongrass-600x.jpg",
  },
  {
    name: "Kampot Pepper",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGDDxXFqkItYmK2k4V6-OJcF0f7LMG6CEiIG_BPwDnKQ&s=10",
  },
  {
    name: "Galangal",
    image:
      "https://img.magnific.com/free-photo/galangal-natural-herbal-is-natural-herbal-asia-white-wall_1150-21823.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "Kaffir Lime",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_0gf3NPyASIdVNYQllkzucGnvgcmBo2lhQA3yUkqLUeAV7XBKwgmXlgOq&s=10",
  },
  {
    name: "Turmeric",
    image:
      "https://walkaboutmonkey.com/wp-content/uploads/2019/05/turmeric-3-1024x682-optimized.jpg",
  },
  {
    name: "Coconut",
    image:
      "https://images.unsplash.com/photo-1580984969071-a8da5656c2fb?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Fresh Herbs",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9DFDeZiqBBRLutpCXIypYlwHPKiAlWUuFU2l-qgOfnh__u19G2KhYbPzO&s=10",
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