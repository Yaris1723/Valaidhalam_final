"use client";

import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  MessageCircle, Mail, Phone, MapPin, Send,
  User, Briefcase, ChevronDown, CheckCircle2, Loader2
} from "lucide-react";
import Image from "next/image";

const services = [
  "Full-Stack Development",
  "Web Application",
  "Social Media Management",
  "UI/UX Design",
  "Cloud & DevOps",
  "Digital Strategy",
  "Other",
];

const budgets = ["< ₹50K", "₹50K – ₹2L", "₹2L – ₹10L", "₹10L+", "Let's discuss"];

type FormData = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
};

const inputClass =
  "w-full bg-white/5 border border-white/12 rounded-2xl px-4 py-3.5 text-white placeholder:text-blue-300/40 text-sm font-jakarta focus:outline-none focus:border-blue-400/60 focus:bg-white/10 transition-all duration-200";

const labelClass = "block text-blue-200/80 text-xs font-bold uppercase tracking-[0.1em] font-display mb-2";

function InputField({
  label, icon: Icon, ...props
}: { label: string; icon: React.ElementType } & React.InputHTMLAttributes<HTMLInputElement>) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label className={labelClass}>{label}</label>
      <div className="relative">
        <Icon
          size={15}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-200"
          style={{ color: focused ? "#60a5fa" : "rgba(147,197,253,0.45)" }}
        />
        <input
          {...props}
          onFocus={(e) => { setFocused(true); props.onFocus?.(e); }}
          onBlur={(e) => { setFocused(false); props.onBlur?.(e); }}
          className={`${inputClass} pl-10`}
        />
        {focused && (
          <motion.div
            layoutId="input-focus-ring"
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{ boxShadow: "0 0 0 2px rgba(96,165,250,0.35)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </div>
    </div>
  );
}

function SelectField({
  label, options, value, onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <label className={labelClass}>{label}</label>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`${inputClass} text-left flex items-center justify-between`}
        style={{ color: value ? "white" : "rgba(147,197,253,0.4)" }}
      >
        <span>{value || `Select ${label}`}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={15} className="text-blue-300/50" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="absolute z-50 top-full mt-2 w-full rounded-2xl overflow-hidden border border-white/12"
            style={{ background: "#0c1f4a", boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}
          >
            {options.map((opt) => (
              <li key={opt}>
                <button
                  type="button"
                  onClick={() => { onChange(opt); setOpen(false); }}
                  className="w-full text-left px-4 py-3 text-sm font-jakarta text-blue-200 hover:bg-white/10 hover:text-white transition-colors duration-150 flex items-center gap-2"
                >
                  {value === opt && <CheckCircle2 size={13} className="text-blue-400 flex-shrink-0" />}
                  <span className={value === opt ? "text-white font-semibold" : ""}>{opt}</span>
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CTA() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  const [form, setForm] = useState<FormData>({
    name: "", email: "", company: "", phone: "",
    service: "", budget: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        const data = await response.json();
        console.error("Submission failed:", data.error);
        setStatus("error");
        // Reset to idle after 3 seconds so user can try again
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "linear-gradient(150deg, #030f26 0%, #0c1f4a 45%, #1e3a8a 80%, #1d4ed8 100%)" }}
    >
      {/* Parallax bg image */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <Image
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1400&h=900&fit=crop&auto=format"
          alt=""
          fill
          className="object-cover opacity-[0.06]"
        />
      </motion.div>

      <div className="absolute inset-0 grid-pattern pointer-events-none" />

      {/* Orbs */}
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{ width: 700, height: 700, background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 65%)", filter: "blur(80px)", top: "50%", left: "20%", transform: "translate(-50%,-50%)" }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 65%)", filter: "blur(60px)", top: "20%", right: "5%" }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, delay: 2 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2.5 mb-7">
            <div className="glass-dark px-5 py-2.5 rounded-full flex items-center gap-2">
              <MessageCircle size={14} className="text-blue-300" />
              <span className="text-blue-200 text-xs font-bold uppercase tracking-widest font-display">
                Get in Touch
              </span>
            </div>
          </div>

          <h2
            className="font-display font-extrabold text-white leading-[1.08] tracking-tight mb-5"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)" }}
          >
            Let&apos;s build something
            <br />
            <span style={{
              background: "linear-gradient(135deg, #93c5fd, #60a5fa, #a5b4fc)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              great together
            </span>
          </h2>
          <p className="text-blue-200/65 font-jakarta font-light text-lg max-w-lg mx-auto leading-relaxed">
            Tell us about your project and we&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 xl:gap-12 items-start">

          {/* LEFT — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.34, 1.1, 0.64, 1] }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Info card */}
            <div
              className="rounded-3xl p-7 space-y-6"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}
            >
              <div>
                <h3 className="font-display font-bold text-white text-xl mb-1.5">Contact Information</h3>
                <p className="text-blue-300/60 text-sm font-jakarta leading-relaxed">
                  Reach us directly or fill the form — we&apos;re always happy to talk.
                </p>
              </div>

              {[
                { Icon: Mail, label: "Email", value: "valaidhalam03@gmail.com", href: "mailto:valaidhalam03@gmail.com" },
                { Icon: Phone, label: "Phone", value: "+91 94877 39484", href: "tel:+919487739484" },
                { Icon: MapPin, label: "Location", value: "Tamil Nadu, India", href: "#" },
              ].map(({ Icon, label, value, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 4 }}
                >
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-105"
                    style={{ background: "rgba(59,130,246,0.18)", border: "1px solid rgba(96,165,250,0.2)" }}
                  >
                    <Icon size={17} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-blue-300/50 text-[11px] font-bold uppercase tracking-widest font-display">{label}</div>
                    <div className="text-white text-sm font-jakarta font-medium mt-0.5 group-hover:text-blue-300 transition-colors">{value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Response time promise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="rounded-3xl p-6 flex items-center gap-4"
              style={{ background: "rgba(96,165,250,0.08)", border: "1px solid rgba(96,165,250,0.15)" }}
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <div className="font-display font-bold text-white text-sm">Fast Response Guarantee</div>
                <div className="text-blue-300/60 text-xs font-jakarta mt-0.5 leading-relaxed">
                  We respond to all inquiries within 24 hours — usually much faster.
                </div>
              </div>
            </motion.div>

            {/* Office image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="rounded-3xl overflow-hidden relative"
              style={{ height: "180px" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=300&fit=crop&auto=format"
                alt="Our workspace"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1f4a]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5">
                <div className="text-white font-display font-bold text-sm">Our Studio</div>
                <div className="text-blue-300/70 text-xs font-jakarta">Tamil Nadu, India</div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.34, 1.1, 0.64, 1] }}
            className="lg:col-span-3"
          >
            <div
              className="rounded-3xl p-7 md:p-10 relative overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.11)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 30px 80px rgba(0,0,0,0.3)",
              }}
            >
              {/* Subtle inner glow */}
              <div
                className="absolute top-0 left-0 w-64 h-64 pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)", filter: "blur(30px)" }}
              />

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  /* ── Success state ── */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                    className="py-4 text-center mb-4 rounded-xl bg-emerald-500/10 border border-emerald-400/20"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle2 size={20} className="text-emerald-400" />
                      <span className="text-emerald-300 font-semibold">Message sent successfully!</span>
                    </div>
                    <p className="text-blue-200/60 text-xs mt-1">We'll get back to you within 24 hours</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
              {/* Form state */}
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative z-10 space-y-5"
                noValidate
              >
                    <div className="mb-6">
                      <h3 className="font-display font-bold text-white text-xl">Send us a message</h3>
                      <p className="text-blue-300/50 text-xs font-jakarta mt-1">All fields marked * are required</p>
                      {status === "error" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="mt-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-200 text-xs font-jakarta"
                        >
                          Something went wrong. Please check your connection and try again.
                        </motion.div>
                      )}
                    </div>

                    {/* Row 1: Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <InputField
                          label="Your Name *"
                          icon={User}
                          type="text"
                          placeholder="Arjun Kumar"
                          value={form.name}
                          onChange={set("name")}
                        />
                        {errors.name && (
                          <p className="text-red-400 text-xs mt-1.5 font-jakarta">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <InputField
                          label="Email Address *"
                          icon={Mail}
                          type="email"
                          placeholder="you@company.com"
                          value={form.email}
                          onChange={set("email")}
                        />
                        {errors.email && (
                          <p className="text-red-400 text-xs mt-1.5 font-jakarta">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Company + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <InputField
                        label="Company / Brand"
                        icon={Briefcase}
                        type="text"
                        placeholder="Your company name"
                        value={form.company}
                        onChange={set("company")}
                      />
                      <InputField
                        label="Phone Number"
                        icon={Phone}
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={set("phone")}
                      />
                    </div>

                    {/* Row 3: Service + Budget */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <SelectField
                        label="Service Needed"
                        options={services}
                        value={form.service}
                        onChange={(v) => setForm((f) => ({ ...f, service: v }))}
                      />
                      <SelectField
                        label="Budget Range"
                        options={budgets}
                        value={form.budget}
                        onChange={(v) => setForm((f) => ({ ...f, budget: v }))}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className={labelClass}>Your Message *</label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your project, goals, and timeline..."
                        value={form.message}
                        onChange={set("message")}
                        className={`${inputClass} resize-none`}
                      />
                      {errors.message && (
                        <p className="text-red-400 text-xs mt-1.5 font-jakarta">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit */}
                    <div className="pt-1">
                      <motion.button
                        type="submit"
                        disabled={status === "submitting"}
                        className="relative w-full py-4 rounded-2xl font-display font-bold text-base overflow-hidden"
                        style={{
                          background: status === "submitting"
                            ? "rgba(29,78,216,0.6)"
                            : "linear-gradient(135deg, #1d4ed8, #2563eb, #0284c7)",
                          boxShadow: "0 8px 30px rgba(29,78,216,0.45)",
                          color: "white",
                        }}
                        whileHover={status !== "submitting" ? { scale: 1.02, boxShadow: "0 12px 40px rgba(29,78,216,0.55)" } : {}}
                        whileTap={status !== "submitting" ? { scale: 0.98 } : {}}
                      >
                        {/* Button glow pulse */}
                        {status !== "submitting" && (
                          <motion.div
                            className="absolute inset-0 rounded-2xl"
                            animate={{ opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity }}
                            style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.1), transparent)" }}
                          />
                        )}

                        <span className="relative flex items-center justify-center gap-2.5">
                          {status === "submitting" ? (
                            <>
                              <Loader2 size={18} className="animate-spin" />
                              Sending your message...
                            </>
                          ) : (
                            <>
                              <Send size={17} strokeWidth={2} />
                              Send Message
                            </>
                          )}
                        </span>
                      </motion.button>

                      <p className="text-center text-blue-300/35 text-xs mt-4 font-jakarta">
                        🔒 Your information is safe with us · No spam, ever
                      </p>
                    </div>
                  </motion.form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
