import { HiArrowRight } from "react-icons/hi";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";

const products = [
  { tag: "SOCIAL MEDIA", name: "Swolio",   desc: "Schedule, publish and analyse your social media presence from one powerful place.",         link: "Explore Swolio",   img: hero1, accent: "from-purple-600 to-purple-900", tagBg: "bg-purple-100 text-purple-700" },
  { tag: "PRODUCTIVITY",  name: "TaskFU",   desc: "Assign, track and complete work faster with smart project management and automation.",       link: "Explore TaskFU",   img: hero2, accent: "from-blue-600 to-blue-900",   tagBg: "bg-blue-100 text-blue-700"   },
  { tag: "CRM",           name: "EasyCRM",  desc: "Convert more leads, close deals faster, and retain clients longer with smart CRM tools.",   link: "Explore EasyCRM",  img: hero3, accent: "from-emerald-600 to-teal-900", tagBg: "bg-emerald-100 text-emerald-700" },
];

const Products = () => (
  <section className="py-16 lg:py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-5 lg:px-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
        <div>
          <span className="inline-block text-[10px] font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1.5 rounded-full mb-3">Our Products</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
            Products Built for Scale
          </h2>
        </div>
        <button className="self-start sm:self-auto flex items-center gap-2 text-sm font-semibold text-blue-700 border border-blue-200 bg-blue-50 hover:bg-blue-100 px-4 py-2.5 rounded-xl transition-colors whitespace-nowrap">
          View All <HiArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.name} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="relative h-48 overflow-hidden">
              <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className={`absolute inset-0 bg-linear-to-t ${p.accent} opacity-70`} />
              <span className={`absolute top-4 left-4 text-[10px] font-bold px-2.5 py-1 rounded-full ${p.tagBg}`}>{p.tag}</span>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-black text-gray-900 mb-2">{p.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{p.desc}</p>
              <button className="flex items-center gap-2 text-blue-700 font-semibold text-sm group/btn hover:gap-3 transition-all">
                {p.link} <HiArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
