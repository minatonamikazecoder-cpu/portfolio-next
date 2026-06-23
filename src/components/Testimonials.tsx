"use client";

import { Star, Quote } from "lucide-react";
import testimonialsData from "@/data/testimonials.json";
import AnimateOnScroll from "./AnimateOnScroll";
import StaggerGrid from "./StaggerGrid";

export default function Testimonials() {
  return (
    <section className="py-24 bg-bg border-b border-border-main relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.2]" />
      
      <div className="container-max relative z-10">
        <div className="max-w-2xl mb-16">
          <AnimateOnScroll variant="fade-up">
            <span className="text-xs font-bold uppercase tracking-widest text-cta block mb-3">
              Testimonials
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-text-main mb-4 uppercase tracking-tight">
              What Our Clients Say
            </h2>
            <p className="text-text-secondary text-base">
              Don&apos;t just take our word for it. Here is how we have helped companies scale their engineering and design capabilities.
            </p>
          </AnimateOnScroll>
        </div>

        <StaggerGrid
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          staggerDelay={0.1}
          variant="scale-up"
        >
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-surface border border-border-main/70 rounded-xl p-8 shadow-sm flex flex-col justify-between hover:border-cta/30 hover:shadow-md hover:shadow-cta/5 transition-all duration-300 relative group"
            >
              <div>
                {/* Quote Icon */}
                <div className="text-cta/15 mb-6 group-hover:text-cta/25 transition-colors duration-300">
                  <Quote className="w-8 h-8 fill-current" />
                </div>
                
                {/* Star rating */}
                <div className="flex gap-1 mb-4 text-amber-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                
                {/* Quote text */}
                <p className="text-text-secondary text-base italic leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
              
              {/* Author Info */}
              <div className="flex items-center gap-3 pt-6 border-t border-border-main/50 mt-auto">
                <div className="w-10 h-10 rounded-full bg-accent-soft text-cta font-bold flex items-center justify-center text-sm">
                  {testimonial.author.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-main">
                    {testimonial.author}
                  </h4>
                  <p className="text-xs text-muted">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
