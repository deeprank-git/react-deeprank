const steps = [
  { num: "01", title: "Discover",  desc: "We understand your business, goals and challenges." },
  { num: "02", title: "Design",    desc: "We create the strategy, architecture and roadmap." },
  { num: "03", title: "Develop",   desc: "We develop robust, scalable, and secure solution." },
  { num: "04", title: "Automate",  desc: "We automate workflows and eliminate manual inefficiencies." },
  { num: "05", title: "Scale",     desc: "We support growth with continuous innovation." },
];

const Process = () => (
  <section className="py-14 lg:py-20 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-5 lg:px-8">

      <div className="mb-12">
        <span className="inline-block text-[10px] font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1.5 rounded-full mb-3">
          Our Process
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#08104A]">
          From Vision to Scale
        </h2>
      </div>

      <div className="relative">
        {/* Connector line */}
        <div className="hidden lg:block absolute top-10 left-[8%] right-[8%] h-px border-t-2 border-dashed border-gray-200 z-0" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
          {steps.map((s, i) => (
            <div key={s.num} className="relative flex flex-col items-center text-center group">
              {/* Step circle */}
              <div className="relative z-10 w-20 h-20 rounded-full bg-white border-2 border-gray-200 group-hover:border-[#08104A] group-hover:bg-[#08104A] transition-all duration-300 flex flex-col items-center justify-center shadow-sm mb-5">
                <span className="text-[9px] font-bold text-gray-300 group-hover:text-blue-200 transition-colors uppercase tracking-widest">Step</span>
                <span className="text-2xl font-black text-[#08104A] group-hover:text-white transition-colors leading-none">{s.num}</span>
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed max-w-40 lg:max-w-none">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Process;
