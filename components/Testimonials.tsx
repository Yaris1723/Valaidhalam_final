"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Venkat",
    text: "Valaidhalam didn't just build our app — they became a strategic partner. The level of attention to UX and engineering quality exceeded everything we expected.",
    stars: 5,
  },
  {
    name: "Arjun Mehta",
    text: "The team's technical depth is impressive. They took our legacy system and transformed it into a modern, scalable platform in just 3 months. Incredible execution.",
    stars: 5,
  },
  {
    name: "Divya Krishnan",
    text: "Our social media growth went from stagnant to explosive within 6 weeks of working with Valaidhalam. Their content strategy and execution is truly world-class.",
    stars: 5,
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((p) => (p + 1) % testimonials.length);

  return (
    <section ref={ref} className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-6 h-0.5 bg-blue-500 rounded-full" />
            <span className="text-blue-600 text-xs font-bold uppercase tracking-[0.15em] font-display">Client Love</span>
            <span className="w-6 h-0.5 bg-blue-500 rounded-full" />
          </div>
          <h2
            className="font-display font-extrabold text-slate-900 leading-tight tracking-tight"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
          >
            Trusted by builders
            <br />
            <span style={{
              background: "linear-gradient(135deg, #1d4ed8, #06b6d4)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
            }}>across the globe</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div
            className="bg-[#f7f9ff] rounded-[28px] p-8 md:p-14 border border-blue-50 relative overflow-hidden"
            style={{ boxShadow: "0 8px 40px rgba(29,78,216,0.07)" }}
          >
            {/* Quote icon */}
            <div className="absolute top-8 right-8 text-blue-100">
              <Quote size={60} fill="currentColor" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[active].stars }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>

                <p className="font-jakarta text-slate-700 text-lg md:text-xl leading-[1.85] mb-8 max-w-2xl">
                  &ldquo;{testimonials[active].text}&rdquo;
                </p>

                <div className="font-display font-bold text-slate-900 text-base">{testimonials[active].name}</div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center gap-3 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: active === i ? "28px" : "8px",
                    height: "8px",
                    background: active === i ? "#1d4ed8" : "#bfdbfe",
                  }}
                />
              ))}
              <div className="flex gap-2 ml-auto">
                <motion.button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-50 hover:border-blue-200 transition-all"
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft size={16} />
                </motion.button>
                <motion.button
                  onClick={next}
                  className="w-10 h-10 rounded-full bg-blue-600 border border-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-all"
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight size={16} />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
