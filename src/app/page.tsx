import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";
import CtaBanner from "@/components/CtaBanner";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ProcessTimeline from "@/components/ProcessTimeline";
import { Monitor, Smartphone, Database } from "lucide-react";

export default function Home() {
  const featuredProjects = [
    {
      title: "FreshCart Web",
      description:
        "Migrated a high-traffic grocery store application from a MERN stack to a PERN stack (PostgreSQL + TypeScript) with a complete frontend UI upgrade, yielding 40% faster page speeds.",
      category: "Web Development",
      status: "In Development",
      tech: ["React", "TypeScript", "PostgreSQL", "Node.js", "Express", "Tailwind CSS"],
      imageUrl: "/images/project-1.jpg",
    },
    {
      title: "FreshCart Mobile",
      description:
        "Cross-platform iOS and Android shopping apps built with Flutter, sharing the same unified Node.js/Postgres API backend to handle real-time inventory and order processing with single-codebase efficiency.",
      category: "App Development",
      status: "In Active Beta",
      tech: ["Flutter", "Dart", "PostgreSQL", "Node.js", "Express", "REST API"],
      imageUrl: "/images/project-2.jpg",
    },
    {
      title: "Appointy Platform",
      description:
        "A multi-portal clinical scheduling application with distinct, secure control panels for Administrators, Doctors, and Patients, using role-based access control and 1 unified API backend.",
      category: "Systems Migration",
      status: "Internal Beta",
      tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS", "JWT Auth"],
      imageUrl: "/images/project-3.jpg",
    },
  ];

  const featuredServices = [
    {
      id: "web-development",
      icon: <Monitor className="w-6 h-6" />,
      title: "Web Development",
      description:
        "Custom, high-performance web applications built with React, TypeScript, and modern frameworks. Optimized for security, scale, and SEO.",
      deliverables: ["Custom Web Apps", "Database Architecture", "TypeScript Refactoring"],
    },
    {
      id: "app-development",
      icon: <Smartphone className="w-6 h-6" />,
      title: "App Development",
      description:
        "Cross-platform mobile applications built with Flutter. Write once, run beautifully on both iOS and Android with a native look and feel.",
      deliverables: ["iOS & Android Apps", "Flutter/Dart Codebase", "App Store Deployment"],
    },
    {
      id: "systems-migration",
      icon: <Database className="w-6 h-6" />,
      title: "Systems & DB Migrations",
      description:
        "Scaling existing applications by moving from NoSQL databases (like MongoDB) to robust Relational databases (like PostgreSQL) for reliability.",
      deliverables: ["NoSQL to SQL Migrations", "API Unified Backends", "TypeScript Refactoring"],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-center bg-bg py-20 overflow-hidden border-b border-border-main">
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.3]" />
        
        <div className="container-max w-full relative z-10">
          <div className="max-w-4xl">
            <AnimateOnScroll delay={0} variant="fade-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-surface border border-border-main shadow-sm">
                <span className="w-2 h-2 rounded-full bg-cta animate-pulse" />
                <span className="text-[10px] font-bold tracking-wider text-text-secondary uppercase">
                  Available for Projects
                </span>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={0.15} variant="fade-up">
              <h1 className="font-heading text-5xl md:text-7xl text-text-main font-bold tracking-tight leading-[1.1] mb-6 uppercase">
                Systems Architecture &amp; Software Engineering
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.3} variant="fade-up">
              <p className="text-text-secondary text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
                We design, develop, and scale custom web and mobile ecosystems — from concept to production-ready deployments.
              </p>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={0.45} variant="fade-up">
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-md text-sm font-semibold tracking-wide bg-cta text-white hover:bg-cta-hover transition-colors shadow-sm"
                >
                  View Our Work
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-md text-sm font-semibold tracking-wide border border-border-main text-text-secondary hover:bg-surface hover:text-text-main transition-colors shadow-sm"
                >
                  Get in Touch
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 bg-surface border-b border-border-main">
        <div className="container-max">
          <div className="max-w-2xl mb-16">
            <AnimateOnScroll variant="fade-up">
              <span className="text-xs font-bold uppercase tracking-widest text-muted block mb-3">
                What We Do
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-text-main mb-4 uppercase">
                Our Capabilities
              </h2>
              <p className="text-text-secondary text-base">
                We specialize in engineering robust web applications, cross-platform mobile apps, and handling database migrations to support your company's scale.
              </p>
            </AnimateOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                deliverables={service.deliverables}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── SELECTED PROJECTS ── */}
      <section className="py-24 bg-bg-alt border-b border-border-main">
        <div className="container-max">
          <div className="max-w-2xl mb-16">
            <AnimateOnScroll variant="fade-up">
              <span className="text-xs font-bold uppercase tracking-widest text-muted block mb-3">
                Selected Work
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-text-main mb-4 uppercase">
                Active Client Projects
              </h2>
              <p className="text-text-secondary text-base">
                We believe in transparency. Here are the active client projects and platforms we are currently designing, building, and refactoring.
              </p>
            </AnimateOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                category={project.category}
                status={project.status}
                tech={project.tech}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="py-24 bg-surface border-b border-border-main">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <AnimateOnScroll variant="fade-right">
                <span className="text-xs font-bold uppercase tracking-widest text-muted block mb-3">
                  Our Process
                </span>
                <h2 className="font-heading text-3xl md:text-4xl text-text-main mb-4 leading-tight uppercase">
                  How we take your ideas to launch
                </h2>
                <p className="text-text-secondary text-base">
                  A simple, engineering-first approach that removes overhead and keeps you directly in the loop.
                </p>
              </AnimateOnScroll>
            </div>
            
            <div className="lg:col-span-7">
              <ProcessTimeline />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <CtaBanner />
    </div>
  );
}
