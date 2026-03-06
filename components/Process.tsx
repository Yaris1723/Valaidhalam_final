"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbulb, PenTool, Code2, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Plan",
    icon: Lightbulb,
    color: "#2563eb",
    glow: "rgba(37,99,235,0.45)",
    gradientFrom: "#1e3a8a",
    gradientTo: "#2563eb",
    desc: "We deep-dive into your vision, market, and goals to craft a strategic roadmap that aligns all stakeholders from day one.",
    deliverables: ["Discovery Workshop", "Competitor Analysis", "Project Roadmap", "Timeline & Budget"],
    initial: { opacity: 0, x: -100, rotate: -8 },
    animate: { opacity: 1, x: 0, rotate: 0 },
    transition: { duration: 0.8, ease: [0.34, 1.2, 0.64, 1], delay: 0.1 },
  },
  {
    num: "02",
    title: "Design",
    icon: PenTool,
   color: "#2563eb",
    glow: "rgba(37,99,235,0.45)",
    gradientFrom: "#1e3a8a",
    gradientTo: "#2563eb",
    desc: "Our designers translate strategy into stunning interfaces — wireframes, prototypes, and pixel-perfect UI that users love.",
    deliverables: ["Wireframes", "UI Design System", "Interactive Prototypes", "Accessibility Review"],
    initial: { opacity: 0, y: -100, scale: 0.7 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.85, ease: [0.34, 1.4, 0.64, 1], delay: 0.25 },
  },
  {
    num: "03",
    title: "Develop",
    icon: Code2,
    color: "#2563eb",
    glow: "rgba(37,99,235,0.45)",
    gradientFrom: "#1e3a8a",
    gradientTo: "#2563eb",
    desc: "Clean code, modern stacks, and rigorous QA. We build robust systems that are maintainable, scalable, and lightning-fast.",
    deliverables: ["Frontend Dev", "Backend APIs", "Database Design", "QA & Testing"],
    initial: { opacity: 0, scale: 0.3, rotate: 15 },
    animate: { opacity: 1, scale: 1, rotate: 0 },
    transition: { duration: 0.9, ease: [0.34, 1.3, 0.64, 1], delay: 0.4 },
  },
  {
    num: "04",
    title: "Launch",
    icon: Rocket,
    color: "#3b82f6",
    glow: "rgba(59,130,246,0.45)",
    gradientFrom: "#1e3a8a",
    gradientTo: "#3b82f6",
    desc: "From deployment to post-launch support, we ensure a smooth release and iterate on real user data and feedback.",
    deliverables: ["Cloud Deployment", "Performance Tuning", "Analytics Setup", "Ongoing Support"],
    initial: { opacity: 0, x: 100, rotate: 8 },
    animate: { opacity: 1, x: 0, rotate: 0 },
    transition: { duration: 0.8, ease: [0.34, 1.2, 0.64, 1], delay: 0.55 },
  },
];

const deliverableVariants = [
  (idx: number) => ({ initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: 0.6 + idx * 0.1 } }),
  (idx: number) => ({ initial: { opacity: 0, y: -15 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.75 + idx * 0.1 } }),
  (idx: number) => ({ initial: { opacity: 0, scale: 0.5 }, animate: { opacity: 1, scale: 1 }, transition: { delay: 0.9 + idx * 0.1 } }),
  (idx: number) => ({ initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, transition: { delay: 1.05 + idx * 0.1 } }),
];

export default function Process() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="process"
      className="relative px-4 md:px-6 py-20 md:py-32 overflow-hidden"
      style={{ background: "#f7f9ff" }}
    >
      {/* Background subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#1d4ed8 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient glow blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-[0.07] blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #2563eb, transparent)" }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-[0.07] blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #2563eb, transparent)" }} />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          ref={headerRef}
          layout={false}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >

          <h2
            className="font-display font-black text-slate-900 leading-tight tracking-tight mb-5"
            style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)" }}
          >
            A process built{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #60a5fa, #22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              for clarity
            </span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto leading-relaxed text-base">
            Every great product starts with a proven foundation. Here's how we turn your idea into reality.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isHovered = hoveredIdx === i;
            const getProps = deliverableVariants[i];

            return (
              <motion.div
                key={i}
                layout={false}
                initial={step.initial}
                animate={headerInView ? step.animate : step.initial}
                transition={step.transition}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                onTouchStart={() => setHoveredIdx(i)}
onTouchEnd={() => setTimeout(() => setHoveredIdx(null), 600)}

                className="relative group cursor-default"
              >
                {/* Glow behind card */}
                <div
                  className="absolute -inset-1 rounded-3xl blur-xl pointer-events-none transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle, ${step.glow}, transparent 70%)`,
                    opacity: isHovered ? 0.6 : 0,
                  }}
                />

                {/* Card */}
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative h-full rounded-2xl overflow-hidden border"
                  style={{
                   background: "#ffffff",
                    borderColor: isHovered ? `${step.color}40` : "rgba(0,0,0,0.07)",
                    boxShadow: isHovered ? `0 20px 50px ${step.glow}` : "0 2px 16px rgba(0,0,0,0.06)",
                    backdropFilter: "blur(16px)",
                    transition: "background 0.4s, border-color 0.4s, box-shadow 0.4s",
                  }}
                >
                  {/* Top shimmer line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-400"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${step.color}, transparent)`,
                      opacity: isHovered ? 1 : 0.25,
                    }}
                  />

                  <div className="p-6 md:p-7 flex flex-col h-full">

                    {/* Icon + number */}
                    <div className="flex items-start justify-between mb-6">
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 350 }}
                        className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-400"
                        style={{
                          background: "#ffffff",
                          border: `1px solid ${isHovered ? step.color + "40" : "rgba(0,0,0,0.06)"}`,
                          boxShadow: isHovered ? `0 0 20px ${step.glow}` : "none",
                        }}
                      >
                        <Icon
                          size={22}
                          style={{ color: "#94a3b8" }}
                          strokeWidth={1.7}
                        />
                      </motion.div>

                      <span
                        className="font-black text-6xl leading-none select-none transition-colors duration-400"
                        style={{ color: isHovered ? step.color : "rgba(0,0,0,0.06)" }}
                      >
                        {step.num}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="font-display font-black text-2xl mb-3 transition-colors duration-300"
                      style={{ color: "#0f172a" }}

                    >
                      {step.title}
                    </h3>

                    {/* Desc */}
                    <p
                      className="text-sm leading-relaxed mb-6 flex-1 transition-colors duration-300"
                      style={{ color: isHovered ? "#475569" : "#94a3b8" }}
                    >
                      {step.desc}
                    </p>

                    {/* Divider */}
                    <div
                      className="h-px mb-4 transition-all duration-400"
                      style={{
                        background: isHovered
                          ? `linear-gradient(90deg, ${step.color}60, transparent)`
                          : "rgba(0,0,0,0.06)",
                      }}
                    />

                    {/* Deliverables */}
                    <div className="space-y-2">
                      {step.deliverables.map((d, idx) => {
                        const p = getProps(idx);
                        return (
                          <motion.div
                            key={d}
                            initial={p.initial}
                            animate={headerInView ? p.animate : p.initial}
                            transition={p.transition}
                            className="flex items-center gap-2.5 text-xs font-semibold transition-colors duration-300"
                            style={{ color: isHovered ? "#334155" : "#94a3b8" }}
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-300"
                              style={{ background: isHovered ? step.color : "#cbd5e1" }}
                            />
                            {d}
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Bottom sweep line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-[3px] rounded-b-2xl"
                    style={{ background: `linear-gradient(90deg, ${step.color}, ${step.color}33)` }}
                    initial={{ width: "0%" }}
                    animate={{ width: isHovered ? "100%" : "0%" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Animated dots connector */}
        <div className="hidden lg:flex justify-center items-center gap-2 mt-10">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-2">
              <motion.div
                className="w-2 h-2 rounded-full"
                style={{ background: step.color }}
                animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
              />
              {i < steps.length - 1 && (
                <div
                  className="w-20 h-px"
                  style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.08), rgba(0,0,0,0.03))" }}
                />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(37,99,235,0.45)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center gap-3 px-10 py-4 text-white font-bold rounded-full text-sm relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #2563eb, #0ea5e9)" }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <ArrowRight size={18} />
            </span>
            {/* Shimmer sweep */}
            <motion.div
              className="absolute inset-0 opacity-30"
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)" }}
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
            />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}