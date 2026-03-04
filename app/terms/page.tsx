import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Mail, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Valaidhalam",
  description: "Terms & Conditions - Valaidhalam Tech Services Studio",
};

export default function TermsAndConditions() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-28 px-6" style={{ background: "linear-gradient(150deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)" }}>
        <div className="max-w-4xl mx-auto">
          {/* Back to Home Button */}
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8 transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2.5 mb-4">
              <div className="glass-dark px-4 py-2 rounded-full flex items-center gap-2" style={{ background: "rgba(29,78,216,0.1)", border: "1px solid rgba(29,78,216,0.2)" }}>
                <span className="text-blue-600 text-xs font-bold uppercase tracking-widest font-display">
                  Legal
                </span>
              </div>
            </div>
            <h1 className="font-display font-extrabold text-slate-900 mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
              Terms & Conditions
            </h1>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Please read these terms and conditions carefully before using our website and services.
            </p>
          </div>

          {/* Content Card */}
          <div className="bg-white rounded-3xl p-8 md:p-12" style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
            <p className="text-slate-400 text-sm mb-8 pb-6 border-b border-slate-100">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="space-y-10">
              <section>
                <h2 className="font-display font-bold text-slate-900 text-xl mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold" style={{ background: "linear-gradient(135deg, #1d4ed8, #2563eb)" }}>
                    1
                  </span>
                  Acceptance of Terms
                </h2>
                <p className="text-slate-600 leading-relaxed pl-11">
                  By accessing and using www.valaidhalam.com, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with these terms, please do not use our website or services.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-slate-900 text-xl mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold" style={{ background: "linear-gradient(135deg, #1d4ed8, #2563eb)" }}>
                    2
                  </span>
                  Services
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4 pl-11">
                  Valaidhalam provides services including but not limited to:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-11 mb-4">
                  {[
                    "Website development",
                    "Web application development",
                    "UI/UX design",
                    "Digital solutions for businesses",
                    "Technology consulting"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#3b82f6" }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-slate-600 leading-relaxed pl-11">
                  Service scope will always be defined through separate project agreements or proposals.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-slate-900 text-xl mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold" style={{ background: "linear-gradient(135deg, #1d4ed8, #2563eb)" }}>
                    3
                  </span>
                  Intellectual Property
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4 pl-11">
                  All content on this website including:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-11 mb-4">
                  {["Text", "Graphics", "Logos", "Designs", "Software"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#3b82f6" }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-slate-600 leading-relaxed pl-11">
                  is the intellectual property of Valaidhalam unless otherwise stated. Unauthorized reproduction or distribution is prohibited.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-slate-900 text-xl mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold" style={{ background: "linear-gradient(135deg, #1d4ed8, #2563eb)" }}>
                    4
                  </span>
                  Client Projects
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4 pl-11">
                  For client projects:
                </p>
                <ul className="space-y-2 pl-11 mb-4">
                  {[
                    "Scope will be defined in a proposal or agreement",
                    "Timelines depend on client cooperation and requirement clarity",
                    "Additional features outside the agreed scope may incur additional charges"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#3b82f6" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="font-display font-bold text-slate-900 text-xl mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold" style={{ background: "linear-gradient(135deg, #1d4ed8, #2563eb)" }}>
                    5
                  </span>
                  Payments
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4 pl-11">
                  Payment terms are defined in project agreements. Typical structure may include:
                </p>
                <ul className="space-y-2 pl-11 mb-4">
                  {[
                    "Advance payment before project start",
                    "Milestone payments during development",
                    "Final payment before project delivery"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#3b82f6" }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-slate-600 leading-relaxed pl-11">
                  Failure to make payments may result in project suspension.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-slate-900 text-xl mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold" style={{ background: "linear-gradient(135deg, #1d4ed8, #2563eb)" }}>
                    6
                  </span>
                  Limitation of Liability
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4 pl-11">
                  Valaidhalam shall not be held liable for:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-11 mb-4">
                  {[
                    "Indirect or consequential damages",
                    "Loss of profits",
                    "Business interruption",
                    "Issues caused by third-party services"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#3b82f6" }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-slate-600 leading-relaxed pl-11">
                  Our liability is limited to the amount paid for the specific service.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-slate-900 text-xl mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold" style={{ background: "linear-gradient(135deg, #1d4ed8, #2563eb)" }}>
                    7
                  </span>
                  Third-Party Links
                </h2>
                <p className="text-slate-600 leading-relaxed pl-11">
                  Our website may contain links to external websites. We are not responsible for the content or practices of those websites.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-slate-900 text-xl mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold" style={{ background: "linear-gradient(135deg, #1d4ed8, #2563eb)" }}>
                    8
                  </span>
                  Website Availability
                </h2>
                <p className="text-slate-600 leading-relaxed pl-11">
                  We strive to keep the website available at all times, but we do not guarantee uninterrupted access. The website may be temporarily unavailable due to maintenance or technical issues.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-slate-900 text-xl mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold" style={{ background: "linear-gradient(135deg, #1d4ed8, #2563eb)" }}>
                    9
                  </span>
                  Changes to Terms
                </h2>
                <p className="text-slate-600 leading-relaxed pl-11">
                  We reserve the right to update these Terms and Conditions at any time. Changes will be posted on this page with the updated effective date.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-slate-900 text-xl mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold" style={{ background: "linear-gradient(135deg, #1d4ed8, #2563eb)" }}>
                    10
                  </span>
                  Governing Law
                </h2>
                <p className="text-slate-600 leading-relaxed pl-11">
                  These Terms shall be governed by the laws of India. Any disputes arising from these terms shall fall under the jurisdiction of Tamil Nadu, India.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-slate-900 text-xl mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold" style={{ background: "linear-gradient(135deg, #1d4ed8, #2563eb)" }}>
                    11
                  </span>
                  Contact Information
                </h2>
                <div className="ml-11 bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <p className="text-slate-600 leading-relaxed mb-4">
                    For questions regarding these Terms, you may contact us at:
                  </p>
                  <div className="space-y-3">
                    <p className="flex items-center gap-2 text-slate-900 font-medium">
                      <Mail size={18} className="text-blue-600" />
                      <strong>Email:</strong>{" "}
                      <a href="mailto:valaidhalam03@gmail.com" className="text-blue-600 hover:underline">
                        valaidhalam03@gmail.com
                      </a>
                    </p>
                    <p className="flex items-center gap-2 text-slate-900 font-medium">
                      <Globe size={18} className="text-blue-600" />
                      <strong>Website:</strong>{" "}
                      <a href="https://www.valaidhalam.com" className="text-blue-600 hover:underline">
                        www.valaidhalam.com
                      </a>
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
