"use client";

import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

export default function CtaBanner() {
  return (
    <section className="relative py-28 overflow-hidden text-center">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-cta-gradient opacity-[0.04]" />
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.3]" />
      
      <div className="container-max max-w-4xl mx-auto px-6 relative z-10">
        <AnimateOnScroll variant="blur-in">
          {/* Decorative lines */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-cta/30" />
            <span className="text-xs font-bold uppercase tracking-widest text-cta">
              Let&apos;s Collaborate
            </span>
            <div className="h-[1px] w-12 bg-cta/30" />
          </div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-text-main font-bold tracking-tight mb-5">
            Ready to build something great?
          </h2>
        </AnimateOnScroll>
        
        <AnimateOnScroll delay={0.15} variant="fade-up">
          <p className="text-text-secondary text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            {"Let's design, develop, and scale your next digital product together. Get in touch for a custom consultation."}
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3} variant="scale-up">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg text-sm font-semibold tracking-wide bg-cta text-white hover:bg-cta-hover hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cta/20 transition-all duration-200 shadow-sm"
            >
              Start a Project
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg text-sm font-semibold tracking-wide border border-border-main text-text-secondary hover:bg-surface hover:text-text-main hover:border-cta/30 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
            >
              View Our Work
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
