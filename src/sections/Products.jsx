import { HiArrowRight } from "react-icons/hi";

const products = [
  {
    name: "Sowlio",
    desc: "Build Your Professional Identity in Minutes",
    link: "Explore Sowlio",
    accent: "#6C5CE7",
    panelBg: "#B0A5F4",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <rect x="8" y="10" width="40" height="36" rx="6" stroke="#6C5CE7" strokeWidth="2.5" />
        <circle cx="21" cy="26" r="6" stroke="#6C5CE7" strokeWidth="2.5" />
        <path d="M13 40c1.5-5 6-7 8-7s6.5 2 8 7" stroke="#6C5CE7" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="34" y1="20" x2="42" y2="20" stroke="#6C5CE7" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="34" y1="26" x2="42" y2="26" stroke="#6C5CE7" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "TaskfU",
    desc: "Projects and task Management reimagined.",
    link: "Explore TaskfU",
    accent: "#10B981",
    panelBg: "#B8ECD5",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <rect x="8" y="10" width="13" height="36" rx="3" stroke="#10B981" strokeWidth="2.5" />
        <rect x="21.5" y="10" width="13" height="24" rx="3" stroke="#10B981" strokeWidth="2.5" />
        <rect x="35" y="10" width="13" height="30" rx="3" stroke="#10B981" strokeWidth="2.5" />
        <path d="M11.5 20l2 2 4-4.5" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M25 17l2 2 4-4.5" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "EasyCRM",
    desc: "Customer Relationship Management built for Growth.",
    link: "Explore EasyCRM",
    accent: "#2563EB",
    panelBg: "#BFD6FC",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <circle cx="14" cy="16" r="4.5" stroke="#2563EB" strokeWidth="2.5" />
        <circle cx="42" cy="16" r="4.5" stroke="#2563EB" strokeWidth="2.5" />
        <circle cx="28" cy="40" r="4.5" stroke="#2563EB" strokeWidth="2.5" />
        <path d="M17 19l8 17M39 19l-8 17M18.5 16h19" stroke="#2563EB" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const Products = () => (
  <section className="py-14 lg:py-20 bg-white">
    <div className="max-w-7xl mx-auto px-5 lg:px-8">

      {/* Header */}
      <div className="mb-10">
        <p className="text-xl font-bold tracking-widest text-[#08104A] uppercase mb-1">
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
            className="flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            {/* Top — icon panel */}
            <div
              className="h-32 flex items-center justify-center shrink-0"
              style={{ backgroundColor: p.panelBg }}
            >
              {p.icon}
            </div>

            {/* Bottom — text */}
            <div className="flex flex-col justify-between p-6 flex-1">
              <div>
                <h3 className="text-lg font-black text-[#08104A] mb-2">{p.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
              <button
                className="flex items-center gap-1.5 font-semibold text-sm mt-5 hover:gap-3 transition-all"
                style={{ color: p.accent }}
              >
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