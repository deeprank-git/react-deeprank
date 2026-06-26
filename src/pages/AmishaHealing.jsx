import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiArrowRight, HiCheck, HiChevronRight, HiPlay } from "react-icons/hi";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import healing from "../assets/healing.png";
import yogalife from "../assets/yogalife.png";
import aisutilities from "../assets/aisutilities.png";
import exademy from "../assets/exademy.png";
import CTA from "../sections/CTA";
import { useModal } from "../context/ModalContext";

const stats = [
  { label: "Project Type", value: "Healthcare Website" },
  { label: "Location", value: "Mumbai, India" },
  { label: "Duration", value: "4 Months" },
  { label: "Services Used", value: "SEO + Automation + Ads" },
  { label: "Results", value: "250% Growth" },
];

const overviewCards = [
  {
    title: "Overview",
    items: [
      { label: "Business", value: "Amisha Healing Hub" },
      { label: "Industry", value: "Healthcare" },
      { label: "Goal", value: "Generate more patient appointments." },
      { label: "Challenge", value: "Poor online visibility." },
    ],
  },
  {
    title: "Challenges",
    items: [
      "Low appointment bookings",
      "Weak Google ranking",
      "High no-show rate",
      "Manual patient follow-up",
      "No automation",
    ],
  },
  {
    title: "Solution",
    items: [
      "Website redesign",
      "Local SEO",
      "Google Ads",
      "Appointment automation",
      "CRM Integration",
    ],
  },
  {
    title: "Before Working With Us",
    items: [
      { label: "Monthly Leads", value: "30" },
      { label: "Appointments", value: "18" },
      { label: "Google Ranking", value: "Page 4" },
      { label: "Conversion Rate", value: "2.8%" },
    ],
  },
];

const strategySteps = [
  { number: "01", title: "Website Redesign" },
  { number: "02", title: "Google Business Optimization" },
  { number: "03", title: "Local SEO" },
  { number: "04", title: "Google Ads" },
  { number: "05", title: "Appointment Automation" },
  { number: "06", title: "Performance Tracking" },
];

const services = [
  "SEO",
  "Google Ads",
  "Meta Ads",
  "WhatsApp Automation",
  "Appointment System",
  "CRM",
  "Email Automation",
  "Analytics",
];

const checklist = [
  "Website UI/UX Redesign",
  "Mobile Optimization",
  "Google Business Profile",
  "Local SEO",
  "Keyword Research",
  "Google Ads Campaign",
  "Appointment Booking",
  "WhatsApp Automation",
  "CRM Integration",
  "Analytics Dashboard",
];

const results = [
  { label: "Monthly Leads", before: "30", after: "105", delta: "+250%" },
  { label: "Appointments", before: "18", after: "62", delta: "+244%" },
  { label: "Cost Per Lead", before: "₹720", after: "₹290", delta: "-60%" },
  { label: "Patient Enquiries", before: "48", after: "170", delta: "+254%" },
];

const performanceData = [
  { month: "Jan", patients: 18, leads: 30, enquiries: 48 },
  { month: "Feb", patients: 24, leads: 41, enquiries: 62 },
  { month: "Mar", patients: 31, leads: 56, enquiries: 78 },
  { month: "Apr", patients: 42, leads: 72, enquiries: 96 },
  { month: "May", patients: 53, leads: 89, enquiries: 128 },
  { month: "Jun", patients: 62, leads: 105, enquiries: 170 },
];

const relatedCases = [
  {
    image: yogalife,
    category: "Wellness",
    title: "Yogalife Global",
    description: "A premium wellness brand experience that elevated trust and enquiries.",
  },
  {
    image: aisutilities,
    category: "Utilities",
    title: "AIS Utilities",
    description: "Conversion-focused growth system for a modern utility service provider.",
  },
  {
    image: exademy,
    category: "Education",
    title: "Exademy",
    description: "A high-performance learning platform built for product-led growth.",
  },
];

const AmishaHealing = () => {
  const { open } = useModal();

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8 lg:py-8">
          <nav className="flex items-center gap-2 text-sm text-slate-500">
            <Link to="/" className="transition-colors hover:text-[#0B0F9C]">
              Home
            </Link>
            <HiChevronRight className="h-4 w-4" />
            <Link to="/case-study" className="transition-colors hover:text-[#0B0F9C]">
              Case Studies
            </Link>
            <HiChevronRight className="h-4 w-4" />
            <span className="font-semibold text-slate-900">Amisha Healing Hub</span>
          </nav>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-7xl px-6 pb-16 lg:px-8 lg:pb-24"
        >
          <div className="grid items-center gap-12 rounded-[32px] border border-slate-200 bg-[linear-gradient(135deg,#f7faff_0%,#ffffff_55%,#eef4ff_100%)] p-8 shadow-[0_24px_90px_rgba(11,15,156,0.08)] lg:grid-cols-[1.05fr_0.95fr] lg:p-12 xl:p-16">
            <div>
              <span className="mb-4 inline-flex items-center rounded-full border border-[#dbe3ff] bg-[#eef2ff] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0B0F9C]">
                Healthcare Case Study
              </span>
              <h1 className="text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Amisha Healing Hub
              </h1>
              <h2 className="mt-3 text-3xl font-black leading-tight text-[#0B0F9C] sm:text-4xl">
                250% Growth In Patient Appointments
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Helping Amisha Healing Hub automate appointment bookings, improve local SEO,
                increase patient enquiries and reduce no-show appointments using AI-powered
                healthcare automation.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Healthcare",
                  "Local SEO",
                  "AI Automation",
                  "Google Ads",
                  "Lead Generation",
                ].map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-slate-200 bg-white px-3.5 py-2 text-sm font-semibold text-slate-700 shadow-sm"
                  >
                    {pill}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={open}
                  className="inline-flex items-center gap-2 rounded-2xl bg-[#0B0F9C] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0B0F9C]/25 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#080d7f]"
                >
                  Book Discovery Call
                  <HiArrowRight className="h-4 w-4" />
                </button>
                <a
                  href="https://amishahealinghub.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-[#0B0F9C] hover:text-[#0B0F9C]"
                >
                  <HiPlay className="h-4 w-4" />
                  View Live Website
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[560px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-3 shadow-[0_30px_100px_rgba(15,23,42,0.16)]"
              >
                <img
                  src={healing}
                  alt="Amisha Healing Hub healthcare website mockup"
                  className="h-[430px] w-full rounded-[22px] object-cover"
                />
                <div className="absolute bottom-6 left-6 rounded-2xl border border-white/70 bg-white/85 px-4 py-3 shadow-xl backdrop-blur-xl">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Patient Growth
                  </p>
                  <p className="mt-1 text-3xl font-black text-[#0B0F9C]">250%</p>
                  <p className="text-sm font-semibold text-slate-600">Appointments</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8 lg:pb-24">
          <div className="rounded-[28px] bg-[#0B0F9C] p-6 shadow-[0_20px_70px_rgba(11,15,156,0.2)] lg:p-8">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-100">
                    {item.label}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8 lg:pb-24">
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {overviewCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.05)]"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0B0F9C]">
                  {card.title}
                </p>
                {Array.isArray(card.items) && card.items[0]?.label ? (
                  <div className="mt-5 space-y-3">
                    {card.items.map((item) => (
                      <div key={item.label} className="border-b border-slate-100 pb-3 last:border-b-0 last:pb-0">
                        <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                        <p className="mt-1 text-sm leading-6 text-slate-600">{item.value}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="mt-5 space-y-3">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm leading-6 text-slate-600">
                        <HiCheck className="mt-1 h-4 w-4 shrink-0 text-[#0B0F9C]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8 lg:pb-24">
          <div className="mb-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0B0F9C]">
              Our Strategy
            </p>
            <h3 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">
              A focused growth engine for healthcare appointment generation.
            </h3>
          </div>
          <div className="grid gap-4 lg:grid-cols-6">
            {strategySteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-[24px] border border-slate-200 bg-gradient-to-br from-white to-[#f4f7ff] p-5 shadow-[0_12px_40px_rgba(15,23,42,0.04)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0B0F9C] text-sm font-black text-white">
                  {step.number}
                </div>
                <h4 className="mt-5 text-sm font-black text-slate-900">{step.title}</h4>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8 lg:pb-24">
          <div className="mb-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0B0F9C]">
              Services Used
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm"
              >
                {service}
              </span>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8 lg:pb-24">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0B0F9C]">
                What We Did
              </p>
              <h3 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">
                Every growth lever was built for patient acquisition.
              </h3>
              <div className="mt-8 grid gap-3">
                {checklist.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eef2ff] text-[#0B0F9C]">
                      <HiCheck className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-[linear-gradient(135deg,#f8fbff_0%,#ffffff_55%,#eef4ff_100%)] p-5 shadow-[0_22px_80px_rgba(15,23,42,0.08)]">
              <div className="relative rounded-[24px] border border-slate-200 bg-white p-4 shadow-inner">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="mt-4 grid gap-4 xl:grid-cols-[1.2fr_0.45fr]">
                  <div className="overflow-hidden rounded-[20px] border border-slate-200">
                    <img src={healing} alt="Amisha Healing Hub website preview" className="h-72 w-full object-cover" />
                  </div>
                  <div className="space-y-4">
                    <div className="overflow-hidden rounded-[20px] border border-slate-200">
                      <img src={healing} alt="Amisha Healing Hub mobile preview" className="h-32 w-full object-cover" />
                    </div>
                    <div className="rounded-[20px] border border-slate-200 bg-[#0B0F9C] p-4 text-white shadow-lg">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-100">
                        Client Testimonial
                      </p>
                      <p className="mt-3 text-sm leading-7 text-blue-50">
                        “DeepRank transformed our healthcare business. Appointments increased by
                        250% within just four months.”
                      </p>
                      <div className="mt-4">
                        <p className="text-sm font-semibold">Dr. Amisha</p>
                        <p className="text-xs text-blue-200">Founder, Amisha Healing Hub</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8 lg:pb-24">
          <div className="mb-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0B0F9C]">
              Results
            </p>
            <h3 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">
              Performance improved across every critical growth metric.
            </h3>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {results.map((result) => (
              <div key={result.label} className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_14px_42px_rgba(15,23,42,0.05)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                  {result.label}
                </p>
                <div className="mt-5 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-3xl font-black text-slate-950">{result.after}</p>
                    <p className="mt-1 text-sm text-slate-500">from {result.before}</p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-sm font-semibold text-emerald-700">
                    {result.delta}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_60px_rgba(15,23,42,0.05)] lg:p-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0B0F9C]">
                  Performance Chart
                </p>
                <h4 className="mt-2 text-xl font-black text-slate-950">Appointment growth over six months</h4>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#0B0F9C]" /> Patients
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> Leads
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-violet-500" /> Enquiries
                </span>
              </div>
            </div>
            <div className="h-[320px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData} margin={{ top: 8, right: 8, left: -10, bottom: 0 }}>
                  <CartesianGrid stroke="#eef2ff" strokeDasharray="4 4" />
                  <XAxis dataKey="month" tick={{ fill: "#64748b", fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "#64748b", fontSize: 12 }} axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Line type="monotone" dataKey="patients" stroke="#0B0F9C" strokeWidth={3} dot={{ r: 4 }} />
                  <Line type="monotone" dataKey="leads" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} />
                  <Line type="monotone" dataKey="enquiries" stroke="#8b5cf6" strokeWidth={3} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8 lg:pb-24">
          <div className="mb-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0B0F9C]">
              Related Case Studies
            </p>
            <h3 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">
              More stories of ambitious digital growth.
            </h3>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {relatedCases.map((item) => (
              <motion.article
                key={item.title}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_16px_50px_rgba(15,23,42,0.05)]"
              >
                <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
                <div className="p-6">
                  <span className="inline-flex rounded-full bg-[#eef2ff] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0B0F9C]">
                    {item.category}
                  </span>
                  <h4 className="mt-4 text-xl font-black text-slate-950">{item.title}</h4>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                  <a href="#" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0B0F9C]">
                    View Case Study
                    <HiArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8 lg:pb-24">
          <div className="rounded-[32px] bg-[#0B0F9C] p-8 text-white shadow-[0_24px_90px_rgba(11,15,156,0.2)] lg:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-100">
                  Ready To Grow?
                </p>
                <h3 className="mt-3 text-3xl font-black sm:text-4xl">
                  Ready To Grow Your Healthcare Business?
                </h3>
                <p className="mt-4 text-lg leading-8 text-blue-100">
                  Let&apos;s build an AI-powered healthcare system that generates more
                  appointments and improves patient experience.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={open}
                  className="rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-[#0B0F9C] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Book Discovery Call
                </button>
                <a
                  href="/services"
                  className="rounded-2xl border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <CTA />
    </div>
  );
};

export default AmishaHealing;
