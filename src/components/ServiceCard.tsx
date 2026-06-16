"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface ServiceCardProps {
  id: string;
  icon: React.ReactNode;
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
      className="bg-surface border border-border-main/60 rounded-xl p-8 flex flex-col h-full group cursor-pointer relative overflow-hidden transition-all duration-300 hover:border-cta/20 shadow-[0_8px_30px_rgb(0,0,0,0.015)]"
      whileHover={{
        y: -4,
        boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.06)",
        transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
      }}
    >
      <div className="absolute top-0 left-0 w-1.5 h-0 bg-cta group-hover:h-full transition-all duration-300 ease-out" />
      
      <div className="w-12 h-12 border border-border-main/80 bg-bg-alt rounded-xl flex items-center justify-center text-cta mb-6 group-hover:bg-cta/5 group-hover:border-cta/35 transition-all duration-300">
        {icon}
      </div>

      <h4 className="font-heading text-lg text-text-main font-bold mb-3 uppercase tracking-tight">
        {title}
      </h4>

      <p className="text-text-secondary text-sm leading-relaxed mb-6">
        {description}
      </p>

      {deliverables.length > 0 && (
        <ul className="space-y-3 mb-8">
          {deliverables.map((item) => (
            <li
              key={item}
              className="text-xs text-text-secondary flex items-start gap-2.5 transition-colors duration-200 hover:text-text-main"
            >
              <ChevronRight className="text-cta flex-shrink-0 w-3.5 h-3.5 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      <Link
        href={`/services#${id}`}
        className="text-xs font-semibold text-muted inline-flex items-center gap-1.5 hover:text-cta transition-colors mt-auto tracking-wider uppercase"
      >
        Learn More →
      </Link>
    </motion.div>
  );
}

