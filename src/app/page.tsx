import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";
import CtaBanner from "@/components/CtaBanner";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ProcessTimeline from "@/components/ProcessTimeline";
import { getServiceIcon } from "@/lib/service-icons";
import projectsData from "@/data/projects.json";
import servicesData from "@/data/services.json";

export default function Home() {
  const featuredProjects = projectsData.filter((project) => project.featured);



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
              <h1 className="font-heading text-5xl md:text-7xl lg:text-[5rem] text-text-main font-bold tracking-tight leading-[1.05] mb-6">
                Engineering Digital Products That Scale.
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.3} variant="fade-up">
              <p className="text-text-secondary text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
                We build high-performance web applications, cross-platform mobile experiences, and robust backend architectures for modern companies.
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
                {"We specialize in engineering robust web applications, cross-platform mobile apps, and crafting memorable brand graphic designs to support your company's identity."}
              </p>
            </AnimateOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                icon={getServiceIcon(service.icon)}
                title={service.title}
                description={service.summary}
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
                slug={project.slug}
                title={project.title}
                description={project.summary}
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
