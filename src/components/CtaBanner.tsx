"use client";

import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="py-24 bg-bg-alt border-y border-border-main text-center">
      <div className="container-max max-w-4xl mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl text-text-main font-bold tracking-tight mb-4 uppercase">
          Ready to build something great?
        </h2>
        
        <p className="text-text-secondary text-base max-w-xl mx-auto mb-10 leading-relaxed">
          Let's design, develop, and scale your next digital product together. Get in touch for a custom consultation.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-md text-sm font-semibold tracking-wide bg-cta text-white hover:bg-cta-hover transition-colors shadow-sm"
        >
          Start a Project
        </Link>
      </div>
    </section>
  );
}
