"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";

interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

const steps: ProcessStep[] = [
  {
    num: "1",
    title: "Discovery & Architecture",
    desc: "We analyze your project requirements, map out the system architecture, and decide on the exact database schemas (SQL vs NoSQL) and API endpoints.",
  },
  {
    num: "2",
    title: "High-Fidelity Interface Design",
    desc: "Before a single line of code is written, we design the UI/UX in Figma to ensure the application flow is frictionless for your customers.",
  },
  {
    num: "3",
    title: "Development & Asset Creation",
    desc: "We build the system using TypeScript, Next.js, and Flutter. Concurrently, we create custom brand assets, iconography, and graphic layouts to ensure a visually cohesive project launch.",
  },
  {
    num: "4",
    title: "Beta Launch & Handover",
    desc: "We launch a beta version for testing, fix initial feedback, deploy it to your servers (Vercel, AWS, App Stores), and hand over 100% clean, documented code.",
  },
];

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative py-4">
      {/* Background static line (faded) */}
      <div className="absolute top-2 bottom-12 left-5 w-[1.5px] bg-border-main z-0" />
      
      {/* Animated active line (drawn on scroll) */}
      <motion.div 
        className="absolute top-2 left-5 w-[2px] bg-cta z-0 origin-top"
        style={{ height: lineHeight }}
      />

      <div className="space-y-12">
        {steps.map((step) => (
          <AnimateOnScroll key={step.num} delay={0.1} variant="fade-left">
            <div className="flex gap-6 items-start relative z-10 group">
              <motion.div 
                className="w-10 h-10 rounded-full bg-surface border-2 border-border-main text-text-main font-semibold flex items-center justify-center flex-shrink-0 z-10 transition-colors duration-300 group-hover:border-cta group-hover:bg-cta group-hover:text-white"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {step.num}
              </motion.div>
              <div className="pt-1.5">
                <h3 className="text-base font-semibold text-text-main mb-1">
                  {step.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  );
}
