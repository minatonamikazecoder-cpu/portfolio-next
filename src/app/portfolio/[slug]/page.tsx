import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import projectsData from "@/data/projects.json";
import { ArrowLeft, CheckCircle2, ShieldAlert, Cpu, Award } from "lucide-react";
import CtaBanner from "@/components/CtaBanner";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.slug === resolvedParams.slug);
  if (!project) return {};

  return {
    title: `${project.title} — Case Study | Mr. Freelancer`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Case Study | Mr. Freelancer`,
      description: project.summary,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const { caseStudy } = project;

  return (
    <div className="flex flex-col min-h-screen bg-bg">
      {/* ── BACK NAVIGATION ── */}
      <div className="border-b border-border-main py-6 bg-surface">
        <div className="container-max">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted hover:text-text-main transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
        </div>
      </div>

      {/* ── CASE STUDY HERO ── */}
      <section className="py-20 border-b border-border-main bg-bg-alt">
        <div className="container-max">
          <div className="max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-widest text-cta block mb-3">
              {project.category}
            </span>
            <h1 className="font-heading text-4xl md:text-6xl text-text-main font-bold tracking-tight mb-8">
              {project.title}
            </h1>
            
            {/* Meta Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-border-main/60">
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-muted mb-2">
                  Status
                </span>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft/40 border border-cta/10 text-xs font-semibold text-cta">
                  <span className="w-1.5 h-1.5 rounded-full bg-cta animate-pulse" />
                  {project.status}
                </div>
              </div>
              
              <div className="md:col-span-2">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-muted mb-2">
                  Technologies Utilized
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-semibold px-2.5 py-1 rounded bg-surface border border-border-main text-text-secondary hover:border-cta/20 hover:text-cta transition-colors duration-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENT BODY ── */}
      {caseStudy && (
        <section className="py-24 bg-surface border-b border-border-main">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              {/* Detailed Breakdown */}
              <div className="lg:col-span-8 space-y-16">
                <div>
                  <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-cta mb-4">
                    Overview
                  </h3>
                  <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                    {caseStudy.overview}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-border-main/60">
                  <div>
                    <div className="flex items-center gap-2 text-text-main mb-4">
                      <ShieldAlert className="w-5 h-5 text-cta" />
                      <h4 className="font-heading text-sm font-bold uppercase tracking-wide">
                        The Challenge
                      </h4>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {caseStudy.challenge}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-text-main mb-4">
                      <Cpu className="w-5 h-5 text-cta" />
                      <h4 className="font-heading text-sm font-bold uppercase tracking-wide">
                        Our Solution
                      </h4>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {caseStudy.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Results Sidebar */}
              <div className="lg:col-span-4 lg:pl-8">
                <div className="bg-bg-alt border border-border-main rounded-xl p-8 sticky top-24">
                  <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border-main/65">
                    <Award className="w-5 h-5 text-cta" />
                    <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-text-main">
                      Key Outcomes
                    </h3>
                  </div>

                  <ul className="space-y-6">
                    {caseStudy.results.map((result, idx) => (
                      <li key={idx} className="flex gap-3 items-start">
                        <CheckCircle2 className="w-4 h-4 text-cta mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-text-secondary leading-normal">
                          {result}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* ── CTA BANNER ── */}
      <CtaBanner />
    </div>
  );
}
