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
    <footer className="bg-bg text-text-main py-16 mt-auto border-t border-border-main">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand block */}
          <div>
            <div className="font-heading text-2xl font-bold mb-4 tracking-tight">Mr. Freelancer</div>
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
                    className="w-9 h-9 rounded-md border border-border-main flex items-center justify-center text-muted hover:text-text-main hover:border-text-secondary transition-colors"
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
                href="mailto:hello@mrfreelancer.in"
                className="text-sm text-text-secondary hover:text-text-main transition-colors"
              >
                hello@mrfreelancer.in
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

