"use client";

import CtaBanner from "@/components/CtaBanner";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { motion } from "framer-motion";

export default function AboutPage() {
  const values = [
    {
      icon: "✦",
      title: "Quality over quantity",
      desc: "We take on fewer projects at a time so we can do each one properly. No rushed handoffs, no cutting corners, and zero outsourced spaghetti code.",
    },
    {
      icon: "💬",
      title: "Clear, direct communication",
      desc: "No middlemen or account managers. You speak directly with the developers writing your code. We provide regular walkthrough videos and transparent updates.",
    },
    {
      icon: "🔧",
      title: "Long-term thinking",
      desc: "We build things that last. Clean architecture, automated type checking (TypeScript), database integrity constraints, and codebase documentation you can actually hand over.",
    },
  ];

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5 & CSS3"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "REST APIs", "TypeScript"],
    },
    {
      title: "Mobile",
      skills: ["Flutter", "Dart"],
    },
    {
      title: "Database",
      skills: ["PostgreSQL", "MongoDB", "SQL Schemas"],
    },
    {
      title: "Design",
      skills: ["Figma", "UI/UX Prototyping", "Design Systems"],
    },
    {
      title: "DevOps & Cloud",
      skills: ["GitHub Actions", "Vercel", "Docker", "AWS"],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-bg to-bg-alt/40 py-20 border-b border-border-main/30">
        <div className="container-max">
          <AnimateOnScroll>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-muted mb-3">
              About Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-text-main font-normal tracking-tight mb-4">
              Who We Are
            </h1>
            <p className="text-muted text-base md:text-lg max-w-xl leading-relaxed">
              We&apos;re a lightweight digital engineering studio focused on custom software development, clean system architectures, and reliable database designs.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-surface">
        <div className="container-max">
          <div className="max-w-3xl">
            <AnimateOnScroll>
              <h3 className="font-heading text-2xl md:text-3xl text-text-main mb-6">
                Our Philosophy
              </h3>
            </AnimateOnScroll>
            <div className="space-y-6 text-muted text-base leading-relaxed">
              <AnimateOnScroll delay={0.1}>
                <p>
                  FlowStack was founded on the belief that digital products should be built with architectural integrity. Many agencies build quick, unscalable templates that break the moment you gain users. We write code with scalability and type safety in mind from day one.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.2}>
                <p>
                  We specialize in full-stack JavaScript/TypeScript engineering (PERN and MERN stacks) and cross-platform mobile development (Flutter). By combining clean backend REST APIs with lightweight mobile and web frontends, we help startups and local brands establish highly reliable product ecosystems.
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-bg-alt/20 border-t border-b border-border-main/50">
        <div className="container-max">
          <div className="max-w-2xl mb-16">
            <AnimateOnScroll>
              <span className="text-xs font-bold uppercase tracking-widest text-muted block mb-3">
                Our Values
              </span>
              <h2 className="font-heading text-3xl text-text-main">
                What We Stand For
              </h2>
            </AnimateOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, index) => (
              <AnimateOnScroll key={v.title} delay={index * 0.15}>
                <motion.div 
                  className="bg-surface border border-border-main rounded-2xl p-8 shadow-sm h-full flex flex-col cursor-pointer"
                  whileHover={{
                    y: -6,
                    boxShadow: "0 20px 40px -12px rgba(0,0,0,0.08)",
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                >
                  <motion.div 
                    className="text-cta text-2xl font-bold mb-4 w-12 h-12 rounded-xl bg-bg-alt flex items-center justify-center"
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    {v.icon}
                  </motion.div>
                  <h4 className="font-heading text-lg font-semibold text-text-main mb-3">
                    {v.title}
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-surface">
        <div className="container-max">
          <div className="max-w-2xl mb-16">
            <AnimateOnScroll>
              <span className="text-xs font-bold uppercase tracking-widest text-muted block mb-3">
                Capabilities
              </span>
              <h2 className="font-heading text-3xl text-text-main">
                What We Work With
              </h2>
            </AnimateOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((cat, index) => (
              <AnimateOnScroll key={cat.title} delay={index * 0.1}>
                <div className="border border-border-main/70 rounded-2xl p-8 bg-bg-alt/10">
                  <h4 className="font-heading text-base font-semibold text-text-main mb-4 pb-2 border-b border-border-main">
                    {cat.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + i * 0.05, type: "spring", stiffness: 300 }}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-surface border border-border-main text-text-secondary hover:bg-text-main hover:text-white transition-colors duration-200"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <AnimateOnScroll>
        <CtaBanner />
      </AnimateOnScroll>
    </div>
  );
}
