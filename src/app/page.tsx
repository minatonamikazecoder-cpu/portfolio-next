import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";
import CtaBanner from "@/components/CtaBanner";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import TextReveal from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import dynamic from "next/dynamic";

const ProcessTimeline = dynamic(() => import("@/components/ProcessTimeline"), { ssr: false });
const ParallaxBlobs = dynamic(() => import("@/components/ParallaxBlobs"), { ssr: false });

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
      icon: "💻",
      title: "Web Development",
      description:
        "Custom, high-performance web applications built with React, TypeScript, and modern frameworks. Optimized for security, scale, and SEO.",
      deliverables: ["Custom Web Apps", "Database Architecture", "TypeScript Refactoring"],
    },
    {
      id: "app-development",
      icon: "📱",
      title: "App Development",
      description:
        "Cross-platform mobile applications built with Flutter. Write once, run beautifully on both iOS and Android with a native look and feel.",
      deliverables: ["iOS & Android Apps", "Flutter/Dart Codebase", "App Store Deployment"],
    },
    {
      id: "systems-migration",
      icon: "⚙️",
      title: "Systems & DB Migrations",
      description:
        "Scaling existing applications by moving from NoSQL databases (like MongoDB) to robust Relational databases (like PostgreSQL) for reliability.",
      deliverables: ["NoSQL to SQL Migrations", "API Unified Backends", "TypeScript Refactoring"],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center bg-bg bg-dot-pattern py-20 overflow-hidden border-b border-border-main">
        <ParallaxBlobs />
        
        <div className="container-max w-full relative z-10 mt-12">
          <div className="max-w-4xl">
            <AnimateOnScroll delay={0} variant="fade-down">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-md bg-surface border border-border-main">
                <span className="w-2 h-2 rounded-full bg-cta animate-pulse" />
                <span className="text-xs font-mono font-medium tracking-wider text-muted uppercase">
                  Sys_Init :: Operational
                </span>
              </div>
            </AnimateOnScroll>
            
            <TextReveal
              text="SYSTEMS ARCHITECTURE & SOFTWARE ENGINEERING"
              className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] text-text-main font-bold tracking-tighter leading-[1.05] mb-6 uppercase"
              delay={0.15}
              stagger={0.03}
            />

            <AnimateOnScroll delay={0.5} variant="fade-up">
              <p className="text-muted text-lg md:text-xl leading-relaxed mb-10 max-w-2xl font-mono text-sm">
                > Initializing high-performance web and mobile ecosystems.
                <br />
                > Bypassing middlemen. Direct engineer-to-client protocols engaged.
              </p>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={0.65} variant="fade-up">
              <div className="flex flex-wrap gap-4">
                <MagneticButton>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-none border border-cta text-sm font-mono font-bold bg-cta/10 text-cta hover:bg-cta hover:text-bg transition-colors shadow-[0_0_20px_rgba(0,240,255,0.15)] hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] uppercase tracking-wider"
                  >
                    Execute_Portfolio
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-none text-sm font-mono font-bold border border-border-main hover:bg-surface hover:text-white transition-colors uppercase tracking-wider text-text-secondary"
                  >
                    Initialize_Contact
                  </Link>
                </MagneticButton>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── ABOUT INTRO (2-COLUMN) ── */}
      <section className="py-24 border-t border-border-main/50 bg-surface">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <AnimateOnScroll variant="fade-right">
                <span className="text-xs font-bold uppercase tracking-widest text-muted block mb-3">
                  Who We Are
                </span>
                <h2 className="font-heading text-3xl md:text-4xl text-text-main leading-tight">
                  Direct engineers. Custom systems. Zero fluff.
                </h2>
              </AnimateOnScroll>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <AnimateOnScroll delay={0.15} variant="fade-left">
                <p className="text-muted text-base leading-relaxed">
                  FlowStack is a specialist digital product studio. Unlike traditional agencies that delegate your project to junior developers, you communicate directly with the builders. We focus on building clean codebases and highly optimized database designs.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.25} variant="fade-left">
                <p className="text-muted text-base leading-relaxed">
                  Whether it&apos;s rewriting legacy code into scalable **TypeScript**, migrating databases from **MongoDB to PostgreSQL** for better integrity, or launching cross-platform **Flutter** apps, we ensure your codebase is structured for long-term growth.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.35} variant="fade-left">
                <div className="pt-4">
                  <Link
                    href="/about"
                    className="text-sm font-semibold text-text-main hover:text-cta transition-colors inline-flex items-center gap-1 hover:gap-2"
                  >
                    Read our full story <span>→</span>
                  </Link>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 bg-bg-alt/30 border-t border-b border-border-main/50">
        <div className="container-max">
          <div className="max-w-2xl mb-16">
            <AnimateOnScroll variant="fade-up">
              <span className="text-xs font-bold uppercase tracking-widest text-muted block mb-3">
                What We Do
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-text-main mb-4">
                Our Capabilities
              </h2>
              <p className="text-muted text-base">
                We specialize in engineering robust web applications, cross-platform mobile apps, and handling database migrations to support your company&apos;s scale.
              </p>
            </AnimateOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <AnimateOnScroll key={service.id} delay={index * 0.15} variant="scale-up">
                <ServiceCard
                  id={service.id}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  deliverables={service.deliverables}
                />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── SELECTED PROJECTS ── */}
      <section className="py-24 bg-surface">
        <div className="container-max">
          <div className="max-w-2xl mb-16">
            <AnimateOnScroll variant="fade-up">
              <span className="text-xs font-bold uppercase tracking-widest text-muted block mb-3">
                Selected Work
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-text-main mb-4">
                Active Client Projects
              </h2>
              <p className="text-muted text-base">
                We believe in transparency. Here are the active client projects and platforms we are currently designing, building, and refactoring.
              </p>
            </AnimateOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <AnimateOnScroll key={project.title} delay={index * 0.15} variant="scale-up">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  category={project.category}
                  status={project.status}
                  tech={project.tech}
                  imageUrl={project.imageUrl}
                />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="py-24 border-t border-border-main/50 bg-bg-alt/20">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <AnimateOnScroll variant="fade-right">
                <span className="text-xs font-bold uppercase tracking-widest text-muted block mb-3">
                  Our Process
                </span>
                <h2 className="font-heading text-3xl md:text-4xl text-text-main mb-4 leading-tight">
                  How we take your ideas to launch
                </h2>
                <p className="text-muted text-base">
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
      <AnimateOnScroll variant="scale-up">
        <CtaBanner />
      </AnimateOnScroll>
    </div>
  );
}
