import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HiArrowRight, HiChevronLeft, HiChevronRight, HiStar } from "react-icons/hi";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, AreaChart, Area,
} from "recharts";
import CTA from "../sections/CTA";
import hero4 from "../assets/hero4.png";
import hero5 from "../assets/hero5.png";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import healing from "../assets/healing.png";
import yogalife from "../assets/yogalife.png";
import gebeluxe from "../assets/gebeluxe.png";
import handicraft from "../assets/handicraft.png";
import exademy from "../assets/exademy.png";
import drryn from "../assets/drryn.png";
import aisutilities from "../assets/aisutilities.png";
import lumani from "../assets/lumani.png";
import tsamuelestate from "../assets/tsamuelestate.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import TsamuelCaseStudy from "./TsamuelCaseStudy.jsx";
import Yogalife from "./Yogalife.jsx";
import GubeLuxe from "./GubeLuxe.jsx";
import Exademy from "./Exademy.jsx";
import LumaniSystem from "./LumaniSystem.jsx";
import AisUtilities from "./AisUtilities.jsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



/* ── data ── */
const growthData = [
  { m: "Jan", traffic: 1200, leads: 320 },
  { m: "Feb", traffic: 2100, leads: 510 },
  { m: "Mar", traffic: 2800, leads: 720 },
  { m: "Apr", traffic: 3500, leads: 950 },
  { m: "May", traffic: 5200, leads: 1400 },
  { m: "Jun", traffic: 8540, leads: 2300 },
];

const impactData = [
  { m: "Jan", organic: 400, ads: 200, conversions: 180 },
  { m: "Feb", organic: 700, ads: 350, conversions: 310 },
  { m: "Mar", organic: 1100, ads: 500, conversions: 420 },
  { m: "Apr", organic: 1800, ads: 700, conversions: 680 },
  { m: "May", organic: 2900, ads: 1000, conversions: 1100 },
  { m: "Jun", organic: 4600, ads: 1400, conversions: 1900 },
];

const caseStudies = [
  {
    img: healing,
    tag: "Healthcare",
    tagColor: "bg-emerald-100 text-emerald-700",
    stat: "+180%",
    label: "Patient Leads",
    title: "Amisha Healing Hub",
    desc: "AI-powered appointment booking, wellness programs and patient management platform increased qualified enquiries and bookings.",
    link: "/case-study/amisha-healing",
  },

  {
    img: yogalife,
    tag: "Education",
    tagColor: "bg-violet-100 text-violet-700",
    stat: "+120%",
    label: "Organic Traffic",
    title: "Yogalife Global",
    desc: "Online yoga education platform with multilingual courses, memberships and digital learning experience.",
    link: "/case-study/yogalife",
  },

  {
    img: gebeluxe,
    tag: "Hospitality",
    tagColor: "bg-pink-100 text-pink-700",
    stat: "+95%",
    label: "Conversions",
    title: "Gebe Luxe",
    desc: "Luxury furniture and hospitality brand website delivering premium customer experiences and higher conversions.",
    link: "/case-study/gubeluxe",
  },

  {
    img: tsamuelestate,
    tag: "Real Estate",
    tagColor: "bg-blue-100 text-blue-700",
    stat: "+140%",
    label: "Qualified Leads",
    title: "T Samuel Estate",
    desc: "Luxury real estate website helping buyers discover premium properties through AI-powered lead generation.",
    link: "/case-study/tsamuel-estate",
  },

  {
    img: aisutilities,
    tag: "Manufacturing",
    tagColor: "bg-orange-100 text-orange-700",
    stat: "+110%",
    label: "Productivity",
    title: "AIS Utilities",
    desc: "Industrial workflow automation platform improving productivity and reducing manual operational tasks.",
    link: "/case-study/ais-utilities",
  },

  {
    img: lumani,
    tag: "Real Estate",
    tagColor: "bg-blue-100 text-blue-700",
    stat: "+95%",
    label: "Project Enquiries",
    title: "Lumani Systems",
    desc: "Architectural fenestration company website showcasing premium aluminium and glass solutions.",
    link: "/case-study/lumani-systems",
  },

  {
    img: exademy,
    tag: "Education",
    tagColor: "bg-green-100 text-green-700",
    stat: "+150%",
    label: "Student Enrolments",
    title: "Exademy",
    desc: "Modern coaching platform with online admissions, learning management and student engagement features.",
    link: "/case-study/exademy",
  },

  {
    img: drryn,
    tag: "E-Commerce",
    tagColor: "bg-purple-100 text-purple-700",
    stat: "3.1x",
    label: "Revenue Growth",
    title: "DRRYN",
    desc: "Fashion eCommerce platform with seamless shopping, payment integration and inventory management.",
    link: "/case-study/drryn",
  },

  {
    img: handicraft,
    tag: "E-Commerce",
    tagColor: "bg-amber-100 text-amber-700",
    stat: "+170%",
    label: "Online Sales",
    title: "Rewari Handicrafts",
    desc: "Traditional handicrafts marketplace helping artisans sell products globally through a premium online store.",
    link: "/case-study/rewari-handicrafts",
  },
];


const industries = ["All", "Real Estate", "Healthcare", "E-Commerce", "Manufacturing", "Hospitality", "Education", "Finance"];

const realResults = [
  { value: "2,400+", label: "Leads Generated" },
  { value: "30+", label: "Industries Served" },
  { value: "46.30%", label: "Avg. Conversion Lift" },
  { value: "11,200+", label: "Hours Automated" },
  { value: "140+", label: "Campaigns Run" },
  { value: "12.3X", label: "Average ROI" },
];

const testimonials = [
  { name: "James Brown", role: "MD, Estate Agency", quote: "DeepRank team took our business seriously and our strategies drove remarkable results. Our organic leads increased 340% in 6 months.", rating: 5 },
  { name: "Dr. Sarah Mitchell", role: "Director, Health Clinic", quote: "300+ qualified appointments delivered through our campaign. Their strategies are innovative and we've seen a 300% spike in our client revenue.", rating: 5 },
  { name: "Michael Roberts", role: "CEO, AG UK", quote: "Their team's expertise in automation and AI solutions created unprecedented growth. We're incredibly pleased with the productivity.", rating: 5 },
  { name: "Lua Pang", role: "Owner, Luxury Hotels", quote: "DeepRank is so go-to partner for digital growth. They're totally recommended for anyone serious about scaling their hospitality brand.", rating: 5 },
];
const featuredProjects = [
  {
    title: "T Samuel Estate",
    image: tsamuelestate,
    description:
      "Luxury real estate platform with SEO and AI-powered lead generation.",
    stats: [
      { value: "340%", label: "Organic Traffic" },
      { value: "120%", label: "Lead Growth" },
      { value: "85%", label: "Lower CPL" },
    ],
    link: "/case-study/tsamuel-estate",
  },

  {
    title: "Amisha Healing Hub",
    image: healing,
    description:
      "Healthcare website with appointment booking and patient automation.",
    stats: [
      { value: "180%", label: "Patient Leads" },
      { value: "95%", label: "Appointments" },
      { value: "60%", label: "Retention" },
    ],
    link: "/case-study/amisha-healing",
  },

  {
    title: "Yogalife Global",
    image: yogalife,
    description:
      "Online yoga education platform with memberships and courses.",
    stats: [
      { value: "220%", label: "Organic Growth" },
      { value: "140%", label: "Course Sales" },
      { value: "65%", label: "Engagement" },
    ],
    link: "/case-study/yogalife",
  },

  {
    title: "Gebe Luxe",
    image: gebeluxe,
    description:
      "Luxury furniture brand delivering premium online experiences.",
    stats: [
      { value: "95%", label: "Conversions" },
      { value: "140%", label: "Revenue" },
      { value: "70%", label: "Leads" },
    ],
    link: "/case-study/gubeluxe",
  },

  {
    title: "AIS Utilities",
    image: aisutilities,
    description:
      "Industrial workflow automation platform improving operational efficiency.",
    stats: [
      { value: "110%", label: "Efficiency" },
      { value: "55%", label: "Automation" },
      { value: "80%", label: "Accuracy" },
    ],
    link: "/case-study/ais-utilities",
  },

  {
    title: "Lumani Systems",
    image: lumani,
    description:
      "Architectural systems company with premium digital presence.",
    stats: [
      { value: "95%", label: "Enquiries" },
      { value: "130%", label: "Traffic" },
      { value: "72%", label: "Conversions" },
    ],
    link: "/case-study/lumani-systems",
  },

  {
    title: "Exademy",
    image: exademy,
    description:
      "Education platform with admissions and learning management.",
    stats: [
      { value: "150%", label: "Enrollments" },
      { value: "220%", label: "Traffic" },
      { value: "90%", label: "Leads" },
    ],
    link: "/case-study/exademy",
  },

  {
    title: "DRRYN",
    image: drryn,
    description:
      "Premium fashion eCommerce website with seamless shopping experience.",
    stats: [
      { value: "3.1x", label: "Revenue" },
      { value: "175%", label: "Sales" },
      { value: "68%", label: "Returning Users" },
    ],
    link: "/case-study/drryn",
  },

  {
    title: "Rewari Handicrafts",
    image: handicraft,
    description:
      "Traditional handicraft store selling products globally.",
    stats: [
      { value: "170%", label: "Online Sales" },
      { value: "240%", label: "Traffic" },
      { value: "90%", label: "Orders" },
    ],
    link: "/case-study/rewari-handicrafts",
  },
];
/* ── animated counter hook ── */
function useCounter(target, duration = 1800, start = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let current = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setVal(target); clearInterval(timer); }
      else setVal(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [start, target, duration]);
  return val;
}

/* ── scroll-reveal hook ── */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* ── Hero section ── */
const HeroStats = () => {
  const [ref, visible] = useReveal();
  const heroStats = [
    { value: "100+", label: "Solutions Delivered" },
    { value: "20+", label: "Time Saved (Years)" },
    { value: "500+", label: "Campaigns" },
    { value: "Global", label: "Client Reach" },
  ];
  return (
    <section ref={ref} className="bg-white pt-16 pb-10 lg:pt-24 lg:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left */}
          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="inline-block text-[10px] font-bold tracking-widest uppercase bg-blue-50 px-3 py-1.5 rounded-full mb-4">
              Our Impact
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.08] mb-5">
              Results That<br />
              <span>Speak For</span><br />
              Themselves.
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-md">
              Real numbers. Real Impact. Real growth — delivered for businesses across every industry.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {heroStats.map((s, i) => (
                <div
                  key={s.label}
                  className={`bg-gray-50 rounded-2xl p-4 text-center border border-gray-100 transition-all duration-500`}
                  style={{ transitionDelay: `${i * 100}ms`, opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(12px)" }}
                >
                  <p className="text-2xl font-black text-blue-900">{s.value}</p>
                  <p className="text-[11px] text-gray-500 font-medium mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* right — chart card */}
          <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-5">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-bold text-gray-900">Growth Overview</p>
                <span className="text-[11px] text-gray-400 bg-gray-50 px-2.5 py-1 rounded-lg">Last 6 Months</span>
              </div>
              <div className="flex items-baseline gap-3 mb-4">
                <p className="text-4xl font-black text-gray-900">8,540</p>
                <span className="text-sm font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-lg">+23% vs last month</span>
              </div>
              <div className="flex gap-4 mb-3">
                <span className="flex items-center gap-1.5 text-[11px] text-gray-500"><span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />Traffic</span>
                <span className="flex items-center gap-1.5 text-[11px] text-gray-500"><span className="w-2 h-2 rounded-full bg-purple-400 inline-block" />Leads</span>
              </div>
              <ResponsiveContainer width="100%" height={180}>
                <AreaChart data={growthData} margin={{ top: 4, right: 4, left: -30, bottom: 0 }}>
                  <defs>
                    <linearGradient id="tGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="lGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#A78BFA" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#A78BFA" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="m" tick={{ fontSize: 10, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 10, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #E5E7EB" }} />
                  <Area type="monotone" dataKey="traffic" stroke="#3B82F6" strokeWidth={2} fill="url(#tGrad)" dot={false} />
                  <Area type="monotone" dataKey="leads" stroke="#A78BFA" strokeWidth={2} fill="url(#lGrad)" dot={false} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── Featured case study ── */
const FeaturedCase = () => {
  const [ref, visible] = useReveal();
  return (
    <section ref={ref} className="bg-gray-50 py-14">

      <div className="max-w-7xl mx-auto px-6">

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={20}
          slidesPerView={1}
        >

          {featuredProjects.map((project) => (

            <SwiperSlide key={project.title}>

              <div className="bg-gray-900 rounded-[32px] overflow-hidden">

                <div className="grid lg:grid-cols-[1fr_380px]">

                  {/* LEFT */}

                  <div className="p-10 lg:p-14">

                    <span className="inline-flex rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                      Featured Case Study
                    </span>

                    <h2 className="mt-6 text-5xl font-black text-white">
                      {project.title}
                    </h2>

                    <p className="mt-6 max-w-xl text-slate-300 leading-8">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-3 gap-5 mt-10">

                      {project.stats.map((stat) => (

                        <div
                          key={stat.label}
                          className="rounded-2xl border border-white/10 p-5"
                        >
                          <h3 className="text-4xl font-black text-blue-400">
                            {stat.value}
                          </h3>

                          <p className="mt-2 text-xs text-slate-400">
                            {stat.label}
                          </p>

                        </div>

                      ))}

                    </div>

                    <Link
                      to={project.link}
                      className="inline-flex items-center gap-3 mt-10 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white hover:bg-blue-500"
                    >
                      View Full Case Study
                      <HiArrowRight className="w-5 h-5" />
                    </Link>

                  </div>

                  {/* RIGHT */}

                  <div className="relative hidden lg:block">

                    <img
                      src={project.image}
                      className="h-full w-full object-cover"
                      alt={project.title}
                    />

                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-gray-900" />

                  </div>

                </div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
};

/* ── Case studies grid ── */
const CaseGrid = () => {
  const [ref, visible] = useReveal();
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? caseStudies : caseStudies.filter((c) => c.tag === filter);

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div>
            <span className="inline-block text-[10px] font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1.5 rounded-full mb-3">
              AI Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">Client Success Stories</h2>
          </div>
          <button className="self-start sm:self-auto flex items-center gap-2 text-sm font-semibold text-blue-700 border border-blue-200 bg-blue-50 hover:bg-blue-100 px-4 py-2.5 rounded-xl transition-colors whitespace-nowrap">
            View All Cases <HiArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Filter pills */}
        <div className={`flex flex-wrap gap-2 mb-8 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          {industries.map((ind) => (
            <button
              key={ind}
              onClick={() => setFilter(ind)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${filter === ind
                ? "bg-blue-900 text-white border-blue-900"
                : "bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-700"
                }`}
            >
              {ind}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((c, i) => (
            <div
              key={c.title}
              className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer bg-white"
              style={{ transitionDelay: `${i * 60}ms`, opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(16px)" }}
            >
              <div className="relative h-44 overflow-hidden">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                <span className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full ${c.tagColor}`}>{c.tag}</span>
                <div className="absolute bottom-3 left-3">
                  <div className="bg-white rounded-xl px-3 py-1.5 shadow-lg inline-block">
                    <p className="text-xl font-black text-blue-900 leading-none">{c.stat}</p>
                    <p className="text-[9px] text-gray-500 font-medium">{c.label}</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-gray-900 leading-snug mb-1.5">{c.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-3">{c.desc}</p>
                {/* <button className="flex items-center gap-1 text-blue-700 font-semibold text-xs hover:gap-2.5 transition-all">
                  View Case Study <HiArrowRight className="w-3.5 h-3.5" />
                </button> */}
                <Link
                  to={c.link}
                  className="inline-flex items-center gap-1 text-blue-700 font-semibold text-xs hover:gap-2.5 transition-all"
                >
                  View Case Study
                  <HiArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Impact analytics dark section ── */
const ImpactSection = () => {
  const [ref, visible] = useReveal();
  return (
    <section ref={ref} className="bg-gray-950 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-[420px_1fr] gap-12 items-center">
          {/* left */}
          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <span className="inline-block text-[10px] font-bold tracking-widest text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full mb-4">
              Data-Driven Growth
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
              See The Impact<br />That Drives Growth
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Every strategy we deploy is tracked, measured, and optimised for maximum performance across traffic, leads, and revenue.
            </p>
            <div className="flex flex-col gap-3">
              {[
                { label: "Traffic", pct: 85, color: "bg-blue-500" },
                { label: "Organic", pct: 72, color: "bg-purple-500" },
                { label: "Advertising", pct: 60, color: "bg-cyan-500" },
                { label: "Conversions & Revenue", pct: 90, color: "bg-green-500" },
              ].map((item, i) => (
                <div key={item.label} className="flex items-center gap-3">
                  <p className="text-xs text-gray-400 w-40 shrink-0">{item.label}</p>
                  <div className="flex-1 bg-white/10 rounded-full h-1.5 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.color} transition-all duration-1000`}
                      style={{ width: visible ? `${item.pct}%` : "0%", transitionDelay: `${i * 150}ms` }}
                    />
                  </div>
                  <p className="text-xs font-bold text-white w-8 text-right">{item.pct}%</p>
                </div>
              ))}
            </div>
          </div>

          {/* right — chart */}
          <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="flex items-center gap-4 mb-4 flex-wrap">
                {[{ color: "#3B82F6", label: "Organic" }, { color: "#A78BFA", label: "Ads" }, { color: "#34D399", label: "Conversions" }].map((l) => (
                  <span key={l.label} className="flex items-center gap-1.5 text-[11px] text-gray-400">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: l.color }} />{l.label}
                  </span>
                ))}
              </div>
              <ResponsiveContainer width="100%" height={240}>
                <LineChart data={impactData} margin={{ top: 4, right: 4, left: -28, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.07)" />
                  <XAxis dataKey="m" tick={{ fontSize: 10, fill: "#6B7280" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 10, fill: "#6B7280" }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ fontSize: 11, borderRadius: 8, backgroundColor: "#1F2937", border: "none", color: "#F9FAFB" }} />
                  <Line type="monotone" dataKey="organic" stroke="#3B82F6" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="ads" stroke="#A78BFA" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="conversions" stroke="#34D399" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── Industry filter section ── */
const IndustrySection = () => {
  const [ref, visible] = useReveal();
  const [active, setActive] = useState("All");

  const industryCards = [
    {
      label: "All",
      img: tsamuelestate,
      count: "9 Projects",
    },
    {
      label: "Real Estate",
      img: tsamuelestate,
      count: "2 Projects",
    },
    {
      label: "Healthcare",
      img: healing,
      count: "1 Project",
    },
    {
      label: "Education",
      img: exademy,
      count: "2 Projects",
    },
    {
      label: "Manufacturing",
      img: aisutilities,
      count: "1 Project",
    },
    {
      label: "Hospitality",
      img: gebeluxe,
      count: "1 Project",
    },
    {
      label: "E-Commerce",
      img: handicraft,
      count: "2 Projects",
    },
  ];
  return (
    <section ref={ref} className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div
          className={`text-center mb-12 transition-all duration-700 ${visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
            }`}
        >
          <span className="inline-flex px-5 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold tracking-[0.25em] uppercase">
            By Industry
          </span>

          <h2 className="mt-5 text-5xl font-bold text-gray-900">
            Explore Case Studies
          </h2>

          <p className="mt-4 text-gray-500 text-lg">
            Discover projects across multiple industries.
          </p>
        </div>

        {/* Tabs */}

        <div className="flex justify-center flex-wrap gap-3 mb-12">

          {industryCards.map((item) => (

            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              className={`px-6 py-3 rounded-full border transition-all duration-300 text-sm font-semibold

              ${active === item.label
                  ? "bg-[#0B0F9C] text-white border-[#0B0F9C]"
                  : "bg-white border-gray-200 hover:border-[#0B0F9C] hover:text-[#0B0F9C]"
                }`}
            >
              {item.label}
            </button>

          ))}

        </div>

        {/* Cards */}

        {/* Industry Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">

          {industryCards
            .filter((item) => {
              if (item.label === "All") return false;
              return active === "All" || active === item.label;
            })
            .map((item, index) => (

              <div
                key={item.label}
                onClick={() => setActive(item.label)}
                className={`group cursor-pointer rounded-3xl overflow-hidden border bg-white shadow-sm transition-all duration-300
        ${active === item.label
                    ? "border-[#0B0F9C] shadow-xl"
                    : "border-slate-200 hover:-translate-y-1 hover:shadow-lg"
                  }`}
              >
                <div className="relative h-40">

                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  <div className="absolute bottom-4 left-4">

                    <h3 className="text-white text-base font-bold">
                      {item.label}
                    </h3>

                    <p className="text-white/80 text-xs mt-1">
                      {item.count}
                    </p>

                  </div>

                </div>

              </div>

            ))}


        </div>

      </div>

    </section>
  );
};

/* ── Real results stats bar ── */
const StatsBar = () => {
  const [ref, visible] = useReveal();
  return (
    <section ref={ref} className="bg-blue-900 py-10">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <p className={`text-center text-xs font-bold tracking-widest uppercase text-blue-300 mb-6 transition-all duration-500 ${visible ? "opacity-100" : "opacity-0"}`}>
          Real Results. Real Impact.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {realResults.map((s, i) => (
            <div
              key={s.label}
              className="text-center"
              style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(12px)", transition: `opacity .6s ${i * 100}ms, transform .6s ${i * 100}ms` }}
            >
              <p className="text-2xl sm:text-3xl font-black text-white mb-1">{s.value}</p>
              <p className="text-xs text-blue-300 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Testimonials ── */
const Testimonials = () => {
  const [ref, visible] = useReveal();
  const [idx, setIdx] = useState(0);
  const perPage = 2;
  const pages = Math.ceil(testimonials.length / perPage);
  const visible2 = testimonials.slice(idx * perPage, idx * perPage + perPage);

  return (
    <section ref={ref} className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div>
            <span className="inline-block text-[10px] font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1.5 rounded-full mb-3">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">What Our Clients Say</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIdx((v) => Math.max(0, v - 1))}
              disabled={idx === 0}
              className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 disabled:opacity-30 transition"
            >
              <HiChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIdx((v) => Math.min(pages - 1, v + 1))}
              disabled={idx === pages - 1}
              className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 disabled:opacity-30 transition"
            >
              <HiChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {visible2.map((t, i) => (
            <div
              key={t.name}
              className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:shadow-lg transition-all duration-300"
              style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(16px)", transition: `opacity .6s ${i * 120}ms, transform .6s ${i * 120}ms` }}
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <HiStar key={j} className="w-4 h-4 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`rounded-full transition-all ${i === idx ? "w-6 h-2 bg-blue-600" : "w-2 h-2 bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Page ── */
const CaseStudy = () => (
  <div>
    <HeroStats />
    <FeaturedCase />
    <CaseGrid />
    <ImpactSection />
    <IndustrySection />
    <StatsBar />
    <Testimonials />
    <CTA />
  </div>
);

export default CaseStudy;
