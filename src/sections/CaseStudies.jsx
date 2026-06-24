import { HiArrowRight } from "react-icons/hi";
import hero4 from "../assets/hero4.png";
import hero5 from "../assets/hero5.png";
import hero1 from "../assets/hero1.png";

const cases = [
  {
    img: hero4, tag: "Real Estate",  tagBg: "bg-blue-100 text-blue-700",
    stat: "8X", statLabel: "Increase in Leads",
    title: "How AI Automation Transformed Real Estate Lead Gen",
    desc: "A custom AI agent qualified leads 24/7, cutting response time from hours to seconds.",
  },
  {
    img: hero5, tag: "E-commerce",   tagBg: "bg-purple-100 text-purple-700",
    stat: "8X", statLabel: "Increase in Revenue",
    title: "E-commerce Growth with AI Personalisation Engine",
    desc: "A recommendation engine boosted conversion rates across 40,000 SKUs.",
  },
  {
    img: hero1, tag: "Healthcare",   tagBg: "bg-teal-100 text-teal-700",
    stat: "8X", statLabel: "Faster Patient Intake",
    title: "Automating Patient Workflows for a Healthcare Chain",
    desc: "Smart automation reduced admin time by 80%, freeing staff to focus on patient care.",
  },
];


const CaseStudies = () => (
  <section className="py-16 lg:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-5 lg:px-8">

      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
        <div>
          <span className="inline-block text-[10px] font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1.5 rounded-full mb-3">
            Featured Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
            Real Results. Real Clients.
          </h2>
        </div>
        <button className="self-start sm:self-auto flex items-center gap-2 text-sm font-semibold text-blue-700 border border-blue-200 bg-blue-50 hover:bg-blue-100 px-4 py-2.5 rounded-xl transition-colors whitespace-nowrap">
          View All <HiArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map((c) => (
          <div key={c.title} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer bg-white">
            <div className="relative h-52 overflow-hidden">
              <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
              <span className={`absolute top-4 left-4 text-[10px] font-bold px-2.5 py-1 rounded-full ${c.tagBg}`}>{c.tag}</span>
              <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors">
                <HiArrowRight className="w-4 h-4 text-white -rotate-45" />
              </button>
              <div className="absolute bottom-4 left-4">
                <div className="bg-white rounded-xl px-4 py-2 shadow-lg inline-block">
                  <p className="text-2xl font-black text-blue-900 leading-none">{c.stat}</p>
                  <p className="text-[10px] text-gray-500 font-medium mt-0.5">{c.statLabel}</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-base font-bold text-gray-900 leading-snug mb-2">{c.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{c.desc}</p>
              <button className="flex items-center gap-1.5 text-blue-700 font-semibold text-sm hover:gap-3 transition-all">
                Read Case Study <HiArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudies;
