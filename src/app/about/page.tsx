import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import StaggerGrid from "@/components/StaggerGrid";
import { Star, MessageSquare, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Who We Are — About Mr. Freelancer",
  description: "Learn about our team, our technical values, and our engineering philosophy at Mr. Freelancer.",
};

export default function AboutPage() {
  const values = [
    {
      icon: <Star className="w-5 h-5 text-cta" />,
      title: "Quality over quantity",
      desc: "We take on fewer projects at a time so we can do each one properly. No rushed handoffs, no cutting corners, and zero outsourced spaghetti code.",
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-cta" />,
      title: "Clear, direct communication",
      desc: "No middlemen or account managers. You speak directly with the developers writing your code. We provide regular walkthrough videos and transparent updates.",
    },
    {
      icon: <Wrench className="w-5 h-5 text-cta" />,
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
      skills: ["Figma", "UI/UX Prototyping", "Design Systems", "Adobe Illustrator", "Brand Identity"],
    },
    {
      title: "DevOps & Cloud",
      skills: ["GitHub Actions", "Vercel", "Docker", "AWS"],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-bg-alt py-20 border-b border-border-main">
        <div className="container-max">
          <AnimateOnScroll variant="fade-up">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-cta mb-3">
              About Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-text-main font-bold tracking-tight mb-4">
              Who We Are
            </h1>
            <p className="text-text-secondary text-base md:text-lg max-w-xl leading-relaxed">
              {"We're a lightweight digital engineering studio focused on custom software development, clean system architectures, and reliable database designs."}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-surface">
        <div className="container-max">
          <div className="max-w-3xl">
            <AnimateOnScroll variant="fade-up">
              <h3 className="font-heading text-2xl md:text-3xl text-text-main mb-6 font-bold tracking-tight">
                Our Philosophy
              </h3>
            </AnimateOnScroll>
            <div className="space-y-6 text-text-secondary text-base leading-relaxed">
              <AnimateOnScroll delay={0.1} variant="fade-up">
                <p>
                  Mr. Freelancer was founded on the belief that digital products should be built with architectural integrity. Many agencies build quick, unscalable templates that break the moment you gain users. We write code with scalability and type safety in mind from day one.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.2} variant="fade-up">
                <p>
                  We specialize in full-stack JavaScript/TypeScript engineering (PERN and MERN stacks) and cross-platform mobile development (Flutter). By combining clean backend REST APIs with lightweight mobile and web frontends, we help startups and local brands establish highly reliable product ecosystems.
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-bg-alt border-y border-border-main">
        <div className="container-max">
          <div className="max-w-2xl mb-16">
            <AnimateOnScroll variant="fade-up">
              <span className="text-xs font-bold uppercase tracking-widest text-cta block mb-3">
                Our Values
              </span>
              <h2 className="font-heading text-3xl text-text-main font-bold tracking-tight">
                What We Stand For
              </h2>
            </AnimateOnScroll>
          </div>

          <StaggerGrid
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            staggerDelay={0.08}
            variant="scale-up"
          >
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-surface border border-border-main rounded-xl p-8 shadow-sm h-full flex flex-col hover:border-cta/30 transition-colors duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-cta-gradient group-hover:h-full transition-all duration-500 ease-out rounded-r" />
                <div className="w-12 h-12 rounded-lg bg-bg-alt flex items-center justify-center mb-6 border border-border-main group-hover:border-cta/30 group-hover:scale-110 transition-all duration-300">
                  {v.icon}
                </div>
                 <h4 className="font-heading text-lg font-bold text-text-main mb-3 tracking-tight">
                  {v.title}
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-surface">
        <div className="container-max">
          <div className="max-w-2xl mb-16">
            <AnimateOnScroll variant="fade-up">
              <span className="text-xs font-bold uppercase tracking-widest text-cta block mb-3">
                Capabilities
              </span>
              <h2 className="font-heading text-3xl text-text-main font-bold tracking-tight">
                What We Work With
              </h2>
            </AnimateOnScroll>
          </div>

          <StaggerGrid
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            staggerDelay={0.05}
            variant="fade-up"
          >
            {skillCategories.map((cat) => (
              <div key={cat.title} className="border border-border-main rounded-xl p-8 bg-bg-alt/30">
                <h4 className="font-heading text-base font-bold text-text-main mb-4 pb-2 border-b border-border-main tracking-tight">
                  {cat.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-semibold px-3 py-1 rounded bg-accent-soft/40 border border-cta/10 text-cta hover:border-cta/40 hover:bg-cta hover:text-white transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner />
    </div>
  );
}
