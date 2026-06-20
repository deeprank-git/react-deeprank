const steps = [
  { num: "01", title: "Discover",  desc: "We understand your business, goals and challenges through deep discovery sessions." },
  { num: "02", title: "Design",    desc: "We create the strategy, architecture and roadmap tailored to your specific needs." },
  { num: "03", title: "Develop",   desc: "We build robust, scalable and secure solutions using modern technologies." },
  { num: "04", title: "Automate",  desc: "We automate workflows and eliminate manual inefficiencies to maximise output." },
  { num: "05", title: "Scale",     desc: "We support growth with continuous innovation, iteration and performance tuning." },
];

const Process = () => (
  <section className="py-16 lg:py-24 bg-gray-50 overflow-hidden">
    <div className="max-w-7xl mx-auto px-5 lg:px-8">

      <div className="text-center mb-14 sm:mb-16">
        <span className="inline-block text-[10px] font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1.5 rounded-full mb-4">
          Our Process
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">
          From Vision to Scale
        </h2>
        <p className="text-gray-500 text-sm sm:text-base mt-3 max-w-xl mx-auto">
          A proven 5-step methodology that takes your idea from concept to a fully scaled product.
        </p>
      </div>

      <div className="relative">
        {/* Desktop connector line */}
        <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-linear-to-r from-transparent via-blue-200 to-transparent z-0" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
          {steps.map((s, i) => (
            <div key={s.num} className="relative flex flex-col items-center text-center group">
              {/* Mobile vertical connector */}
              {i > 0 && (
                <div className="sm:hidden absolute -top-4 left-1/2 -translate-x-1/2 w-px h-4 bg-blue-200" />
              )}

              {/* Step circle */}
              <div className="relative z-10 w-20 h-20 rounded-full bg-white border-2 border-blue-100 group-hover:border-blue-600 group-hover:bg-blue-600 transition-all duration-300 flex flex-col items-center justify-center shadow-md shadow-blue-100/50 mb-5">
                <span className="text-[9px] font-bold text-blue-300 group-hover:text-blue-100 transition-colors uppercase tracking-widest">Step</span>
                <span className="text-2xl font-black text-blue-900 group-hover:text-white transition-colors leading-none">{s.num}</span>
              </div>

              <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed max-w-50 lg:max-w-none">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Process;
