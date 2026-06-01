"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  Globe,
  TrendingUp,
  Palette,
  Megaphone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

/* ───────────────────────── Data ───────────────────────── */
const services = [
  {
    id: "fullstack",
    icon: Code2,
    tag: "Engineering",
    title: "Full-Stack Development",
    tagline: "End-to-end web platforms built for scale.",
    desc: "We build secure, high-performance digital platforms from the ground up. Our full-stack engineers handle everything from database architecture to pixel-perfect frontends — delivering robust products that grow alongside your business.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&h=600&fit=crop&auto=format",
    accent: "#1d4ed8",
    light: "#eff6ff",
    highlights: [
      "React / Next.js frontends",
      "Node.js & REST APIs",
      "MongoDB & PostgreSQL",
      "CI/CD pipelines",
      "Performance optimisation",
      "Technical SEO",
    ],
  },
  {
    id: "webapp",
    icon: Globe,
    tag: "Design & Dev",
    title: "Web Applications",
    tagline: "Intuitive apps that delight users on every device.",
    desc: "From idea to launch, we craft web applications with intuitive interfaces and rock-solid foundations. Our apps deliver seamless experiences across desktop, tablet, and mobile — built to convert visitors into loyal customers.",
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&h=600&fit=crop&auto=format",
    accent: "#0284c7",
    light: "#f0f9ff",
    highlights: [
      "UI/UX Design",
      "Figma prototyping",
      "Progressive Web Apps",
      "Accessibility (WCAG)",
      "Cross-browser testing",
      "Performance audits",
    ],
  },
  {
    id: "social",
    icon: TrendingUp,
    tag: "Growth",
    title: "Social Media Management",
    tagline: "Turn followers into customers with consistent presence.",
    desc: "Build a powerful online presence with professional social media management. We create compelling content, grow your audience, and run targeted campaigns that convert social traffic into real, measurable business results.",
    img: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=900&h=600&fit=crop&auto=format",
    accent: "#0891b2",
    light: "#ecfeff",
    highlights: [
      "WhatsApp Business setup",
      "Facebook & Instagram",
      "LinkedIn marketing",
      "Paid ad campaigns",
      "Content calendar",
      "Analytics & reporting",
    ],
  },
  {
    id: "uiux",
    icon: Palette,
    tag: "Design",
    title: "UI/UX Design",
    tagline: "Beautiful interfaces that feel effortless to use.",
    desc: "Great design is the invisible engine of great products. We craft visually striking, user-centred interfaces — from initial wireframes to fully polished design systems — ensuring every interaction feels natural and every screen looks memorable.",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&h=600&fit=crop&auto=format",
    accent: "#7c3aed",
    light: "#f5f3ff",
    highlights: [
      "User research & personas",
      "Wireframing",
      "High-fidelity Figma designs",
      "Design systems",
      "Usability testing",
      "Brand identity",
    ],
  },
  {
    id: "digitalmarketing",
    icon: Megaphone,
    tag: "Marketing",
    title: "Digital Marketing",
    tagline: "Reach the right audience and grow your brand online.",
    desc: "We craft data-driven digital marketing strategies that put your brand in front of the right people at the right time. From SEO to paid ads, we drive qualified traffic, generate leads, and deliver measurable ROI for your business.",
    img: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=900&h=600&fit=crop&auto=format",
    accent: "#1d4ed8",
    light: "#eff6ff",
    highlights: [
      "SEO & content marketing",
      "Google & Meta Ads",
      "Email marketing",
      "Influencer campaigns",
      "Analytics & reporting",
      "Conversion optimisation",
    ],
  },
];

/* ───────────────────────── Hero ───────────────────────── */
function ServicesHero() {
  return (
    <section className="relative bg-[#030f26] overflow-hidden pt-36 pb-24 px-6">
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-60" />
      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #1d4ed8 0%, #06b6d4 60%, transparent 80%)" }}
      />
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark text-blue-300 text-xs font-bold uppercase tracking-widest mb-6 font-display"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          What We Do
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="font-display font-extrabold text-white leading-tight tracking-tight mb-5"
          style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)" }}
        >
          Services Crafted
          <br />
          <span className="gradient-text">for Growth</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-blue-200/70 max-w-xl mx-auto text-base leading-relaxed"
        >
          We combine strategy, design, and engineering to deliver digital solutions
          that actually move the needle for Tamil Nadu businesses and beyond.
        </motion.p>

        {/* Nav pills to jump to sections */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap justify-center gap-2 mt-10"
        >
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 glass-dark text-blue-300 hover:text-white border border-white/10 hover:border-blue-400/50"
              style={{ fontFamily: "var(--font-bricolage)" }}
            >
              {s.title}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────────── Service Section ───────────────────────── */
function ServiceSection({
  s,
  index,
  onEnquire,
}: {
  s: (typeof services)[0];
  index: number;
  onEnquire: (title: string) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;
  const Icon = s.icon;

  return (
    <section id={s.id} className="py-20 px-6 scroll-mt-24" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`flex flex-col ${
            isEven ? "lg:flex-row" : "lg:flex-row-reverse"
          } gap-12 lg:gap-16 items-center`}
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.34, 1.1, 0.64, 1] }}
            className="w-full lg:w-1/2 flex-shrink-0"
          >
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src={s.img}
                alt={s.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Tinted overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${s.accent}33 0%, transparent 60%)`,
                }}
              />
              {/* Tag badge */}
              <div className="absolute top-5 left-5">
                <span
                  className="px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest text-white font-display"
                  style={{
                    background: s.accent,
                    boxShadow: `0 4px 14px ${s.accent}80`,
                  }}
                >
                  {s.tag}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.34, 1.1, 0.64, 1], delay: 0.1 }}
            className="w-full lg:w-1/2"
          >
            {/* Icon */}
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
              style={{ background: s.light, border: `1.5px solid ${s.accent}25` }}
            >
              <Icon size={26} style={{ color: s.accent }} strokeWidth={1.7} />
            </div>

            <h2
              className="font-display font-extrabold text-slate-900 leading-tight mb-2"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}
            >
              {s.title}
            </h2>
            <p
              className="font-display font-semibold mb-4"
              style={{ color: "#1d4ed8", fontSize: "1rem" }}
            >
              {s.tagline}
            </p>
            <p className="text-slate-500 leading-relaxed mb-8 text-[15px]">{s.desc}</p>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-2.5 mb-10">
              {s.highlights.map((h) => (
                <div key={h} className="flex items-center gap-2.5 text-sm text-slate-600">
                  <CheckCircle2 size={15} style={{ color: s.accent, flexShrink: 0 }} />
                  {h}
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => onEnquire(s.title)}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-display font-bold text-white text-sm transition-all duration-300 hover:gap-3 hover:shadow-xl"
              style={{
                background: "linear-gradient(135deg, #1d4ed8, #2563ebcc)",
                boxShadow: "0 8px 24px #1d4ed850",
              }}
            >
              Enquire Now
              <ArrowRight size={15} strokeWidth={2.5} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Divider ───────────────────────── */
function Divider() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </div>
  );
}

/* ───────────────────────── Bottom CTA ───────────────────────── */
function BottomCTA({ onOpen }: { onOpen: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-24 px-6 bg-[#030f26] relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-15 blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #3b82f6 0%, transparent 70%)" }}
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="relative max-w-2xl mx-auto text-center"
      >
        <h2
          className="font-display font-extrabold text-white leading-tight mb-4"
          style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
        >
          Ready to Start Your
          <br />
          <span className="gradient-text">Digital Journey?</span>
        </h2>
        <p className="text-blue-200/60 mb-8 text-sm leading-relaxed">
          Let's talk about your project. We'll put together a tailored plan that fits your goals and budget.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpen}
            className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-display font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-blue-500/40 hover:shadow-2xl"
          >
            Get a Free Quote
          </button>
          <Link
            href="/#about"
            className="px-8 py-4 rounded-full glass-dark text-blue-300 font-display font-bold text-sm hover:text-white transition-all duration-300 border border-white/10"
          >
            Learn About Us
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

/* ───────────────────────── Page ───────────────────────── */
export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleEnquire = (title: string) => {
    setSelectedService(title);
    setModalOpen(true);
  };

  return (
    <>
      <Navbar />
      <ServicesHero />

      <main className="bg-white">
        {services.map((s, i) => (
          <div key={s.id}>
            {i > 0 && <Divider />}
            <ServiceSection s={s} index={i} onEnquire={handleEnquire} />
          </div>
        ))}
      </main>

      <BottomCTA onOpen={() => { setSelectedService(""); setModalOpen(true); }} />
      <Footer />

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preSelectedService={selectedService}
      />
    </>
  );
}
