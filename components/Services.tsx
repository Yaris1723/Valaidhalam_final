"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Globe, TrendingUp, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import ContactModal from "./ContactModal";

const services = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    desc: "Launch powerful web applications with our end-to-end full stack development services. We build secure, scalable, and high performance digital platforms designed to grow with your business.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=480&h=260&fit=crop&auto=format",
    tag: "Engineering",
    accentColor: "#1d4ed8",
    lightBg: "#eff6ff",
    delay: 0,
    highlights: ["React / Next.js", "Node.js APIs", "MongoDB", "CI/CD Pipelines"],
  },
  {
    icon: Globe,
    title: "Web Applications",
    desc: "We develop high performance web applications with intuitive interfaces . Our web apps are built to deliver seamless user experiences across desktop, tablet, and mobile devices.",
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
    desc: "Build a strong online presence with professional social media management. We help businesses grow their audience, increase engagement, and convert social media traffic into real customers.",
    img: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=480&h=260&fit=crop&auto=format",
    tag: "Growth",
    accentColor: "#0284c7",
    lightBg: "#ecfeff",
    delay: 0.28,
    highlights: ["WhatsApp Business", "Facebook & Instagram", "LinkedIn Marketing", "Paid Campaigns"],
  },
];

function ServiceCard({
  s,
  i,
  onGetStarted,
}: {
  s: (typeof services)[0];
  i: number;
  onGetStarted: (service: string) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [isHovered, setIsHovered] = useState(false);
  const Icon = s.icon;

  return (
    <motion.div
      ref={ref}
      layout={false} // Fix: prevents Framer Motion layout projection that causes SVG path errors
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.75, ease: [0.34, 1.1, 0.64, 1], delay: s.delay }}
      className="relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative bg-white rounded-[24px] overflow-hidden border border-slate-100/80 h-full flex flex-col transition-all duration-300 ease-out"
        style={{
          transform: isHovered ? "translateY(-8px)" : "translateY(0)",
          boxShadow: isHovered
            ? `0 30px 70px rgba(${
                s.accentColor === "#1d4ed8"
                  ? "29,78,216"
                  : s.accentColor === "#0284c7"
                  ? "2,132,199"
                  : "8,145,178"
              },0.16), 0 0 0 1.5px ${s.accentColor}20`
            : "0 4px 24px rgba(0,0,0,0.06)",
        }}
      >
        {/* Image with overlay */}
        <div className="relative overflow-hidden" style={{ height: "200px" }}>
          <div
            className="w-full h-full transition-transform duration-400 ease-out relative"
            style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
          >
            <Image
              src={s.img}
              alt={s.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, ${s.accentColor}22 0%, ${s.accentColor}55 100%)`,
            }}
          />

          {/* Tag */}
          <div className="absolute top-4 left-4">
            <span
              className="px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-white font-display"
              style={{
                background: s.accentColor,
                boxShadow: `0 4px 12px ${s.accentColor}60`,
              }}
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
              style={{
                background: s.lightBg,
                border: `1px solid ${s.accentColor}20`,
              }}
            >
              <Icon size={20} style={{ color: s.accentColor }} strokeWidth={1.9} />
            </div>
            <h3 className="font-display font-bold text-slate-900 text-lg leading-snug">
              {s.title}
            </h3>
          </div>

          <p className="text-slate-500 text-sm leading-[1.85] mb-6 flex-1">{s.desc}</p>

          {/* Highlights - only shows on hover */}
          <div
            className="overflow-hidden mb-4 transition-all duration-300 ease-out"
            style={{
              maxHeight: isHovered ? "100px" : "0px",
              opacity: isHovered ? 1 : 0,
            }}
          >
            <div className="grid grid-cols-2 gap-1.5 pt-1 pb-3 border-t border-slate-100">
              {s.highlights.map((h) => (
                <div
                  key={h}
                  className="flex items-center gap-1.5 text-[12px] text-slate-600 font-medium"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: s.accentColor }}
                  />
                  {h}
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => onGetStarted(s.title)}
            className="inline-flex items-center gap-1.5 text-sm font-bold font-display transition-transform duration-300 cursor-pointer"
            style={{
              color: s.accentColor,
              transform: isHovered ? "translateX(4px)" : "translateX(0)",
            }}
          >
            Get Started
            <ArrowUpRight size={15} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const hasOpenedRef = useRef(false);

  // Auto-open modal when services section comes into view (only once per page reload)
  useEffect(() => {
    // Fix: Guard against SSR — localStorage and document are not available on the server
    if (typeof window === "undefined") return;

    // Only open once per page load
    if (hasOpenedRef.current) return;

    const servicesSection = document.getElementById("services");
    if (!servicesSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When services section comes into view, open the modal only once
          if (entry.isIntersecting && !hasOpenedRef.current) {
            hasOpenedRef.current = true;
            setIsModalOpen(true);
            // Disconnect observer after triggering
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(servicesSection);
    return () => observer.disconnect();
  }, []);

  const handleGetStarted = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Fix: Added `relative` class so Framer Motion scroll offset is calculated correctly */}
      <section id="services" className="relative bg-[#f7f9ff] py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            ref={headerRef}
            layout={false} // Fix: prevents layout projection SVG path errors
            initial={{ opacity: 0, y: 35 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2
              className="font-display font-extrabold text-slate-900 leading-tight tracking-tight mb-4"
              style={{ fontSize: "clamp(2.1rem, 4.5vw, 3.2rem)" }}
            >
              Services Crafted
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #1d4ed8, #3b82f6, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                for Growth
              </span>
            </h2>
            <p className="text-slate-500 max-w-md mx-auto leading-relaxed text-[15px]">
              We combine strategy, design, and engineering to deliver solutions that actually move
              the needle for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {services.map((s, i) => (
              <ServiceCard key={i} s={s} i={i} onGetStarted={handleGetStarted} />
            ))}
          </div>
        </div>
      </section>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preSelectedService={selectedService}
      />
    </>
  );
}