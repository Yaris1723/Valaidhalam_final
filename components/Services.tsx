"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Globe, TrendingUp, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    desc: "From concept to launch, we deliver scalable and secure applications engineered for performance and reliability. Built to handle growth from day one.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=480&h=260&fit=crop&auto=format",
    tag: "Engineering",
    accentColor: "#1d4ed8",
    lightBg: "#eff6ff",
    delay: 0,
    highlights: ["React / Next.js", "Node.js APIs", "PostgreSQL & MongoDB", "CI/CD Pipelines"],
  },
  {
    icon: Globe,
    title: "Web Applications",
    desc: "We create intuitive, responsive web applications that captivate users and function flawlessly on any device. Beautiful interfaces backed by solid engineering.",
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=480&h=260&fit=crop&auto=format",
    tag: "Design & Dev",
    accentColor: "#0284c7",
    lightBg: "#f0f9ff",
    delay: 0.14,
    highlights: ["UI/UX Design", "Figma Prototyping", "PWA Support", "Performance Audits"],
  },
  {
    icon: TrendingUp,
    title: "Social Media Management",
    desc: "Our strategic social media management grows your brand's influence and converts followers into loyal customers. Data-driven content that resonates and performs.",
    img: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=480&h=260&fit=crop&auto=format",
    tag: "Growth",
    accentColor: "#0891b2",
    lightBg: "#ecfeff",
    delay: 0.28,
    highlights: ["Content Strategy", "Analytics & Reporting", "Community Growth", "Paid Campaigns"],
  },
];

function ServiceCard({ s, i }: { s: typeof services[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);
  const Icon = s.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.75, ease: [0.34, 1.1, 0.64, 1], delay: s.delay }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative"
    >
      <motion.div
        className="relative bg-white rounded-[24px] overflow-hidden border border-slate-100/80 h-full flex flex-col"
        animate={{
          y: hovered ? -10 : 0,
          boxShadow: hovered
            ? `0 30px 70px rgba(${s.accentColor === "#1d4ed8" ? "29,78,216" : s.accentColor === "#0284c7" ? "2,132,199" : "8,145,178"},0.16), 0 0 0 1.5px ${s.accentColor}20`
            : "0 4px 24px rgba(0,0,0,0.06)",
        }}
        transition={{ duration: 0.38, ease: [0.34, 1.1, 0.64, 1] }}
      >
        {/* Image with overlay */}
        <div className="relative overflow-hidden" style={{ height: "200px" }}>
          <motion.img
            src={s.img}
            alt={s.title}
            className="w-full h-full object-cover"
            animate={{ scale: hovered ? 1.07 : 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
          <div className="absolute inset-0" style={{
            background: `linear-gradient(180deg, ${s.accentColor}22 0%, ${s.accentColor}55 100%)`
          }} />

          {/* Tag */}
          <div className="absolute top-4 left-4">
            <span
              className="px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-white font-display"
              style={{ background: s.accentColor, boxShadow: `0 4px 12px ${s.accentColor}60` }}
            >
              {s.tag}
            </span>
          </div>

          {/* Number */}
          <div className="absolute top-4 right-4 font-display font-black text-5xl text-white/20 leading-none select-none">
            0{i + 1}
          </div>
        </div>

        {/* Content */}
        <div className="p-7 flex flex-col flex-1">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: s.lightBg, border: `1px solid ${s.accentColor}20` }}
            >
              <Icon size={20} style={{ color: s.accentColor }} strokeWidth={1.9} />
            </div>
            <h3 className="font-display font-bold text-slate-900 text-lg leading-snug">{s.title}</h3>
          </div>

          <p className="text-slate-500 text-sm leading-[1.85] mb-6 flex-1">{s.desc}</p>

          {/* Highlights */}
          <motion.div
            animate={{ height: hovered ? "auto" : 0, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mb-4"
          >
            <div className="grid grid-cols-2 gap-1.5 pt-1 pb-3 border-t border-slate-100">
              {s.highlights.map((h) => (
                <div key={h} className="flex items-center gap-1.5 text-[12px] text-slate-600 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: s.accentColor }} />
                  {h}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-bold font-display transition-all"
            style={{ color: s.accentColor }}
            animate={{ x: hovered ? 3 : 0 }}
          >
            Get Started
            <ArrowUpRight size={15} strokeWidth={2.5} />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="services" className="bg-[#f7f9ff] py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 35 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-6 h-0.5 bg-blue-500 rounded-full" />
            <span className="text-blue-600 text-xs font-bold uppercase tracking-[0.15em] font-display">
              What We Do
            </span>
            <span className="w-6 h-0.5 bg-blue-500 rounded-full" />
          </div>
          <h2
            className="font-display font-extrabold text-slate-900 leading-tight tracking-tight mb-4"
            style={{ fontSize: "clamp(2.1rem, 4.5vw, 3.2rem)" }}
          >
            Services Crafted
            <br />
            <span style={{
              background: "linear-gradient(135deg, #1d4ed8, #3b82f6, #06b6d4)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
            }}>for Growth</span>
          </h2>
          <p className="text-slate-500 max-w-md mx-auto leading-relaxed text-[15px]">
            We combine strategy, design, and engineering to deliver solutions that actually move the needle for your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => <ServiceCard key={i} s={s} i={i} />)}
        </div>
      </div>
    </section>
  );
}
