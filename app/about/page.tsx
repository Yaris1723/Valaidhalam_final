"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Users, Award, Zap, Heart, Target, Lightbulb,
  CheckCircle2, ArrowRight, MapPin, Mail, Phone, Clock,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

/* ── Data ── */
const stats = [
  { icon: Users, num: "70+", label: "Happy Clients", color: "#1d4ed8" },
  { icon: Award, num: "50+", label: "Projects Delivered", color: "#0891b2" },
  { icon: Zap, num: "5+", label: "Years Experience", color: "#7c3aed" },
  { icon: Heart, num: "100%", label: "Client Satisfaction", color: "#059669" },
];

const values = [
  {
    icon: Target,
    title: "Result-Driven",
    desc: "Every decision we make is guided by one question: does this create measurable value for our clients?",
    color: "#1d4ed8", light: "#eff6ff",
  },
  {
    icon: Lightbulb,
    title: "Creative Thinking",
    desc: "We combine technical depth with creative problem-solving to build solutions that stand out.",
    color: "#0891b2", light: "#ecfeff",
  },
  {
    icon: Heart,
    title: "Client-First",
    desc: "We treat every project as if it were our own business. Your growth is our success.",
    color: "#7c3aed", light: "#f5f3ff",
  },
  {
    icon: Zap,
    title: "Agile & Fast",
    desc: "Speed without compromise. We move quickly, communicate clearly, and deliver on time.",
    color: "#059669", light: "#ecfdf5",
  },
];

const timeline = [
  { year: "2019", title: "Founded in Salem", desc: "Started as a one-person freelance studio, building websites for local businesses in Tamil Nadu." },
  { year: "2020", title: "First 10 Clients", desc: "Grew rapidly through referrals. Expanded into social media management and branding." },
  { year: "2021", title: "Team Expansion", desc: "Hired our first full-time designer and developer. Delivered 20+ projects that year." },
  { year: "2022", title: "Digital Growth Focus", desc: "Added cloud, DevOps, and digital strategy services. Crossed 40 happy clients." },
  { year: "2023", title: "Regional Leader", desc: "Recognised as one of Tamil Nadu's leading affordable digital studios." },
  { year: "2024+", title: "Scaling Beyond", desc: "Expanding our team and reach — building digital products for clients across India." },
];

const officeInfo = [
  {
    icon: MapPin,
    title: "Office Address",
    lines: ["Salem, Tamil Nadu", "India – 636001"],
    color: "#1d4ed8", light: "#eff6ff",
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+91 94877 39484"],
    color: "#059669", light: "#ecfdf5",
    href: "tel:+919487739484",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["valaidhalam03@gmail.com"],
    color: "#7c3aed", light: "#f5f3ff",
    href: "mailto:valaidhalam03@gmail.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Mon – Sat: 9:00 AM – 6:00 PM", "Sunday: Closed"],
    color: "#0891b2", light: "#ecfeff",
  },
];

/* ── Hero ── */
function AboutHero() {
  return (
    <section className="relative bg-[#030f26] overflow-hidden pt-36 pb-24 px-6">
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #7c3aed 0%, #1d4ed8 60%, transparent 80%)" }}
      />
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark text-blue-300 text-xs font-bold uppercase tracking-widest mb-6 font-display"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          Our Story
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.1 }}
          className="font-display font-extrabold text-white leading-tight tracking-tight mb-5"
          style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)" }}
        >
          We&apos;re the Team Behind
          <br />
          <span className="gradient-text">Your Next Big Thing</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="text-blue-200/70 max-w-xl mx-auto text-base leading-relaxed"
        >
          A technology-driven digital studio based in Salem, Tamil Nadu — combining
          creative thinking with strong engineering to build products that last.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
          className="flex items-center justify-center gap-2 mt-8 text-blue-300/60 text-sm"
        >
          <MapPin size={14} />
          <span className="font-display font-semibold">Salem, Tamil Nadu, India</span>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Stats ── */
function StatsRow() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section className="py-16 px-6 bg-white border-b border-slate-100" ref={ref}>
      <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: `${s.color}15` }}>
                <Icon size={22} style={{ color: s.color }} />
              </div>
              <div className="font-display font-extrabold text-3xl text-slate-900 mb-1">{s.num}</div>
              <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider">{s.label}</div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* ── Who We Are ── */
function WhoWeAre() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section className="py-24 px-6 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        {/* Image collage */}
        <motion.div
          initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.34, 1.1, 0.64, 1] }}
          className="w-full lg:w-1/2"
        >
          <div className="relative grid grid-cols-2 gap-3 max-w-[480px]">
            <div className="rounded-2xl overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=340&h=220&fit=crop&auto=format" alt="Team" width={340} height={220} className="w-full h-52 object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden mt-8">
              <Image src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=340&h=220&fit=crop&auto=format" alt="Design" width={340} height={220} className="w-full h-52 object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=340&h=140&fit=crop&auto=format" alt="Code" width={340} height={140} className="w-full h-36 object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden -mt-6">
              <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=340&h=220&fit=crop&auto=format" alt="Office" width={340} height={220} className="w-full h-44 object-cover" />
            </div>
            <motion.div
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 z-20"
              style={{ boxShadow: "0 16px 50px rgba(29,78,216,0.18)" }}
              initial={{ opacity: 0, scale: 0.7 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <div className="font-display font-extrabold text-slate-900 text-sm">Salem, TN</div>
                  <div className="text-slate-400 text-xs">Proudly Local</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.34, 1.1, 0.64, 1], delay: 0.1 }}
          className="w-full lg:w-1/2"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-5 font-display border border-blue-100">
            Who We Are
          </div>
          <h2 className="font-display font-extrabold text-slate-900 leading-tight mb-5" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>
            Built in Tamil Nadu,{" "}
            <span style={{ background: "linear-gradient(135deg,#1d4ed8,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Built for Growth
            </span>
          </h2>
          <p className="text-slate-500 leading-relaxed mb-4 text-[15px]">
            Valaidhalam is a technology-driven digital solutions studio based in Salem, Tamil Nadu. We partner with startups, growing businesses, and enterprises to design and develop powerful digital products that deliver real impact.
          </p>
          <p className="text-slate-500 leading-relaxed mb-8 text-[15px]">
            With expertise in web development, UI/UX design, and digital growth strategies, we combine creative thinking with strong engineering to build solutions that are scalable, reliable, and built for long-term success.
          </p>
          <div className="space-y-3">
            {[
              "Affordable pricing with enterprise-level quality",
              "Deep understanding of Tamil Nadu market",
              "End-to-end digital solutions under one roof",
              "Transparent communication, zero surprises",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm text-slate-600">
                <CheckCircle2 size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Values ── */
function OurValues() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section className="py-24 px-6 bg-[#f7f9ff]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4 font-display border border-blue-100">
            What Drives Us
          </div>
          <h2 className="font-display font-extrabold text-slate-900" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)" }}>
            Our Core Values
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white rounded-3xl p-7 border border-slate-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: v.light }}>
                  <Icon size={22} style={{ color: v.color }} />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-lg mb-2">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Journey ── */
function OurJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section className="py-24 px-6 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4 font-display border border-blue-100">
            Our Journey
          </div>
          <h2 className="font-display font-extrabold text-slate-900" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)" }}>
            How We Got Here
          </h2>
        </motion.div>
        <div className="space-y-8">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex gap-6 items-start"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-display font-bold text-xs shadow-lg shadow-blue-200">
                {item.year}
              </div>
              <div className="pt-2 border-b border-slate-100 pb-8 w-full">
                <h3 className="font-display font-bold text-slate-900 text-base mb-1">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Get In Touch (like reference image 2) ── */
function GetInTouch({ onOpen }: { onOpen: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section className="py-24 px-6 bg-[#f7f9ff]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4 font-display border border-blue-100">
            Contact Us
          </div>
          <h2 className="font-display font-extrabold text-slate-900 mb-3" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)" }}>
            Get in Touch
          </h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            Reach out to us for consultations, service enquiries, or collaboration opportunities.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left — info cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}
            className="w-full lg:w-2/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5"
          >
            {officeInfo.map((info, i) => {
              const Icon = info.icon;
              const Wrapper = info.href ? "a" : "div";
              return (
                <motion.div key={info.title} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1, duration: 0.5 }}>
                  <Wrapper
                    {...(info.href ? { href: info.href } : {})}
                    className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-200 hover:shadow-md transition-all duration-300 group block"
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: info.light }}>
                      <Icon size={20} style={{ color: info.color }} />
                    </div>
                    <div>
                      <div className="font-display font-bold text-slate-900 text-sm mb-1">{info.title}</div>
                      {info.lines.map((line) => (
                        <div key={line} className="text-slate-500 text-sm group-hover:text-slate-700 transition-colors">{line}</div>
                      ))}
                    </div>
                  </Wrapper>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right — CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
            className="w-full lg:w-3/5"
          >
            <div className="bg-white rounded-3xl border border-slate-200 p-10 shadow-xl shadow-slate-100 h-full flex flex-col justify-between min-h-[400px]">
              <div>
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-600 font-display font-bold text-xs uppercase tracking-widest">Currently Accepting Projects</span>
                </div>
                <h3 className="font-display font-extrabold text-slate-900 leading-tight mb-4" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
                  Let&apos;s Build Something{" "}
                  <span style={{ background: "linear-gradient(135deg,#1d4ed8,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    Incredible
                  </span>
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-md">
                  Whether you&apos;re a startup launching your first product or an established business looking to grow digitally — we&apos;re here to help. Tell us about your project and we&apos;ll get back to you within 24 hours.
                </p>
                <div className="space-y-3 mb-10">
                  {[
                    "Free 30-minute consultation call",
                    "Transparent, fixed-price proposals",
                    "Response guaranteed within 24 hours",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-slate-600">
                      <CheckCircle2 size={15} className="text-blue-500 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onOpen}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-display font-bold text-white text-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-200"
                  style={{ background: "linear-gradient(135deg,#1d4ed8,#0284c7)", boxShadow: "0 8px 24px rgba(29,78,216,0.30)" }}
                >
                  Send Us a Message <ArrowRight size={15} />
                </button>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-display font-bold text-slate-700 text-sm border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-all duration-300"
                >
                  View Contact Page
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Dark CTA ── */
function BottomCTA({ onOpen }: { onOpen: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section className="py-24 px-6 bg-[#030f26] relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-15 blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #7c3aed 0%, transparent 70%)" }} />
      <motion.div
        initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
        className="relative max-w-2xl mx-auto text-center"
      >
        <h2 className="font-display font-extrabold text-white leading-tight mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
          Ready to Start Your<br />
          <span className="gradient-text">Digital Journey?</span>
        </h2>
        <p className="text-blue-200/60 mb-8 text-sm leading-relaxed">
          Let&apos;s talk about your project and build something amazing together.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={onOpen}
            className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-display font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-blue-500/40">
            Get a Free Quote
          </button>
          <Link href="/services"
            className="px-8 py-4 rounded-full glass-dark text-blue-300 font-display font-bold text-sm hover:text-white transition-all duration-300 border border-white/10">
            View Our Services
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

/* ── Page ── */
export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Navbar />
      <AboutHero />
      <StatsRow />
      <WhoWeAre />
      <OurValues />
      <OurJourney />
      <GetInTouch onOpen={() => setModalOpen(true)} />
      <BottomCTA onOpen={() => setModalOpen(true)} />
      <Footer />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
