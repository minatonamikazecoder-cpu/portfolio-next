"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CtaBanner() {
  return (
    <section className="py-16">
      <div className="container-max">
        <div className="bg-text-main rounded-[20px] py-16 px-8 text-center text-white relative overflow-hidden shadow-md">
          {/* Decorative gradients */}
          <div className="absolute -top-[50%] -right-[20%] w-[400px] h-[400px] rounded-full bg-cta/8 pointer-events-none animate-drift" />
          <div className="absolute -bottom-[30%] -left-[10%] w-[300px] h-[300px] rounded-full bg-white/3 pointer-events-none animate-float" />

          <motion.h2
            className="font-heading text-3xl md:text-4xl mb-4 relative z-10 font-medium leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Ready to upgrade your tech stack? Let's talk this week.
          </motion.h2>
          <motion.p
            className="text-white/60 text-base md:text-lg mb-8 max-w-md mx-auto relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            We'd love to hear about your goals — whether it's a systems migration, a new web platform, or a custom mobile app.
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
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold bg-cta text-white hover:bg-cta-hover transition-colors shadow-md"
              >
                Start a Project →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
