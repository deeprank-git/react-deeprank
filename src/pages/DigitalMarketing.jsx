import React from "react";
import { useModal } from "../context/ModalContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  HiArrowRight,
  HiOutlineChartBar,
  HiOutlineMail,
  HiOutlineSparkles,
  HiOutlineSearch,
  HiOutlineShoppingCart,
  HiOutlineUserGroup,
} from "react-icons/hi";
import {
  FaFacebookF,
  FaGoogle,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaRegLightbulb,
} from "react-icons/fa";
// import analyticsImage from "../assets/hero5.png";
import analyticsImage from "../assets/digitalmarketing.png";
import CTA from "../sections/CTA";
import Process from "../sections/Process";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const channels = [
  {
    title: "Meta Ads",
    description:
      "High-converting creative and conversion-focused ad funnels across Facebook and Instagram.",
    icon: <FaFacebookF className="w-6 h-6 text-white" />,
  },
  {
    title: "Google Ads",
    description:
      "Search, shopping and display campaigns designed to capture demand and lower CPA.",
    icon: <FaGoogle className="w-6 h-6 text-white" />,
  },
  {
    title: "LinkedIn Ads",
    description:
      "Precision B2B targeting for pipeline acceleration, lead gen, and account-based campaigns.",
    icon: <FaLinkedinIn className="w-6 h-6 text-white" />,
  },

  {
    title: "SEO",
    description:
      "Organic growth strategies that increase visibility, traffic and conversions over time.",
    icon: <HiOutlineSearch className="w-6 h-6 text-white" />,
  },
  {
    title: "Social Media",
    description:
      "Brand storytelling, community growth and performance-driven engagement programs.",
    icon: <FaInstagram className="w-6 h-6 text-white" />,
  },
  {
    title: "Video Marketing",
    description:
      "Short-form ads, demos and social-first video that boost awareness and sales.",
    icon: <FaYoutube className="w-6 h-6 text-white" />,
  },
  {
    title: "More",
    description:
      "Marketplace launches, affiliate outreach, PR amplification and conversion growth work.",
    icon: <HiOutlineSparkles className="w-6 h-6 text-white" />,
  },
];

const services = [
  {
    title: "Paid Advertising",
    icon: <HiOutlineChartBar className="w-8 h-8 text-[#0B0F9C]" />,
    points: ["Meta Ads", "Google Ads", "LinkedIn Ads", "Remarketing"],
  },
  {
    title: "Social Media Marketing",
    icon: <HiOutlineUserGroup className="w-8 h-8 text-[#0B0F9C]" />,
    points: ["Content Creation", "Community Growth", "Influencer Marketing"],
  },
  {
    title: "Content & Creative",
    icon: <FaRegLightbulb className="w-8 h-8 text-[#0B0F9C]" />,
    points: ["Content Strategy", "Copywriting", "Landing Pages"],
  },
  {
    title: "Conversion Optimization",
    icon: <HiOutlineSparkles className="w-8 h-8 text-[#0B0F9C]" />,
    points: ["CRO", "A/B Testing", "Funnel Optimization"],
  },
  {
    title: "Tracking & Analytics",
    icon: <HiOutlineSearch className="w-8 h-8 text-[#0B0F9C]" />,
    points: ["GA4 Setup", "Conversion Tracking", "Dashboard Reporting"],
  },
  {
    title: "Email Automation",
    icon: <HiOutlineMail className="w-8 h-8 text-[#0B0F9C]" />,
    points: ["Email Campaigns", "Lead Nurturing", "CRM Automation"],
  },
];
const marketingData = [
  { day: "Apr 25", revenue: 12000 },
  { day: "Apr 30", revenue: 32000 },
  { day: "May 05", revenue: 48000 },
  { day: "May 10", revenue: 39000 },
  { day: "May 15", revenue: 61000 },
  { day: "May 20", revenue: 74000 },
  { day: "May 25", revenue: 83320 },
];

const stats = [
  { value: "200%", label: "Average Increase In ROAS" },
  { value: "2.5X", label: "Average Lead Growth" },
  { value: "60%", label: "Lower Cost Per Acquisition" },
  { value: "150%", label: "Increase In Revenue" },
  { value: "4+ Months", label: "Average Client Retention" },
];

const processSteps = [
  { step: "01", title: "Discovery" },
  { step: "02", title: "Strategy" },
  { step: "03", title: "Planning" },
  { step: "04", title: "Execution" },
  { step: "05", title: "Analysis" },
  { step: "06", title: "Scale" },
];

const DigitalMarketing = () => {
  const { open } = useModal();
  return (
    <div className="bg-white text-gray-900">
      <main className="max-w-[1500px] mx-auto px-8">
        <section className="pt-10 pb-24">
          <div className="grid lg:grid-cols-[42%_58%] gap-8 items-center">
            <div className="space-y-8">
              <p className="inline-flex items-center rounded-full bg-[#EDF0FF] text-[#0B0F9C] px-4 py-2 text-sm font-semibold tracking-[0.24em] uppercase shadow-sm">
                DIGITAL MARKETING
              </p>

              <div>
                <h1 className="text-6xl lg:text-[96px] leading-[0.9] font-black tracking-tight text-slate-900">
                  Marketing That
                  <br />
                  <span className="text-[#0B0F9C] block">
                    Drives Real Growth.
                  </span>
                </h1>
                <p className="mt-6 max-w-xl text-gray-600 text-lg leading-8">
                  Full-funnel digital marketing solutions across all platforms
                  to attract, engage, convert and retain more customers.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={open}
                  className="inline-flex items-center justify-center rounded-2xl bg-[#0B0F9C] px-7 py-4 text-base font-semibold text-white shadow-lg shadow-[#0B0F9C]/20 transition hover:bg-blue-800"
                >
                  Book Discovery Call
                  <HiArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="inline-flex items-center justify-center rounded-2xl border border-[#0B0F9C] px-7 py-4 text-base font-semibold text-[#0B0F9C] transition hover:bg-[#0B0F9C]/5">
                  See Our Results
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((index) => (
                    <img
                      key={index}
                      src={`https://i.pravatar.cc/40?img=${index + 12}`}
                      alt="Customer avatar"
                      className="h-10 w-10 rounded-full border-2 border-white shadow-sm"
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm">
                  Trusted by 500+ businesses worldwide
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[40px] border border-slate-200 bg-[#FAFBFD] shadow-[0_40px_80px_rgba(15,23,42,0.08)]">
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-slate-900">
                      Performance Overview
                    </h3>

                    <button className="border border-slate-200 px-4 py-2 rounded-xl text-sm">
                      Last 30 Days
                    </button>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    <div className="rounded-[26px] border border-slate-200 bg-slate-50 p-5">
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                        Total Spend
                      </p>
                      <p className="mt-3 text-2xl font-semibold text-slate-900">
                        $128,540
                      </p>
                      <p className="mt-2 text-sm text-emerald-600">+46.5%</p>
                    </div>
                    <div className="rounded-[26px] border border-slate-200 bg-slate-50 p-5">
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                        Conversions
                      </p>
                      <p className="mt-3 text-2xl font-semibold text-slate-900">
                        4,753
                      </p>
                      <p className="mt-2 text-sm text-emerald-600">+32.4%</p>
                    </div>
                    <div className="rounded-[26px] border border-slate-200 bg-slate-50 p-5">
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                        ROAS
                      </p>
                      <p className="mt-3 text-2xl font-semibold text-slate-900">
                        6.48x
                      </p>
                      <p className="mt-2 text-sm text-emerald-600">+30.7%</p>
                    </div>
                    <div className="rounded-[26px] border border-slate-200 bg-slate-50 p-5">
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                        Revenue
                      </p>
                      <p className="mt-3 text-2xl font-semibold text-slate-900">
                        $833,720
                      </p>
                      <p className="mt-2 text-sm text-emerald-600">+41.2%</p>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-6 lg:grid-cols-[2fr_1fr]">
                    {/* <div className="flex justify-between items-center mb-6">
  <h3 className="text-2xl font-bold text-slate-900">
    Performance Overview
  </h3>

  <button className="border rounded-xl px-4 py-2 text-sm">
    Last 30 Days
  </button>
</div> */}

                    {/* <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-6 relative overflow-hidden">
                      <div className="flex items-center justify-between text-sm text-slate-500">
                        <span>Revenue Growth</span>
                        <span>Last 30 days</span>
                      </div>

                      <div className="mt-5 h-[300px] rounded-[28px] bg-white p-5 shadow-sm">
                        <div className="absolute left-6 top-6 rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 shadow-xl">
                          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Today</p>
                          <p className="mt-2 text-sm font-semibold text-slate-900">Revenue $28.4K</p>
                        </div>
                        <div className="relative h-full pt-8">
                          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0B0F9C]/0 via-[#0B0F9C]/10 to-[#0B0F9C]/0" />
                          <div className="absolute inset-x-0 bottom-10 h-0.5 bg-slate-200" />
                          <div className="absolute inset-x-0 bottom-20 h-0.5 bg-slate-200" />
                          <div className="absolute inset-x-0 bottom-30 h-0.5 bg-slate-200" />

                          <div className="absolute bottom-14 left-6 right-6 h-1 rounded-full bg-blue-100" />
                          <div className="absolute bottom-[92px] left-10 h-1 rounded-full bg-blue-100 w-[70%]" />
                          <div className="absolute bottom-[140px] left-16 h-1 rounded-full bg-blue-100 w-[55%]" />
                          <div className="absolute bottom-[190px] left-24 h-1 rounded-full bg-blue-100 w-[42%]" />
                          <div className="absolute bottom-[225px] left-32 h-1 rounded-full bg-[#0B0F9C] w-[30%]" />
                          <div className="absolute bottom-[255px] left-40 h-1 rounded-full bg-[#0B0F9C] w-[18%]" />

                          <div className="absolute left-10 bottom-[92px] h-3 w-3 rounded-full bg-[#0B0F9C] shadow-xl" />
                          <div className="absolute left-24 bottom-[140px] h-3 w-3 rounded-full bg-[#0B0F9C] shadow-xl" />
                          <div className="absolute left-40 bottom-[190px] h-3 w-3 rounded-full bg-[#0B0F9C] shadow-xl" />
                          <div className="absolute left-56 bottom-[225px] h-3 w-3 rounded-full bg-[#0B0F9C] shadow-xl" />
                          <div className="absolute left-[72%] bottom-[255px] h-3 w-3 rounded-full bg-[#0B0F9C] shadow-xl" />
                        </div>
                      </div> */}

                    {/* <div className="mt-6 grid grid-cols-4 gap-4 text-xs text-slate-500">
                        {['03 Apr', '10 Apr', '17 Apr', '24 Apr'].map((date) => (
                          <span key={date} className="text-center">{date}</span>
                        ))}
                      </div>
                    </div> */}
                    <div className="h-[420px] bg-white rounded-[32px] border border-slate-100 p-6 shadow-sm">
                      <ResponsiveContainer width="100%" height={420}>
                        <LineChart data={marketingData}>
                          <CartesianGrid stroke="#f1f5f9" />
                          <XAxis dataKey="day" />
                          <YAxis />
                          <Tooltip />

                          <Line
                            type="monotone"
                            dataKey="revenue"
                            stroke="#0B0F9C"
                            strokeWidth={4}
                            dot={{ r: 5 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                          Leads Generated
                        </p>
                        <p className="mt-3 text-2xl font-bold text-slate-900">
                          2,143
                        </p>
                        <p className="mt-3 text-sm text-emerald-600">+43.2%</p>
                      </div>
                      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                          Cost Per Lead
                        </p>
                        <p className="mt-3 text-2xl font-bold text-slate-900">
                          $23.68
                        </p>
                        <p className="mt-3 text-sm text-emerald-600">-28.5%</p>
                      </div>
                      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                          Conversion Rate
                        </p>
                        <p className="mt-3 text-2xl font-bold text-slate-900">
                          7.23%
                        </p>
                        <p className="mt-3 text-sm text-emerald-600">+24.6%</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 right-8 z-30">
                  <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-xl w-64">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                      ROAS
                    </p>
                    <p className="mt-3 text-3xl font-semibold text-slate-900">
                      6.48x
                    </p>
                    <div className="mt-4 h-16 rounded-[28px] bg-slate-50 p-3">
                      <div className="h-2 rounded-full bg-[#D7F5E9] relative overflow-hidden">
                        <div className="absolute inset-y-0 left-0 w-1/2 rounded-full bg-emerald-500" />
                      </div>
                      <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                        <span>Weekly</span>
                        <span>+30.7%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[#0B0F9C] font-semibold uppercase tracking-[0.24em] text-sm">
              Marketing Channels
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              360° Marketing. End-to-End Growth.
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              We activate every digital channel with performance campaigns,
              creative momentum and measurable business outcomes.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((channel) => (
              <div
                key={channel.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B0F9C] shadow-lg shadow-[#0B0F9C]/15">
                  {channel.icon}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">
                  {channel.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {channel.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[#0B0F9C] font-semibold uppercase tracking-[0.24em] text-sm">
              Services
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              Complete Digital Marketing Solutions
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              A single growth engine for advertising, content, conversion and
              analytics.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-xl"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-[#E8EEFF]">
                  {service.icon}
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                  {service.title}
                </h3>
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#0B0F9C]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-8 inline-flex items-center gap-2 text-[#0B0F9C] font-semibold">
                  Learn More
                  <HiArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] bg-[#0B0F9C] px-6 py-14 text-white shadow-2xl shadow-slate-900/10">
          <div className="grid gap-8 md:grid-cols-5 text-center">
            {stats.map((item) => (
              <div
                key={item.label}
                className="border-r border-white/20 last:border-r-0"
              >
                <p className="text-4xl font-bold">{item.value}</p>
                <p className="mt-3 text-sm leading-6 text-slate-100/85">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <Process />

        {/* <section className="py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[#0B0F9C] font-semibold uppercase tracking-[0.24em] text-sm">Process</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight">A Proven Process For Predictable Results</h2>
            <p className="mt-4 text-gray-600 text-lg">Every campaign is guided by research, strategic planning and measurable optimization.</p>
          </div>

          <div className="mt-12 overflow-x-auto py-2">
            <div className="min-w-[720px] grid gap-5 md:grid-cols-6">
              {processSteps.map((step) => (
                <div key={step.step} className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#0B0F9C] text-white font-bold">{step.step}</div>
                  <p className="mt-4 text-lg font-semibold text-slate-900">{step.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        <section className="py-20">
          <div className="grid lg:grid-cols-[0.9fr_1.4fr] gap-8 items-center">
            {/* CASE STUDY */}
            <div className="bg-[#0B0F9C] rounded-[32px] p-8 text-white flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold tracking-[0.25em] uppercase text-blue-200">
                  CASE STUDY
                </p>

                <h3 className="text-4xl font-bold mt-4 leading-tight">
                  E-Commerce
                  <br />
                  Brand Growth
                </h3>

                <p className="mt-4 text-blue-100 leading-7">
                  Scaled revenue with a unified paid ads and SEO strategy
                  focused on customer acquisition and long-term growth.
                </p>

                <div className="grid grid-cols-3 gap-3 mt-8">
                  <div>
                    <h4 className="text-3xl font-bold">380%</h4>
                    <p className="text-xs text-blue-200 mt-1">Traffic Growth</p>
                  </div>

                  <div>
                    <h4 className="text-3xl font-bold">250%</h4>
                    <p className="text-xs text-blue-200 mt-1">Revenue Growth</p>
                  </div>

                  <div>
                    <h4 className="text-3xl font-bold">42%</h4>
                    <p className="text-xs text-blue-200 mt-1">Lower CPA</p>
                  </div>
                </div>
              </div>

              <button className="mt-8 bg-white text-[#0B0F9C] px-6 py-3 rounded-xl font-semibold w-fit">
                View Case Study →
              </button>
            </div>

            {/* CENTER IMAGE */}
            <div className="relative bg-white rounded-[32px] overflow-hidden shadow-xl">
              <img
                src={analyticsImage}
                alt=""
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* TESTIMONIAL */}
            <div className="bg-white rounded-[32px] border border-gray-200 p-8 flex flex-col justify-between">
              <div>
                <div className="text-[#0B0F9C] text-7xl leading-none font-bold">
                  ❝
                </div>
                <p className="text-gray-700 text-lg leading-8 mt-6 pt-6 border-t">
                  DeepRank completely transformed our digital presence. Our
                  traffic, leads and revenue increased dramatically within
                  months.
                </p>
              </div>

              <div className="mt-8">
                <div className="flex items-center gap-3">
                  <img
                    src="https://i.pravatar.cc/80?img=12"
                    alt=""
                    className="w-12 h-12 rounded-full"
                  />

                  <div>
                    <h4 className="font-bold text-gray-900">Sarah Johnson</h4>

                    <p className="text-sm text-gray-500">CEO, Urban Store</p>
                  </div>
                </div>

                <div className="flex gap-1 mt-4 text-yellow-500">★★★★★</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <CTA />
    </div>
  );
};

export default DigitalMarketing;
