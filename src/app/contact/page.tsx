"use client";

import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { motion } from "framer-motion";

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
    } catch {
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
              Let&apos;s Start a Project
            </h1>
            <p className="text-muted text-base md:text-lg max-w-xl leading-relaxed">
              Have a project in mind, need a migration, or want to discuss a custom ecosystem? Reach out and we&apos;ll reply within 24 hours.
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
                    <motion.div 
                      className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-xl text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    >
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
                    </motion.div>
                  ) : (
                    <motion.form 
                      onSubmit={handleSubmit} 
                      className="space-y-6"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: { staggerChildren: 0.1 }
                        }
                      }}
                    >
                      {/* Name */}
                      <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
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
                      </motion.div>

                      {/* Email */}
                      <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
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
                      </motion.div>

                      {/* Service */}
                      <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
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
                      </motion.div>

                      {/* Message */}
                      <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
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
                      </motion.div>

                      {status === "error" && (
                        <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="text-red-500 text-xs">
                          An error occurred while sending your message. Please try again.
                        </motion.p>
                      )}

                      <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          disabled={status === "submitting"}
                          className="w-full md:w-auto px-8 py-3.5 bg-text-main text-white font-semibold rounded-full text-sm hover:bg-muted/90 transition-colors shadow-sm disabled:bg-muted/50 cursor-pointer text-center"
                        >
                          {status === "submitting" ? "Sending..." : "Send Message →"}
                        </motion.button>
                      </motion.div>
                    </motion.form>
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
                    <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                      <span className="text-xs text-muted block">Email Address</span>
                      <a
                        href="mailto:hello@flowstack.in"
                        className="text-sm font-semibold text-text-main hover:text-cta transition-colors inline-block"
                      >
                        hello@flowstack.in
                      </a>
                    </motion.div>
                    <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                      <span className="text-xs text-muted block">Direct Chat</span>
                      <a
                        href="#"
                        className="text-sm font-semibold text-text-main hover:text-cta transition-colors inline-block"
                      >
                        WhatsApp Support
                      </a>
                    </motion.div>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Discovery Call card */}
              <AnimateOnScroll delay={0.25}>
                <motion.div 
                  className="bg-bg-alt/30 border border-border-main p-6 rounded-2xl cursor-pointer group"
                  whileHover={{ y: -4, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.05)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.span 
                    className="text-xl block mb-3 inline-block"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    📞
                  </motion.span>
                  <h4 className="text-base font-semibold text-text-main mb-2">
                    Book a Discovery Call
                  </h4>
                  <p className="text-muted text-xs leading-relaxed mb-4">
                    Prefer to explain your product over a video call? Book a free 15-minute scoping call, and let&apos;s discuss your database, UI, and tech requirements directly.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-text-main hover:text-cta transition-colors"
                  >
                    Schedule Scoping Session <motion.span className="inline-block" whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400 }}>→</motion.span>
                  </a>
                </motion.div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
