import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-main text-white py-16 mt-auto">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand block */}
          <div>
            <div className="font-heading text-2xl font-semibold mb-4">FlowStack</div>
            <p className="text-white/50 text-sm max-w-xs leading-relaxed">
              Building digital products. We design, develop, and scale custom web and mobile ecosystems — from concept to launch.
            </p>
            <div className="flex gap-4 mt-6">
              {["LinkedIn", "GitHub", "Behance", "Instagram"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-xs text-white/60 hover:bg-white/10 hover:text-white hover:border-white/30 transition-all"
                  aria-label={platform}
                >
                  {platform.substring(0, 2).toLowerCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-6">
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
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-6">
              Get in Touch
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@flowstack.in"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                hello@flowstack.in
              </a>
              <a
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                WhatsApp
              </a>
              <Link
                href="/contact"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Contact Form
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-xs text-white/35">
          © {currentYear} FlowStack. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
