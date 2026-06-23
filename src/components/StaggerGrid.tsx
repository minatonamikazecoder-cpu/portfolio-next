"use client";

import { ReactNode, Children } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface StaggerGridProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  variant?: "fade-up" | "scale-up" | "blur-in";
}

const variants = {
  "fade-up": {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  "scale-up": {
    hidden: { opacity: 0, scale: 0.92, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
  },
  "blur-in": {
    hidden: { opacity: 0, filter: "blur(10px)", y: 15 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0 },
  },
};

export default function StaggerGrid({
  children,
  className = "",
  staggerDelay = 0.08,
  variant = "fade-up",
}: StaggerGridProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

  const childArray = Children.toArray(children);
  const { hidden, visible } = variants[variant];

  return (
    <div ref={ref} className={className}>
      {childArray.map((child, i) => (
        <motion.div
          key={i}
          initial={hidden}
          animate={isInView ? visible : hidden}
          transition={{
            duration: 0.6,
            delay: i * staggerDelay,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
