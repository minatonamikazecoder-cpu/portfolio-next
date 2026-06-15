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
      className="bg-surface border border-border-main rounded-2xl p-8 flex flex-col h-full group cursor-pointer"
      whileHover={{
        y: -6,
        boxShadow: "0 20px 40px -12px rgba(0,0,0,0.08)",
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
    >
      <motion.div
        className="w-12 h-12 bg-bg-alt rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-text-main group-hover:text-white transition-colors duration-300"
        whileHover={{ rotate: 8, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        {icon}
      </motion.div>

      <h4 className="font-heading text-xl text-text-main font-semibold mb-3">
        {title}
      </h4>

      <p className="text-muted text-sm leading-relaxed mb-6">
        {description}
      </p>

      {deliverables.length > 0 && (
        <ul className="space-y-2 mb-8">
          {deliverables.map((item) => (
            <motion.li
              key={item}
              className="text-sm text-text-secondary flex items-start gap-2.5"
              initial={{ opacity: 0.8 }}
              whileHover={{ x: 4, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <span className="text-muted flex-shrink-0">→</span>
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      )}

      <Link
        href={`/services#${id}`}
        className="text-sm font-semibold text-text-main inline-flex items-center gap-1.5 hover:gap-2.5 transition-all mt-auto"
      >
        Learn More{" "}
        <motion.span
          className="inline-block"
          whileHover={{ x: 4 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          →
        </motion.span>
      </Link>
    </motion.div>
  );
}
