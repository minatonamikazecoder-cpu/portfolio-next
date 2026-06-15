"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-18 flex items-center transition-all duration-300 ${
          isScrolled
            ? "bg-bg/92 backdrop-blur-md shadow-sm border-b border-border-main/50"
            : "bg-transparent"
        }`}
      >
        <div className="container-max w-full flex items-center justify-between">
          <Link href="/" className="font-heading text-2xl text-text-main font-semibold tracking-tight">
            FlowStack
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative py-1 hover:text-text-main ${
                    isActive ? "text-text-main" : "text-muted"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-text-main" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide bg-text-main text-white hover:bg-muted/90 transition-all shadow-sm hover:-translate-y-[1px]"
            >
              Get a Quote →
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 cursor-pointer z-50"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-[2px] bg-text-main rounded-full transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-[8px]" : ""
              }`}
            />
            <span
              className={`w-6 h-[2px] bg-text-main rounded-full transition-opacity duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-[2px] bg-text-main rounded-full transition-transform duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-[8px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-bg/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`font-heading text-3xl transition-colors ${
                isActive ? "text-text-main underline decoration-2 underline-offset-4" : "text-muted"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
        <Link
          href="/contact"
          onClick={() => setIsMobileMenuOpen(false)}
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold bg-text-main text-white hover:bg-muted transition-all mt-4"
        >
          Get a Quote →
        </Link>
      </div>
    </>
  );
}
