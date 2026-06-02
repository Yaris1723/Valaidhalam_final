"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Mail, Phone, MapPin, MessageCircle, Send, User,
  Briefcase, ChevronDown, CheckCircle2, Loader2, Clock, Globe,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ── Form helpers (same style as ContactModal) ── */
const services = [
  "Full-Stack Development", "Web Application", "Social Media Management",
  "UI/UX Design", "Cloud & DevOps", "Digital Strategy", "Other",
];
const budgets = ["< ₹50K", "₹50K – ₹2L", "₹2L – ₹10L", "₹10L+", "Let's discuss"];

const inputClass =
  "w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all duration-200";
const labelClass = "block text-slate-600 text-xs font-bold uppercase tracking-[0.1em] font-display mb-2";

type FormData = { name: string; email: string; company: string; phone: string; service: string; budget: string; message: string; };

function SelectField({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <label className={labelClass}>{label}</label>
      <button type="button" onClick={() => setOpen(o => !o)}
        className={`${inputClass} text-left flex items-center justify-between`}
        style={{ color: value ? "#0f172a" : "#94a3b8" }}>
        <span>{value || `Select ${label}`}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={15} className="text-slate-400" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 top-full mt-2 w-full rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl"
          >
            {options.map(opt => (
              <li key={opt}>
                <button type="button" onClick={() => { onChange(opt); setOpen(false); }}
                  className="w-full text-left px-4 py-3 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150 flex items-center gap-2">
                  {value === opt && <CheckCircle2 size={13} className="text-blue-500 flex-shrink-0" />}
                  <span className={value === opt ? "font-semibold text-blue-700" : ""}>{opt}</span>
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Info cards ── */
const contactInfo = [
  {
    icon: Mail, title: "Email Us", value: "hello@valaidhalam.com",
    sub: "We reply within 24 hours", color: "#1d4ed8", light: "#eff6ff",
    href: "mailto:hello@valaidhalam.com",
  },
  {
    icon: Phone, title: "Call Us", value: "+91 98765 43210",
    sub: "Mon – Sat, 9am – 6pm IST", color: "#059669", light: "#ecfdf5",
    href: "tel:+919876543210",
  },
  {
    icon: MapPin, title: "Visit Us", value: "Salem, Tamil Nadu",
    sub: "India 636001", color: "#7c3aed", light: "#f5f3ff",
    href: "https://maps.google.com/?q=Salem,Tamil+Nadu,India",
  },
  {
    icon: Globe, title: "Social Media", value: "@valaidhalam",
    sub: "Instagram, LinkedIn, Facebook", color: "#0891b2", light: "#ecfeff",
    href: "https://instagram.com",
  },
];

const faqs = [
  { q: "How long does a website project take?", a: "Typically 2–6 weeks depending on complexity. We give you a clear timeline upfront." },
  { q: "Do you work with small businesses?", a: "Absolutely. We specialize in affordable solutions for startups and SMEs across Tamil Nadu." },
  { q: "What's your pricing like?", a: "Projects start from ₹15,000. We offer transparent, fixed-price quotes — no hidden fees." },
  { q: "Do you offer post-launch support?", a: "Yes! We offer monthly maintenance plans to keep your site updated and secure." },
];

/* ── Hero ── */
function ContactHero() {
  return (
    <section className="relative bg-[#030f26] overflow-hidden pt-36 pb-24 px-6">
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #059669 0%, #0891b2 60%, transparent 80%)" }} />
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark text-blue-300 text-xs font-bold uppercase tracking-widest mb-6 font-display">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Get in Touch
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.1 }}
          className="font-display font-extrabold text-white leading-tight tracking-tight mb-5"
          style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)" }}>
          Let&apos;s Build Something<br />
          <span className="gradient-text">Great Together</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="text-blue-200/70 max-w-xl mx-auto text-base leading-relaxed">
          Have a project in mind? Drop us a message and we&apos;ll get back to you within 24 hours with a free consultation.
        </motion.p>
        {/* Availability badge */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
          className="flex items-center justify-center gap-2 mt-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-emerald-300 text-xs font-bold font-display border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Currently accepting new projects
          </span>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Info Cards ── */
function InfoCards() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section className="py-16 px-6 bg-white border-b border-slate-100" ref={ref}>
      <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5">
        {contactInfo.map((info, i) => {
          const Icon = info.icon;
          return (
            <motion.a key={info.title} href={info.href} target={info.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1, duration: 0.6 }}
              className="p-5 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300 group cursor-pointer block">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: info.light }}>
                <Icon size={20} style={{ color: info.color }} />
              </div>
              <div className="font-display font-bold text-slate-900 text-sm mb-1">{info.title}</div>
              <div className="text-slate-700 text-xs font-semibold mb-1 group-hover:text-blue-600 transition-colors">{info.value}</div>
              <div className="text-slate-400 text-[11px]">{info.sub}</div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}

/* ── Contact Form ── */
function ContactForm() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [form, setForm] = useState<FormData>({ name: "", email: "", company: "", phone: "", service: "", budget: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required";
    if (!form.phone.trim()) e.phone = "Phone is required";
    else if (!/^\d+$/.test(form.phone.trim())) e.phone = "Numbers only";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const set = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors(er => ({ ...er, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/send-email", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (res.ok) { setStatus("success"); }
      else { setStatus("error"); setTimeout(() => setStatus("idle"), 3000); }
    } catch { setStatus("error"); setTimeout(() => setStatus("idle"), 3000); }
  };

  return (
    <section className="py-24 px-6 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">

        {/* Left — copy */}
        <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}
          className="w-full lg:w-2/5 lg:sticky lg:top-32">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-5 font-display border border-blue-100">
            Send a Message
          </div>
          <h2 className="font-display font-extrabold text-slate-900 leading-tight mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}>
            Tell Us About{" "}
            <span style={{ background: "linear-gradient(135deg,#1d4ed8,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Your Project
            </span>
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed mb-8">
            Fill out the form and we&apos;ll get back to you within 24 hours with a tailored proposal and free consultation call.
          </p>
          {/* Timing info */}
          <div className="space-y-4">
            {[
              { icon: Clock, text: "Response within 24 hours", color: "#1d4ed8" },
              { icon: MessageCircle, text: "Free 30-minute consultation", color: "#059669" },
              { icon: CheckCircle2, text: "No commitment required", color: "#7c3aed" },
            ].map(({ icon: Icon, text, color }) => (
              <div key={text} className="flex items-center gap-3 text-sm text-slate-600">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${color}15` }}>
                  <Icon size={14} style={{ color }} />
                </div>
                {text}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
          className="w-full lg:w-3/5">
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xl shadow-slate-100">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center rounded-2xl bg-emerald-50 border border-emerald-200">
                  <CheckCircle2 size={40} className="text-emerald-500 mx-auto mb-4" />
                  <h3 className="font-display font-bold text-slate-900 text-xl mb-2">Message Sent!</h3>
                  <p className="text-slate-500 text-sm">We&apos;ll get back to you within 24 hours.</p>
                  <button onClick={() => { setStatus("idle"); setForm({ name: "", email: "", company: "", phone: "", service: "", budget: "", message: "" }); }}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-colors">
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} className="space-y-5" noValidate autoComplete="off">
                  {status === "error" && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs">
                      Something went wrong. Please try again.
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Your Name *</label>
                      <div className="relative">
                        <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input type="text" placeholder="Arjun Kumar" value={form.name} onChange={set("name")} className={`${inputClass} pl-10`} />
                      </div>
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className={labelClass}>Email Address *</label>
                      <div className="relative">
                        <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input type="email" placeholder="you@company.com" value={form.email} onChange={set("email")} className={`${inputClass} pl-10`} />
                      </div>
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Company / Brand</label>
                      <div className="relative">
                        <Briefcase size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input type="text" placeholder="Your company" value={form.company} onChange={set("company")} className={`${inputClass} pl-10`} />
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>Phone Number *</label>
                      <div className="relative">
                        <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input type="tel" inputMode="numeric" placeholder="9876543210" value={form.phone} onChange={set("phone")} className={`${inputClass} pl-10`} />
                      </div>
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <SelectField label="Service Needed" options={services} value={form.service} onChange={v => setForm(f => ({ ...f, service: v }))} />
                    <SelectField label="Budget Range" options={budgets} value={form.budget} onChange={v => setForm(f => ({ ...f, budget: v }))} />
                  </div>
                  <div>
                    <label className={labelClass}>Your Message *</label>
                    <textarea rows={5} placeholder="Tell us about your project, goals, and timeline..." value={form.message} onChange={set("message")} className={`${inputClass} resize-none`} />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                  <motion.button type="submit" disabled={status === "submitting"}
                    className="w-full py-4 rounded-2xl font-display font-bold text-white flex items-center justify-center gap-2 transition-all duration-300"
                    style={{ background: "linear-gradient(135deg,#1d4ed8,#0284c7)", boxShadow: "0 8px 30px rgba(29,78,216,0.35)" }}
                    whileHover={{ scale: status === "submitting" ? 1 : 1.02 }} whileTap={{ scale: 0.98 }}>
                    {status === "submitting" ? <><Loader2 size={18} className="animate-spin" /><span>Sending…</span></>
                      : <><span>Send Message</span><Send size={15} /></>}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── FAQ ── */
function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-24 px-6 bg-[#f7f9ff]" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4 font-display border border-blue-100">
            FAQ
          </div>
          <h2 className="font-display font-extrabold text-slate-900" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)" }}>Common Questions</h2>
        </motion.div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between font-display font-semibold text-slate-800 text-sm hover:text-blue-600 transition-colors">
                {faq.q}
                <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={16} className="text-slate-400 flex-shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
                    <p className="px-6 pb-5 text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}
          className="text-center text-slate-400 text-sm mt-8">
          Still have questions?{" "}
          <Link href="mailto:hello@valaidhalam.com" className="text-blue-600 font-semibold hover:underline">Email us directly</Link>
        </motion.p>
      </div>
    </section>
  );
}

/* ── Page ── */
export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactHero />
      <InfoCards />
      <ContactForm />
      <FAQ />
      <Footer />
    </>
  );
}
