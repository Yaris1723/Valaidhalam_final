"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.nav
        className="fixed top-5 left-1/2 z-50"
        style={{ x: "-50%" }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1], delay: 0.4 }}
      >
        <motion.div
          className="glass flex items-center gap-1 rounded-full"
          animate={{
            paddingLeft: scrolled ? "16px" : "20px",
            paddingRight: scrolled ? "16px" : "20px",
            paddingTop: scrolled ? "8px" : "12px",
            paddingBottom: scrolled ? "8px" : "12px",
            boxShadow: scrolled
              ? "0 16px 60px rgba(29,78,216,0.20), 0 2px 16px rgba(0,0,0,0.10)"
              : "0 8px 40px rgba(29,78,216,0.10), 0 2px 12px rgba(0,0,0,0.06)",
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Logo */}
          <motion.span
            className="font-display font-extrabold tracking-tight mr-3 select-none cursor-pointer"
            style={{
              fontSize: "1.18rem",
              background: "linear-gradient(135deg, #1d4ed8, #3b82f6, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Valaidhalam
          </motion.span>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-0.5 mr-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setActiveLink(link.label)}
                  className="relative px-4 py-2 text-[13.5px] font-semibold text-slate-600 rounded-full transition-colors duration-200 hover:text-blue-600 block"
                >
                  {activeLink === link.label && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-blue-50 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <motion.a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-bold text-white rounded-full"
            style={{
              background: "linear-gradient(135deg, #1d4ed8, #2563eb)",
              boxShadow: "0 4px 14px rgba(29,78,216,0.45)",
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 6px 22px rgba(29,78,216,0.55)" }}
            whileTap={{ scale: 0.96 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-200 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-100" />
            </span>
            Get Started
          </motion.a>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-2 rounded-full text-slate-600 hover:bg-blue-50"
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </motion.button>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed top-[80px] left-4 right-4 z-40 glass rounded-3xl p-6 shadow-2xl"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <ul className="space-y-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-slate-700 font-semibold rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.a
              href="#contact"
              className="mt-4 w-full flex items-center justify-center py-3 bg-blue-600 text-white font-bold rounded-xl"
              whileTap={{ scale: 0.97 }}
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
