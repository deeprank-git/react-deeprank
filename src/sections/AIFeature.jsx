import { useEffect, useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import hero3 from "../assets/hero3.png";
import automation from "../assets/automation.png";
import heroweb from "../assets/heroweb.png";
import Manufacturing from "../assets/Manufacturing.png";

const tabs = [
  { label: "AI Solutions", image: hero3 },
  { label: "Automation", image: automation },
  { label: "Web Develop", image: heroweb },
  { label: "Marketing", image: Manufacturing },
];

const tabContent = {
  "AI Solutions": {
    title: "AI Solutions",
    desc: "Custom AI Agents, Chatbots, and intelligent systems built to automate complex tasks and drive results.",
    btn: "Discover AI Solutions",
  },
  "Automation": {
    title: "Workflow Automation",
    desc: "Streamline repetitive tasks and build end-to-end automation pipelines across your entire business.",
    btn: "Discover Automation",
  },
  "Web Develop": {
    title: "Web & App Development",
    desc: "High-performance websites, web apps, and cross-platform mobile applications built to convert.",
    btn: "Discover Web Develop",
  },
  "Marketing": {
    title: "Digital Marketing",
    desc: "Data-driven strategies across Google, Meta, LinkedIn and more — combining paid media, SEO and CRO.",
    btn: "Discover Marketing",
  },
};

const pad = (n) => String(n).padStart(2, "0");

const AIFeature = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const tab = tabs[activeIdx];
  const content = tabContent[tab.label];

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIdx((i) => (i + 1) % tabs.length);
    }, 2000);
    return () => clearInterval(id);
  }, [activeIdx]);

  return (
    <section className="py-14 px-14">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex gap-10 lg:gap-14 items-center">

          {/* ── Left 40% ── */}
          <div className="w-[40%] shrink-0">
            <p className="text-sm font-bold text-gray-400 mb-5 tracking-widest">
              {pad(activeIdx + 1)}{" "}
              <span className="text-gray-300 mx-1">/</span>{" "}
              {pad(tabs.length)}
            </p>

            <h2 className="text-5xl sm:text-4xl lg:text-5xl font-black text-[#08104A] leading-tight mb-4">
              {content.title}
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              {content.desc}
            </p>

            <button className="inline-flex items-center gap-2 bg-[#08104A] hover:bg-blue-900 text-white px-6 py-3.5 rounded-xl font-semibold text-base transition-all shadow-lg shadow-blue-900/20">
              {content.btn} <HiArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* ── Right 70% ── */}
          <div className="flex-1 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-900/5">
              <img
                src={tab.image}
                alt={tab.label}
                className="w-full h-72 sm:h-88 lg:h-105 object-cover transition-all duration-500"
              />

              {/* Tab buttons — bottom of image */}
              <div className="absolute bottom-0 left-0 right-0 flex items-center gap-2 px-4 py-3 bg-linear-to-t from-black/30 to-transparent">
                {tabs.map((t, i) => (
                  <button
                    key={t.label}
                    onClick={() => setActiveIdx(i)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-base font-semibold border transition-all whitespace-nowrap ${activeIdx === i
                      ? "bg-white border-white text-[#08104A] shadow-md"
                      : "bg-white/20 border-white/30 text-white hover:bg-white/40"
                      }`}
                  >
                    {activeIdx === i && (
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                    )}
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIFeature;
