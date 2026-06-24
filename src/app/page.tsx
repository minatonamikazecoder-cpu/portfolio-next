import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";
import CtaBanner from "@/components/CtaBanner";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import StaggerGrid from "@/components/StaggerGrid";
import CountUp from "@/components/CountUp";
import ProcessTimeline from "@/components/ProcessTimeline";
import { getServiceIcon } from "@/lib/service-icons";
import projectsData from "@/data/projects.json";
import servicesData from "@/data/services.json";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  const featuredProjects = projectsData.filter((project) => project.featured && !("hidden" in project && project.hidden));

  return (
    <div className="flex flex-col min-h-screen">
      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center bg-bg py-28 md:py-36 overflow-hidden border-b border-border-main">
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.4]" />
        <div className="absolute inset-0 bg-hero-radial" />
        
        <div className="container-max w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left content */}
            <div className="lg:col-span-7">
              <AnimateOnScroll delay={0} variant="blur-in">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-accent-soft/60 border border-cta/15 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-cta animate-pulse" />
                  <span className="text-[10px] font-bold tracking-wider text-cta uppercase">
                    Available for Projects
                  </span>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll delay={0.15} variant="fade-up">
                <h1 className="font-heading hero-heading text-text-main font-bold mb-6">
                  Engineering Digital Products That{" "}
                  <span className="text-cta">Scale.</span>
                </h1>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.3} variant="fade-up">
                <p className="text-text-secondary text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
                  We build high-performance web applications, cross-platform mobile experiences, and robust backend architectures for modern companies.
                </p>
              </AnimateOnScroll>
              
              <AnimateOnScroll delay={0.45} variant="scale-up">
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg text-sm font-semibold tracking-wide bg-cta text-white hover:bg-cta-hover hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cta/20 transition-all duration-200 shadow-sm"
                  >
                    View Our Work
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg text-sm font-semibold tracking-wide border border-border-main text-text-secondary hover:bg-surface hover:text-text-main hover:border-cta/30 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
                  >
                    Get in Touch
                  </Link>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Right visual element — abstract geometric */}
            <div className="lg:col-span-5 hidden lg:block">
              <AnimateOnScroll delay={0.3} variant="scale-up">
                <div className="relative w-full aspect-square max-w-[420px] ml-auto">
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-cta/[0.04] rounded-3xl blur-3xl" />
                  
                  {/* Main card */}
                  <div className="relative bg-surface border border-border-main rounded-2xl p-6 shadow-lg shadow-black/[0.03]">
                    {/* Browser header */}
                    <div className="flex items-center gap-1.5 mb-4">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                      <div className="h-4 bg-bg-alt rounded-md w-2/5 ml-2" />
                    </div>
                    
                    {/* Code-like content */}
                    <div className="space-y-3 mb-5">
                      <div className="flex gap-2 items-center">
                        <div className="h-2 w-2 rounded-sm bg-cta/30" />
                        <div className="h-2 bg-text-main/8 rounded w-3/4" />
                      </div>
                      <div className="flex gap-2 items-center pl-4">
                        <div className="h-2 w-2 rounded-sm bg-accent/30" />
                        <div className="h-2 bg-text-main/6 rounded w-1/2" />
                      </div>
                      <div className="flex gap-2 items-center pl-4">
                        <div className="h-2 w-2 rounded-sm bg-accent/30" />
                        <div className="h-2 bg-text-main/6 rounded w-2/3" />
                      </div>
                      <div className="flex gap-2 items-center">
                        <div className="h-2 w-2 rounded-sm bg-cta/30" />
                        <div className="h-2 bg-text-main/8 rounded w-5/6" />
                      </div>
                    </div>
                    
                    {/* Dashboard mock */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="bg-bg-alt rounded-lg p-3 border border-border-main/50">
                        <div className="h-1.5 bg-cta/20 rounded w-1/2 mb-2" />
                        <div className="h-5 bg-cta/10 rounded" />
                      </div>
                      <div className="bg-bg-alt rounded-lg p-3 border border-border-main/50">
                        <div className="h-1.5 bg-accent/20 rounded w-2/3 mb-2" />
                        <div className="h-5 bg-accent/10 rounded" />
                      </div>
                      <div className="bg-bg-alt rounded-lg p-3 border border-border-main/50">
                        <div className="h-1.5 bg-cta/20 rounded w-3/4 mb-2" />
                        <div className="h-5 bg-cta/10 rounded" />
                      </div>
                    </div>
                    
                    {/* Chart mock */}
                    <div className="bg-bg-alt rounded-lg p-4 border border-border-main/50">
                      <div className="flex items-end gap-1.5 h-16">
                        <div className="w-full bg-cta/15 rounded-t" style={{ height: "40%" }} />
                        <div className="w-full bg-cta/25 rounded-t" style={{ height: "60%" }} />
                        <div className="w-full bg-cta/35 rounded-t" style={{ height: "45%" }} />
                        <div className="w-full bg-cta/50 rounded-t" style={{ height: "80%" }} />
                        <div className="w-full bg-cta/40 rounded-t" style={{ height: "55%" }} />
                        <div className="w-full bg-accent/50 rounded-t" style={{ height: "90%" }} />
                        <div className="w-full bg-accent/60 rounded-t" style={{ height: "100%" }} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating accent badge */}
                  <div className="absolute -bottom-3 -left-3 bg-surface border border-border-main rounded-xl px-4 py-2.5 shadow-md">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-cta/10 flex items-center justify-center">
                        <span className="text-cta text-sm font-bold">✓</span>
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-text-main">Build Complete</div>
                        <div className="text-[10px] text-muted">Deployed and operational</div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      {/* 
      <section className="py-16 bg-surface border-b border-border-main">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CountUp end={15} suffix="+" label="Projects Completed" />
            <CountUp end={4} label="Tech Stacks" />
            <CountUp end={100} suffix="%" label="On-Time Delivery" />
            <CountUp end={24} prefix="<" suffix="hr" label="Response Time" />
          </div>
        </div>
      </section>
      */}

      {/* ── SERVICES ── */}
      <section className="py-20 bg-section-gradient border-b border-border-main">
        <div className="container-max">
          <div className="max-w-2xl mb-16">
            <AnimateOnScroll variant="fade-up">
              <span className="text-xs font-bold uppercase tracking-widest text-cta block mb-3">
                What We Do
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-text-main mb-4 uppercase tracking-tight">
                Our Capabilities
              </h2>
              <p className="text-text-secondary text-base">
                {"We specialize in engineering robust web applications, cross-platform mobile apps, and crafting memorable brand graphic designs to support your company's identity."}
              </p>
            </AnimateOnScroll>
          </div>

          <StaggerGrid
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            staggerDelay={0.1}
            variant="scale-up"
          >
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
          </StaggerGrid>
        </div>
      </section>

      {/* ── SELECTED PROJECTS ── */}
      <section className="py-24 bg-bg-alt border-b border-border-main">
        <div className="container-max">
          <div className="max-w-2xl mb-16">
            <AnimateOnScroll variant="fade-up">
              <span className="text-xs font-bold uppercase tracking-widest text-cta block mb-3">
                Selected Work
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-text-main mb-4 uppercase tracking-tight">
                Selected Projects
              </h2>
              <p className="text-text-secondary text-base">
                We believe in building high-performance digital products. Here are some of the active projects and platforms we are currently designing, building, and refactoring.
              </p>
            </AnimateOnScroll>
          </div>

          <StaggerGrid
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            staggerDelay={0.12}
            variant="blur-in"
          >
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.title}
                slug={project.slug}
                title={project.title}
                description={project.summary}
                category={project.category}
                status={project.status}
                tech={project.tech}
                image={"image" in project ? project.image : undefined}
              />
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="py-20 bg-surface border-b border-border-main">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <AnimateOnScroll variant="fade-right">
                <span className="text-xs font-bold uppercase tracking-widest text-cta block mb-3">
                  Our Process
                </span>
                <h2 className="font-heading text-3xl md:text-4xl text-text-main mb-4 leading-tight uppercase tracking-tight">
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

      {/* ── TESTIMONIALS ── */}
      {/* <Testimonials /> */}

      {/* ── CTA BANNER ── */}
      <CtaBanner />
    </div>
  );
}
