import { useEffect, useRef, useState } from "react";

const steps = [
  { num: "01", title: "Discover", desc: "We understand your business, goals and challenges." },
  { num: "02", title: "Design", desc: "We create the strategy, architecture and roadmap." },
  { num: "03", title: "Develop", desc: "We develop robust, scalable, and secure solutions." },
  { num: "04", title: "Automate", desc: "We automate workflows and eliminate manual inefficiencies." },
  { num: "05", title: "Scale", desc: "We support growth with continuous innovation." },
];

const Process = () => {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(-1);
  const [autoPlayDone, setAutoPlayDone] = useState(false);
  const sectionRef = useRef(null);

  // Trigger entrance once the section scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-play the progress line through all steps once, then hand control to hover/click
  useEffect(() => {
    if (!visible) return;
    let i = 0;
    const interval = setInterval(() => {
      setActive(i);
      i++;
      if (i >= steps.length) {
        clearInterval(interval);
        setAutoPlayDone(true);
      }
    }, 380);
    return () => clearInterval(interval);
  }, [visible]);

  const handleHover = (i) => {
    if (autoPlayDone) setActive(i);
  };

  const progressPct = active < 0 ? 0 : (active / (steps.length - 1)) * 82;

  return (
    <section ref={sectionRef} className="py-14 lg:py-20 bg-[#F7F9FF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="mb-14">
          <span className="inline-block text-xl font-bold tracking-widest text-[#08104A] uppercase px-3 py-1.5 rounded-full mb-1">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#08104A]">
            From Vision to Scale
          </h2>
        </div>

        <div className="relative">
          {/* Base track */}
          <div className="hidden lg:block absolute top-10 left-[9%] right-[9%] h-0.5 bg-gray-200 rounded-full z-0" />
          {/* Animated fill */}
          <div
            className="hidden lg:block absolute top-10 left-[9%] h-0.5 bg-blue-600 rounded-full z-0 transition-all duration-500 ease-out"
            style={{ width: `${progressPct}%` }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-10 gap-x-4 relative z-10">
            {steps.map((s, i) => {
              const isActive = i <= active;
              return (
                <button
                  key={s.num}
                  onMouseEnter={() => handleHover(i)}
                  onClick={() => setActive(i)}
                  className="flex flex-col items-center text-center group focus:outline-none cursor-pointer"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(16px)",
                    transition: `opacity 0.45s ease ${i * 0.08}s, transform 0.45s ease ${i * 0.08}s`,
                  }}
                >
                  <div
                    className={`relative w-20 h-20 rounded-full border-2 flex flex-col items-center justify-center mb-5 transition-all duration-300 ${isActive
                      ? "bg-[#08104A] border-[#08104A] scale-105"
                      : "bg-white border-gray-200 group-hover:border-blue-300"
                      }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 rounded-full border-2 border-blue-400 scale-100 group-hover:scale-125 group-hover:opacity-0 opacity-40 transition-all duration-500" />
                    )}
                    <span className={`text-[9px] font-bold uppercase tracking-widest transition-colors ${isActive ? "text-blue-300" : "text-gray-300"}`}>
                      Step
                    </span>
                    <span className={`text-2xl font-black leading-none transition-colors ${isActive ? "text-white" : "text-[#08104A]"}`}>
                      {s.num}
                    </span>
                  </div>
                  <h3 className={`text-sm font-bold mb-2 transition-colors ${isActive ? "text-[#08104A]" : "text-gray-900"}`}>
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed max-w-40 lg:max-w-none">
                    {s.desc}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;