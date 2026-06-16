import ServiceCard from "@/components/ServiceCard";
import CtaBanner from "@/components/CtaBanner";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Monitor, Smartphone, Database, Code2, Layers, Cpu } from "lucide-react";

export default function ServicesPage() {
  const allServices = [
    {
      id: "web-development",
      icon: <Monitor className="w-6 h-6" />,
      title: "Web Development",
      description:
        "We build fast, secure, and responsive web applications using React, TypeScript, and modern frameworks. We specialize in dynamic client dashboards and custom database integrations.",
      deliverables: [
        "Full-stack React & Node.js development",
        "TypeScript codebase refactoring for type safety",
        "E-commerce catalogue and checkouts",
        "Custom REST and GraphQL APIs",
      ],
    },
    {
      id: "app-development",
      icon: <Smartphone className="w-6 h-6" />,
      title: "App Development",
      description:
        "Launch cross-platform mobile apps for iOS and Android using Flutter. Write once and maintain a single codebase, drastically reducing your development costs and launch times.",
      deliverables: [
        "iOS & Android Development via Flutter",
        "Clean state management (Bloc/Provider)",
        "Unified API integrations for web & mobile",
        "App Store & Google Play deployment support",
      ],
    },
    {
      id: "systems-migration",
      icon: <Database className="w-6 h-6" />,
      title: "Systems & DB Migrations",
      description:
        "Upgrading legacy codebases and migrating database architectures. We move data safely from NoSQL (MongoDB) to relational SQL (PostgreSQL) schemas to prevent integrity issues.",
      deliverables: [
        "NoSQL to Relational SQL migrations",
        "Data schema normalization & constraints",
        "API backend performance tuning",
        "Zero-downtime deployment pipelines",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-bg-alt py-20 border-b border-border-main">
        <div className="container-max">
          <AnimateOnScroll variant="fade-up">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-muted mb-3">
              What We Do
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-text-main font-bold tracking-tight mb-4 uppercase">
              Our Services
            </h1>
            <p className="text-text-secondary text-base md:text-lg max-w-xl leading-relaxed">
              We build cohesive digital products — from responsive web frontends and cross-platform mobile apps to secure API layers and database migrations.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-surface">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {allServices.map((service) => (
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
                name: "PostgreSQL",
                icon: <Database className="w-8 h-8 text-blue-800" />,
              },
              {
                name: "MongoDB",
                icon: <Cpu className="w-8 h-8 text-green-700" />,
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
