import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Mail, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Valaidhalam",
  description: "Privacy Policy - Valaidhalam Tech Services Studio",
};

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
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
                  Introduction
                </h2>
                <p className="text-slate-600 leading-relaxed pl-11">
                  Welcome to Valaidhalam ("Company", "we", "our", "us"). We respect your privacy and are committed to protecting any personal information you share with us while using our website www.valaidhalam.com and our digital services. This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit our website or engage with our services.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-slate-900 text-xl mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold" style={{ background: "linear-gradient(135deg, #1d4ed8, #2563eb)" }}>
                    2
                  </span>
                  Information We Collect
                </h2>
                
                <div className="ml-11 mb-6">
                  <h3 className="font-bold text-slate-800 text-lg mb-3">Personal Information</h3>
                  <p className="text-slate-600 leading-relaxed mb-3">We may collect personal information such as:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                    {["Name", "Email address", "Phone number", "Company name", "Project requirements or business details"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#3b82f6" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-slate-600 leading-relaxed mb-3">This information is usually collected through:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {["Contact forms", "Inquiry forms", "Email communication", "Client onboarding forms"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#3b82f6" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="ml-11">
                  <h3 className="font-bold text-slate-800 text-lg mb-3">Automatically Collected Information</h3>
                  <p className="text-slate-600 leading-relaxed mb-3">When you visit our website, we may automatically collect:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {["IP address", "Browser type", "Device information", "Pages visited", "Time spent on the website"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#3b82f6" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-slate-600 leading-relaxed mt-3">
                    This helps us improve website performance and user experience.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="font-display font-bold text-slate-900 text-xl mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold" style={{ background: "linear-gradient(135deg, #1d4ed8, #2563eb)" }}>
                    3
                  </span>
                  How We Use Your Information
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4 pl-11">
                  We use collected information to:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-11 mb-4">
                  {[
                    "Respond to inquiries",
                    "Provide services and project proposals",
                    "Improve our website and services",
                    "Communicate with clients and potential clients",
                    "Send important updates regarding services"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#3b82f6" }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-slate-600 leading-relaxed pl-11">
                  We do not sell or rent personal information to third parties.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-slate-900 text-xl mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold" style={{ background: "linear-gradient(135deg, #1d4ed8, #2563eb)" }}>
                    4
                  </span>
                  Cookies and Tracking Technologies
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4 pl-11">
                  Our website may use cookies to:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-11 mb-4">
                  {[
                    "Improve website functionality",
                    "Analyze website traffic",
                    "Personalize user experience"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#3b82f6" }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-slate-600 leading-relaxed pl-11">
                  You may disable cookies through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-slate-900 text-xl mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold" style={{ background: "linear-gradient(135deg, #1d4ed8, #2563eb)" }}>
                    5
                  </span>
                  Data Security
                </h2>
                <p className="text-slate-600 leading-relaxed pl-11">
                  We implement reasonable security measures to protect your data from unauthorized access, misuse, or disclosure. However, no method of internet transmission is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-slate-900 text-xl mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold" style={{ background: "linear-gradient(135deg, #1d4ed8, #2563eb)" }}>
                    6
                  </span>
                  Third-Party Services
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4 pl-11">
                  Our website may use third-party services such as:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-11 mb-4">
                  {[
                    "Analytics tools",
                    "Hosting providers",
                    "Email services"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#3b82f6" }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-slate-600 leading-relaxed pl-11">
                  These services may collect certain information as governed by their own privacy policies.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-slate-900 text-xl mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold" style={{ background: "linear-gradient(135deg, #1d4ed8, #2563eb)" }}>
                    7
                  </span>
                  Data Sharing
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4 pl-11">
                  We may share information only when necessary to:
                </p>
                <ul className="space-y-2 pl-11 mb-4">
                  {[
                    "Provide our services",
                    "Comply with legal obligations",
                    "Protect our rights and security"
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
                    8
                  </span>
                  Your Rights
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4 pl-11">
                  You have the right to:
                </p>
                <ul className="space-y-2 pl-11 mb-4">
                  {[
                    "Request access to your data",
                    "Request correction of inaccurate data",
                    "Request deletion of your data"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#3b82f6" }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-slate-600 leading-relaxed pl-11">
                  Requests can be sent to the contact email provided below.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-slate-900 text-xl mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold" style={{ background: "linear-gradient(135deg, #1d4ed8, #2563eb)" }}>
                    9
                  </span>
                  Children's Privacy
                </h2>
                <p className="text-slate-600 leading-relaxed pl-11">
                  Our services are not directed toward individuals under the age of 18. We do not knowingly collect personal data from children.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-slate-900 text-xl mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold" style={{ background: "linear-gradient(135deg, #1d4ed8, #2563eb)" }}>
                    10
                  </span>
                  Changes to this Privacy Policy
                </h2>
                <p className="text-slate-600 leading-relaxed pl-11">
                  We may update this policy periodically. Updates will be reflected on this page with a revised effective date.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-slate-900 text-xl mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold" style={{ background: "linear-gradient(135deg, #1d4ed8, #2563eb)" }}>
                    11
                  </span>
                  Contact Us
                </h2>
                <div className="ml-11 bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <p className="text-slate-600 leading-relaxed mb-4">
                    If you have questions regarding this Privacy Policy, you may contact us at:
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
