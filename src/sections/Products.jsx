import { HiArrowRight } from "react-icons/hi";
import Sowlio from "../assets/Sowlio.png";
import Taskfu from "../assets/Taskfu.png";
import EasyCRM from "../assets/EasyCRM.png";

const products = [
  {
    name: "Sowlio",
    desc: "Build Your Professional Identity in Minutes",
    link: "Explore Swolio",
    img: Sowlio,
    linkColor: "text-blue-600",
  },
  {
    name: "TaskfU",
    desc: "Projects and task Management reimagined.",
    link: "Explore Taskfu",
    img: Taskfu,
    linkColor: "text-green-500",
  },
  {
    name: "EasyCRM",
    desc: "Customer Relationship Management built for Growth.",
    link: "Explore EasyCRM",
    img: EasyCRM,
    linkColor: "text-blue-600",
  },
];

const Products = () => (
  <section className="py-14 lg:py-20 bg-white">
    <div className="max-w-7xl mx-auto px-5 lg:px-8">

      {/* Header */}
      <div className="mb-10">
        <p className="text-2xl font-bold tracking-widest text-[#08104A] uppercase mb-2">
          Our Products
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#08104A] leading-tight">
          Products Built for Scale
        </h2>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((p) => (
          <div
            key={p.name}
            className="flex bg-gray-50 rounded-2xl border border-gray-100 h-68 px-3 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 min-h-48"
          >
            {/* Left — text */}
            <div className="flex flex-col justify-between p-6 flex-1 min-w-0">
              <div>
                <h3 className="text-lg font-black text-[#08104A] mb-2">{p.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
              <button className={`flex items-center gap-1.5 font-semibold text-sm mt-5 hover:gap-3 transition-all ${p.linkColor}`}>
                {p.link} <HiArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right — image */}
            <div className="w-44 shrink-0 flex items-center justify-center overflow-hidden">
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-full object-contain object-center"
              />
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Products;
