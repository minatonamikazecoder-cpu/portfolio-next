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
              
              <div className={"liveUrl" in project && project.liveUrl ? "md:col-span-1" : "md:col-span-2"}>
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

              {"liveUrl" in project && project.liveUrl && (
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-muted mb-2">
                    Live Demo
                  </span>
                  <a
                    href={project.liveUrl as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cta text-white hover:bg-cta-hover text-xs font-bold transition-all duration-200 shadow-sm hover:-translate-y-0.5"
                  >
                    Visit Live Website
                    <span className="text-[10px]">↗</span>
                  </a>
                </div>
              )}
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

      {/* ── PROJECT GALLERY ── */}
      {"images" in project && Array.isArray(project.images) && project.images.length > 0 && (
        <section className="py-24 bg-bg border-b border-border-main">
          <div className="container-max">
            <div className="max-w-2xl mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-cta block mb-3">
                Visual Showcase
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-text-main mb-4 uppercase tracking-tight">
                Interface Previews
              </h2>
              <p className="text-text-secondary text-base">
                Take a look at the key pages and interactive views designed and engineered for the application.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {(project.images as string[]).map((imgUrl, index) => (
                <div key={index} className="group bg-surface border border-border-main rounded-xl overflow-hidden shadow-sm hover:border-cta/25 transition-all duration-300">
                  <div className="relative aspect-[16/10] bg-bg-alt border-b border-border-main overflow-hidden flex flex-col">
                    {/* Browser Mock Header */}
                    <div className="flex items-center gap-1.5 p-3 bg-bg border-b border-border-main/60">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                      <div className="h-4 bg-surface rounded-md w-1/3 ml-2 flex items-center px-2 border border-border-main/50">
                        <span className="text-[8px] text-muted truncate">
                          {project.slug === "purebite-grocery" ? "purebite.com" : "freshcart.com"}
                          {imgUrl.includes("shop") && "/shop"}
                          {imgUrl.includes("about") && "/about"}
                          {imgUrl.includes("contact") && "/contact"}
                        </span>
                      </div>
                    </div>
                    {/* Screenshot image */}
                    <div className="flex-grow overflow-hidden relative">
                      <img
                        src={imgUrl}
                        alt={`${project.title} Screenshot - ${index + 1}`}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                  <div className="p-4 bg-surface text-center">
                    <span className="text-[11px] font-bold text-text-secondary tracking-wide uppercase">
                      {imgUrl.includes("home") && "Landing Page & Promotional Banners"}
                      {imgUrl.includes("shop") && "E-Commerce Shopping Catalog"}
                      {imgUrl.includes("about") && "Company About Us & Vision"}
                      {imgUrl.includes("contact") && "Contact Form & Razorpay Payment Support"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA BANNER ── */}
      <CtaBanner />
    </div>
  );
}
