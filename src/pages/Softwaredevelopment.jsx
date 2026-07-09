import React, { useState } from "react";
import { useModal } from "../context/ModalContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../sections/CTA";
import chatbot from "../assets/chatbot.png";
import  knowledge from "../assets/knowledge.png";
import workflow from "../assets/workflow.png";
import { HiCheck } from "react-icons/hi";
import Process from "../sections/Process";
import {
  HiArrowRight,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineDeviceMobile,
  HiOutlineDesktopComputer,
  HiOutlineServer,
  HiOutlineDatabase,
  HiOutlineCloud,
  HiOutlineSparkles,
  HiOutlineLightBulb,
} from "react-icons/hi";

const featureCards = [
  {
    title: "Business Focused Solutions",
    description:
      "Build software that solves your key business challenges with clarity and precision.",
    icon: <HiOutlineChartBar className="w-6 h-6 text-white" />,
  },
  {
    title: "Scalable Architecture",
    description:
      "Modern systems designed to grow with your business and handle future demand.",
    icon: <HiOutlineServer className="w-6 h-6 text-white" />,
  },
  {
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security, uptime focus, and resilient infrastructure by design.",
    icon: <HiOutlineShieldCheck className="w-6 h-6 text-white" />,
  },
  {
    title: "Agile Development",
    description:
      "Fast, transparent delivery cycles that keep strategy, design and development aligned.",
    icon: <HiOutlineSparkles className="w-6 h-6 text-white" />,
  },
];

const services = [
  {
    title: "Custom Software Development",
    points: [
      "Tailored workflows and automation",
      "End-to-end product architecture",
      "Cloud-native engineering",
      "Cross-platform solutions",
    ],
    icon: <HiOutlineLightBulb className="w-6 h-6 text-[#0B0F9C]" />,
  },
  {
    title: "Web Application Development",
    points: [
      "Progressive web apps",
      "Responsive UX for every device",
      "SaaS and portal builds",
      "Secure front-end integrations",
    ],
    icon: <HiOutlineDesktopComputer className="w-6 h-6 text-[#0B0F9C]" />,
  },
  {
    title: "Mobile App Development",
    points: [
      "Native and hybrid apps",
      "Modern UI patterns",
      "Performance-first development",
      "App store readiness",
    ],
    icon: <HiOutlineDeviceMobile className="w-6 h-6 text-[#0B0F9C]" />,
  },
  {
    title: "Enterprise Software Solutions",
    points: [
      "Custom ERP and CRM systems",
      "Secure role-based access",
      "Legacy modernization",
      "Business process automation",
    ],
    icon: <HiOutlineShieldCheck className="w-6 h-6 text-[#0B0F9C]" />,
  },
  {
    title: "SaaS Product Development",
    points: [
      "Subscription-ready platforms",
      "User onboarding flows",
      "Analytics and insights",
      "Scalable subscription models",
    ],
    icon: <HiOutlineSparkles className="w-6 h-6 text-[#0B0F9C]" />,
  },
  {
    title: "API & System Integrations",
    points: [
      "REST, GraphQL and webhooks",
      "Third-party service orchestration",
      "Data synchronization",
      "High-performance APIs",
    ],
    icon: <HiOutlineCloud className="w-6 h-6 text-[#0B0F9C]" />,
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Angular", "Vue"],
  },
  {
    category: "Backend",
    items: ["Node.js", ".NET", "PHP", "Python"],
  },
  {
    category: "Database",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Cloud",
    items: ["AWS", "Azure", "Firebase"],
  },
];

const stats = [
  {
    icon: "🚀",
    value: "100+",
    label: "Projects Delivered",
  },
  {
    icon: "🎯",
    value: "98%",
    label: "Client Satisfaction",
  },
  {
    icon: "⚡",
    value: "40%",
    label: "Faster Delivery",
  },
  {
    icon: "📈",
    value: "60%",
    label: "Reduced Manual Work",
  },
  {
    icon: "🛡️",
    value: "99.9%",
    label: "System Reliability",
  },
];

const projects = [
  {
    industry: "E-Commerce",
    title: "E-Commerce Platform",
    image: chatbot,
    metrics: [
      "320% Revenue Growth",
      "240% Increase In Orders",
      "2.8x Faster Checkout",
    ],
  },

  {
    industry: "Healthcare",
    title: "Healthcare Portal",
    image: knowledge,
    metrics: [
      "50K+ Active Patients",
      "60% Faster Operations",
      "99.9% Uptime",
    ],
  },

  {
    industry: "Enterprise",
    title: "CRM Automation System",
    image: workflow,
    metrics: [
      "40% Productivity Increase",
      "70% Less Manual Work",
      "200K+ Records Managed",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "Understand goals, users and technical needs.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Define architecture, roadmap, and growth plan.",
  },
  {
    step: "03",
    title: "Design",
    description: "Craft polished interfaces with intuitive workflows.",
  },
  {
    step: "04",
    title: "Development",
    description: "Build reliable software with clean, maintainable code.",
  },
  {
    step: "05",
    title: "Testing",
    description: "Validate performance, security and user experience.",
  },
  {
    step: "06",
    title: "Deployment & Support",
    description: "Launch confidently and scale with ongoing care.",
  },
];

const faqItems = [
  {
    question: "How long does software development take?",
    answer:
      "Most engagements begin with a clear scope and timeline. Typical projects range from 8 to 24 weeks depending on complexity and enterprise requirements.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes. We offer ongoing support, maintenance and roadmap planning so your product stays secure, stable and future-ready.",
  },
  {
    question: "Can you modernize existing software?",
    answer:
      "Absolutely. We modernize legacy systems to improve performance, security and user experience while preserving critical business data.",
  },
  {
    question: "How much does custom software cost?",
    answer:
      "Cost depends on scope, integrations and technical complexity. We start with discovery to deliver a precise proposal aligned to your goals.",
  },
];

const SoftwareDevelopment = () => {
  const { open } = useModal();
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <div className="bg-white text-slate-900">
      <main className="max-w-[1700px] mx-auto px-10">
        <section className="pt-16 pb-24">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* LEFT CONTENT */}
            <div>
              <span className="inline-flex px-5 py-2 rounded-full bg-[#EEF2FF] text-[#0B0F9C] text-sm font-semibold tracking-widest uppercase">
                SOFTWARE DEVELOPMENT
              </span>

              <h1 className="mt-8 text-6xl xl:text-7xl font-bold leading-[1.05] text-slate-900">
                Software Built
                <br />
                For Your Business.
                <br />
                <span className="text-[#0B0F9C]">
                  Solutions Built To Scale.
                </span>
              </h1>

              <p className="mt-8 text-xl text-slate-600 max-w-2xl leading-9">
                Custom software development solutions that streamline
                operations, automate workflows and accelerate business growth.
              </p>

              <div className="flex gap-5 mt-10">
                <button
                  onClick={open}
                  className="bg-[#0B0F9C] text-white px-8 py-4 rounded-2xl font-semibold shadow-xl"
                >
                  Book Discovery Call
                </button>

                <button className="border border-slate-300 px-8 py-4 rounded-2xl font-semibold text-[#0B0F9C]">
                  View Projects
                </button>
              </div>

              <div className="flex items-center gap-4 mt-10">
                <div className="flex -space-x-3">
                  <img
                    src="https://i.pravatar.cc/50?img=1"
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://i.pravatar.cc/50?img=2"
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://i.pravatar.cc/50?img=3"
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://i.pravatar.cc/50?img=4"
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                </div>

                <p className="text-slate-600">
                  Trusted by 500+ businesses worldwide
                </p>
              </div>
            </div>

            {/* RIGHT DASHBOARD */}
            <div className="relative">
              <div className="bg-white rounded-[32px] border border-slate-200 p-6 shadow-xl">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-3xl font-bold">Performance Overview</h3>

                  <div className="border px-4 py-2 rounded-xl text-sm">
                    Last 30 Days
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="bg-slate-50 rounded-2xl p-4">
                    <p className="text-xs uppercase tracking-widest text-slate-500">
                      Revenue
                    </p>
                    <h4 className="text-2xl font-bold mt-2">$833K</h4>
                    <p className="text-green-500 mt-2">+41%</p>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-4">
                    <p className="text-xs uppercase tracking-widest text-slate-500">
                      Users
                    </p>
                    <h4 className="text-2xl font-bold mt-2">124K</h4>
                    <p className="text-green-500 mt-2">+24%</p>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-4">
                    <p className="text-xs uppercase tracking-widest text-slate-500">
                      Projects
                    </p>
                    <h4 className="text-2xl font-bold mt-2">100+</h4>
                    <p className="text-green-500 mt-2">+18%</p>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-4">
                    <p className="text-xs uppercase tracking-widest text-slate-500">
                      Satisfaction
                    </p>
                    <h4 className="text-2xl font-bold mt-2">98%</h4>
                    <p className="text-green-500 mt-2">+12%</p>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-3xl p-6 h-[350px] relative overflow-hidden">
                  <div className="absolute left-0 right-0 top-20 border-t border-slate-200"></div>
                  <div className="absolute left-0 right-0 top-40 border-t border-slate-200"></div>
                  <div className="absolute left-0 right-0 top-60 border-t border-slate-200"></div>

                  <svg
                    viewBox="0 0 700 300"
                    className="absolute inset-0 w-full h-full"
                  >
                    <path
                      d="M40 250 C100 180 150 120 220 150 C300 190 350 60 450 80 C520 100 600 40 660 20"
                      fill="none"
                      stroke="#0B0F9C"
                      strokeWidth="5"
                    />
                  </svg>
                </div>
              </div>

              {/* Floating Cards */}

              <div className="absolute -right-10 top-20 bg-white rounded-3xl shadow-2xl p-5 border">
                <p className="text-xs tracking-widest text-slate-500 uppercase">
                  Projects
                </p>
                <h3 className="text-3xl font-bold mt-2">100+</h3>
              </div>

              <div className="absolute -right-10 bottom-20 bg-white rounded-3xl shadow-2xl p-5 border">
                <p className="text-xs tracking-widest text-slate-500 uppercase">
                  Retention
                </p>
                <h3 className="text-3xl font-bold mt-2">98%</h3>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white rounded-[32px] shadow-sm border border-slate-200 p-8">
              <div className="grid lg:grid-cols-5 gap-8 items-center">
                {/* Left Content */}
                <div>
                  <p className="text-[#0B0F9C] text-xs font-bold uppercase tracking-[0.2em]">
                    WHY CHOOSE DEEPRANK
                  </p>

                  <h3 className="text-2xl font-bold mt-3">
                    We Build Scalable, secure and Future-Ready Software
                    Solutions.
                  </h3>

                  {/* <p className="text-slate-500 mt-3 text-sm">
            Scalable, secure and business-focused development solutions.
          </p> */}
                </div>

                {/* Business Focused */}
                <div className="text-center lg:border-l border-slate-200">
                  <div className="text-4xl mb-2">🚀</div>

                  <h3 className="text-xl font-bold">Business Focused</h3>

                  <p className="text-slate-500 text-sm mt-2">
                    We build solutions that solve real bussiness problems.
                  </p>
                </div>

                {/* Scalable */}
                <div className="text-center lg:border-l border-slate-200">
                  <div className="text-4xl mb-2">⚡</div>

                  <h3 className="text-xl font-bold">Scalable Architecture</h3>

                  <p className="text-slate-500 text-sm mt-2">
                    Our solutions grow with your business.
                  </p>
                </div>

                {/* Secure */}
                <div className="text-center lg:border-l border-slate-200">
                  <div className="text-4xl mb-2">🔒</div>

                  <h3 className="text-xl font-bold">Secure & Reliable</h3>

                  <p className="text-slate-500 text-sm mt-2">
                    Enterprise-grade security and performance.
                  </p>
                </div>

                {/* Agile */}
                <div className="text-center lg:border-l border-slate-200">
                  <div className="text-4xl mb-2">📈</div>

                  <h3 className="text-xl font-bold">Agile & Transparent</h3>

                  <p className="text-slate-500 text-sm mt-2">
                    Clear communication at every step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-[#FAFBFF]">
          <div className="max-w-7xl mx-auto px-6">
            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-[#0B0F9C] text-sm font-semibold uppercase tracking-[0.28em]">
                OUR SERVICES
              </p>

              <h2 className="mt-4 text-5xl font-bold tracking-tight text-slate-900">
                Software Development Services
              </h2>

              <p className="mt-4 text-lg text-slate-500 leading-8">
                From custom applications to enterprise integrations, our
                engineering team delivers premium software for modern
                businesses.
              </p>
            </div>

            {/* Services Row */}
            <div className="mt-10 flex gap-6 overflow-x-auto pb-4">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-[24px] border border-slate-200 bg-white p-5"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF1FF] text-[#0B0F9C]">
                    {service.icon}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {service.title}
                  </h3>

                  <ul className="mt-4 space-y-2 text-xs text-slate-600">
                    {service.points.slice(0, 3).map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <li key={point} className="flex items-start gap-2">
                          <HiCheck className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                        {/* <span>{point}</span> */}
                      </li>
                    ))}
                  </ul>

                  <button className="mt-6 text-sm font-semibold text-[#0B0F9C] hover:text-[#06076b]">
                    Learn More →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center max-w-3xl mx-auto">
      <p className="text-[#0B0F9C] text-sm font-semibold uppercase tracking-[0.28em]">
        TECHNOLOGY STACK
      </p>

      <h2 className="mt-4 text-5xl font-bold text-slate-900">
        Technologies We Build With
      </h2>

      <p className="mt-4 text-lg text-slate-600">
        Modern technologies powering scalable digital products.
      </p>
    </div>

    {/* Dark Technology Strip */}
    <div className="mt-16 bg-[#0B0F9C] rounded-[40px] px-10 py-12">

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">

        <div className="text-center">
          <div className="bg-white rounded-3xl h-20 w-20 mx-auto flex items-center justify-center text-3xl font-bold">
            ⚛️
          </div>
          <p className="text-white mt-4 font-medium">React</p>
        </div>

        <div className="text-center">
          <div className="bg-white rounded-3xl h-20 w-20 mx-auto flex items-center justify-center text-3xl font-bold">
            🅰️
          </div>
          <p className="text-white mt-4 font-medium">Angular</p>
        </div>

        <div className="text-center">
          <div className="bg-white rounded-3xl h-20 w-20 mx-auto flex items-center justify-center text-3xl font-bold">
            N
          </div>
          <p className="text-white mt-4 font-medium">Node.js</p>
        </div>

        <div className="text-center">
          <div className="bg-white rounded-3xl h-20 w-20 mx-auto flex items-center justify-center text-3xl font-bold">
            P
          </div>
          <p className="text-white mt-4 font-medium">PHP</p>
        </div>

        <div className="text-center">
          <div className="bg-white rounded-3xl h-20 w-20 mx-auto flex items-center justify-center text-3xl font-bold">
            🐍
          </div>
          <p className="text-white mt-4 font-medium">Python</p>
        </div>

        <div className="text-center">
          <div className="bg-white rounded-3xl h-20 w-20 mx-auto flex items-center justify-center text-3xl font-bold">
            🐬
          </div>
          <p className="text-white mt-4 font-medium">MySQL</p>
        </div>

        <div className="text-center">
          <div className="bg-white rounded-3xl h-20 w-20 mx-auto flex items-center justify-center text-3xl font-bold">
            ☁️
          </div>
          <p className="text-white mt-4 font-medium">AWS</p>
        </div>

        <div className="text-center">
          <div className="bg-white rounded-3xl h-20 w-20 mx-auto flex items-center justify-center text-3xl font-bold">
            🐳
          </div>
          <p className="text-white mt-4 font-medium">Docker</p>
        </div>

      </div>

    </div>

  </div>
</section>
    <section className="py-10 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">

      {stats.map((stat) => (
        <div key={stat.label} className="text-center">

          <div className="w-10 h-10 mx-auto rounded-full bg-[#EEF2FF] flex items-center justify-center mb-4">
            {stat.icon}
          </div>

          <h3 className="text-4xl font-bold text-[#0B0F9C]">
            {stat.value}
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            {stat.label}
          </p>

        </div>
      ))}

    </div>

  </div>
</section>

        <section className="py-24">
          <div className="max-w-3xl">
            <p className="text-[#0B0F9C] text-sm font-semibold uppercase tracking-[0.28em]">
              Custom Software. Real Impact.
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
              Custom Software. Real Impact.
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-600 leading-8">
              Explore projects where our software delivered measurable growth,
              efficiency gains, and stronger customer experiences.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_25px_60px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_35px_90px_rgba(15,23,42,0.12)]"
              >
                <div className="h-56 overflow-hidden">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
  />
</div>
                <div className="p-8">
                  <p className="text-sm uppercase tracking-[0.25em] text-[#0B0F9C]">
                    {project.industry}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                    {project.title}
                  </h3>
                  <ul className="mt-6 space-y-3 text-slate-600">
                    {project.metrics.map((metric) => (
                      <li key={metric} className="flex items-start gap-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#0B0F9C]" />
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#0B0F9C] transition group-hover:text-[#06076b]">
                    View Project <HiArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* <section className="py-24 bg-[#FAFBFF]">
          <div className="grid gap-10 xl:grid-cols-[0.95fr_1.1fr] items-start">
            <div className="rounded-[32px] bg-[#0B0F9C] p-10 text-white shadow-[0_40px_80px_rgba(11,15,156,0.18)]">
              <p className="text-sm uppercase tracking-[0.28em] text-[#C2C7FF]">
                SaaS Platform Success Story
              </p>
              <h2 className="mt-6 text-4xl font-bold tracking-tight">
                SaaS Platform Success Story
              </h2>
              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                {[
                  { value: "320%", label: "Revenue Growth" },
                  { value: "240%", label: "User Growth" },
                  { value: "2.8x", label: "ROI" },
                ].map((item) => (
                  <div key={item.label} className="rounded-3xl bg-white/10 p-6">
                    <p className="text-3xl font-semibold">{item.value}</p>
                    <p className="mt-3 text-sm text-slate-200/80">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
              <button className="mt-10 inline-flex items-center justify-center rounded-[28px] bg-white px-8 py-4 text-base font-semibold text-[#0B0F9C] shadow-lg shadow-[#0B0F9C]/15 transition hover:bg-slate-100">
                View Case Study
              </button>
            </div>

            <div className="grid gap-6 xl:grid-cols-[1fr_0.95fr]">
              <div className="rounded-[32px] bg-slate-950 p-8 text-white shadow-[0_35px_80px_rgba(15,23,42,0.18)]">
                <div className="h-[420px] rounded-[32px] bg-gradient-to-br from-[#111827] via-[#0f172a] to-[#111827] p-8 shadow-inner">
                  <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                        Enterprise Dashboard
                      </p>
                      <p className="mt-2 text-2xl font-semibold">
                        Performance Pulse
                      </p>
                    </div>
                    <span className="inline-flex rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                      Live
                    </span>
                  </div>
                  <div className="mt-8 grid gap-6">
                    <div className="rounded-[28px] bg-white/5 p-6">
                      <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                        Active users
                      </p>
                      <p className="mt-3 text-3xl font-semibold">12.4K</p>
                    </div>
                    <div className="rounded-[28px] bg-white/5 p-6">
                      <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                        Revenue
                      </p>
                      <p className="mt-3 text-3xl font-semibold">$580K</p>
                    </div>
                  </div>
                  <div className="mt-8 h-40 rounded-[28px] bg-white/10" />
                </div>
              </div>

              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div
                    key={item.question}
                    className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setActiveFaq(index === activeFaq ? null : index)
                      }
                      className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left"
                    >
                      <span className="text-lg font-semibold text-slate-900">
                        {item.question}
                      </span>
                      <span className="text-slate-500">
                        {activeFaq === index ? "–" : "+"}
                      </span>
                    </button>
                    <div
                      className={`${activeFaq === index ? "max-h-96" : "max-h-0"} overflow-hidden transition-all duration-300`}
                    >
                      <p className="px-6 pb-6 text-slate-600 leading-7">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section> */}
      </main>
      <Process />
      <CTA />
    </div>
  );
};

export default SoftwareDevelopment;
