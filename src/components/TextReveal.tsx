"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number; // base delay in seconds
  stagger?: number; // stagger per word in seconds
}

export default function TextReveal({
  text,
  className = "",
  wordClassName = "",
  delay = 0,
  stagger = 0.04,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const words = text.split(" ");

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      y: "110%",
    },
    visible: {
      y: "0%",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`flex flex-wrap ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      aria-label={text}
    >
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block overflow-hidden mr-[0.25em] last:mr-0 pb-[0.08em]"
        >
          <motion.span
            className={`inline-block ${wordClassName}`}
            variants={wordVariants}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}
