"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import Image from "next/image";

const TECH_LOGOS = ["React", "Next.js", "Node", "TypeScript", "AWS", "Figma", "MongoDB", "Tailwind", "GraphQL", "Docker", "Vercel", "Stripe"];

const staggerChild = {
  initial: { opacity: 0, y: 50, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const orb1X = useTransform(springX, [-400, 400], [-30, 30]);
  const orb1Y = useTransform(springY, [-400, 400], [-20, 20]);
  const orb2X = useTransform(springX, [-400, 400], [20, -20]);
  const orb2Y = useTransform(springY, [-400, 400], [15, -15]);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(155deg, #030f26 0%, #0a1d4a 35%, #0d2260 65%, #091a40 100%)" }}
    >
      {/* Grid */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" />

      {/* Mouse-tracking orbs */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 700, height: 700,
          background: "radial-gradient(circle, rgba(59,130,246,0.40) 0%, transparent 65%)",
          filter: "blur(70px)",
          top: "-200px", left: "-200px",
          x: orb1X, y: orb1Y,
        }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 600, height: 600,
          background: "radial-gradient(circle, rgba(99,102,241,0.28) 0%, transparent 65%)",
          filter: "blur(80px)",
          bottom: "-150px", right: "-150px",
          x: orb2X, y: orb2Y,
        }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 9, ease: "easeInOut", repeat: Infinity }}
        style={{
          width: 400, height: 400,
          background: "radial-gradient(circle, rgba(6,182,212,0.20) 0%, transparent 65%)",
          filter: "blur(60px)",
          top: "30%", left: "55%",
        }}
      />

      {/* Floating tech card — left */}
      <motion.div
        className="absolute left-[6%] top-[28%] hidden xl:block glass-dark rounded-2xl px-4 py-3.5 z-10"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        style={{ animation: "floatSlow 8s ease-in-out 1.6s infinite" }}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-lg font-bold text-white font-display">⚡</div>
          <div>
            <div className="text-white font-semibold text-xs font-display">50+ Projects</div>
            <div className="text-blue-300/70 text-[11px]">Delivered on time</div>
          </div>
        </div>
      </motion.div>

      {/* Floating rating card — right */}
      <motion.div
        className="absolute right-[6%] top-[35%] hidden xl:block glass-dark rounded-2xl px-4 py-3.5 z-10"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        style={{ animation: "floatSlow 7s ease-in-out 2.5s infinite" }}
      >
        <div className="flex items-center gap-2">
          <div className="text-yellow-400 text-xl">★★★★★</div>
        </div>
        <div className="text-white text-xs font-semibold mt-0.5 font-display">98% Client Satisfaction</div>
        <div className="text-blue-300/60 text-[11px]">100+ happy clients</div>
      </motion.div>


      {/* Hero content */}
      <div className="relative z-10 text-center px-6 max-w-[860px] mx-auto pt-12">
        {/* Badge */}
        <motion.div
          variants={staggerChild}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.7, delay: 0.5 }}
          className="inline-block mb-8"
        >
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={staggerChild}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.85, delay: 0.75, ease: [0.34, 1.1, 0.64, 1] }}
          className="font-display font-extrabold text-white leading-[1.06] tracking-tight mb-6"
          style={{ fontSize: "clamp(3rem, 7.5vw, 5.5rem)" }}
        >
          Building Digital
          <br />
          <span style={{
            background: "linear-gradient(135deg, #93c5fd 0%, #60a5fa 40%, #a5b4fc 80%, #c7d2fe 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Experiences
          </span>
          <br />
          That Scale
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={staggerChild}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-blue-200/75 font-jakarta font-light leading-[1.85] mb-10 mx-auto max-w-[560px]"
          style={{ fontSize: "clamp(1rem, 2vw, 1.18rem)" }}
        >
          We engineer modern digital solutions — from sleek web apps to enterprise-grade platforms — built to grow with your ambition and captivate your users from the first click.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={staggerChild}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <motion.a
            href="#services"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-blue-700 font-bold rounded-full text-sm font-display"
            style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.3)" }}
            whileHover={{ scale: 1.05, boxShadow: "0 14px 50px rgba(0,0,0,0.38)" }}
            whileTap={{ scale: 0.97 }}
          >
            Explore Services
            <ArrowRight size={16} strokeWidth={2.5} />
          </motion.a>
          <motion.a
            href="#about"
            className="inline-flex items-center gap-2.5 px-8 py-4 font-semibold rounded-full text-sm text-white glass-dark font-display"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            See Our Work
          </motion.a>
        </motion.div>

        {/* Tech marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="relative overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{ background: "linear-gradient(90deg, #0a1d4a, transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{ background: "linear-gradient(-90deg, #0a1d4a, transparent)" }} />
          <div className="flex animate-marquee whitespace-nowrap">
            {[...TECH_LOGOS, ...TECH_LOGOS].map((logo, i) => (
              <span key={i} className="inline-flex items-center gap-2 mx-5 text-blue-300/50 text-xs font-bold font-display uppercase tracking-widest">
                <span className="w-1 h-1 rounded-full bg-blue-500/40" />
                {logo}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
        initial={{ opacity: 0 }}
      >
        <span className="text-blue-300/40 text-[10px] font-display uppercase tracking-widest">Scroll</span>
        <ChevronDown size={14} className="text-blue-300/40" />
      </motion.div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block" style={{ height: '120px' }}>
          <motion.path
            d="M0,55 C240,95 480,15 720,55 C960,95 1200,15 1440,55 L1440,120 L0,120 Z"
            fill="white" fillOpacity="0.05"
            animate={{ d: [
              "M0,55 C240,95 480,15 720,55 C960,95 1200,15 1440,55 L1440,120 L0,120 Z",
              "M0,65 C240,25 480,95 720,65 C960,35 1200,85 1440,65 L1440,120 L0,120 Z",
              "M0,55 C240,95 480,15 720,55 C960,95 1200,15 1440,55 L1440,120 L0,120 Z",
            ]}}
            transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
          />
          <motion.path
            d="M0,78 C360,38 720,100 1080,62 C1260,40 1380,72 1440,78 L1440,120 L0,120 Z"
            fill="white" fillOpacity="0.07"
            animate={{ d: [
              "M0,78 C360,38 720,100 1080,62 C1260,40 1380,72 1440,78 L1440,120 L0,120 Z",
              "M0,88 C360,68 720,42 1080,82 C1260,96 1380,55 1440,88 L1440,120 L0,120 Z",
              "M0,78 C360,38 720,100 1080,62 C1260,40 1380,72 1440,78 L1440,120 L0,120 Z",
            ]}}
            transition={{ duration: 10, ease: "easeInOut", repeat: Infinity, delay: 1 }}
          />
          <path d="M0,95 C180,75 360,104 720,95 C1080,82 1280,106 1440,95 L1440,120 L0,120 Z" fill="#f7f9ff" />
        </svg>
      </div>
    </section>
  );
}
