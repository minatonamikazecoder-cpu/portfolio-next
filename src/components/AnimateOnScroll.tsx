"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView, Variant } from "framer-motion";

type AnimationVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "fade-in"
  | "scale-up"
  | "blur-in";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number; // delay in seconds
  duration?: number; // duration in seconds
  variant?: AnimationVariant;
  once?: boolean;
}

const hiddenVariants: Record<AnimationVariant, Variant> = {
  "fade-up": { opacity: 0, y: 40 },
  "fade-down": { opacity: 0, y: -40 },
  "fade-left": { opacity: 0, x: 40 },
  "fade-right": { opacity: 0, x: -40 },
  "fade-in": { opacity: 0 },
  "scale-up": { opacity: 0, scale: 0.92 },
  "blur-in": { opacity: 0, filter: "blur(12px)", y: 10 },
};

const visibleVariants: Record<AnimationVariant, Variant> = {
  "fade-up": { opacity: 1, y: 0 },
  "fade-down": { opacity: 1, y: 0 },
  "fade-left": { opacity: 1, x: 0 },
  "fade-right": { opacity: 1, x: 0 },
  "fade-in": { opacity: 1 },
  "scale-up": { opacity: 1, scale: 1 },
  "blur-in": { opacity: 1, filter: "blur(0px)", y: 0 },
};

export default function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  variant = "fade-up",
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "0px 0px -60px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={hiddenVariants[variant]}
      animate={isInView ? visibleVariants[variant] : hiddenVariants[variant]}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
