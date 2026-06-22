import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import servicesData from "@/data/services.json";
import { getServiceIcon } from "@/lib/service-icons";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import CtaBanner from "@/components/CtaBanner";

interface ServicePageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    id: service.id,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.id === resolvedParams.id);
  if (!service) return {};

  return {
    title: `${service.title} — Services & Capabilities | Mr. Freelancer`,
    description: service.summary,
    openGraph: {
      title: `${service.title} — Services & Capabilities | Mr. Freelancer`,
      description: service.summary,
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.id === resolvedParams.id);

  if (!service) {
    notFound();
  }

  const { detail, techStack } = service;

  return (
    <div className="flex flex-col min-h-screen bg-bg">
      {/* ── BACK NAVIGATION ── */}
      <div className="border-b border-border-main py-6 bg-surface">
        <div className="container-max">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted hover:text-text-main transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
        </div>
      </div>

      {/* ── HERO SECTION ── */}
      <section className="py-20 border-b border-border-main bg-bg-alt">
        <div className="container-max">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 border border-border-main bg-surface rounded-xl flex items-center justify-center text-cta shadow-sm">
                {getServiceIcon(service.icon)}
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-muted">
                Our Capabilities
              </span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-6xl text-text-main font-bold tracking-tight mb-6">
              {service.title}
            </h1>
            
            <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-3xl mb-8">
              {detail.heroDescription}
            </p>

            {/* Tech Stack Badges */}
            <div className="pt-6 border-t border-border-main/60">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-muted mb-3">
                Core Technologies
              </span>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-semibold px-3 py-1 rounded bg-surface border border-border-main text-text-secondary hover:border-cta/30 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── APPROACH & TIMELINE GRID ── */}
      <section className="py-24 bg-surface border-b border-border-main">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left: Approach & Why Us */}
            <div className="lg:col-span-7 space-y-12">
              <div>
                <h2 className="font-heading text-xs font-bold uppercase tracking-widest text-muted mb-4">
                  Our Approach
                </h2>
                <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                  {detail.approach}
                </p>
              </div>

              <div className="pt-8 border-t border-border-main/60">
                <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-text-main mb-6">
                  Why Partner With Us
                </h3>
                <ul className="space-y-4">
                  {detail.whyUs.map((point, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-cta mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-text-secondary leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Steps Timeline */}
            <div className="lg:col-span-5 lg:pl-6">
              <div className="bg-bg-alt border border-border-main rounded-xl p-8 sticky top-24">
                <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-text-main mb-6 pb-4 border-b border-border-main/60">
                  Execution Process
                </h3>

                <div className="space-y-8 relative">
                  {/* Process timeline link line */}
                  <div className="absolute top-4 bottom-8 left-4.5 w-[1px] bg-border-main" />

                  {detail.process.map((p) => (
                    <div key={p.step} className="flex gap-4 items-start relative z-10">
                      <div className="w-9 h-9 rounded-full bg-surface border border-border-main text-text-main font-semibold flex items-center justify-center flex-shrink-0 text-sm shadow-sm">
                        {p.step}
                      </div>
                      <div className="pt-1">
                        <h4 className="text-sm font-bold text-text-main mb-1">
                          {p.title}
                        </h4>
                        <p className="text-xs text-text-secondary leading-relaxed">
                          {p.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      {detail.faq && detail.faq.length > 0 && (
        <section className="py-24 bg-bg-alt border-b border-border-main">
          <div className="container-max">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-xs font-bold uppercase tracking-widest text-muted block mb-3">
                  Questions & Answers
                </span>
                <h2 className="font-heading text-3xl text-text-main font-bold uppercase">
                  Common Inquiries
                </h2>
              </div>

              <div className="space-y-6">
                {detail.faq.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-surface border border-border-main rounded-xl p-6 md:p-8"
                  >
                    <h3 className="text-sm font-bold text-text-main mb-3 flex items-start gap-3">
                      <span className="text-cta font-mono text-xs mt-0.5">Q.</span>
                      <span>{item.question}</span>
                    </h3>
                    <p className="text-xs md:text-sm text-text-secondary leading-relaxed pl-6">
                      {item.answer}
                    </p>
                  </div>
                ))}
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
