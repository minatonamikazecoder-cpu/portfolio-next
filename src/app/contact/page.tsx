"use client";

import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

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

    // Simulate sending form data (e.g. to Formspree or EmailJS)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setForm({ name: "", email: "", service: "web", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-bg">
      {/* Hero */}
      <section className="bg-gradient-to-b from-bg to-bg-alt/40 py-20 border-b border-border-main/30">
        <div className="container-max">
          <AnimateOnScroll>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-muted mb-3">
              Contact
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-text-main font-normal tracking-tight mb-4">
              Let's Start a Project
            </h1>
            <p className="text-muted text-base md:text-lg max-w-xl leading-relaxed">
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
              <AnimateOnScroll>
                <div className="bg-bg-alt/10 border border-border-main p-8 md:p-10 rounded-2xl">
                  <h3 className="font-heading text-2xl text-text-main mb-6">
                    Tell Us About Your Project
                  </h3>

                  {status === "success" ? (
                    <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-xl text-center">
                      <span className="text-3xl block mb-2">🎉</span>
                      <h4 className="font-semibold text-base mb-1">Message Sent Successfully!</h4>
                      <p className="text-sm text-green-700/80">
                        Thank you for reaching out. We will read your details and get back to you shortly.
                      </p>
                      <button
                        onClick={() => setStatus("idle")}
                        className="mt-4 text-xs font-semibold underline text-green-800 hover:text-green-950"
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
                          className={`w-full px-4 py-3 bg-surface border rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-text-main transition-colors ${
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
                          className={`w-full px-4 py-3 bg-surface border rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-text-main transition-colors ${
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
                          className="w-full px-4 py-3 bg-surface border border-border-main rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-text-main transition-colors cursor-pointer"
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
                          className={`w-full px-4 py-3 bg-surface border rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-text-main transition-colors resize-none ${
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

                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="w-full md:w-auto px-8 py-3.5 bg-text-main text-white font-semibold rounded-full text-sm hover:bg-muted/90 transition-all shadow-sm disabled:bg-muted/50 cursor-pointer text-center"
                      >
                        {status === "submitting" ? "Sending..." : "Send Message →"}
                      </button>
                    </form>
                  )}
                </div>
              </AnimateOnScroll>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-5 space-y-12 lg:pl-8">
              {/* Direct Info */}
              <AnimateOnScroll delay={0.15}>
                <div>
                  <h4 className="font-heading text-lg font-semibold text-text-main mb-4">
                    Direct Contact
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <span className="text-xs text-muted block">Email Address</span>
                      <a
                        href="mailto:hello@flowstack.in"
                        className="text-sm font-semibold text-text-main hover:text-cta transition-colors"
                      >
                        hello@flowstack.in
                      </a>
                    </div>
                    <div>
                      <span className="text-xs text-muted block">Direct Chat</span>
                      <a
                        href="#"
                        className="text-sm font-semibold text-text-main hover:text-cta transition-colors"
                      >
                        WhatsApp Support
                      </a>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Discovery Call card */}
              <AnimateOnScroll delay={0.25}>
                <div className="bg-bg-alt/30 border border-border-main p-6 rounded-2xl">
                  <span className="text-xl block mb-3">📞</span>
                  <h4 className="text-base font-semibold text-text-main mb-2">
                    Book a Discovery Call
                  </h4>
                  <p className="text-muted text-xs leading-relaxed mb-4">
                    Prefer to explain your product over a video call? Book a free 15-minute scoping call, and let's discuss your database, UI, and tech requirements directly.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-text-main hover:text-cta transition-colors"
                  >
                    Schedule Scoping Session <span>→</span>
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
