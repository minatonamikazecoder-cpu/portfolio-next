import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { PhoneCall, ArrowRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Let's Start a Project — Contact FlowStack",
  description: "Get in touch with FlowStack Studio for custom web development, mobile app engineering, or database refactoring inquiries.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-bg">
      {/* Hero */}
      <section className="bg-bg-alt py-20 border-b border-border-main">
        <div className="container-max">
          <AnimateOnScroll variant="fade-up">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-muted mb-3">
              Contact
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-text-main font-bold tracking-tight mb-4">
              {"Let's Start a Project"}
            </h1>
            <p className="text-text-secondary text-base md:text-lg max-w-xl leading-relaxed">
              {"Have a project in mind, need a migration, or want to discuss a custom ecosystem? Reach out and we'll reply within 24 hours."}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-surface">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <AnimateOnScroll variant="fade-up">
                <ContactForm />
              </AnimateOnScroll>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-5 space-y-12 lg:pl-8">
              {/* Direct Info */}
              <AnimateOnScroll variant="fade-up" delay={0.1}>
                <div>
                  <h4 className="font-heading text-lg font-bold text-text-main mb-4 tracking-tight">
                    Direct Contact
                  </h4>
                  <div className="space-y-4">
                    <div className="group transition-transform duration-200 hover:translate-x-1">
                      <span className="text-xs text-muted block">Email Address</span>
                      <a
                        href="mailto:hello@flowstack.in"
                        className="text-sm font-semibold text-text-main group-hover:text-cta transition-colors inline-block"
                      >
                        hello@flowstack.in
                      </a>
                    </div>
                    <div className="group transition-transform duration-200 hover:translate-x-1">
                      <span className="text-xs text-muted block">Direct Chat</span>
                      <a
                        href="#"
                        className="text-sm font-semibold text-text-main group-hover:text-cta transition-colors inline-block"
                      >
                        WhatsApp Support
                      </a>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Discovery Call card */}
              <AnimateOnScroll variant="fade-up" delay={0.2}>
                <div className="bg-bg-alt border border-border-main p-6 rounded-xl group hover:border-cta transition-colors duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-0 bg-cta group-hover:h-full transition-all duration-300 ease-out" />
                  <div className="w-10 h-10 rounded-lg bg-surface border border-border-main flex items-center justify-center text-cta mb-4 group-hover:border-cta transition-colors duration-300">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-text-main mb-2 tracking-tight">
                    Book a Discovery Call
                  </h4>
                  <p className="text-text-secondary text-xs leading-relaxed mb-4">
                    {"Prefer to explain your product over a video call? Book a free 15-minute scoping call, and let's discuss your database, UI, and tech requirements directly."}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-text-main hover:text-cta transition-colors"
                  >
                    <span>Schedule Scoping Session</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
