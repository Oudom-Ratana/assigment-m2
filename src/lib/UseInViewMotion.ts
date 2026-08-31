// Shared Framer Motion variants for scroll-reveal sections.
// Import into any khmer component: import { fadeUp, fadeIn, scaleIn, clipReveal, viewportOnce } from "@/lib/useInViewMotion";

import type { Variants } from "framer-motion";

export const viewportOnce = { once: true, margin: "-60px 0px -60px 0px" };

// Cubic-bezier tuple, typed `as const` so TS narrows it to the literal
// tuple type Framer Motion's `Easing` expects instead of widening to number[].
const EASE_OUT = [0.2, 0.7, 0.15, 1] as const;

export const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: EASE_OUT },
  },
});

export const fadeIn = (delay = 0): Variants => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.9, delay, ease: "easeOut" as const },
  },
});

export const scaleIn = (delay = 0): Variants => ({
  hidden: { opacity: 0, scale: 1.05 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, delay, ease: EASE_OUT },
  },
});

export const clipReveal = (delay = 0): Variants => ({
  hidden: { clipPath: "inset(0 0 100% 0)" },
  show: {
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 1.1, delay, ease: EASE_OUT },
  },
});