"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/UseInViewMotion";

type Dish = {
  name: string;
  price: string;
  description: string;
  image: string;
};

const DISHES: Dish[] = [
  {
    name: "Fish Amok",
    price: "$12.00",
    description: "Fragrant steamed fish curry with coconut and Khmer herbs.",
    image:
      "https://images.unsplash.com/photo-1626200926749-93447cb00e57?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Beef Lok Lak",
    price: "$13.50",
    description:
      "Seared marinated beef tossed in a bright peppercorn-lime sauce.",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Bai Sach Chrouk",
    price: "$10.00",
    description:
      "Charcoal-grilled pork over broken rice with pickled vegetables.",
    image:
      "https://images.unsplash.com/photo-1617093727343-374698b1b08d?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Nom Banh Chok",
    price: "$9.50",
    description:
      "Fresh rice noodles in a green fish-based curry, topped with herbs.",
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Samlor Korko",
    price: "$11.00",
    description:
      "Cambodia's national soup — vegetables, herbs, and toasted rice.",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Khmer Red Curry",
    price: "$12.50",
    description:
      "A rich coconut curry layered with lemongrass and Kampot pepper.",
    image:
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=900&auto=format&fit=crop",
  },
];

export default function SignatureDishes() {
  return (
    <section id="menu" className="bg-white/40 py-28 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 max-w-xl">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp()}
            className="mb-4 font-serif text-4xl md:text-5xl"
          >
            Signature Khmer Dishes
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp(0.1)}
            className="text-[15px] text-[#2B1E1A]/70"
          >
            Traditional recipes. Authentic ingredients. Unforgettable
            flavors.
          </motion.p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {DISHES.map((dish, i) => (
            <DishCard key={dish.name} dish={dish} delay={(i % 3) * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DishCard({ dish, delay }: { dish: Dish; delay: number }) {
  const cardRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [glow, setGlow] = useState({ x: "50%", y: "50%" });
  const [tilt, setTilt] = useState({ rotX: 0, rotY: 0 });

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    if (prefersReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setGlow({ x: `${px * 100}%`, y: `${py * 100}%` });
    setTilt({ rotX: (0.5 - py) * 4, rotY: (px - 0.5) * 4 });
  };

  const handleLeave = () => setTilt({ rotX: 0, rotY: 0 });

  return (
    <motion.article
      ref={cardRef}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={fadeUp(delay)}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={{ y: -6 }}
      style={{
        transform: `perspective(800px) rotateX(${tilt.rotX}deg) rotateY(${tilt.rotY}deg)`,
        transition: "transform .5s cubic-bezier(.2,.7,.15,1), box-shadow .5s ease",
      }}
      className="group relative overflow-hidden border border-[#6A040F]/[0.14] bg-[#FAF6F0] hover:shadow-[0_26px_50px_-20px_rgba(43,30,26,0.35)]"
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
        <img
          src={dish.image}
          alt={dish.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(180deg, rgba(106,4,15,0) 40%, rgba(106,4,15,.55) 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(220px circle at ${glow.x} ${glow.y}, rgba(106,4,15,.14), transparent 60%)`,
          }}
        />
      </div>

      <div className="p-6">
        <div className="mb-2 flex items-baseline justify-between">
          <h3 className="font-serif text-xl">{dish.name}</h3>
          <span className="text-sm text-[#6A040F]">{dish.price}</span>
        </div>
        <p className="mb-5 text-[13.5px] leading-relaxed text-[#2B1E1A]/70">
          {dish.description}
        </p>
        <a
          href="#"
          className="inline-flex translate-y-[46px] items-center gap-2 border-b border-[#6A040F] pb-1 text-[12px] tracking-wide text-[#6A040F] transition-transform duration-450 group-hover:translate-y-0"
        >
          View Dish{" "}
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-[5px]">
            →
          </span>
        </a>
      </div>
    </motion.article>
  );
}