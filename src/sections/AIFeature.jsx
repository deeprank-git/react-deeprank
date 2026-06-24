import { useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import hero from "../assets/hero.png";

const tabs = ["AI Solutions", "Automation", "Web & Device", "Marketing"];

const tabContent = {
  "AI Solutions": {
    badge: "AI & AUTOMATION",
    title: "AI Solutions",
    desc: "Custom AI Agents, Chatbots, and intelligent systems built to automate complex tasks. We build AI employees that work 24/7 so your team can focus on what matters most.",
  },
  Automation: {
    badge: "AUTOMATION",
    title: "Workflow Automation",
    desc: "Streamline repetitive tasks and build end-to-end automation pipelines. From CRM triggers to multi-step workflows — automate the work your team shouldn't do manually.",
  },
  "Web & Device": {
    badge: "DEVELOPMENT",
    title: "Web & App Development",
    desc: "High-performance websites, web apps, and cross-platform mobile applications. Built with modern frameworks, optimised for speed, and designed to convert.",
  },
  Marketing: {
    badge: "GROWTH MARKETING",
    title: "Digital Marketing",
    desc: "Data-driven strategies across Google, Meta, LinkedIn, and more. We combine paid media, SEO, and conversion optimisation to maximise ROI.",
  },
};

const AIFeature = () => {
  const [active, setActive] = useState("AI Solutions");
  const content = tabContent[active];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left */}
          <div>
            <span className="inline-block text-[10px] font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1.5 rounded-full mb-4">
              {content.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-4">
              {content.title}
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-7 max-w-lg">
              {content.desc}
            </p>
            <button className="flex items-center gap-2 bg-blue-900 text-white px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/20">
              Discover {active} <HiArrowRight className="w-4 h-4" />
            </button>

            {/* Tabs */}
            <div className="overflow-x-auto mt-10">
              <div className="flex gap-1 border border-gray-100 bg-gray-50 p-1 rounded-xl w-fit">
                {tabs.map((t) => (
                  <button
                    key={t}
                    onClick={() => setActive(t)}
                    className={`px-3 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                      active === t
                        ? "bg-white text-blue-700 shadow-sm"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative mt-4 lg:mt-0">
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-900/5">
              <img src={hero} alt="AI Solutions" className="w-full h-64 sm:h-80 lg:h-105 object-cover" />
            </div>
            {/* Floating card */}
            <div className="hidden sm:block absolute bottom-5 left-5 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 max-w-45">
              <p className="text-[10px] text-gray-400 font-medium mb-2">How Can I Help You?</p>
              <div className="flex flex-col gap-1.5">
                {["Generate Report", "Automate Task", "Analyze Data"].map((item) => (
                  <div key={item} className="bg-blue-50 text-blue-700 text-[11px] font-medium px-3 py-1.5 rounded-lg cursor-pointer hover:bg-blue-100 transition">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-blue-900/90 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-2 rounded-xl shadow-lg">
              AI Powered ⚡
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeature;
