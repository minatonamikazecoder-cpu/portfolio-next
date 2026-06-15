"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxBlobs() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-cta/10 blur-[100px] pointer-events-none animate-float"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-[10%] left-[-5%] w-[450px] h-[450px] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none animate-drift"
      />
    </div>
  );
}
