import ServiceCard from "@/components/ServiceCard";
import CtaBanner from "@/components/CtaBanner";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function ServicesPage() {
  const allServices = [
    {
      id: "web-development",
      icon: "💻",
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
      icon: "📱",
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
      icon: "⚙️",
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
      <section className="bg-gradient-to-b from-bg to-bg-alt/40 py-20 border-b border-border-main/30">
        <div className="container-max">
          <AnimateOnScroll>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-muted mb-3">
              What We Do
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-text-main font-normal tracking-tight mb-4">
              Our Services
            </h1>
            <p className="text-muted text-base md:text-lg max-w-xl leading-relaxed">
              We build cohesive digital products — from responsive web frontends and cross-platform mobile apps to secure API layers and database migrations.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-surface">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <AnimateOnScroll key={service.id} delay={index * 0.15}>
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

      {/* Tech Stack Highlights */}
      <section className="py-20 bg-bg-alt/20 border-t border-border-main/50">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <AnimateOnScroll>
              <span className="text-xs font-bold uppercase tracking-widest text-muted block mb-3">
                Our Stack
              </span>
              <h2 className="font-heading text-3xl text-text-main mb-4">
                Technologies We Trust
              </h2>
              <p className="text-muted text-sm max-w-lg mx-auto">
                We stick to modern, industry-standard technologies that guarantee performance, developers availability, and easy scaling.
              </p>
            </AnimateOnScroll>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 text-center">
            {[
              { name: "TypeScript", icon: "TS" },
              { name: "React / Next.js", icon: "React" },
              { name: "Flutter", icon: "Flutter" },
              { name: "Node.js", icon: "Node" },
              { name: "PostgreSQL", icon: "Postgres" },
              { name: "MongoDB", icon: "Mongo" },
            ].map((tech, index) => (
              <AnimateOnScroll key={tech.name} delay={index * 0.08}>
                <div className="bg-surface border border-border-main rounded-xl p-6 hover:shadow-md transition-all duration-300">
                  <div className="text-xs font-bold text-muted uppercase tracking-wider mb-2">
                    {tech.icon}
                  </div>
                  <div className="text-sm font-semibold text-text-main">
                    {tech.name}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <AnimateOnScroll>
        <CtaBanner />
      </AnimateOnScroll>
    </div>
  );
}
