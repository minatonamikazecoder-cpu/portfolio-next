"use client";

import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { CheckCircle, PhoneCall, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "web",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!form.name.trim()) tempErrors.name = "Name is required.";
    if (!form.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = "Email is invalid.";
    }
    if (!form.message.trim()) tempErrors.message = "Message is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setForm({ name: "", email: "", service: "web", message: "" });
    } catch {
      setStatus("error");
    }
  };

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
              Let's Start a Project
            </h1>
            <p className="text-text-secondary text-base md:text-lg max-w-xl leading-relaxed">
              Have a project in mind, need a migration, or want to discuss a custom ecosystem? Reach out and we'll reply within 24 hours.
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
                <div className="bg-bg-alt/30 border border-border-main p-8 md:p-10 rounded-xl">
                  <h3 className="font-heading text-2xl text-text-main mb-6 uppercase tracking-tight font-bold">
                    Tell Us About Your Project
                  </h3>

                  {status === "success" ? (
                    <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center shadow-sm">
                      <CheckCircle className="w-10 h-10 text-green-600 mx-auto mb-3" />
                      <h4 className="font-bold text-base mb-1">Message Sent Successfully!</h4>
                      <p className="text-sm text-green-700/80">
                        Thank you for reaching out. We will read your details and get back to you shortly.
                      </p>
                      <button
                        onClick={() => setStatus("idle")}
                        className="mt-4 text-xs font-semibold underline text-green-800 hover:text-green-950 cursor-pointer"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-surface border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-cta focus:border-cta transition-colors ${
                            errors.name ? "border-red-500" : "border-border-main"
                          }`}
                          placeholder="Jane Doe"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-surface border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-cta focus:border-cta transition-colors ${
                            errors.email ? "border-red-500" : "border-border-main"
                          }`}
                          placeholder="jane@example.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                        )}
                      </div>

                      {/* Service */}
                      <div>
                        <label htmlFor="service" className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                          What do you need help with?
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-surface border border-border-main rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-cta focus:border-cta transition-colors cursor-pointer text-text-main"
                        >
                          <option value="web">Web Development (React/Next.js/TypeScript)</option>
                          <option value="app">Mobile App Development (Flutter)</option>
                          <option value="migration">Database Migration (MERN to PERN)</option>
                          <option value="other">Other / Custom Ecosystem</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                          Project Details
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-surface border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-cta focus:border-cta transition-colors resize-none ${
                            errors.message ? "border-red-500" : "border-border-main"
                          }`}
                          placeholder="Tell us about your target goals, timeline, and current system..."
                        />
                        {errors.message && (
                          <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                        )}
                      </div>

                      {status === "error" && (
                        <p className="text-red-500 text-xs">
                          An error occurred while sending your message. Please try again.
                        </p>
                      )}

                      <div>
                        <button
                          type="submit"
                          disabled={status === "submitting"}
                          className="w-full md:w-auto px-8 py-3.5 bg-cta text-white font-semibold rounded-md text-sm hover:bg-cta-hover transition-colors shadow-sm disabled:opacity-50 cursor-pointer text-center"
                        >
                          {status === "submitting" ? "Sending..." : "Send Message"}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </AnimateOnScroll>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-5 space-y-12 lg:pl-8">
              {/* Direct Info */}
              <AnimateOnScroll variant="fade-up" delay={0.1}>
                <div>
                  <h4 className="font-heading text-lg font-bold text-text-main mb-4 uppercase tracking-tight">
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
                  <h4 className="text-base font-bold text-text-main mb-2 uppercase tracking-tight">
                    Book a Discovery Call
                  </h4>
                  <p className="text-text-secondary text-xs leading-relaxed mb-4">
                    Prefer to explain your product over a video call? Book a free 15-minute scoping call, and let's discuss your database, UI, and tech requirements directly.
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
