"use client";

import Link from "next/link";
import { Linkedin, Github, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "GitHub", href: "#", icon: Github },
    { name: "Instagram", href: "#", icon: Instagram },
  ];

  return (
    <footer className="bg-bg text-text-main py-16 mt-auto border-t border-border-main relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-cta-gradient opacity-30" />
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand block */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.svg" alt="Mr. Freelancer Logo" className="w-10 h-10 rounded-full shadow-sm border border-border-main/50" />
              <div className="font-heading text-2xl font-bold tracking-tight">Mr. Freelancer</div>
            </div>
            <p className="text-text-secondary text-sm max-w-xs leading-relaxed">
              Building digital products. We design, develop, and scale custom web and mobile ecosystems — from concept to launch.
            </p>
            <div className="flex gap-4 mt-6">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-9 h-9 rounded-lg border border-border-main flex items-center justify-center text-muted hover:text-white hover:bg-cta hover:border-cta hover:scale-110 transition-all duration-200"
                    aria-label={social.name}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-muted mb-6">
              Quick Links
            </div>
            <div className="flex flex-col gap-3">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-main transition-colors"
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-muted mb-6">
              Get in Touch
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:info@mrfreelancer.in"
                className="text-sm text-text-secondary hover:text-text-main transition-colors"
              >
                info@mrfreelancer.in
              </a>
              <a
                href="#"
                className="text-sm text-text-secondary hover:text-text-main transition-colors"
              >
                WhatsApp
              </a>
              <div>
                <Link
                  href="/contact"
                  className="text-sm text-text-secondary hover:text-text-main transition-colors"
                >
                  Contact Form
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border-main text-center text-xs text-muted">
          © {currentYear} Mr. Freelancer. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

