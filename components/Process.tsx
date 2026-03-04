"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbulb, PenTool, Code2, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Plan",
    icon: Lightbulb,
    color: "#1d4ed8",
    lightBg: "#eff6ff",
    desc: "We deep-dive into your vision, market, and goals to craft a strategic roadmap that aligns all stakeholders from day one.",
    deliverables: ["Discovery Workshop", "Competitor Analysis", "Project Roadmap", "Timeline & Budget"],
    delay: 0,
  },
  {
    num: "02",
    title: "Design",
    icon: PenTool,
    color: "#0284c7",
    lightBg: "#f0f9ff",
    desc: "Our designers translate strategy into stunning interfaces — wireframes, prototypes, and pixel-perfect UI that users love.",
    deliverables: ["Wireframes", "UI Design System", "Interactive Prototypes", "Accessibility Review"],
    delay: 0.18,
  },
  {
    num: "03",
    title: "Develop",
    icon: Code2,
    color: "#0891b2",
    lightBg: "#ecfeff",
    desc: "Clean code, modern stacks, and rigorous QA. We build robust systems that are maintainable, scalable, and lightning-fast.",
    deliverables: ["Frontend Dev", "Backend APIs", "Database Design", "QA & Testing"],
    delay: 0.36,
  },
  {
    num: "04",
    title: "Launch",
    icon: Rocket,
    color: "#1d4ed8",
    lightBg: "#eff6ff",
    desc: "From deployment to post-launch support, we ensure a smooth release and iterate on real user data and feedback.",
    deliverables: ["Cloud Deployment", "Performance Tuning", "Analytics Setup", "Ongoing Support"],
    delay: 0.54,
  },
];

export default function Process() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="process" className="bg-[#f7f9ff] px-4 md:px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 35 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2
            className="font-display font-extrabold text-slate-900 leading-tight tracking-tight mb-4"
            style={{ fontSize: "clamp(2.1rem, 4.5vw, 3.2rem)" }}
          >
            A process built{" "}
            <span style={{
              background: "linear-gradient(135deg, #1d4ed8, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>for clarity</span>
          </h2>
          <p className="text-slate-500 max-w-md mx-auto leading-relaxed text-[15px]">
            Every great product starts with a proven foundation. Here's how we turn your idea into reality.
          </p>
        </motion.div>

        {/* Cards Container */}
        <div className="relative">
          {/* Cards Grid - Increased gap for more space between cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={headerInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: [0.34, 1.1, 0.64, 1], delay: step.delay + 0.2 }}
                  className="relative"
                >
                  {/* Card */}
                  <motion.div
                    className="relative z-10 bg-white rounded-2xl border-2 p-5 md:p-6 transition-all duration-300 border-slate-100 shadow-sm"
                  >
                    {/* Step number badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: step.lightBg }}
                      >
                        <Icon
                          size={20}
                          style={{ color: step.color }}
                          strokeWidth={1.7}
                        />
                      </div>
                      <span
                        className="font-display font-black text-xs"
                        style={{ color: "#94a3b8" }}
                      >
                        {step.num}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="font-display font-bold text-slate-800 text-lg mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-sm mb-4 line-clamp-3">
                      {step.desc}
                    </p>

                    {/* Deliverables */}
                    <div className="space-y-1.5">
                      {step.deliverables.slice(0, 2).map((d, idx) => (
                        <motion.div
                          key={d}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 0.6, x: 0 }}
                          transition={{ delay: idx * 0.08 }}
                          className="flex items-center gap-2 text-xs text-slate-600 font-medium"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: "#94a3b8" }}
                          />
                          {d}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Connector dot - Hidden (invisible connector) */}
                  {/* Removed visible connector dots */}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-10 md:mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-full text-sm hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1"
          >
            Get Started
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
