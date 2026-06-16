import ProjectCard from "@/components/ProjectCard";
import CtaBanner from "@/components/CtaBanner";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { FolderOpen } from "lucide-react";
import projectsData from "@/data/projects.json";

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-bg-alt py-20 border-b border-border-main">
        <div className="container-max">
          <AnimateOnScroll variant="fade-up">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-muted mb-3">
              Portfolio
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-text-main font-bold tracking-tight mb-4">
              Our Portfolio
            </h1>
            <p className="text-text-secondary text-base md:text-lg max-w-xl leading-relaxed">
              A look at our active developments, full-stack migrations, and platform integrations. Case studies are updated in real-time as we build.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-20 bg-surface">
        <div className="container-max">
          {projectsData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projectsData.map((project) => (
                <ProjectCard
                  key={project.title}
                  slug={project.slug}
                  title={project.title}
                  description={project.description}
                  category={project.category}
                  status={project.status}
                  tech={project.tech}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-bg-alt border border-dashed border-border-main rounded-xl">
              <FolderOpen className="w-10 h-10 text-muted mx-auto mb-3" />
              <h4 className="text-base font-bold text-text-main mb-1 uppercase tracking-tight">
                No Projects Found
              </h4>
              <p className="text-text-secondary text-xs">
                {"We're currently expanding this portfolio. Check back shortly!"}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner />
    </div>
  );
}
