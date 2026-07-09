import React from "react";
import { useModal } from "../context/ModalContext";
import {
  HiArrowRight,
  HiOutlineDeviceMobile,
  HiOutlineDesktopComputer,
  HiOutlineCloud,
  HiOutlineShoppingBag,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
} from "react-icons/hi";
import CTA from "../sections/CTA";
import Process from "../sections/Process";
import heroImage from "../assets/hero.png";
import {
  HiLightningBolt,
  HiDeviceMobile,
  HiShieldCheck,
  HiTrendingUp,
} from "react-icons/hi";
import hero from "../assets/hero.png";
import hero1 from "../assets/hero1.png";
import hero3 from "../assets/hero3.png";
import hero4 from "../assets/hero4.png";

import heroweb1 from "../assets/heroweb1.png";
import webdev1 from "../assets/webdev1.png";
const services = [
  {
    title: " Custom Website Design",
    description:
      "Pixel-perfect websites built for every screen, with fast load times and modern user experience.",
    icon: <HiOutlineDesktopComputer className="w-6 h-6 text-white" />,
  },
  {
    title: "Web App Development",
    description:
      "Custom web applications that solve complex workflows, improve conversion, and scale with your business.",
    icon: <HiOutlineDeviceMobile className="w-6 h-6 text-white" />,
  },
  {
    title: "E-Commerce Experiences",
    description:
      "Launch secure stores and marketplaces optimized for higher average order value and repeat customers.",
    icon: <HiOutlineShoppingBag className="w-6 h-6 text-white" />,
  },
  {
    title: "Cloud-Ready Integrations",
    description:
      "Connect CRMs, payments, analytics, and third-party services for an end-to-end digital experience.",
    icon: <HiOutlineCloud className="w-6 h-6 text-white" />,
  },
  {
    title: "Performance & Security",
    description:
      "Fast, secure deployments with modern hosting, SSL, monitoring and data protection baked in.",
    icon: <HiOutlineShieldCheck className="w-6 h-6 text-white" />,
  },
  {
    title: "Conversion-Driven Pages",
    description:
      "Landing pages and product experiences designed to convert visitors into customers.",
    icon: <HiOutlineSparkles className="w-6 h-6 text-white" />,
  },
];

const stats = [
  { value: "250+", label: "Web Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "60%", label: "Faster Launches" },
  { value: "40%", label: "Improved Conversion" },
];

const WebDevelopment = () => {
  const { open } = useModal();
  return (
    <div className="bg-white text-slate-900">
      <main className="max-w-[1500px] mx-auto px-6 sm:px-8">
       <section className="pt-16 pb-20 overflow-hidden">
  <div className="grid lg:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}

    <div>

      <p className="text-[#0B0F9C] text-sm font-bold uppercase tracking-[0.25em]">
        WEB DEVELOPMENT
      </p>

      <h1 className="mt-6 text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight">
        Websites Built
        <br />
        <span className="text-[#0B0F9C]">
          For Growth.
        </span>
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
        High-performance, secure and scalable websites that
        attract, engage and convert your ideal customers.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">

        <button
          onClick={open}
          className="bg-[#0B0F9C] text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:bg-blue-800 transition"
        >
          Book Discovery Call →
        </button>

        <button className="bg-white border border-slate-200 px-8 py-4 rounded-2xl font-semibold shadow-sm hover:shadow-md transition">
          View Our Work
        </button>

      </div>

      <div className="mt-10 flex items-center gap-4">

        <div className="flex -space-x-3">
          <img src="https://i.pravatar.cc/40?img=11" className="w-10 h-10 rounded-full border-2 border-white" />
          <img src="https://i.pravatar.cc/40?img=12" className="w-10 h-10 rounded-full border-2 border-white" />
          <img src="https://i.pravatar.cc/40?img=13" className="w-10 h-10 rounded-full border-2 border-white" />
          <img src="https://i.pravatar.cc/40?img=14" className="w-10 h-10 rounded-full border-2 border-white" />
        </div>

        <p className="text-sm text-slate-600">
          Trusted by 500+ businesses worldwide
        </p>

      </div>

    </div>

    {/* RIGHT SIDE */}

    <div className="relative flex justify-center">
  <img
    src={heroweb1}
    alt="Web Development"
    className="w-full max-w-[900px] object-contain"
  />
</div>
</div>
</section>
        <section className="py-16">
  <div className="grid lg:grid-cols-5 gap-6 items-start">

    {/* Heading */}
    <div className="lg:col-span-1">
      <p className="text-[#0B0F9C] text-sm font-semibold uppercase tracking-[0.25em]">
        WHY CHOOSE US
      </p>

      <h2 className="mt-4 text-3xl font-bold text-slate-900 leading-tight">
        Performance.
        <br />
        Security.
        <br />
        Conversion.
      </h2>
    </div>

    {/* Card 1 */}
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="w-12 h-12 rounded-2xl bg-[#EEF2FF] flex items-center justify-center text-[#0B0F9C] text-xl mb-4">
        <HiLightningBolt className="w-6 h-6" />
      </div>

      <h3 className="font-semibold text-lg text-slate-900">
        Lightning Fast
      </h3>

      <p className="mt-3 text-sm text-slate-600 leading-6">
        Optimised for speed and better user experience.
      </p>
    </div>

    {/* Card 2 */}
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="w-12 h-12 rounded-2xl bg-[#EEF2FF] flex items-center justify-center text-[#0B0F9C] text-xl mb-4">
        <HiDeviceMobile className="w-6 h-6" />
      </div>

      <h3 className="font-semibold text-lg text-slate-900">
        Fully Responsive
      </h3>

      <p className="mt-3 text-sm text-slate-600 leading-6">
        Pixel perfect across all devices and screen sizes.
      </p>
    </div>

    {/* Card 3 */}
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="w-12 h-12 rounded-2xl bg-[#EEF2FF] flex items-center justify-center text-[#0B0F9C] text-xl mb-4">
        <HiShieldCheck className="w-6 h-6" />
      </div>

      <h3 className="font-semibold text-lg text-slate-900">
        Secure & Reliable
      </h3>

      <p className="mt-3 text-sm text-slate-600 leading-6">
        Advanced security to protect your business.
      </p>
    </div>

    {/* Card 4 */}
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="w-12 h-12 rounded-2xl bg-[#EEF2FF] flex items-center justify-center text-[#0B0F9C] text-xl mb-4">
        <HiTrendingUp className="w-6 h-6" />
      </div>

      <h3 className="font-semibold text-lg text-slate-900">
        SEO Ready
      </h3>

      <p className="mt-3 text-sm text-slate-600 leading-6">
        Built with clean code and SEO best practices.
      </p>
    </div>

  </div>
</section>

        <section className="py-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[#0B0F9C] font-semibold uppercase tracking-[0.24em] text-sm">
              WHAT WE BUILD
            </p>
            <h2 className="mt-4 text-lg text-4xl font-bold tracking-tight">
             End-to-End Web Development Services .
            </h2>
            {/* <p className="mt-4 text-xs text-gray-600 text-lg leading-8">
              From landing pages to enterprise applications, we create web
              experiences built around your goals and your customers.
            </p> */}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[#0B0F9C] text-white shadow-lg shadow-[#0B0F9C]/20">
                  {service.icon}
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>
                <button className="mt-8 inline-flex items-center gap-2 text-[#0B0F9C] font-semibold">
                  Learn More
                  <HiArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </section>
        <section className="py-12">

  <div className="rounded-[28px] bg-[#08104A] p-6">

    <div className="grid lg:grid-cols-[280px_1fr] gap-6 items-center">

      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-blue-200">
          Modern Technologies
        </p>

        <h3 className="text-white text-3xl font-bold mt-2 leading-tight">
          We Use The Best
          <br />
          To Build The Best
        </h3>
      </div>

      <div className="grid grid-cols-5 md:grid-cols-10 gap-4">

        {[
          "React",
          "Next.js",
          "WordPress",
          "Shopify",
          "Webflow",
          "PHP",
          "Laravel",
          "Node.js",
          "MongoDB",
          "AWS",
        ].map((tech) => (
          <div
            key={tech}
            className="bg-white rounded-2xl p-4 flex items-center justify-center h-20"
          >
            <span className="text-sm font-semibold">
              {tech}
            </span>
          </div>
        ))}

      </div>

    </div>

  </div>

</section>
        <section className="pb-12">

  <div className="grid md:grid-cols-4 border-y border-slate-200">

    <div className="text-center py-8">
      <h3 className="text-4xl font-bold text-[#0B0F9C]">
        200+
      </h3>

      <p className="text-gray-600 text-sm mt-2">
        Websites Delivered
      </p>
    </div>

    <div className="text-center py-8 border-l border-slate-200">
      <h3 className="text-4xl font-bold text-[#0B0F9C]">
        98%
      </h3>

      <p className="text-gray-600 text-sm mt-2">
        Client Satisfaction
      </p>
    </div>

    <div className="text-center py-8 border-l border-slate-200">
      <h3 className="text-4xl font-bold text-[#0B0F9C]">
        1.5s
      </h3>

      <p className="text-gray-600 text-sm mt-2">
        Average Load Speed
      </p>
    </div>

    <div className="text-center py-8 border-l border-slate-200">
      <h3 className="text-4xl font-bold text-[#0B0F9C]">
        40%+
      </h3>

      <p className="text-gray-600 text-sm mt-2">
        Increase In Conversions
      </p>
    </div>

  </div>

</section>
<section className="py-12">

  <div className="flex justify-between items-end mb-8">

    <div>
      <p className="text-[#0B0F9C] text-sm font-semibold uppercase">
        Our Recent Work
      </p>

      <h2 className="text-4xl font-bold mt-3">
        Designed. Developed. Delivered.
      </h2>
    </div>

    <button className="text-[#0B0F9C] font-semibold">
      View All Projects →
    </button>

  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

    <div className="bg-white border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition">
      <img
        src={hero}
        alt=""
        className="h-48 w-full object-cover"
      />

      <div className="p-5">
        <span className="text-xs text-[#0B0F9C] font-semibold">
          Real Estate
        </span>

        <h3 className="font-bold mt-2">
          Skyline Residences
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          WordPress Development
        </p>
      </div>
    </div>

    <div className="bg-white border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition">
      <img
        src={hero1}
        alt=""
        className="h-48 w-full object-cover"
      />

      <div className="p-5">
        <span className="text-xs text-[#0B0F9C] font-semibold">
          E-Commerce
        </span>

        <h3 className="font-bold mt-2">
          Urban Vogue
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          Shopify Development
        </p>
      </div>
    </div>

    <div className="bg-white border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition">
      <img
        src={hero3}
        alt=""
        className="h-48 w-full object-cover"
      />

      <div className="p-5">
        <span className="text-xs text-[#0B0F9C] font-semibold">
          SaaS Platform
        </span>

        <h3 className="font-bold mt-2">
          TaskPro Dashboard
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          Web Application
        </p>
      </div>
    </div>

    <div className="bg-white border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition">
      <img
        src={hero4}
        alt=""
        className="h-48 w-full object-cover"
      />

      <div className="p-5">
        <span className="text-xs text-[#0B0F9C] font-semibold">
          Corporate
        </span>

        <h3 className="font-bold mt-2">
          Nexora Solutions
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          Webflow Development
        </p>
      </div>
    </div>

  </div>

</section>
        <Process />
        <section className="py-20">

  <div className="grid lg:grid-cols-[1.2fr_1fr_1fr] gap-6">

    {/* Left Case Study Card */}

    <div className="bg-[#08104A] rounded-[32px] p-8 text-white">

      <span className="text-xs uppercase tracking-[0.25em] text-blue-200">
        Case Study
      </span>

      <h2 className="text-4xl font-bold mt-4 leading-tight">
        E-Commerce
        <br />
        Success Story
      </h2>

      <p className="mt-5 text-blue-100 leading-7">
        We helped an e-commerce brand scale their online sales
        with a high-converting website and performance strategy.
      </p>

      <div className="grid grid-cols-3 gap-4 mt-10">

        <div>
          <h3 className="text-3xl font-bold">250%</h3>
          <p className="text-xs text-blue-200 mt-2">
            Revenue Increase
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">180%</h3>
          <p className="text-xs text-blue-200 mt-2">
            More Leads
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">3.2x</h3>
          <p className="text-xs text-blue-200 mt-2">
            Higher Conversion
          </p>
        </div>

      </div>

      <button className="mt-8 bg-white text-[#08104A] px-6 py-3 rounded-xl font-semibold">
        View Case Study
      </button>

    </div>

    {/* Center Image */}

    <div className="bg-white border border-slate-200 rounded-[32px] p-6 flex items-center justify-center">

      <img
        src={webdev1}
        alt="Case Study"
        className="rounded-2xl w-full object-cover"
      />

    </div>

    {/* FAQ */}

    <div className="bg-white border border-slate-200 rounded-[32px] p-8">

      <span className="text-xs uppercase tracking-[0.25em] text-[#0B0F9C] font-semibold">
        FAQ
      </span>

      <h3 className="text-3xl font-bold mt-4">
        Frequently Asked Questions
      </h3>

      <div className="mt-8 space-y-4">

        {[
          "How long does a website project take?",
          "Will my website be mobile-friendly?",
          "Can you redesign my existing website?",
          "Do you provide website maintenance?",
        ].map((faq) => (
          <div
            key={faq}
            className="flex items-center justify-between border rounded-2xl px-5 py-4 hover:bg-slate-50"
          >
            <span className="font-medium text-slate-700">
              {faq}
            </span>

            <span className="text-[#0B0F9C] text-xl">
              +
            </span>
          </div>
        ))}

      </div>

    </div>

  </div>

</section>
      </main>
      <CTA />
    </div>
  );
};

export default WebDevelopment;
