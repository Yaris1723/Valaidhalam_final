"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar, Clock, User, X } from "lucide-react";
import Image from "next/image";

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  content: React.ReactNode;
};

const Blog1Content = () => (
  <div className="space-y-5 text-sm leading-relaxed">
    <p className="text-slate-600">In today's digital-first economy, a website is not a luxury — it is a business asset. Whether you are a startup founder, SME owner, hospital, manufacturer, or service provider, understanding the cost of website making in India helps you plan your investment wisely. This detailed guide explains website development pricing in India, factors affecting costs, hidden expenses, and how to choose the right solution for your business.</p>
    <h3 className="text-base font-bold text-slate-900">1. How Much Does It Cost to Make a Website in India?</h3>
    <p className="text-slate-600">The cost of website development in India typically ranges between:</p>
    <div className="overflow-x-auto rounded-xl border border-slate-100">
      <table className="w-full text-xs">
        <thead><tr className="bg-blue-50"><th className="text-left px-4 py-3 font-bold text-slate-700">Website Type</th><th className="text-left px-4 py-3 font-bold text-slate-700">Estimated Cost (INR)</th></tr></thead>
        <tbody className="divide-y divide-slate-100">
          {[["Basic Static Website","₹8,000 – ₹25,000"],["Dynamic Business Website","₹20,000 – ₹60,000"],["Custom Professional Website","₹50,000 – ₹2,00,000"],["E-commerce Website","₹40,000 – ₹3,00,000+"],["Enterprise-Level Web Application","₹2,00,000 – ₹15,00,000+"]].map(([t,c])=>(<tr key={t} className="hover:bg-slate-50"><td className="px-4 py-3 text-slate-700">{t}</td><td className="px-4 py-3 font-semibold text-blue-600">{c}</td></tr>))}
        </tbody>
      </table>
    </div>
    <p className="text-slate-600">The final cost depends on design complexity, features, integrations, security requirements, and ongoing maintenance.</p>
    <h3 className="text-base font-bold text-slate-900">2. Types of Websites and Their Costs</h3>
    {[
      {title:"A. Basic Static Website (₹8,000 – ₹25,000)",ideal:["Small businesses","Local shops","Personal brands","Portfolio websites"],features:["4–6 pages (Home, About, Services, Contact)","Mobile responsive design","Basic contact form","Basic SEO setup"],note:"Best for businesses that only need an online presence."},
      {title:"B. Dynamic Business Website (₹20,000 – ₹60,000)",ideal:["Growing startups","Professional service providers","Manufacturing companies","Clinics & educational institutions"],features:["CMS (WordPress or custom)","Admin panel","Blog section","SEO-friendly structure","Performance optimization"],note:"This type helps generate leads and improve Google rankings."},
      {title:"C. E-Commerce Website (₹40,000 – ₹3,00,000+)",ideal:["Product-based businesses","D2C brands","Retail & wholesale businesses"],features:["Product management system","Payment gateway integration","Shipping integration","GST invoice setup","Inventory management","Security (SSL, firewall)"],note:"Cost increases with customization and automation."},
      {title:"D. Custom Web Applications (₹2,00,000+)",ideal:["SaaS startups","Enterprise platforms","Healthcare systems","ERP/CRM solutions"],features:["Backend architecture","API integrations","Advanced security","Cloud hosting","Scalability planning"],note:""},
    ].map((item)=>(
      <div key={item.title} className="bg-slate-50 rounded-xl p-4">
        <p className="font-bold text-slate-800 mb-2">{item.title}</p>
        <p className="font-semibold text-slate-700 mb-1">Ideal for:</p>
        <ul className="text-slate-600 space-y-0.5 mb-2 list-none">{item.ideal.map(i=><li key={i}>● {i}</li>)}</ul>
        <p className="font-semibold text-slate-700 mb-1">Features:</p>
        <ul className="text-slate-600 space-y-0.5 list-none">{item.features.map(i=><li key={i}>● {i}</li>)}</ul>
        {item.note && <p className="text-slate-500 mt-2 italic">{item.note}</p>}
      </div>
    ))}
    <h3 className="text-base font-bold text-slate-900">3. Factors That Affect Website Development Cost in India</h3>
    <div className="space-y-2">
      {[
        {label:"1. Domain Name",val:"₹800 – ₹1,200/year (.com, .in, etc.) Premium domains cost more."},
        {label:"2. Hosting",val:"Shared hosting: ₹2,000 – ₹6,000/year | VPS/Cloud hosting: ₹10,000 – ₹60,000/year"},
        {label:"3. Design Complexity",val:"Custom UI/UX design increases cost compared to template-based design."},
        {label:"4. Features & Integrations",val:"Payment gateway, CRM integration, WhatsApp automation, AI chatbot, custom dashboards — each integration adds development hours."},
        {label:"5. SEO Optimization",val:"Basic SEO may be included, but advanced SEO (technical + content strategy) can cost ₹10,000 – ₹50,000/month."},
        {label:"6. Maintenance & AMC",val:"Most companies charge ₹5,000 – ₹25,000 per year for updates, backups, and support."},
      ].map(item=>(
        <div key={item.label} className="flex gap-2 items-start"><span className="font-semibold text-slate-800 min-w-fit">{item.label}:</span><span className="text-slate-600">{item.val}</span></div>
      ))}
    </div>
    <h3 className="text-base font-bold text-slate-900">4. Freelancer vs Agency vs In-House Team Cost</h3>
    <div className="overflow-x-auto rounded-xl border border-slate-100">
      <table className="w-full text-xs">
        <thead><tr className="bg-blue-50"><th className="text-left px-4 py-3 font-bold text-slate-700">Option</th><th className="text-left px-4 py-3 font-bold text-slate-700">Cost</th><th className="text-left px-4 py-3 font-bold text-slate-700">Pros</th><th className="text-left px-4 py-3 font-bold text-slate-700">Cons</th></tr></thead>
        <tbody className="divide-y divide-slate-100">
          {[["Freelancer","Lower","Affordable","Limited scalability and no support"],["Agency","Medium–High","Professional, structured","Higher cost"],["In-house developer","High","Full control","Salary + long-term cost"]].map(([o,c,p,n])=>(<tr key={o} className="hover:bg-slate-50"><td className="px-4 py-3 font-semibold text-slate-700">{o}</td><td className="px-4 py-3 text-slate-600">{c}</td><td className="px-4 py-3 text-green-600">{p}</td><td className="px-4 py-3 text-red-500">{n}</td></tr>))}
        </tbody>
      </table>
    </div>
    <p className="text-slate-600">Choosing depends on your long-term business strategy.</p>
    <h3 className="text-base font-bold text-slate-900">5. Hidden Costs in Website Development</h3>
    <p className="text-slate-600">Many businesses underestimate:</p>
    <ul className="text-slate-600 space-y-1 list-none">{["SSL certificates","Security plugins","Premium themes","Stock images","Content writing","SEO services","Speed optimization","Website redesign after 2–3 years"].map(i=><li key={i}>● {i}</li>)}</ul>
    <p className="text-slate-600 font-semibold">Always ask for a detailed quotation.</p>
    <h3 className="text-base font-bold text-slate-900">6. Is a Cheap Website Worth It?</h3>
    <p className="text-slate-600">A ₹5,000 website may look attractive but:</p>
    <ul className="text-slate-600 space-y-1 list-none">{["Poor SEO structure","No scalability","Weak security","Low performance","No lead conversion optimization"].map(i=><li key={i}>● {i}</li>)}</ul>
    <p className="text-slate-600">A website should generate revenue, not just exist online.</p>
    <h3 className="text-base font-bold text-slate-900">7. ROI: Does a Website Increase Sales?</h3>
    <p className="text-slate-600">Yes — when built strategically. A properly designed SEO-optimized website can:</p>
    <ul className="text-slate-600 space-y-1 list-none">{["Increase credibility","Generate inbound leads","Improve brand visibility","Reduce marketing costs","Enable online sales"].map(i=><li key={i}>● {i}</li>)}</ul>
    <p className="text-slate-600">Businesses that invest in performance-driven websites see measurable ROI within 6–12 months.</p>
    <h3 className="text-base font-bold text-slate-900">8. How to Choose the Right Website Development Company in India</h3>
    <p className="text-slate-600">Before finalizing, check:</p>
    <div className="grid grid-cols-2 gap-2">{["✔ Portfolio","✔ Client testimonials","✔ SEO understanding","✔ Technical stack","✔ Security practices","✔ Post-launch support","✔ Scalability planning"].map(i=><span key={i} className="text-slate-700 text-sm font-medium">{i}</span>)}</div>
    <p className="text-slate-600">Avoid choosing only based on price.</p>
    <h3 className="text-base font-bold text-slate-900">9. Website Development Cost in India vs Abroad</h3>
    <p className="text-slate-600">India offers highly competitive pricing compared to the US, UK, or Australia — often 3x to 5x lower — while maintaining high development standards. This is why many global companies outsource website development to Indian agencies.</p>
    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-5 border border-blue-100">
      <p className="font-bold text-slate-800 mb-2">10. Final Thoughts</p>
      <p className="text-slate-600 mb-2">The cost of website making in India depends on your business goals, features required, and growth vision.</p>
      <p className="text-slate-700 font-semibold">Instead of asking, "How cheap can I get a website?" — Ask, "How much revenue can this website generate?"</p>
      <p className="text-slate-600 mt-2">A well-built website is not an expense — it is a long-term digital asset.</p>
    </div>
  </div>
);

const Blog2Content = () => (
  <div className="space-y-5 text-sm leading-relaxed">
    <p className="text-slate-600">In 2026, a website is no longer just a digital visiting card. It is your most powerful lead generation asset. Yet, most businesses in India invest in design, animations, and fancy layouts but forget one crucial question:</p>
    <p className="text-center font-bold text-slate-800 text-base py-2">"Is this website built to generate leads?"</p>
    <p className="text-slate-600">If your website is not consistently bringing enquiries, demo bookings, or sales calls — it is underperforming. This guide explains how to build a lead-focused website: one that works as a 24/7 salesperson for your business.</p>
    <div className="bg-red-50 border border-red-100 rounded-xl p-4">
      <p className="font-bold text-slate-800 mb-2">Why Most Business Websites Fail to Generate Leads</p>
      <p className="text-slate-600 mb-2">The majority of websites fail for three reasons:</p>
      <ul className="text-slate-600 space-y-1 list-none"><li>1. No clear positioning</li><li>2. Weak call-to-action (CTA)</li><li>3. No SEO and conversion strategy</li></ul>
      <p className="text-slate-600 mt-2">A lead-focused website is designed differently. It combines strategy, psychology, SEO, speed, and analytics into one system.</p>
    </div>
    <h3 className="text-base font-bold text-slate-900">1. Start With Strategy, Not Design</h3>
    <p className="text-slate-600">Before writing code or choosing colors, you must define:</p>
    <ul className="text-slate-600 space-y-1 list-none"><li>● Who is your ideal customer?</li><li>● What exact problem do you solve?</li><li>● Why should they trust you?</li><li>● What action do you want them to take?</li></ul>
    <p className="text-slate-600">Without clarity here, no amount of design can save your conversion rate.</p>
    <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
      <p className="font-semibold text-slate-800 mb-1">Your homepage should answer in 5 seconds:</p>
      <ul className="text-slate-700 space-y-1 list-none"><li>→ Who is this for?</li><li>→ What result will I get?</li><li>→ What should I do next?</li></ul>
    </div>
    <h3 className="text-base font-bold text-slate-900">2. Your Homepage Is Your Lead Engine</h3>
    <div className="bg-slate-50 rounded-xl p-4">
      <p className="font-bold text-slate-800 mb-2">Clear Value Proposition</p>
      <p className="text-slate-500 mb-1">Instead of:</p><p className="text-slate-400 italic mb-2">"We provide innovative digital solutions."</p>
      <p className="text-slate-500 mb-1">Use:</p>
      <p className="text-blue-700 font-semibold">"We Build High-Converting Websites That Generate Qualified Leads for Indian Businesses."</p>
      <p className="text-slate-500 mt-2">Clarity increases conversions dramatically.</p>
    </div>
    <div className="bg-slate-50 rounded-xl p-4">
      <p className="font-bold text-slate-800 mb-2">Strong Primary Call-to-Action</p>
      <p className="text-slate-600 mb-2">Your CTA should be specific and visible. Examples:</p>
      <ul className="text-slate-600 space-y-1 list-none"><li>● Book a Free Consultation</li><li>● Get a Custom Quote</li><li>● Schedule a Demo</li><li>● Start Your MVP</li></ul>
      <p className="text-slate-600 mt-2">The CTA should appear multiple times on the page — not just once at the bottom.</p>
    </div>
    <div className="bg-slate-50 rounded-xl p-4">
      <p className="font-bold text-slate-800 mb-2">Trust Signals Build Confidence</p>
      <p className="text-slate-600 mb-2">To convert visitors into leads, you must reduce doubt. Include:</p>
      <ul className="text-slate-600 space-y-1 list-none"><li>● Client testimonials</li><li>● Case studies</li><li>● Certifications</li><li>● Awards</li><li>● Client logos</li><li>● Media mentions</li></ul>
      <p className="text-slate-600 mt-2">Highlighting measurable performance outcomes further builds credibility.</p>
    </div>
    <h3 className="text-base font-bold text-slate-900">3. SEO Is the Foundation of Lead Generation</h3>
    <p className="text-slate-600">Search engine optimization ensures your business appears when someone searches:</p>
    <ul className="text-slate-600 space-y-1 list-none"><li>● "Website development company in India"</li><li>● "Startup MVP development"</li><li>● "Cost of website in India"</li><li>● "Lead generation website services"</li></ul>
    <p className="text-slate-600 mt-2">Your website must include:</p>
    <ul className="text-slate-600 space-y-1 list-none">{["Proper heading structure (H1, H2, H3)","Keyword-optimized content","Fast loading speed (under 3 seconds)","Mobile responsiveness","Clean URLs","Schema markup","XML sitemap"].map(i=><li key={i}>● {i}</li>)}</ul>
    <p className="text-slate-600 font-semibold mt-2">SEO is not optional. It is the engine that drives long-term inbound leads.</p>
    <h3 className="text-base font-bold text-slate-900">4. Simplicity Increases Conversion</h3>
    <p className="text-slate-600">Keep contact forms simple — Name, Phone, Email, Requirement. Long forms reduce conversion rates significantly. Additionally, integrate:</p>
    <ul className="text-slate-600 space-y-1 list-none"><li>● Click-to-call buttons</li><li>● WhatsApp chat</li><li>● Sticky CTA buttons (especially for mobile)</li></ul>
    <p className="text-slate-600">The easier it is to contact you, the more leads you generate.</p>
    <h3 className="text-base font-bold text-slate-900">5. Speed Directly Impacts Revenue</h3>
    <p className="text-slate-600">A slow website increases bounce rate, reduces trust, lowers Google rankings, and kills conversions. Optimize: Images, Hosting quality, Code structure, Caching, CDN integration.</p>
    <p className="text-slate-600 font-semibold">Every second matters.</p>
    <h3 className="text-base font-bold text-slate-900">6. Analytics Turns Guesswork Into Strategy</h3>
    <p className="text-slate-600">Without data, you are operating blindly. Install: Google Analytics, Google Tag Manager, Conversion tracking. Track form submissions, button clicks, call clicks, landing page performance, and traffic sources. Once you understand user behavior, you can optimize pages scientifically.</p>
    <h3 className="text-base font-bold text-slate-900">7. Content Converts Visitors Into Buyers</h3>
    <p className="text-slate-600">A lead-focused website should include: Service pages, Industry-specific landing pages, Case studies, Educational blogs, FAQ sections. Well-optimized blogs alone can generate consistent inbound leads for years.</p>
    <h3 className="text-base font-bold text-slate-900">8. Lead-Focused Website vs Normal Website</h3>
    <div className="overflow-x-auto rounded-xl border border-slate-100">
      <table className="w-full text-xs">
        <thead><tr className="bg-slate-100"><th className="text-left px-4 py-3 font-bold text-slate-700">A Normal Website</th><th className="text-left px-4 py-3 font-bold text-blue-700">A Lead-Focused Website</th></tr></thead>
        <tbody className="divide-y divide-slate-100">
          {[["Looks good","Has strategic messaging"],["Has basic information","Multiple CTAs"],["Has one contact page","SEO optimization"],["","Data tracking"],["","Trust signals"],["","Conversion optimization"]].map(([a,b],i)=>(<tr key={i} className="hover:bg-slate-50"><td className="px-4 py-3 text-slate-500">{a}</td><td className="px-4 py-3 text-slate-700 font-medium">{b}</td></tr>))}
        </tbody>
      </table>
    </div>
    <p className="text-slate-600 font-semibold">The difference is not design. The difference is strategy.</p>
    <h3 className="text-base font-bold text-slate-900">9. Continuous Optimization Is Mandatory</h3>
    <p className="text-slate-600">Launching a website is just the beginning. To improve lead flow: A/B test headlines, improve weak pages, publish SEO blogs regularly, build backlinks, run targeted ads, optimize based on analytics. Websites that evolve outperform static ones.</p>
    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-5 border border-blue-100">
      <p className="font-bold text-slate-800 mb-2">Final Thoughts</p>
      <p className="text-slate-600 mb-2">A website should not exist just to "have an online presence." It should:</p>
      <ul className="text-slate-700 space-y-1 list-none"><li>● Attract the right audience</li><li>● Communicate value instantly</li><li>● Build trust quickly</li><li>● Make contacting you effortless</li><li>● Convert visitors into leads</li></ul>
      <p className="text-slate-600 mt-3">When built correctly, your website becomes your most scalable sales channel. If your current website is not generating consistent enquiries, it may be time to redesign it with a lead-first approach.</p>
    </div>
  </div>
);

const Blog3Content = () => (
  <div className="space-y-5 text-sm leading-relaxed">
    <p className="text-slate-600">Most founders think an MVP means building an app or software. Wrong. In 2026, your website is the first and most powerful version of your MVP. Before writing complex code, your website can validate demand, test messaging, generate leads, and even collect payments. This guide explains how to build a startup MVP strategically — with your website at the center.</p>
    <h3 className="text-base font-bold text-slate-900">What is an MVP in a Startup?</h3>
    <p className="text-slate-600">An MVP (Minimum Viable Product) is the simplest version of your product that solves one core problem and helps you test real market demand. The concept was popularized by Eric Ries in his book <span className="italic">The Lean Startup</span>.</p>
    <p className="text-slate-600 font-semibold">But here is what most founders miss: Your website itself can be your MVP.</p>
    <h3 className="text-base font-bold text-slate-900">Why Your Website Should Be Your First MVP</h3>
    <div className="bg-slate-50 rounded-xl p-4">
      <p className="font-bold text-slate-800 mb-2">1. Validate Before You Build</p>
      <ul className="text-slate-600 space-y-1 list-none"><li>● Create a high-converting landing website</li><li>● Explain the problem and your solution</li><li>● Add a signup form or pre-order button</li><li>● Run ads to test interest</li></ul>
      <p className="text-slate-600 mt-2">If people don't sign up, the idea needs refinement.</p>
    </div>
    <div className="bg-slate-50 rounded-xl p-4">
      <p className="font-bold text-slate-800 mb-2">2. Your Website Tests 4 Critical Assumptions</p>
      <ul className="text-slate-600 space-y-1 list-none"><li>● Does the problem resonate?</li><li>● Does your positioning make sense?</li><li>● Are users willing to share contact details?</li><li>● Will customers pay?</li></ul>
      <p className="text-slate-600 mt-2">Without writing heavy backend code.</p>
    </div>
    <h3 className="text-base font-bold text-slate-900">3. Real Examples of Website-Based MVPs</h3>
    {[{name:"Dropbox",desc:"Started with a simple explainer website + demo video before building the full infrastructure."},{name:"Airbnb",desc:"Validated demand through a basic website listing before scaling globally."},{name:"Zappos",desc:"Used a website to test product demand before investing in inventory."}].map(ex=>(
      <div key={ex.name} className="flex gap-3 items-start bg-blue-50 rounded-xl p-4 border border-blue-100">
        <span className="font-bold text-blue-700 min-w-fit">{ex.name}</span>
        <p className="text-slate-600">{ex.desc}</p>
      </div>
    ))}
    <h3 className="text-base font-bold text-slate-900">Step-by-Step Startup MVP Framework (Website-First Approach)</h3>
    <div className="space-y-4">
      {[
        {step:"Step 1",title:"Define the Core Problem Clearly",body:<><p className="text-slate-600 mb-2">Your website headline should communicate: who it is for, what problem you solve, what outcome users get.</p><p className="text-slate-500 mb-1">Bad example:</p><p className="text-slate-400 italic mb-2">"We are building a smart AI solution."</p><p className="text-slate-500 mb-1">Good example:</p><p className="text-blue-700 font-semibold">"Reduce hospital instrument turnaround time by 30% with automated tracking."</p><p className="text-slate-600 mt-2">Clarity increases conversion.</p></>},
        {step:"Step 2",title:"Build a High-Converting MVP Website",body:<><p className="text-slate-600 mb-2">Minimum sections required:</p><ul className="text-slate-600 space-y-1 list-none"><li>● Hero section (clear value proposition)</li><li>● Problem explanation</li><li>● Solution overview</li><li>● Social proof or founder credibility</li><li>● Call-to-action (Join Waitlist / Book Demo / Pre-order)</li></ul><p className="text-slate-600 mt-2">Cost in India: <span className="font-semibold text-blue-600">₹15,000 – ₹60,000</span> depending on design & optimization.</p></>},
        {step:"Step 3",title:"Add Lead Capture Mechanism",body:<><p className="text-slate-600 mb-2">Your MVP website must include:</p><ul className="text-slate-600 space-y-1 list-none"><li>● Email capture form</li><li>● WhatsApp integration</li><li>● Demo booking system</li><li>● Pre-payment option (if applicable)</li></ul><p className="text-slate-600 mt-2">This converts traffic into validation data.</p></>},
        {step:"Step 4",title:"Drive Targeted Traffic",body:<><p className="text-slate-600 mb-2">Use:</p><ul className="text-slate-600 space-y-1 list-none"><li>● LinkedIn outreach</li><li>● Instagram ads</li><li>● Google Ads</li><li>● Industry communities</li><li>● Founder networks</li></ul><p className="text-slate-600 mt-2">Your website becomes the testing ground.</p></>},
        {step:"Step 5",title:"Measure Key Metrics",body:<><p className="text-slate-600 mb-2">Track:</p><ul className="text-slate-600 space-y-1 list-none"><li>● Conversion rate</li><li>● Cost per lead</li><li>● Bounce rate</li><li>● Time on page</li><li>● Pre-orders</li><li>● Demo bookings</li></ul><div className="mt-3 space-y-1"><p className="text-green-700 font-semibold">✔ If your website converts → market exists.</p><p className="text-red-600 font-semibold">✘ If it does not → refine messaging before building product.</p></div></>},
      ].map(item=>(
        <div key={item.step} className="flex gap-3 items-start">
          <span className="inline-block bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-lg min-w-fit mt-0.5">{item.step}</span>
          <div className="bg-slate-50 rounded-xl p-4 flex-1"><p className="font-bold text-slate-800 mb-2">{item.title}</p>{item.body}</div>
        </div>
      ))}
    </div>
    <h3 className="text-base font-bold text-slate-900">Types of MVP Websites</h3>
    {[{title:"1. Landing Page MVP",desc:"Single page explaining product + signup. Ideal for idea validation."},{title:"2. Pre-Order Website MVP",desc:"Accepts early payments to test buying intent. Strongest validation signal."},{title:"3. Demo Booking MVP",desc:"Allows prospects to book consultations. Ideal for B2B startups."},{title:"4. Content + Authority MVP",desc:"Publish blogs + industry insights to build credibility before launch. Excellent for long-term SEO."}].map(item=>(
      <div key={item.title} className="bg-slate-50 rounded-xl p-4"><p className="font-bold text-slate-800 mb-1">{item.title}</p><p className="text-slate-600">{item.desc}</p></div>
    ))}
    <h3 className="text-base font-bold text-slate-900">Cost of Building an MVP Website in India (2026)</h3>
    <div className="overflow-x-auto rounded-xl border border-slate-100">
      <table className="w-full text-xs">
        <thead><tr className="bg-blue-50"><th className="text-left px-4 py-3 font-bold text-slate-700">Website Type</th><th className="text-left px-4 py-3 font-bold text-slate-700">Cost (INR)</th></tr></thead>
        <tbody className="divide-y divide-slate-100">
          {[["Basic Landing Page","₹15,000 – ₹30,000"],["Conversion-Optimized Startup Website","₹30,000 – ₹1,00,000"],["Custom SaaS MVP Website","₹1,00,000 – ₹3,00,000"]].map(([t,c])=>(<tr key={t} className="hover:bg-slate-50"><td className="px-4 py-3 text-slate-700">{t}</td><td className="px-4 py-3 font-semibold text-blue-600">{c}</td></tr>))}
        </tbody>
      </table>
    </div>
    <p className="text-slate-500 italic">Compared to building a full product (₹5L–₹50L), this is low-risk validation.</p>
    <h3 className="text-base font-bold text-slate-900">Common Mistakes Founders Make</h3>
    <div className="space-y-3">
      <div className="bg-red-50 border border-red-100 rounded-xl p-4"><p className="font-bold text-slate-800 mb-1">1. Building Product Before Website</p><p className="text-slate-600">Validation should happen before heavy tech investment.</p></div>
      <div className="bg-red-50 border border-red-100 rounded-xl p-4"><p className="font-bold text-slate-800 mb-1">2. Focusing on Design Over Messaging</p><p className="text-slate-600">Clarity &gt; Fancy animations.</p></div>
      <div className="bg-red-50 border border-red-100 rounded-xl p-4">
        <p className="font-bold text-slate-800 mb-2">3. Ignoring SEO from Day One</p>
        <ul className="text-slate-600 space-y-1 list-none"><li>● SEO-optimized headings</li><li>● Keyword strategy</li><li>● Technical optimization</li><li>● Fast loading speed</li></ul>
        <p className="text-slate-600 mt-2 font-semibold">SEO compounds over time.</p>
      </div>
    </div>
    <h3 className="text-base font-bold text-slate-900">MVP vs Full Product Development</h3>
    <div className="overflow-x-auto rounded-xl border border-slate-100">
      <table className="w-full text-xs">
        <thead><tr className="bg-slate-100"><th className="text-left px-4 py-3 font-bold text-slate-700">Website MVP</th><th className="text-left px-4 py-3 font-bold text-slate-700">Full Product</th></tr></thead>
        <tbody className="divide-y divide-slate-100">
          {[["Validates demand","Scales operations"],["Low cost","High investment"],["Fast launch","Longer timeline"],["Focused learning","Revenue optimization"]].map(([a,b])=>(<tr key={a} className="hover:bg-slate-50"><td className="px-4 py-3 text-slate-700">{a}</td><td className="px-4 py-3 text-slate-700">{b}</td></tr>))}
        </tbody>
      </table>
    </div>
    <p className="text-slate-600">The website is <span className="font-bold">Phase 1</span>. The product is <span className="font-bold">Phase 2</span>.</p>
    <h3 className="text-base font-bold text-slate-900">When Should You Build the Full Product?</h3>
    <p className="text-slate-600">Build fully only after: website generates consistent leads, users repeatedly show interest, customers are willing to pay, and market positioning becomes clear. Until then, your website is your laboratory.</p>
    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-5 border border-blue-100">
      <p className="font-bold text-slate-800 mb-2">Final Thoughts</p>
      <p className="text-slate-600 mb-2">In 2026, startups do not fail because of bad technology. They fail because of poor validation.</p>
      <ul className="text-slate-700 space-y-1 list-none font-medium"><li>● Your first sales tool</li><li>● Your first validation engine</li><li>● Your first investor pitch</li><li>● Your first data source</li></ul>
      <p className="text-slate-700 font-bold mt-3">Build the website first. Validate demand. Then build the product.</p>
    </div>
  </div>
);

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Cost of Website Making in India (2026)",
    excerpt: "In today's digital first economy, a website is not a luxury — it is a business asset. This detailed guide explains website development pricing in India, factors affecting costs, hidden expenses, and how to choose the right solution for your business.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&auto=format",
    category: "Web Development",
    date: "Mar 3, 2026",
    readTime: "7 min read",
    author: "Valaidhalam Team",
    content: <Blog1Content />,
  },
  {
    id: 2,
    title: "Lead Focused Web Development: The Complete Guide to Building a Website That Actually Generates Leads (India – 2026)",
    excerpt: "Most business websites look great but fail to convert. Learn how to build a lead-focused website that works as a 24/7 salesperson   combining strategy, psychology, SEO, speed, and analytics into one system.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop&auto=format",
    category: "Lead Generation",
    date: "Mar 3, 2026",
    readTime: "8 min read",
    author: "Valaidhalam Team",
    content: <Blog2Content />,
  },
  {
    id: 3,
    title: "Startup MVP Guide (2026): Why Your Website Is the Most Powerful MVP Tool",
    excerpt: "Most founders think an MVP means building an app or software. Wrong. In 2026, your website is the first and most powerful version of your MVP — validate demand, test messaging, and collect payments before writing complex code.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop&auto=format",
    category: "Startups",
    date: "Mar 3, 2026",
    readTime: "9 min read",
    author: "Valaidhalam Team",
    content: <Blog3Content />,
  },
];

export default function Blog() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Lock body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = selectedPost ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedPost]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") setSelectedPost(null); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <section id="blog" ref={ref} className="bg-slate-50 py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4" style={{ background: "#eff6ff", color: "#1d4ed8" }}>
              Our Blog
            </span>
            <h2 className="font-display font-extrabold text-slate-900 leading-tight mb-4" style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}>
              Latest{" "}
              <span style={{ background: "linear-gradient(135deg, #1d4ed8, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Insights</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">Stay updated with the latest trends, tips, and insights from the world of technology and digital marketing.</p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-blue-600">{post.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-slate-400 text-xs mb-3">
                    <span className="flex items-center gap-1"><Calendar size={12} />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="flex items-center gap-2 text-slate-400 text-xs"><User size={14} />{post.author}</span>
                    <span className="flex items-center gap-1 text-sm font-bold text-blue-600 group-hover:gap-2 transition-all">
                      Read More <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* View All */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-12"
          >
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-full text-sm hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1">
              Get Started <ArrowRight size={16} />
            </a>
          </motion.div>

        </div>
      </section>

      {/* ── MODAL ── */}
      <AnimatePresence>
        {selectedPost && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedPost(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50"
            />

            {/* Modal panel */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, y: 50, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.96 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-0 z-50 flex items-end sm:items-center justify-center px-0 sm:px-4 py-0 sm:py-8 pointer-events-none"
            >
              <div
                className="bg-white w-full sm:max-w-2xl sm:rounded-3xl rounded-t-3xl shadow-2xl flex flex-col pointer-events-auto overflow-hidden"
                style={{ maxHeight: "92vh" }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Hero image */}
                <div className="relative h-52 flex-shrink-0">
                  <Image src={selectedPost.image} alt={selectedPost.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-blue-600">{selectedPost.category}</span>
                  </div>
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="absolute top-4 right-4 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-white transition-all shadow"
                    aria-label="Close"
                  >
                    <X size={16} />
                  </button>
                  <div className="absolute bottom-4 left-5 right-14">
                    <h2 className="text-white font-extrabold text-base md:text-lg leading-snug drop-shadow">{selectedPost.title}</h2>
                  </div>
                </div>

                {/* Meta bar */}
                <div className="flex items-center flex-wrap gap-4 px-6 py-3 bg-slate-50 border-b border-slate-100 text-xs text-slate-500 flex-shrink-0">
                  <span className="flex items-center gap-1.5"><User size={12} />{selectedPost.author}</span>
                  <span className="flex items-center gap-1.5"><Calendar size={12} />{selectedPost.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={12} />{selectedPost.readTime}</span>
                </div>

                {/* Scrollable content */}
                <div className="overflow-y-auto px-6 py-6 flex-1">
                  {selectedPost.content}
                </div>

                {/* Footer CTA */}
                <div className="px-6 py-4 border-t border-slate-100 flex-shrink-0 flex gap-3">
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="flex-1 py-3 border-2 border-slate-200 text-slate-600 font-bold rounded-xl text-sm hover:border-slate-300 transition-all"
                  >
                    Close
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setSelectedPost(null)}
                    className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl text-sm text-center hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}