import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import CtaBanner from "@/components/CtaBanner";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Code2, Layers, Palette, Brush } from "lucide-react";
import { getServiceIcon } from "@/lib/service-icons";
import servicesData from "@/data/services.json";

export const metadata: Metadata = {
  title: "Our Services & Capabilities — Mr. Freelancer",
  description: "Explore our web development, Flutter app engineering, and graphic design/brand identity capabilities.",
};

export default function ServicesPage() {


  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-bg-alt py-20 border-b border-border-main">
        <div className="container-max">
          <AnimateOnScroll variant="fade-up">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-muted mb-3">
              What We Do
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-text-main font-bold tracking-tight mb-4">
              Our Services
            </h1>
            <p className="text-text-secondary text-base md:text-lg max-w-xl leading-relaxed">
              We build cohesive digital products — from responsive web frontends and cross-platform mobile apps to premium graphic designs and brand assets.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-surface">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                icon={getServiceIcon(service.icon)}
                title={service.title}
                description={service.description}
                deliverables={service.deliverables}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Highlights */}
      <section className="py-20 bg-bg-alt border-y border-border-main">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <AnimateOnScroll variant="fade-up">
              <span className="text-xs font-bold uppercase tracking-widest text-muted block mb-3">
                Our Stack
              </span>
              <h2 className="font-heading text-3xl text-text-main font-bold uppercase mb-4">
                Technologies We Trust
              </h2>
              <p className="text-text-secondary text-sm max-w-lg mx-auto">
                We stick to modern, industry-standard technologies that guarantee performance, developer availability, and easy scaling.
              </p>
            </AnimateOnScroll>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
            {[
              {
                name: "TypeScript",
                icon: (
                  <svg className="w-8 h-8 text-[#3178C6]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm16.5 15.602c.002-.56.16-1.002.477-1.326.315-.323.754-.486 1.318-.486.558 0 .99.163 1.295.486.307.324.46.766.46 1.326v3.297c0 .56-.153 1.001-.46 1.325-.306.324-.737.486-1.295.486-.564 0-1.003-.162-1.318-.486-.316-.324-.475-.765-.477-1.325v-3.297zm-5.748-2.613v8.809H9.336v-8.809h-3v-2.022h8.892v2.022h-3.027z" />
                  </svg>
                ),
              },
              {
                name: "React / Next.js",
                icon: <Layers className="w-8 h-8 text-cta" />,
              },
              {
                name: "Flutter",
                icon: (
                  <svg className="w-8 h-8 text-[#02569B]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.314 0L2.3 12 6 15.7 21.684.016h-7.37zM21.684 12.003H14.3L10.6 15.7l3.7 3.7 7.384-7.397zM6 19.4L2.3 23.1 14.3 11.1h7.384L9.7 23.1H6z" />
                  </svg>
                ),
              },
              {
                name: "Node.js",
                icon: <Code2 className="w-8 h-8 text-emerald-600" />,
              },
              {
                name: "Figma",
                icon: <Palette className="w-8 h-8 text-rose-500" />,
              },
              {
                name: "Creative Cloud",
                icon: <Brush className="w-8 h-8 text-blue-600" />,
              },
            ].map((tech) => (
              <div
                key={tech.name}
                className="bg-surface border border-border-main rounded-xl p-6 hover:border-cta hover:shadow-sm transition-all duration-300 flex flex-col items-center justify-center gap-4"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-bg-alt border border-border-main">
                  {tech.icon}
                </div>
                <div className="text-sm font-bold text-text-main">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner />
    </div>
  );
}
