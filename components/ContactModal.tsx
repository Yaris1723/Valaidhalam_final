"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle, Mail, Phone, MapPin, Send,
  User, Briefcase, ChevronDown, CheckCircle2, Loader2, X
} from "lucide-react";

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
            layoutId="input-focus-ring-modal"
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

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: string;
}

export default function ContactModal({ isOpen, onClose, preSelectedService }: ContactModalProps) {
  const [form, setForm] = useState<FormData>({
    name: "", email: "", company: "", phone: "",
    service: preSelectedService || "", budget: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  // Update form when preSelectedService changes
  useState(() => {
    if (preSelectedService) {
      setForm((f) => ({ ...f, service: preSelectedService }));
    }
  });

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    else if (!/^\d+$/.test(form.phone.trim())) e.phone = "Only numbers are allowed";
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
        // Close modal after successful submission
        setTimeout(() => {
          handleClose();
        }, 1500);
      } else {
        const data = await response.json();
        console.error("Submission failed:", data.error);
        setStatus("error");
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

  const handleClose = () => {
    // Reset form when closing
    setForm({
      name: "", email: "", company: "", phone: "",
      service: preSelectedService || "", budget: "", message: "",
    });
    setStatus("idle");
    setErrors({});
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.34, 1.1, 0.64, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl p-6 md:p-8 pointer-events-auto"
              style={{
                background: "linear-gradient(150deg, #030f26 0%, #0c1f4a 45%, #1e3a8a 80%, #1d4ed8 100%)",
                border: "1px solid rgba(255,255,255,0.11)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
              }}
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
              >
                <X size={20} className="text-white" />
              </button>

              {/* Subtle inner glow */}
              <div
                className="absolute top-0 left-0 w-64 h-64 pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)", filter: "blur(30px)" }}
              />

              {/* Header */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-2.5 mb-4">
                  <div className="glass-dark px-4 py-2 rounded-full flex items-center gap-2">
                    <MessageCircle size={14} className="text-blue-300" />
                    <span className="text-blue-200 text-xs font-bold uppercase tracking-widest font-display">
                      Get in Touch
                    </span>
                  </div>
                </div>
                <h3 className="font-display font-bold text-white text-xl">Send us a message</h3>
                <p className="text-blue-300/50 text-xs font-jakarta mt-1">All fields marked * are required</p>
              </div>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  /* ── Success state ── */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                    className="py-8 text-center rounded-xl bg-emerald-500/10 border border-emerald-400/20"
                  >
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <CheckCircle2 size={24} className="text-emerald-400" />
                      <span className="text-emerald-300 font-semibold text-lg">Message sent!</span>
                    </div>
                    <p className="text-blue-200/60 text-sm">We'll get back to you within 24 hours</p>
                    <button
                      onClick={handleClose}
                      className="mt-6 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  /* Form state */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative z-10 space-y-5"
                    noValidate
                    autoComplete="off"
                  >
                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-200 text-xs font-jakarta"
                      >
                        Something went wrong. Please check your connection and try again.
                      </motion.div>
                    )}

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
                      <div>
                        <InputField
                          label="Company / Brand"
                          icon={Briefcase}
                          type="text"
                          placeholder="Your company name"
                          value={form.company}
                          onChange={set("company")}
                        />
                      </div>
                      <div>
                        <InputField
                          label="Phone Number *"
                          icon={Phone}
                          type="tel"
                          pattern="[0-9]*"
                          inputMode="numeric"
                          placeholder="9876543210"
                          value={form.phone}
                          onChange={set("phone")}
                        />
                        {errors.phone && (
                          <p className="text-red-400 text-xs mt-1.5 font-jakarta">{errors.phone}</p>
                        )}
                      </div>
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
                        className="relative w-full py-4 rounded-2xl font-display font-bold text-base overflow-hidden flex items-center justify-center gap-2"
                        style={{
                          background: status === "submitting"
                            ? "rgba(29,78,216,0.6)"
                            : "linear-gradient(135deg, #1d4ed8, #2563eb, #0284c7)",
                          boxShadow: "0 8px 30px rgba(29,78,216,0.45)",
                          color: "white",
                        }}
                        whileHover={{ scale: status === "submitting" ? 1 : 1.02 }}
                        whileTap={{ scale: status === "submitting" ? 1 : 0.98 }}
                      >
                        {status === "submitting" ? (
                          <>
                            <Loader2 size={18} className="animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send size={16} />
                          </>
                        )}
                      </motion.button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
