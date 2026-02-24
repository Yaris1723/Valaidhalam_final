"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Twitter, Linkedin, Instagram, Github, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const socials = [
  { Icon: Twitter, href: "#", label: "Twitter", color: "#1DA1F2" },
  { Icon: Linkedin, href: "#", label: "LinkedIn", color: "#0077B5" },
  { Icon: Instagram, href: "#", label: "Instagram", color: "#E1306C" },
];

const footerCols = {
  Services: ["Full-Stack Dev", "Web Applications", "Social Media", "Consulting"],
  Company: ["About Us", "Our Process", "Careers", "Blog"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookies"],
};

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="bg-white border-t border-slate-100 pt-20 pb-10 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 pb-14 border-b border-slate-100">

          {/* Brand — takes 2 cols */}
          <div className="lg:col-span-2">
            <span className="font-display font-extrabold text-2xl tracking-tight" style={{
              background: "linear-gradient(135deg, #1d4ed8, #3b82f6, #06b6d4)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
            }}>
              Valaidhalam
            </span>
            <p className="text-slate-500 text-sm leading-[1.85] mt-3 max-w-[270px] font-jakarta">
              Premium tech services studio crafting digital experiences that scale. Based in Tamil Nadu, serving clients worldwide.
            </p>

            <div className="mt-6 space-y-3">
              {[
                { Icon: Mail, text: "hello@valaidhalam.com" },
                { Icon: Phone, text: "+91 99999 99999" },
                { Icon: MapPin, text: "Tamil Nadu, India" },
              ].map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5 text-slate-500 text-[13px] font-jakarta">
                  <Icon size={13} className="text-blue-400 flex-shrink-0" />
                  {text}
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-2.5 mt-7">
              {socials.map(({ Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 transition-all duration-200"
                  whileHover={{ y: -3, backgroundColor: color, color: "#fff", borderColor: color }}
                  whileTap={{ scale: 0.93 }}
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerCols).map(([title, links]) => (
            <div key={title} className="lg:col-span-1">
              <h4 className="font-display font-bold text-slate-900 text-[12px] uppercase tracking-[0.1em] mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="group inline-flex items-center gap-1 text-slate-500 text-[13.5px] font-jakarta hover:text-blue-600 transition-colors duration-200">
                      {link}
                      <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-blue-400" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8">
          <p className="text-slate-400 text-[13px] font-jakarta">
            © {new Date().getFullYear()} Valaidhalam. All rights reserved.
          </p>
          <p className="text-slate-400 text-[13px] flex items-center gap-1.5 font-jakarta">
            Made with <span className="text-red-400 text-base">♥</span> in Tamil Nadu
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
