"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CtaBanner() {
  return (
    <section className="py-16">
      <div className="container-max">
        <div className="bg-bg bg-grid-pattern border border-border-main p-8 md:p-16 lg:p-20 text-center relative overflow-hidden shadow-lg group">
          {/* Decorative gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface/80 pointer-events-none" />
          
          <motion.div
            className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cta to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <motion.h2
            className="font-heading text-3xl md:text-5xl mb-4 relative z-10 font-bold leading-tight uppercase tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Ready to upgrade your tech stack?
            <br />
            <span className="text-cta">Let&apos;s talk this week.</span>
          </motion.h2>
          <motion.p
            className="text-text-secondary font-mono text-xs md:text-sm mb-8 max-w-lg mx-auto relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            > Awaiting parameters for your next systems migration, web platform, or custom mobile app.
          </motion.p>
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-none border border-cta text-sm font-mono font-bold bg-cta/10 text-cta hover:bg-cta hover:text-bg transition-colors shadow-[0_0_15px_rgba(0,240,255,0.2)] uppercase tracking-wider"
              >
                Launch_Sequence
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
