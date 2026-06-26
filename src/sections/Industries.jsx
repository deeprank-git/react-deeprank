import { HiArrowRight } from "react-icons/hi";
import HealthCare from "../assets/HealthCare.png";
import Ecommerce from "../assets/Ecommerce.png";
import Manufacture from "../assets/Manufacturing.png";
import RealEstate from "../assets/RealEstate.png";
import Utilities from "../assets/Utilities.png";


const industries = [
  { name: "Real Estate", img: RealEstate, desc: "AI-powered listings, lead gen & virtual tours" },
  { name: "Healthcare", img: HealthCare, desc: "Patient management & automation solutions" },
  { name: "Manufacturing", img: Manufacture, desc: "Process automation & supply chain AI" },
  { name: "Utilities", img: Utilities, desc: "Smart grid monitoring & efficiency systems" },
  { name: "E-commerce", img: Ecommerce, desc: "Personalisation, CRM & conversion tools" },
];

const stats = [
  { val: "100+", label: "Project Delivered", icon: "🚀" },
  { val: "20+", label: "Industries Served", icon: "🏭" },
  { val: "Global", label: "Clients Worldwide", icon: "🌍" },
  { val: "AI First", label: "Innovation Focused", icon: "🤖" },
];

const Industries = () => (
  <>
    <section className="py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="inline-block text-[10px] font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1.5 rounded-full mb-3">
              Industry We Transform
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#08104A] leading-tight">
              Solutions for Every Industry
            </h2>
          </div>
          <button className="self-start sm:self-auto flex items-center gap-2 text-sm font-semibold text-blue-700 border border-blue-200 bg-blue-50 hover:bg-blue-100 px-4 py-2.5 rounded-xl transition-colors whitespace-nowrap">
            Visit All Industry <HiArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="relative rounded-2xl overflow-hidden h-52 sm:h-60 lg:h-72 cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={ind.img}
                alt={ind.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-black/5" />

              {/* Name always visible at bottom */}
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <p className="text-white font-bold text-sm leading-tight">{ind.name}</p>
                <p className="text-white/70 text-[11px] mt-1 leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {ind.desc}
                </p>
              </div>

              {/* Arrow button */}
              <button className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors">
                <HiArrowRight className="w-3.5 h-3.5 text-white -rotate-45" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Stats bar */}
    <section className="bg-[#08104A] py-10">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex items-center gap-4 ${i !== 0 ? "border-l border-white/10 pl-4 sm:pl-8" : ""}`}
            >
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
