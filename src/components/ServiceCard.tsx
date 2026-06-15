"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceCardProps {
  id: string;
  icon: string;
  title: string;
  description: string;
  deliverables: string[];
}

export default function ServiceCard({
  id,
  icon,
  title,
  description,
  deliverables,
}: ServiceCardProps) {
  return (
    <motion.div
      className="bg-surface border border-border-main rounded-none p-8 flex flex-col h-full group cursor-pointer relative overflow-hidden"
      whileHover={{
        y: -4,
        boxShadow: "0 10px 30px -10px rgba(0,240,255,0.15)",
        borderColor: "rgba(0,240,255,0.4)",
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
    >
      <div className="absolute top-0 left-0 w-[2px] h-0 bg-cta group-hover:h-full transition-all duration-300 ease-out" />
      
      <motion.div
        className="w-12 h-12 border border-border-main bg-bg rounded-none flex items-center justify-center text-2xl mb-6 group-hover:border-cta group-hover:text-cta transition-colors duration-300"
        whileHover={{ rotate: 90, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        {icon}
      </motion.div>

      <h4 className="font-heading text-xl text-text-main font-bold mb-3 uppercase tracking-tight">
        {title}
      </h4>

      <p className="text-muted text-sm leading-relaxed mb-6 font-mono">
        {description}
      </p>

      {deliverables.length > 0 && (
        <ul className="space-y-3 mb-8">
          {deliverables.map((item) => (
            <motion.li
              key={item}
              className="text-xs font-mono text-text-secondary flex items-start gap-2.5"
              initial={{ opacity: 0.8 }}
              whileHover={{ x: 4, opacity: 1, color: "#fcfcfc" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <span className="text-cta flex-shrink-0">::</span>
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      )}

      <Link
        href={`/services#${id}`}
        className="text-xs font-mono font-bold text-muted inline-flex items-center gap-1.5 hover:text-cta transition-all mt-auto tracking-widest uppercase"
      >
        [ Execute_Detail ]
      </Link>
    </motion.div>
  );
}
