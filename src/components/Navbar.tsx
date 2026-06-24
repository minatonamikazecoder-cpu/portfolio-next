"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

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

  // Close mobile menu on route change (React 19 style during render)
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsMobileMenuOpen(false);
  }

  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    open: {
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut", staggerChildren: 0.07, delayChildren: 0.1 },
    },
  };

  const menuItemVariants: Variants = {
    closed: { opacity: 0, y: 30, filter: "blur(8px)" },
    open: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <>
      <nav
        className={`fixed z-50 h-18 flex items-center transition-all duration-500 ${
          isScrolled
            ? "top-3 left-4 right-4 bg-surface/92 backdrop-blur-xl shadow-lg shadow-black/[0.04] border border-border-main rounded-2xl"
            : "top-0 left-0 right-0 bg-transparent"
        }`}
      >
        <div className="container-max w-full flex items-center justify-between">
          <Link href="/" className="font-heading text-xl text-text-main font-bold tracking-tight flex items-center gap-2.5">
            <img src="/logo.svg" alt="Mr. Freelancer Logo" className="w-8 h-8 rounded-full shadow-sm border border-border-main/50" />
            <span>Mr. Freelancer</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 relative">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-semibold tracking-wider uppercase transition-colors relative py-1 hover:text-cta ${
                    isActive ? "text-text-main" : "text-muted"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-indicator"
                      className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-cta rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2 rounded-lg text-xs font-semibold tracking-wide bg-cta text-white hover:bg-cta-hover hover:shadow-md hover:shadow-cta/15 transition-all duration-200"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 cursor-pointer z-50"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-6 h-[2px] bg-text-main rounded-full block"
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="w-6 h-[2px] bg-text-main rounded-full block"
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-6 h-[2px] bg-text-main rounded-full block"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-bg/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <motion.div key={link.name} variants={menuItemVariants}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`font-heading text-3xl transition-colors ${
                      isActive ? "text-text-main underline decoration-2 underline-offset-4" : "text-muted"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              );
            })}
            <motion.div variants={menuItemVariants}>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-md text-sm font-semibold bg-cta text-white hover:bg-cta-hover transition-colors mt-4"
              >
                Get a Quote
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
