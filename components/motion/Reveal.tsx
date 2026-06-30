"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Vertical travel distance in px (default 24). */
  y?: number;
  /** Delay in seconds. */
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
};

/**
 * Gentle fade-up on scroll into view. Uses transform + opacity only
 * (GPU-friendly), ease-out curve for entering.
 *
 * Under prefers-reduced-motion we drop the vertical travel entirely (no
 * movement that could trigger motion sickness) but KEEP the opacity fade at
 * full duration so content still clearly animates in rather than popping in.
 * Only the slide is gated on `reduce`; the fade always plays.
 */
export function Reveal({
  children,
  y = 24,
  delay = 0,
  className,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7, // full, clearly-perceptible fade in all cases
        ease: [0.16, 1, 0.3, 1], // ease-out
        delay: reduce ? 0 : delay,
      },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
    >
      {children}
    </MotionTag>
  );
}
