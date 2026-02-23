"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Lightbulb, PenTool, Code2, Rocket } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    num: "01", title: "Plan", icon: Lightbulb,
    img: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=500&h=300&fit=crop&auto=format",
    color: "#1d4ed8", lightBg: "#eff6ff",
    desc: "We deep-dive into your vision, market, and goals to craft a strategic roadmap that aligns all stakeholders from day one.",
    deliverables: ["Discovery Workshop", "Competitor Analysis", "Project Roadmap", "Timeline & Budget"],
    delay: 0,
  },
  {
    num: "02", title: "Design", icon: PenTool,
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop&auto=format",
    color: "#0284c7", lightBg: "#f0f9ff",
    desc: "Our designers translate strategy into stunning interfaces — wireframes, prototypes, and pixel-perfect UI that users love.",
    deliverables: ["Wireframes", "UI Design System", "Interactive Prototypes", "Accessibility Review"],
    delay: 0.18,
  },
  {
    num: "03", title: "Develop", icon: Code2,
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop&auto=format",
    color: "#0891b2", lightBg: "#ecfeff",
    desc: "Clean code, modern stacks, and rigorous QA. We build robust systems that are maintainable, scalable, and lightning-fast.",
    deliverables: ["Frontend Dev", "Backend APIs", "Database Design", "QA & Testing"],
    delay: 0.36,
  },
  {
    num: "04", title: "Launch", icon: Rocket,
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&auto=format",
    color: "#1d4ed8", lightBg: "#eff6ff",
    desc: "From deployment to post-launch support, we ensure a smooth release and iterate on real user data and feedback.",
    deliverables: ["Cloud Deployment", "Performance Tuning", "Analytics Setup", "Ongoing Support"],
    delay: 0.54,
  },
];

export default function Process() {
  const trackRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const trackInView = useInView(trackRef, { once: true, margin: "-80px" });
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="bg-[#f7f9ff] py-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 35 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-6 h-0.5 bg-blue-500 rounded-full" />
            <span className="text-blue-600 text-xs font-bold uppercase tracking-[0.15em] font-display">How We Work</span>
            <span className="w-6 h-0.5 bg-blue-500 rounded-full" />
          </div>
          <h2
            className="font-display font-extrabold text-slate-900 leading-tight tracking-tight mb-4"
            style={{ fontSize: "clamp(2.1rem, 4.5vw, 3.2rem)" }}
          >
            A process built{" "}
            <span style={{
              background: "linear-gradient(135deg, #1d4ed8, #06b6d4)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
            }}>for clarity</span>
          </h2>
          <p className="text-slate-500 max-w-md mx-auto leading-relaxed text-[15px]">
            Every great product starts with a proven foundation. Here&apos;s how we turn your idea into reality.
          </p>
        </motion.div>

        {/* Step selectors */}
        <div ref={trackRef} className="relative mb-12">
          {/* Animated connector */}
          <div className="hidden lg:block absolute top-[42px] left-[12%] w-[76%] h-[2px] bg-blue-100 overflow-hidden rounded">
            {trackInView && (
              <motion.div
                className="h-full rounded"
                style={{ background: "linear-gradient(90deg, #1d4ed8, #3b82f6, #06b6d4)", transformOrigin: "left" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.6, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
              />
            )}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = activeStep === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={trackInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: [0.34, 1.1, 0.64, 1], delay: step.delay + 0.2 }}
                  onClick={() => setActiveStep(i)}
                  className="text-center cursor-pointer group"
                >
                  <motion.div
                    className="w-[84px] h-[84px] rounded-full mx-auto mb-4 flex items-center justify-center relative z-10 border-2 transition-colors duration-300"
                    animate={{
                      backgroundColor: isActive ? step.color : "#fff",
                      borderColor: isActive ? step.color : "#e2e8f0",
                      scale: isActive ? 1.08 : 1,
                      boxShadow: isActive
                        ? `0 10px 35px ${step.color}40`
                        : "0 4px 16px rgba(0,0,0,0.08)",
                    }}
                    transition={{ duration: 0.35 }}
                  >
                    <Icon size={28} style={{ color: isActive ? "#fff" : step.color }} strokeWidth={1.7} />
                  </motion.div>
                  <motion.div
                    className="font-display font-black text-xs mb-1"
                    animate={{ color: isActive ? step.color : "#94a3b8" }}
                  >
                    STEP {step.num}
                  </motion.div>
                  <h3 className="font-display font-bold text-slate-800 text-base">{step.title}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Active step detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="bg-white rounded-[28px] overflow-hidden border border-slate-100"
            style={{ boxShadow: "0 8px 40px rgba(29,78,216,0.08)" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative overflow-hidden" style={{ minHeight: "280px" }}>
                <motion.div
                  key={steps[activeStep].img}
                  className="w-full h-full absolute inset-0"
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={steps[activeStep].img}
                    alt={steps[activeStep].title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0" style={{
                  background: `linear-gradient(135deg, ${steps[activeStep].color}60 0%, transparent 60%)`
                }} />
                <div className="absolute top-6 left-6">
                  <span className="font-display font-black text-6xl text-white/20 leading-none">{steps[activeStep].num}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 mb-3">
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center"
                    style={{ background: steps[activeStep].lightBg }}
                  >
                    {(() => { const Icon = steps[activeStep].icon; return <Icon size={16} style={{ color: steps[activeStep].color }} />; })()}
                  </div>
                  <span className="font-display font-bold text-sm" style={{ color: steps[activeStep].color }}>
                    Phase {steps[activeStep].num}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-slate-900 text-2xl mb-3">
                  {steps[activeStep].title}
                </h3>
                <p className="text-slate-500 leading-[1.85] mb-6 text-[15px]">{steps[activeStep].desc}</p>

                <div className="grid grid-cols-2 gap-2">
                  {steps[activeStep].deliverables.map((d, i) => (
                    <motion.div
                      key={d}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-2 text-sm text-slate-600 font-medium"
                    >
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: steps[activeStep].color }} />
                      {d}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
