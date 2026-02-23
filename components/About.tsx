"use client";

import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, Users, Award, Zap } from "lucide-react";

const tags = ["React & Next.js", "Node.js", "UI/UX Design", "Cloud Infra", "Digital Strategy", "Brand Growth"];
const stats = [
  { icon: Users, num: "100+", label: "Happy Clients" },
  { icon: Award, num: "50+", label: "Projects Delivered" },
  { icon: Zap, num: "5yrs", label: "Experience" },
];

const GALLERY = [
  { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=340&h=220&fit=crop&auto=format", alt: "Team collaboration" },
  { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=340&h=220&fit=crop&auto=format", alt: "Design work" },
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=340&h=220&fit=crop&auto=format", alt: "Office space" },
  { src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=340&h=140&fit=crop&auto=format", alt: "Coding" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const leftInView = useInView(leftRef, { once: true, margin: "-80px" });
  const rightInView = useInView(rightRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const imgY1 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const imgY2 = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <section id="about" ref={sectionRef} className="bg-white py-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* LEFT – Image collage */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -70 }}
            animate={leftInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.34, 1.1, 0.64, 1] }}
            className="relative"
          >
            <div className="relative grid grid-cols-2 gap-3 max-w-[480px]">
              {/* Top-left large */}
              <motion.div
                style={{ y: imgY1 }}
                className="col-span-1 rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02, zIndex: 10 }}
                transition={{ duration: 0.35 }}
              >
                <img
                  src={GALLERY[0].src}
                  alt={GALLERY[0].alt}
                  className="w-full h-52 object-cover"
                  style={{ boxShadow: "0 12px 40px rgba(29,78,216,0.12)" }}
                />
              </motion.div>

              {/* Top-right */}
              <motion.div
                style={{ y: imgY2 }}
                className="col-span-1 rounded-2xl overflow-hidden mt-8"
                whileHover={{ scale: 1.02, zIndex: 10 }}
                transition={{ duration: 0.35 }}
              >
                <img
                  src={GALLERY[1].src}
                  alt={GALLERY[1].alt}
                  className="w-full h-52 object-cover"
                />
              </motion.div>

              {/* Bottom-left */}
              <motion.div
                style={{ y: imgY2 }}
                className="col-span-1 rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02, zIndex: 10 }}
                transition={{ duration: 0.35 }}
              >
                <img
                  src={GALLERY[3].src}
                  alt={GALLERY[3].alt}
                  className="w-full h-36 object-cover"
                />
              </motion.div>

              {/* Bottom-right */}
              <motion.div
                style={{ y: imgY1 }}
                className="col-span-1 rounded-2xl overflow-hidden -mt-6"
                whileHover={{ scale: 1.02, zIndex: 10 }}
                transition={{ duration: 0.35 }}
              >
                <img
                  src={GALLERY[2].src}
                  alt={GALLERY[2].alt}
                  className="w-full h-44 object-cover"
                />
              </motion.div>

              {/* Floating stats bubble */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 z-20"
                style={{ boxShadow: "0 16px 50px rgba(29,78,216,0.18)" }}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={leftInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                    <Award size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-display font-extrabold text-slate-900 text-base">5+ Years</div>
                    <div className="text-slate-400 text-xs font-medium">of Excellence</div>
                  </div>
                </div>
              </motion.div>

              {/* Dot pattern bg */}
              <div className="absolute -top-4 -left-4 w-32 h-32 dot-pattern rounded-2xl -z-10 opacity-60" />
            </div>
          </motion.div>

          {/* RIGHT – Text */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 70 }}
            animate={rightInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.34, 1.1, 0.64, 1], delay: 0.15 }}
          >
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-6 h-0.5 bg-blue-500 rounded-full" />
              <span className="text-blue-600 text-xs font-bold uppercase tracking-[0.15em] font-display">
                Who We Are
              </span>
            </div>

            <h2
              className="font-display font-extrabold text-slate-900 leading-[1.12] tracking-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 2.9rem)" }}
            >
              We're the team behind your{" "}
              <span style={{
                background: "linear-gradient(135deg, #1d4ed8, #06b6d4)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
              }}>
                next big thing
              </span>
            </h2>

            <p className="text-slate-500 leading-[1.9] mb-4 text-[15px]">
              Valaidhalam is a Tamil Nadu–based tech services studio that partners with startups, SMEs, and enterprises to build digital products they're proud of. We bring craft and intention to every pixel and every line of code.
            </p>
            <p className="text-slate-500 leading-[1.9] mb-8 text-[15px]">
              Founded on the belief that great software changes lives, our multidisciplinary team blends product thinking, sharp design, and modern engineering to deliver outcomes — not just deliverables.
            </p>

            {/* Mini stats */}
            <div className="grid grid-cols-3 gap-4 mb-8 p-5 bg-[#f7f9ff] rounded-2xl border border-blue-50">
              {stats.map(({ icon: Icon, num, label }, i) => (
                <motion.div
                  key={label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={rightInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.12, duration: 0.6 }}
                >
                  <Icon size={18} className="text-blue-500 mx-auto mb-1.5" />
                  <div className="font-display font-extrabold text-2xl text-slate-900">{num}</div>
                  <div className="text-slate-400 text-[11px] font-medium mt-0.5">{label}</div>
                </motion.div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={rightInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.06, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                  className="px-4 py-2 bg-blue-50 text-blue-700 text-xs font-bold rounded-full border border-blue-100 hover:bg-blue-100 cursor-default font-display transition-colors duration-200"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
