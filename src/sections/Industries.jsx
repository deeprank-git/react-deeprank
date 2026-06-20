import { HiArrowRight } from "react-icons/hi";

const industries = [
  { name: "Real Estate",    emoji: "🏢", gradient: "from-blue-900 via-blue-800 to-slate-900",    desc: "AI-powered listings, lead gen & virtual tours" },
  { name: "Healthcare",     emoji: "🏥", gradient: "from-teal-800 via-teal-700 to-cyan-900",     desc: "Patient management & automation solutions" },
  { name: "Manufacturing",  emoji: "🏭", gradient: "from-slate-700 via-slate-600 to-gray-800",   desc: "Process automation & supply chain AI" },
  { name: "Utilities",      emoji: "⚡", gradient: "from-amber-700 via-orange-700 to-yellow-900", desc: "Smart grid monitoring & efficiency systems" },
  { name: "E-commerce",     emoji: "🛒", gradient: "from-purple-800 via-purple-700 to-indigo-900", desc: "Personalisation, CRM & conversion tools" },
];

const stats = [
  { val: "100+",    label: "Projects Delivered",   icon: "🚀" },
  { val: "20+",     label: "Industries Served",     icon: "🏭" },
  { val: "Global",  label: "Clients Worldwide",     icon: "🌍" },
  { val: "AI First",label: "Innovation Focused",    icon: "🤖" },
];

const Industries = () => (
  <>
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="inline-block text-[10px] font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1.5 rounded-full mb-3">
              Industry We Transform
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
              Solutions for Every Industry
            </h2>
          </div>
          <button className="self-start sm:self-auto flex items-center gap-2 text-sm font-semibold text-blue-700 border border-blue-200 bg-blue-50 hover:bg-blue-100 px-4 py-2.5 rounded-xl transition-colors whitespace-nowrap">
            Visit All <HiArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {industries.map((ind) => (
            <div key={ind.name}
              className={`relative rounded-2xl bg-linear-to-br ${ind.gradient} h-52 sm:h-60 lg:h-72 overflow-hidden cursor-pointer group shadow-lg`}>
              {/* Background emoji */}
              <div className="absolute inset-0 flex items-center justify-center text-7xl opacity-10 group-hover:opacity-20 transition-opacity duration-300 select-none">
                {ind.emoji}
              </div>
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <div className="transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-bold text-sm leading-tight">{ind.name}</p>
                  <p className="text-white/70 text-[11px] mt-1 leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300">{ind.desc}</p>
                  <span className="flex items-center gap-1 text-white/80 text-[11px] mt-1.5 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore <HiArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>

              <button className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                <HiArrowRight className="w-3.5 h-3.5 text-white -rotate-45" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Stats bar */}
    <section className="bg-linear-to-r from-blue-950 via-blue-900 to-indigo-900 py-10">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((s, i) => (
            <div key={s.label}
              className={`flex items-center gap-4 ${i !== 0 ? "border-l border-blue-700/50 pl-4 sm:pl-8" : ""}`}>
              <span className="text-2xl sm:text-3xl">{s.icon}</span>
              <div>
                <p className="text-white text-xl sm:text-2xl font-black">{s.val}</p>
                <p className="text-blue-300/80 text-xs sm:text-sm font-medium">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Industries;
