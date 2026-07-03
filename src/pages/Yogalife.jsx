import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiCheckCircle,
  HiXCircle,
  HiArrowRight,
  HiChevronRight,
  HiClipboardList,
  HiUsers,
  HiGlobeAlt,
  HiCurrencyDollar,
  HiChartBar,
} from "react-icons/hi";
import {
  HiOutlineClipboardList,
  HiOutlineExclamationCircle,
  HiOutlineLightBulb,
  HiOutlineCog,
  HiOutlineChartSquareBar,
  HiOutlineChatAlt2,
} from "react-icons/hi";
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import yogalife from "../assets/yogalife.png";
import aisutilities from "../assets/aisutilities.png";
import exademy from "../assets/exademy.png";
import CTA from "../sections/CTA";
import { useModal } from "../context/ModalContext";

/* ── chart data ── */
const trafficData = [
  { m: "Jan", value: 3500 },
  { m: "Feb", value: 4200 },
  { m: "Mar", value: 5100 },
  { m: "Apr", value: 6100 },
  { m: "May", value: 7000 },
  { m: "Jun", value: 7700 },
];

const beforeData = [
  { value: 10 }, { value: 8 }, { value: 11 }, { value: 10 },
  { value: 13 }, { value: 17 }, { value: 12 }, { value: 21 },
  { value: 18 }, { value: 20 }, { value: 15 }, { value: 22 },
  { value: 27 },
];

const leadsData = [
  { m: "Jan", value: 40 },
  { m: "Feb", value: 60 },
  { m: "Mar", value: 85 },
  { m: "Apr", value: 110 },
  { m: "May", value: 135 },
  { m: "Jun", value: 160 },
];

const cplData = [
  { m: "Jan", value: 48 },
  { m: "Feb", value: 42 },
  { m: "Mar", value: 38 },
  { m: "Apr", value: 28 },
  { m: "May", value: 22 },
  { m: "Jun", value: 18 },
];

const incomeData = [
  { m: "Jan", value: 4.8 },
  { m: "Feb", value: 6.2 },
  { m: "Mar", value: 9.1 },
  { m: "Apr", value: 11.6 },
  { m: "May", value: 14.2 },
  { m: "Jun", value: 18 },
];

const performanceData = [
  { m: "Jan", organic: 3500, leads: 40, members: 25 },
  { m: "Feb", organic: 4200, leads: 60, members: 38 },
  { m: "Mar", organic: 5100, leads: 85, members: 55 },
  { m: "Apr", organic: 6100, leads: 110, members: 72 },
  { m: "May", organic: 7000, leads: 135, members: 90 },
  { m: "Jun", organic: 7700, leads: 160, members: 110 },
];

const menu = [
  { id: "overview", title: "Overview", icon: HiOutlineClipboardList },
  { id: "challenge", title: "Challenge", icon: HiOutlineExclamationCircle },
  { id: "strategy", title: "Our Strategy", icon: HiOutlineLightBulb },
  { id: "work", title: "What We Did", icon: HiOutlineCog },
  { id: "results", title: "Results", icon: HiOutlineChartSquareBar },
  { id: "testimonial", title: "Testimonial", icon: HiOutlineChatAlt2 },
];

const relatedCases = [
  {
    img: yogalife,
    tag: "Wellness",
    title: "Yogalife Global",
    stat: "+120%",
    label: "Membership Growth",
    desc: "Redesigned LMS and automation grew memberships.",
  },
  {
    img: aisutilities,
    tag: "Utilities",
    title: "AIS Utilities",
    stat: "+180%",
    label: "Conversion",
    desc: "Conversion-focused growth for modern utility providers.",
  },
  {
    img: exademy,
    tag: "Education",
    title: "Exademy",
    stat: "+250%",
    label: "Course Sales",
    desc: "High-performance learning platform built for growth.",
  },
];

/* ── mini metric chart ── */
const MetricChart = ({ data, color, gradient }) => (
  <ResponsiveContainer width="100%" height={80}>
    <AreaChart data={data} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
      <defs>
        <linearGradient id={gradient} x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor={color} stopOpacity={0.3} />
          <stop offset="95%" stopColor={color} stopOpacity={0} />
        </linearGradient>
      </defs>
      <Area
        type="monotone"
        dataKey="value"
        stroke={color}
        strokeWidth={2}
        fill={`url(#${gradient})`}
        dot={false}
      />
    </AreaChart>
  </ResponsiveContainer>
);

/* ── page component ── */
const Yogalife = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const { open } = useModal();

  return (
    <div className="bg-white text-slate-900">
      {/* breadcrumb */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-6 pb-2">
        <nav className="flex items-center gap-1.5 text-xs text-gray-500">
          <Link to="/" className="hover:text-blue-700 transition-colors">
            DeepRank
          </Link>
          <HiChevronRight className="w-3.5 h-3.5" />
          <Link to="/case-study" className="hover:text-blue-700 transition-colors">
            Case Studies
          </Link>
          <HiChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-900 font-semibold">Yogalife Global</span>
        </nav>
      </div>

      {/* hero */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-10 lg:py-14">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-green-700 bg-green-50 border border-green-200 px-3 py-1.5 rounded-full mb-4 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />{" "}
              Success Story
            </span>
            <h1 className="text-4xl lg:text-5xl font-black leading-[1.08] text-gray-900 mb-3">
              Yogalife Global
            </h1>
            <h2 className="text-3xl lg:text-4xl font-black text-blue-700 leading-tight mb-5">
              120% Growth In
              <br />
              Organic Traffic
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-6 max-w-lg">
              Redesigned their LMS, automated enrolments and scaled memberships
              through SEO and automation.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["SEO", "LMS", "Membership", "Automation"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <button
              onClick={open}
              className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white px-7 py-3.5 rounded-2xl font-semibold text-sm transition-all shadow-lg shadow-blue-900/25"
            >
              Book Discovery Call <HiArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={yogalife}
                alt="Yogalife"
                className="w-full  object-contain bg-white p-4"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 min-w-[170px]">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                Business Growth
              </p>
              <p className="text-4xl font-black text-blue-700">+120%</p>
              <p className="text-xs font-semibold text-gray-600 mt-0.5">
                Organic Traffic
              </p>
              <div className="flex items-center gap-1 mt-2">
                <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                <span className="text-[10px] text-green-600 font-semibold">
                  Active Campaign
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* info bar */}
      <section className="pb-8 pt-5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-[30px] bg-[#03045e] overflow-hidden shadow-[0_30px_80px_rgba(7,23,95,.25)]">
            <div className="grid lg:grid-cols-5">
              {[
                { title: "Industry", value: "Yoga Education" },
                { title: "Location", value: "Global" },
                { title: "Duration", value: "5 Months" },
                { title: "Services", value: "SEO + LMS + Marketing" },
                { title: "Results", value: "+120% Organic Traffic" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="py-4 px-4 text-center border-r border-white/10 last:border-r-0"
                >
                  <p className="uppercase tracking-[0.25em] text-[11px] text-blue-200">
                    {item.title}
                  </p>
                  <h3 className="mt-3 text-lg font-bold text-white">
                    {item.value}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-[280px_1fr] gap-10 items-start">
          
          {/* Sticky Sidebar Navigation */}
          <div className="sticky top-28 hidden lg:block">
            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-4">
              {menu.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      document.getElementById(item.id)?.scrollIntoView({
                        behavior: "smooth",
                      });
                      setActiveTab(item.title);
                    }}
                    className={`w-full flex items-center gap-3 rounded-2xl px-4 py-3 mb-2 transition-all duration-300 ${
                      activeTab === item.title
                        ? "bg-blue-50 text-[#0B0F9C]"
                        : "hover:bg-slate-50 text-slate-700"
                    }`}
                  >
                    <Icon className="text-xl" />
                    <span className="font-semibold text-sm">{item.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-16">
            
            {/* Overview / About Section */}
            <section id="overview" className="grid md:grid-cols-2 gap-6">
              <div className="rounded-[28px] border border-slate-200 bg-white p-7">
                <p className="text-blue-700 text-xs font-bold uppercase tracking-widest">
                  About The Client
                </p>
                <h3 className="mt-4 text-3xl font-bold">Yogalife Global</h3>
                <p className="mt-5 text-slate-600 leading-8">
                  Yogalife Global is an online yoga education platform providing
                  certifications, memberships and wellness programs worldwide.
                  DeepRank redesigned the platform and implemented SEO, marketing
                  automation and LMS integration.
                </p>
              </div>

              {/* Before Block */}
              <div className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  Before Working With Us
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: HiGlobeAlt, label: "Monthly Traffic", value: "3,500" },
                    { icon: HiUsers, label: "Students / Month", value: "40" },
                    { icon: HiCurrencyDollar, label: "Cost Per Lead", value: "$18.20" },
                    { icon: HiChartBar, label: "Keywords Top 10", value: "15" },
                  ].map((stat, i) => {
                    const StatIcon = stat.icon;
                    return (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center">
                            <StatIcon className="text-[#0B0F9C] text-lg" />
                          </div>
                          <span className="text-slate-500 text-sm">{stat.label}</span>
                        </div>
                        <span className="text-xl font-bold">{stat.value}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-6 h-20">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={beforeData}>
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#ef4444"
                        strokeWidth={2.5}
                        dot={{ r: 2, fill: "#ef4444" }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </section>

            {/* Challenge Section */}
            <section id="challenge" className="rounded-[28px] border border-slate-200 bg-white p-7">
              <p className="text-blue-700 text-xs font-bold uppercase tracking-widest">
                The Challenge
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {[
                  "Low organic visibility",
                  "Poor keyword rankings",
                  "Low student enquiries",
                  "No membership automation",
                  "Weak conversion rate",
                ].map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <HiXCircle className="text-red-500 w-5 h-5 mt-0.5 shrink-0" />
                    <p className="text-slate-600 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Strategy Section */}
            <section id="strategy" className="pt-4">
              <div className="mb-6">
                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-2">
                  Our Strategy
                </p>
                <h3 className="text-2xl font-black text-gray-900">
                  Strategy focused on membership growth and automation.
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 xl:grid-cols-5 gap-4 mb-8">
                {[
                  { n: "01", title: "LMS & UX", desc: "Redesigned course experience and membership flows." },
                  { n: "02", title: "SEO & Content", desc: "Targeted course keywords and content to capture students." },
                  { n: "03", title: "Membership Portal", desc: "Subscription flows and gated content." },
                  { n: "04", title: "Automation", desc: "Automated enrolments, emails and CRM sync." },
                  { n: "05", title: "Analytics", desc: "Dashboards to measure student LTV and acquisition." },
                ].map((step) => (
                  <div key={step.n} className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                    <span className="text-3xl font-black text-blue-100">{step.n}</span>
                    <h4 className="text-sm font-black text-gray-900 mt-1 mb-1">{step.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-4">
                  Services Used
                </p>
                <div className="flex flex-wrap gap-2">
                  {["SEO", "LMS", "Automation", "Content", "CRO"].map((s) => (
                    <span key={s} className="text-xs font-semibold text-gray-700 bg-white border border-gray-200 px-4 py-2 rounded-xl shadow-sm">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* What We Did Section */}
            <section id="work" className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-2">
                  What We Did
                </p>
                <h3 className="text-2xl font-black text-gray-900 mb-5">
                  Full scope to increase enrolments and memberships.
                </h3>
                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                  {[
                    "LMS Implementation", "Course Structure", "SEO & Content",
                    "Membership Flows", "Email Automation", "CRO",
                    "Analytics", "Paid Ads",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                      <HiCheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-900 rounded-3xl p-6 text-white">
                <p className="text-4xl text-blue-400 font-black leading-none mb-2">"</p>
                <p className="text-sm leading-relaxed text-blue-100 mb-5">
                  DeepRank transformed our online academy — enrolments, memberships and organic traffic all grew significantly.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-700 flex items-center justify-center text-white font-black text-xs">
                    YG
                  </div>
                  <div>
                    <p className="text-xs font-bold">Yogalife Founder</p>
                    <p className="text-[11px] text-blue-300">Founder, Yogalife Global</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Results Component */}
            <section id="results" className="pt-4">
              <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-2">
                The Results
              </p>
              <h3 className="text-2xl font-black text-gray-900 mb-8">
                Consistent growth across all key metrics.
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Organic Traffic", before: "3.5K", after: "7.7K", delta: "+120%", color: "#3B82F6", grad: "og", data: trafficData, positive: true },
                  { label: "Course Sales", before: "40", after: "160", delta: "+300%", color: "#8B5CF6", grad: "le", data: leadsData, positive: true },
                  { label: "Memberships", before: "25", after: "110", delta: "+340%", color: "#10B981", grad: "cp", data: cplData, positive: true },
                  { label: "Revenue", before: "$4.8K", after: "$18K", delta: "+275%", color: "#F59E0B", grad: "ic", data: incomeData, positive: true },
                ].map((m) => (
                  <div key={m.label} className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                      {m.label}
                    </p>
                    <div className="flex items-end justify-between mb-1">
                      <p className="text-2xl font-black text-gray-900">{m.after}</p>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-lg ${m.positive ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
                        {m.delta}
                      </span>
                    </div>
                    <p className="text-[10px] text-gray-400 mb-2">was {m.before}</p>
                    <MetricChart data={m.data} color={m.color} gradient={m.grad} />
                  </div>
                ))}
              </div>

              {/* Performance Summary Line Chart */}
              <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-black text-gray-900">Performance Over Time</p>
                  <span className="text-[10px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded-lg">Jan – Jun 2025</span>
                </div>
                <p className="text-[11px] text-gray-400 mb-4">
                  Growth month-over-month across organic, leads and members
                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  {[
                    { color: "#3B82F6", label: "Organic Traffic" },
                    { color: "#8B5CF6", label: "Leads" },
                    { color: "#10B981", label: "Members" },
                  ].map((l) => (
                    <span key={l.label} className="flex items-center gap-1.5 text-[11px] text-gray-500">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: l.color }} />
                      {l.label}
                    </span>
                  ))}
                </div>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={performanceData} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
                    <XAxis dataKey="m" tick={{ fontSize: 10, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 10, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #E5E7EB" }} />
                    <Line type="monotone" dataKey="organic" stroke="#3B82F6" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="leads" stroke="#8B5CF6" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="members" stroke="#10B981" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </section>

            {/* Related Case Studies */}
            <section id="testimonial" className="pt-4">
              <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-2">
                Related Case Studies
              </p>
              <h3 className="text-xl font-black text-gray-900 mb-6">More Success Stories</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {relatedCases.map((c) => (
                  <div key={c.title} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                    <div className="relative h-36 overflow-hidden bg-slate-100">
                      <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
                      <span className="absolute top-2 left-2 text-[9px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                        {c.tag}
                      </span>
                    </div>
                    <div className="p-4">
                      <h4 className="text-xs font-bold text-gray-900 mb-1">{c.title}</h4>
                      <p className="text-gray-500 text-[11px] leading-relaxed mb-3">{c.desc}</p>
                      <button className="flex items-center gap-1 text-blue-700 font-semibold text-xs hover:gap-2 transition-all">
                        View Case Study <HiArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>

        {/* Footer Banner Call To Action */}
        <div className="bg-blue-900 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-8 justify-between mt-16">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-blue-800 flex items-center justify-center shrink-0 text-2xl">
              🧘
            </div>
            <div>
              <p className="text-white font-black text-xl lg:text-2xl leading-tight">
                Want Similar Results For Your Business?
              </p>
              <p className="text-blue-300 text-xs mt-1">Let's build your success story.</p>
            </div>
          </div>
          <button
            onClick={open}
            className="shrink-0 flex items-center gap-2 bg-white text-blue-900 hover:bg-blue-50 px-6 py-3.5 rounded-2xl font-black text-xs transition-all shadow-xl whitespace-nowrap"
          >
            Book Discovery Call <HiArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <CTA />
    </div>
  );
};

export default Yogalife;