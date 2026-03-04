"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import CareersModal from "./CareersModal";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [careersOpen, setCareersOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state
      setScrolled(window.scrollY > 60);

      // Update active link based on scroll position
      const sections = navLinks.map(link => document.getElementById(link.href.substring(1)));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveLink(navLinks[i].label);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
          className="glass flex items-center gap-1 rounded-full h-[52px]"
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
          <Link href="#home">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src="/uploads/VALAITHALAM_Logo-removebg-preview.png"
                alt="Valaidhalam"
                style={{ height: '150px', width: 'auto' }}
              />
            </motion.div>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-0.5 mr-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.label === "Careers" ? (
                  <button
                    onClick={() => setCareersOpen(true)}
                    className="relative px-3 py-2 md:px-4 font-semibold text-slate-600 rounded-full transition-colors duration-200 hover:text-blue-600 block text-xs md:text-sm"
                  >
                    {activeLink === link.label && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-blue-50 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setActiveLink(link.label)}
                    className="relative px-3 py-2 md:px-4 font-semibold text-slate-600 rounded-full transition-colors duration-200 hover:text-blue-600 block text-xs md:text-sm"
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
                )}
              </li>
            ))}
          </ul>


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
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-[59]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed left-1/2 top-[90px] z-[60] -translate-x-1/2 glass rounded-3xl p-6 w-[calc(100%-2rem)] max-w-sm shadow-2xl"
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
                  {link.label === "Careers" ? (
                    <button
                      onClick={() => {
                        setMobileOpen(false);
                        setCareersOpen(true);
                      }}
                      className="block w-full text-left px-4 py-3 text-slate-700 font-semibold rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3 text-slate-700 font-semibold rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
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
          </>
        )}
      </AnimatePresence>

      {/* Careers Modal */}
      <CareersModal isOpen={careersOpen} onClose={() => setCareersOpen(false)} />
    </>
  );
}
