import { useState, useEffect, useRef } from "react";
import { HiArrowRight, HiCheck, HiChevronDown } from "react-icons/hi";
import {
  HiBolt, HiSquares2X2, HiChartBarSquare, HiArrowsRightLeft,
  HiDevicePhoneMobile, HiShoppingCart, HiServerStack, HiWrenchScrewdriver,
  HiPresentationChartBar, HiRectangleStack, HiCpuChip, HiArrowPath,
  HiCheckCircle, HiArrowTrendingUp,
} from "react-icons/hi2";
import CTA from "../sections/CTA";
import { useModal } from "../context/ModalContext";
import hero1 from "../assets/hero1.png";
import realEstateImg from "../assets/RealEstate.png";
import healthcareImg from "../assets/HealthCare.png";
import ecommerceImg from "../assets/Ecommerce.png";
import manufacturingImg from "../assets/manufacturing2.png";
import financeImg from "../assets/digitalmarketing.png";
import educationImg from "../assets/exademy.png";

/* ── scroll-reveal hook ── */
function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* ── static data ── */
const solutions = [
  { icon: HiArrowPath, title: "Process Automation", desc: "Automate repetitive workflows and eliminate manual inefficiencies across your operations.", items: ["Smart Workflows", "System Triggers", "Real-time Sync"] },
  { icon: HiSquares2X2, title: "Custom Platforms", desc: "Purpose-built platforms tailored to your business logic, workflows, and user needs.", items: ["SaaS Platforms", "Internal Tools", "Client Portals"] },
  { icon: HiChartBarSquare, title: "Data & Analytics", desc: "Turn raw data into actionable insights with custom dashboards and reporting systems.", items: ["BI Dashboards", "Predictive Models", "Data Pipelines"] },
  { icon: HiBolt, title: "AI-Powered Solutions", desc: "Embed AI into your product for smarter decisions, personalization, and automation.", items: ["ML Models", "NLP / LLMs", "AI Agents"] },
  { icon: HiArrowsRightLeft, title: "API Integrations", desc: "Connect your systems seamlessly with third-party APIs and custom middleware.", items: ["REST & GraphQL", "CRM / ERP Sync", "Webhooks"] },
  { icon: HiWrenchScrewdriver, title: "Legacy Modernisation", desc: "Rebuild outdated systems into modern, scalable, cloud-ready architectures.", items: ["Re-platforming", "Code Refactor", "Cloud Migration"] },
  { icon: HiServerStack, title: "Cloud Infrastructure", desc: "Design and deploy resilient, auto-scaling cloud infrastructure for peak performance.", items: ["AWS / Azure / GCP", "DevOps & CI/CD", "99.9% Uptime"] },
  { icon: HiDevicePhoneMobile, title: "Mobile Applications", desc: "Build cross-platform mobile apps that deliver exceptional user experiences.", items: ["iOS & Android", "React Native", "PWA"] },
  { icon: HiShoppingCart, title: "E-commerce Solutions", desc: "Custom storefronts and commerce platforms engineered for conversion and scale.", items: ["Headless Commerce", "Payment Gateways", "Inventory Mgmt"] },
  { icon: HiCpuChip, title: "Security & Compliance", desc: "Enterprise-grade security architecture to protect your data and meet compliance standards.", items: ["ISO 27001", "GDPR Ready", "Pen Testing"] },
  { icon: HiPresentationChartBar, title: "Business Intelligence", desc: "Custom BI solutions that surface the metrics and trends that matter most to your team.", items: ["KPI Tracking", "Report Builders", "Live Dashboards"] },
  { icon: HiRectangleStack, title: "SaaS Development", desc: "Full-stack SaaS products built to scale from MVP to enterprise with multi-tenancy.", items: ["Multi-tenant Arch", "Subscription Billing", "Onboarding Flows"] },
];

const techStack = [
  { name: "React", color: "text-cyan-600      bg-cyan-50      border-cyan-100" },
  { name: "Next.js", color: "text-gray-800      bg-gray-100     border-gray-200" },
  { name: "Node.js", color: "text-green-700     bg-green-50     border-green-100" },
  { name: "Python", color: "text-blue-600      bg-blue-50      border-blue-100" },
  { name: "TypeScript", color: "text-blue-700      bg-blue-50      border-blue-100" },
  { name: "AWS", color: "text-orange-600    bg-orange-50    border-orange-100" },
  { name: "Azure", color: "text-sky-600       bg-sky-50       border-sky-100" },
  { name: ".NET", color: "text-purple-700    bg-purple-50    border-purple-100" },
  { name: "PostgreSQL", color: "text-indigo-600    bg-indigo-50    border-indigo-100" },
  { name: "MongoDB", color: "text-green-600     bg-green-50     border-green-100" },
  { name: "Docker", color: "text-blue-500      bg-blue-50      border-blue-100" },
  { name: "Kubernetes", color: "text-blue-800      bg-blue-50      border-blue-100" },
  { name: "GraphQL", color: "text-pink-600      bg-pink-50      border-pink-100" },
  { name: "Redis", color: "text-red-600       bg-red-50       border-red-100" },
  { name: "Flutter", color: "text-sky-500       bg-sky-50       border-sky-100" },
  { name: "Terraform", color: "text-violet-600    bg-violet-50    border-violet-100" },
];

const stats = [
  { value: "100+", label: "Solutions Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "40%", label: "Avg. Cost Reduction" },
  { value: "60%", label: "Ops Efficiency Gain" },
  { value: "99.9%", label: "System Reliability" },
];

const industries = [
  { label: "Real Estate", img: realEstateImg, desc: "Lead gen, CRM, property portals" },
  { label: "Healthcare", img: healthcareImg, desc: "Patient systems, telemedicine" },
  { label: "E-Commerce", img: ecommerceImg, desc: "Custom storefronts, inventory" },
  { label: "Manufacturing", img: manufacturingImg, desc: "ERP, automation, IoT platforms" },
  { label: "Finance", img: financeImg, desc: "Fintech, compliance, reporting" },
  { label: "Education", img: educationImg, desc: "LMS, student portals, e-learning" },
  { label: "& More", img: hero1, desc: "We serve every growing industry" },
];

const processSteps = [
  { n: "01", title: "Discovery & Planning", desc: "Deep-dive sessions to understand your challenges, goals, tech stack, and success criteria." },
  { n: "02", title: "Design & Architecture", desc: "System design, UI/UX prototypes, and technical architecture reviewed with your team." },
  { n: "03", title: "Build & Develop", desc: "Agile development in 2-week sprints with continuous updates and live demos." },
  { n: "04", title: "Test & Iterate", desc: "Rigorous QA, security audits, and user testing to ensure production-ready quality." },
  { n: "05", title: "Launch & Support", desc: "Smooth deployment, staff training, and ongoing maintenance with SLA-backed support." },
];

const faqs = [
  {
    q: "What types of custom solutions do you build?",
    a: "We build anything from internal automation tools and SaaS platforms to full enterprise systems. If there's a business problem, we engineer a precise solution for it."
  },
  {
    q: "How long does development typically take?",
    a: "Timelines vary by complexity. A simple automation tool may take 4–6 weeks. Complex platforms typically range from 3–6 months. We provide a detailed roadmap after discovery."
  },
  {
    q: "Can you integrate with our existing systems?",
    a: "Absolutely. We specialise in API integrations, legacy modernisation, and connecting disparate systems via custom middleware and webhooks."
  },
  {
    q: "What is your development process?",
    a: "We follow a 5-step collaborative process: Discovery → Design → Build → Test → Launch, with weekly demos and full transparency throughout."
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes. All projects include a post-launch stabilisation period. We also offer retainer-based support, feature development, and SLA-backed maintenance packages."
  },
];

/* ── FAQ accordion item ── */
const FAQItem = ({ q, a, idx }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${open ? "border-blue-200 shadow-md shadow-blue-50" : "border-gray-100"}`}
      style={{ transitionDelay: `${idx * 60}ms` }}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="text-sm font-bold text-gray-900">{q}</span>
        <HiChevronDown className={`w-4 h-4 text-blue-600 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`transition-all duration-300 overflow-hidden ${open ? "max-h-48" : "max-h-0"}`}>
        <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">{a}</p>
      </div>
    </div>
  );
};

/* ═══════════════ SECTION COMPONENTS ════════════════ */

/* Hero */
const Hero = () => {
  const { open: openModal } = useModal();
  const [ref, visible] = useReveal(0.05);
  return (
    <section ref={ref} className="bg-white pt-16 pb-12 lg:pt-24 lg:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* left */}
          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <span className="inline-block text-[10px] font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1.5 rounded-full mb-4">
              Custom Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.07] mb-5">
              Your Challenge.<br />
              <span className="text-blue-600">Our Custom</span><br />
              Solution.
            </h1>
            <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-md">
              Every business is unique. We build tailored technology solutions that solve specific challenges and drive real results — no templates, no shortcuts.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <button
                onClick={openModal}
                className="flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-800 text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-blue-900/25 hover:-translate-y-0.5"
              >
                Book Discovery Call <HiArrowRight className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-center gap-2 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all">
                Explore Your Challenge <HiArrowRight className="w-4 h-4 text-blue-600" />
              </button>
            </div>

            {/* trusted by */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {["bg-blue-500", "bg-purple-500", "bg-green-500", "bg-orange-500", "bg-pink-500"].map((c, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full ${c} border-2 border-white flex items-center justify-center text-[10px] font-bold text-white`}>
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500">Trusted by <span className="font-bold text-gray-800">500+</span> businesses worldwide</p>
            </div>
          </div>

          {/* right — challenge → goals card */}
          <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="relative">
              {/* main dark card */}
              <div className="bg-gray-950 rounded-3xl p-7 relative overflow-hidden border border-white/5 shadow-2xl">
                {/* glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-blue-600/20 rounded-full blur-3xl" />

                <div className="relative flex flex-col items-center gap-5">
                  {/* top: YOUR CHALLENGE */}
                  <div className="w-full bg-white/5 rounded-2xl border border-white/10 p-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-400/30 flex items-center justify-center shrink-0">
                      <span className="text-lg">⚡</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Your Challenge</p>
                      <p className="text-sm font-bold text-white leading-tight">Complex business problem<br />that slows your growth</p>
                    </div>
                  </div>

                  {/* connector */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-px h-4 bg-white/20" />
                    <div className="flex items-center gap-2 bg-blue-600 px-4 py-1.5 rounded-full shadow-lg shadow-blue-600/40">
                      <HiCpuChip className="w-3.5 h-3.5 text-white" />
                      <span className="text-[11px] font-bold text-white">DeepRank Engineers</span>
                    </div>
                    <div className="w-px h-4 bg-white/20" />
                  </div>

                  {/* bottom: GOALS */}
                  <div className="w-full bg-white/5 rounded-2xl border border-white/10 p-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-green-500/20 border border-green-400/30 flex items-center justify-center shrink-0">
                      <span className="text-lg">🎯</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-green-400 uppercase">Your Goals</p>
                      <p className="text-sm font-bold text-white leading-tight">Custom solution that<br />drives measurable results</p>
                    </div>
                  </div>

                  {/* floating tech badges */}
                  <div className="flex flex-wrap justify-center gap-2 mt-1">
                    {["Automation", "AI Integration", "Scalable", "Secure", "Cloud-Native"].map((t) => (
                      <span key={t} className="text-[10px] font-semibold text-blue-300 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* floating stat cards */}
              <div className="absolute -right-4 top-8 flex flex-col gap-2">
                {[
                  { v: "100+", l: "Solutions", color: "text-blue-600" },
                  { v: "98%", l: "Satisfaction", color: "text-green-600" },
                  { v: "5+", l: "Years", color: "text-purple-600" },
                ].map((s) => (
                  <div key={s.l} className="bg-white rounded-xl shadow-lg border border-gray-100 px-3 py-2 text-right">
                    <p className={`text-base font-black ${s.color}`}>{s.v}</p>
                    <p className="text-[9px] text-gray-400 font-medium">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Benefits */
const Benefits = () => {
  const [ref, visible] = useReveal();
  const items = [
    { icon: HiCheckCircle, title: "Business Focused", desc: "Solutions aligned to your specific business goals and success metrics.", color: "text-blue-600 bg-blue-50" },
    { icon: HiArrowTrendingUp, title: "Scalable & Future Ready", desc: "Built to grow with you — architected for 10x scale from day one.", color: "text-green-600 bg-green-50" },
    { icon: HiCpuChip, title: "Secure & Reliable", desc: "Enterprise-grade security, 99.9% uptime SLAs, and full compliance.", color: "text-purple-600 bg-purple-50" },
    { icon: HiArrowPath, title: "Agile & Transparent", desc: "Weekly sprint demos, full visibility, and a collaborative partnership.", color: "text-orange-600 bg-orange-50" },
  ];
  return (
    <section ref={ref} className="bg-gray-50 py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className={`text-center mb-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="inline-block text-[10px] font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1.5 rounded-full mb-3">Build Around Your Needs</span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
            No templates. No limitations.<br />Just solutions that fit.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ icon: Icon, title, desc, color }, i) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(16px)", transition: `opacity .6s ${i * 100}ms, transform .6s ${i * 100}ms, box-shadow .3s, translate .3s` }}
            >
              <div className={`w-11 h-11 rounded-2xl ${color} flex items-center justify-center mb-4`}>
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-black text-gray-900 mb-2">{title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* Solutions Grid */
const SolutionsGrid = () => {
  const [ref, visible] = useReveal();
  return (
    <section ref={ref} className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="inline-block text-[10px] font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1.5 rounded-full mb-3">Who We Help</span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900">We Build Solutions For Any Challenge</h2>
          <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">From idea to enterprise — we engineer the right solution for your unique problem.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5">
          {solutions.map(({ icon: Icon, title, desc, items }, i) => (
            <div
              key={title}
              className="bg-white border-2 border-gray-100 rounded-2xl p-5 hover:border-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
              style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: `opacity .55s ${i * 45}ms, transform .55s ${i * 45}ms, box-shadow .3s, border-color .3s, translate .3s` }}
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 group-hover:bg-blue-900 flex items-center justify-center mb-3.5 transition-colors duration-300">
                <Icon className="w-5 h-5 text-blue-600 group-hover:text-blue-300 transition-colors duration-300" />
              </div>
              <h3 className="text-sm font-black text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">{title}</h3>
              <p className="text-[11px] text-gray-500 leading-relaxed mb-3">{desc}</p>
              <ul className="flex flex-col gap-1 mb-4">
                {items.map((it) => (
                  <li key={it} className="flex items-center gap-1.5 text-[11px] text-gray-500">
                    <HiCheck className="w-3 h-3 text-green-500 shrink-0" />{it}
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-1 text-blue-700 font-bold text-xs hover:gap-2.5 transition-all">
                Learn More <HiArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* Tech Stack Marquee */
const TechStack = () => {
  const doubled = [...techStack, ...techStack];
  return (
    <section className="bg-gray-50 py-10 overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 mb-5">
        <p className="text-center text-[10px] font-bold tracking-widest text-gray-400 uppercase">Technologies We Use</p>
      </div>
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {doubled.map(({ name, color }, i) => (
            <span
              key={`${name}-${i}`}
              className={`shrink-0 px-4 py-2 rounded-xl border text-xs font-bold ${color}`}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

/* Stats Bar */
const StatsBar = () => {
  const [ref, visible] = useReveal();
  return (
    <section ref={ref} className="bg-blue-900 py-12">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 divide-y-0">
          {stats.map(({ value, label }, i) => (
            <div
              key={label}
              className="text-center"
              style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(12px)", transition: `opacity .6s ${i * 100}ms, transform .6s ${i * 100}ms` }}
            >
              <p className="text-3xl sm:text-4xl font-black text-white mb-1">{value}</p>
              <p className="text-xs text-blue-300 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* Industries */
const Industries = () => {
  const [ref, visible] = useReveal();
  return (
    <section ref={ref} className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="inline-block text-[10px] font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1.5 rounded-full mb-3">Industries We Serve</span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900">Custom Solutions For Every Industry</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {industries.map(({ label, img, desc }, i) => (
            <div
              key={label}
              className="relative rounded-2xl overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300"
              style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(16px)", transition: `opacity .6s ${i * 80}ms, transform .6s ${i * 80}ms` }}
            >
              <div className="h-36">
                <img src={img} alt={label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-gray-950/90 via-gray-950/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-white text-xs font-black leading-tight mb-0.5">{label}</p>
                <p className="text-white/60 text-[9px] leading-snug group-hover:text-white/90 transition-colors duration-300">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* Process */
const Process = () => {
  const [ref, visible] = useReveal();
  return (
    <section ref={ref} className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="inline-block text-[10px] font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1.5 rounded-full mb-3">Our Process</span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900">A Collaborative Process.<br />Built For Success.</h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_480px] gap-12 items-start">
          {/* left — CRM mockup */}
          <div className={`transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="bg-gray-950 rounded-3xl p-6 border border-white/5 shadow-2xl">
              {/* header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-0.5">Client Project</p>
                  <p className="text-lg font-black text-white">Custom CRM Solution</p>
                </div>
                <span className="flex items-center gap-1.5 text-[10px] font-bold text-green-400 bg-green-400/10 border border-green-400/20 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />LIVE
                </span>
              </div>

              {/* metrics row */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  { label: "Revenue Growth", value: "80%", icon: "📈", color: "text-green-400" },
                  { label: "ROI Achieved", value: "2.6x", icon: "💰", color: "text-blue-400" },
                  { label: "Time Saved", value: "60h/wk", icon: "⏱️", color: "text-purple-400" },
                ].map((m) => (
                  <div key={m.label} className="bg-white/5 rounded-xl p-3 border border-white/8 text-center">
                    <p className="text-lg mb-0.5">{m.icon}</p>
                    <p className={`text-base font-black ${m.color}`}>{m.value}</p>
                    <p className="text-[9px] text-gray-500 mt-0.5">{m.label}</p>
                  </div>
                ))}
              </div>

              {/* chart bars */}
              <div className="bg-white/5 rounded-2xl p-4 border border-white/8">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[11px] font-bold text-gray-400">Performance Overview</p>
                  <span className="text-[10px] text-blue-400 font-semibold">Last 6 Months</span>
                </div>
                <div className="flex items-end gap-1.5 h-20">
                  {[30, 48, 40, 72, 58, 88, 65, 94, 78, 95].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm transition-all duration-700"
                      style={{
                        height: visible ? `${h}%` : "4px",
                        background: `linear-gradient(to top, #3B82F6, #818CF8)`,
                        transitionDelay: `${300 + i * 60}ms`
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* feature badges */}
              <div className="flex flex-wrap gap-2 mt-4">
                {["Lead Tracking", "Pipeline View", "Email Automation", "Analytics", "API Synced"].map((t) => (
                  <span key={t} className="text-[10px] font-semibold text-blue-300 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* right — steps */}
          <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="flex flex-col gap-4">
              {processSteps.map((s, i) => (
                <div
                  key={s.n}
                  className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 group"
                  style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateX(16px)", transition: `opacity .6s ${i * 100 + 200}ms, transform .6s ${i * 100 + 200}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-900 group-hover:bg-blue-700 flex items-center justify-center shrink-0 transition-colors">
                    <span className="text-[11px] font-black text-white">{s.n}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">{s.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* FAQ */
const FAQ = () => {
  const [ref, visible] = useReveal();
  return (
    <section ref={ref} className="py-16 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-5 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="inline-block text-[10px] font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1.5 rounded-full mb-3">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900">Common Questions</h2>
        </div>
        <div
          className="flex flex-col gap-3"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(16px)", transition: "opacity .7s .1s, transform .7s .1s" }}
        >
          {faqs.map((f, i) => <FAQItem key={f.q} q={f.q} a={f.a} idx={i} />)}
        </div>
      </div>
    </section>
  );
};

/* ─── Page ─── */
const CustomSolutions = () => (
  <div>
    <Hero />
    <Benefits />
    <SolutionsGrid />
    <TechStack />
    <StatsBar />
    <Industries />
    <Process />
    <FAQ />
    <CTA />
  </div>
);

export default CustomSolutions;
