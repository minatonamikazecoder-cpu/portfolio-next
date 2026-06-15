"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import CtaBanner from "@/components/CtaBanner";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "FreshCart Web",
      description:
        "Migrating a live grocery e-commerce storefront from MongoDB to PostgreSQL. Refactoring raw JavaScript API endpoints into structural TypeScript. Rewriting frontend views for visual modernism and load speeds.",
      category: "Web Development",
      filterCategory: "web",
      status: "In Development",
      tech: ["React", "TypeScript", "PostgreSQL", "Node.js", "Express", "Tailwind CSS"],
      imageUrl: "/images/project-1.jpg",
    },
    {
      title: "FreshCart Mobile",
      description:
        "Developing cross-platform iOS and Android mobile shopping apps sharing the exact same backend database API as the web platform. Focuses on cart states and order flows.",
      category: "App Development",
      filterCategory: "app",
      status: "In Active Beta",
      tech: ["Flutter", "Dart", "PostgreSQL", "Node.js", "Express", "REST API"],
      imageUrl: "/images/project-2.jpg",
    },
    {
      title: "Appointy Platform",
      description:
        "Built a secure patient scheduling and clinic manager. Features custom access control structures. Patients book, doctors schedule slots, and admins oversee clinic analytics.",
      category: "Systems Migration",
      filterCategory: "migration",
      status: "Internal Beta",
      tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS", "JWT Auth"],
      imageUrl: "/images/project-3.jpg",
    },
  ];

  const filters = [
    { name: "All Work", value: "all" },
    { name: "Web Dev", value: "web" },
    { name: "Mobile App", value: "app" },
    { name: "DB & Migrations", value: "migration" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.filterCategory === activeFilter);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-bg to-bg-alt/40 py-20 border-b border-border-main/30">
        <div className="container-max">
          <AnimateOnScroll>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-muted mb-3">
              Portfolio
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-text-main font-normal tracking-tight mb-4">
              Our Portfolio
            </h1>
            <p className="text-muted text-base md:text-lg max-w-xl leading-relaxed">
              A look at our active developments, full-stack migrations, and platform integrations. Case studies are updated in real-time as we build.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-20 bg-surface">
        <div className="container-max">
          {/* Filters */}
          <AnimateOnScroll>
            <div className="flex flex-wrap gap-2.5 justify-start mb-12 border-b border-border-main/50 pb-6">
              {filters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setActiveFilter(f.value)}
                  className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide border transition-all cursor-pointer ${
                    activeFilter === f.value
                      ? "bg-text-main text-white border-text-main"
                      : "border-border-main text-muted hover:text-text-main hover:border-text-main"
                  }`}
                >
                  {f.name}
                </button>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Grid */}
          {filteredProjects.length > 0 ? (
            <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 25 }}
                    key={project.title}
                  >
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      category={project.category}
                      status={project.status}
                      tech={project.tech}
                      imageUrl={project.imageUrl}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <AnimateOnScroll>
              <div className="text-center py-20 bg-bg-alt/25 rounded-2xl border border-dashed border-border-main/60">
                <span className="text-3xl block mb-3">📂</span>
                <h4 className="text-base font-semibold text-text-main mb-1">
                  No Projects Found
                </h4>
                <p className="text-muted text-xs">
                  We&apos;re currently expanding this portfolio. Check back shortly!
                </p>
              </div>
            </AnimateOnScroll>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <AnimateOnScroll>
        <CtaBanner />
      </AnimateOnScroll>
    </div>
  );
}
