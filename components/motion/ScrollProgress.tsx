"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

/* Thin top progress bar — UI UX Pro Max recommends a progress indicator for the
   Scroll-Triggered Storytelling pattern. Grayscale in Pass 1. */
export function ScrollProgress({ className = "bg-wire-ink" }: { className?: string }) {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      className={`fixed left-0 top-0 z-nav h-0.5 w-full origin-left ${className}`}
      style={{ scaleX: reduce ? 1 : scaleX }}
    />
  );
}
