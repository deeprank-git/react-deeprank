import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useModal } from "../context/ModalContext";
import { HiArrowRight, HiMenu, HiX } from "react-icons/hi";
import {
  HiBolt,
  HiCheckCircle,
  HiLink,
  HiArrowTrendingUp,
} from "react-icons/hi2";

/* ─── Products data ─────────────────────────────────────────── */
const products = [
  {
    name: "Swolio",
    desc: "Social Media Automation Platform",
    icon: "S",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    name: "Tasku",
    desc: "Project & Task Management Platform",
    icon: "T",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    name: "CRMforU",
    desc: "Customer Relationship Management",
    icon: "C",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
];

const whyChoose = [
  {
    icon: <HiBolt className="w-4 h-4 text-blue-600" />,
    title: "Built for Performance",
    desc: "Lightning-fast, secure & reliable platforms.",
  },
  {
    icon: <HiCheckCircle className="w-4 h-4 text-blue-600" />,
    title: "Easy to Use",
    desc: "Intuitive interfaces that your team will love.",
  },
  {
    icon: <HiLink className="w-4 h-4 text-blue-600" />,
    title: "Seamless Integration",
    desc: "Connect with your favorite tools and platforms.",
  },
  {
    icon: <HiArrowTrendingUp className="w-4 h-4 text-blue-600" />,
    title: "Scalable Solutions",
    desc: "Grow your business with products that scale.",
  },
];

/* ─── Services data ─────────────────────────────────────────── */
const serviceCards = [
  {
    name: "AI Automation",
    route: "/ai-automation",
    gradient: "from-blue-900 via-blue-800 to-indigo-900",
    visual: (
      <div className="flex items-center justify-center h-full">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-blue-400/30 border border-blue-300/40 flex items-center justify-center text-lg">
            🤖
          </div>
          <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
        </div>
      </div>
    ),
  },
  {
    name: "SEO",
    route: "/seo",
    gradient: "from-gray-800 via-gray-700 to-gray-900",
    visual: (
      <div className="flex flex-col justify-end h-full px-2 pb-1">
        <div className="flex items-end gap-0.5 mb-1 h-10">
          {[30, 50, 40, 70, 55, 80, 65, 90].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-green-400 opacity-80"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <p className="text-green-400 text-[9px] font-bold">25,670 +156%</p>
      </div>
    ),
  },
  {
    name: "Digital Marketing",
    gradient: "from-blue-700 via-blue-600 to-sky-700",
    visual: (
      <div className="flex flex-col gap-1 items-center justify-center h-full">
        {[
          { l: "f", c: "bg-blue-500" },
          { l: "in", c: "bg-blue-600" },
          { l: "G", c: "bg-red-500" },
        ].map((s) => (
          <div
            key={s.l}
            className={`w-6 h-6 ${s.c} rounded-md flex items-center justify-center text-white text-[10px] font-bold`}
          >
            {s.l}
          </div>
        ))}
      </div>
    ),
  },
  {
    name: "Software Dev",
    gradient: "from-slate-800 via-slate-700 to-slate-900",
    visual: (
      <div className="flex flex-col justify-center h-full px-2 gap-0.5">
        {["const app = () => {", "  return <UI />;", "}"].map((l, i) => (
          <div
            key={i}
            className="text-[8px] font-mono text-green-400 opacity-80"
          >
            {l}
          </div>
        ))}
      </div>
    ),
  },
  {
    name: "Web Development",
    gradient: "from-blue-800 via-blue-700 to-blue-900",
    visual: (
      <div className="flex items-center justify-center h-full">
        <div className="border border-blue-300/30 rounded-lg p-1.5 bg-blue-900/50">
          <div className="bg-blue-300/20 rounded w-12 h-7 flex items-center justify-center">
            <span className="text-[7px] text-white font-semibold">
              DeepRank
            </span>
          </div>
          <div className="flex gap-1 mt-1 justify-center">
            <div className="w-3 h-5 bg-blue-300/20 rounded-sm" />
            <div className="w-8 h-5 bg-blue-300/20 rounded-sm" />
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "NFT Development",
    gradient: "from-purple-900 via-purple-800 to-indigo-900",
    visual: (
      <div className="flex items-center justify-center h-full">
        <div className="relative w-10 h-11">
          <div
            className="w-full h-full bg-purple-400/40 border border-purple-300/50"
            style={{
              clipPath:
                "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-purple-200 text-[9px] font-bold">
            NFT
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Custom Solutions",
    gradient: "from-indigo-800 via-indigo-700 to-blue-900",
    visual: (
      <div className="grid grid-cols-2 gap-1 p-2 h-full items-center">
        {["⚙️", "🔗", "📊", "🛠️"].map((e, i) => (
          <div
            key={i}
            className="w-6 h-6 bg-indigo-400/30 rounded-md flex items-center justify-center text-xs border border-indigo-300/30"
          >
            {e}
          </div>
        ))}
      </div>
    ),
  },
];

const serviceCategories = [
  {
    label: "AI & Automation",
    color: "text-blue-600",
    items: [
      "AI Agents",
      "AI Chatbots",
      "Workflow Automation",
      "Voice AI",
      "Business Intelligence",
    ],
  },
  {
    label: "Growth Marketing",
    color: "text-green-600",
    items: [
      "Google Ads",
      "Meta Ads",
      "LinkedIn Ads",
      "DV360",
      "Social Media Marketing",
      "CRO",
    ],
  },
  {
    label: "Development",
    color: "text-purple-600",
    items: [
      "SaaS Development",
      "CRM Development",
      "API Development",
      "Custom Platforms",
    ],
  },
  {
    label: "Emerging Tech",
    color: "text-orange-600",
    items: [
      "Blockchain",
      "NFT Development",
      "Web3 Development",
      "Smart Contracts",
    ],
  },
];

/* ─── Shared UI ──────────────────────────────────────────────── */
const Chevron = ({ open }) => (
  <svg
    className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

/* ─── Products mega menu ─────────────────────────────────────── */
const ProductMegaMenu = () => (
  <div className="w-215 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden max-h-[82vh] overflow-y-auto mega-menu-animate">
    <div className="grid grid-cols-[200px_1fr_220px]">
      {/* Left — product list */}
      <div className="p-4 border-r border-gray-100">
        <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase px-2 mb-3">
          Our Products
        </p>
        {products.map((p) => (
          <div
            key={p.name}
            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/60 cursor-pointer group transition-colors"
          >
            <div
              className={`w-8 h-8 shrink-0 rounded-lg flex items-center justify-center font-bold text-sm ${p.iconBg} ${p.iconColor}`}
            >
              {p.icon}
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm leading-tight">
                {p.name}
              </p>
              <p className="text-[11px] text-gray-400 leading-snug mt-0.5">
                {p.desc}
              </p>
            </div>
          </div>
        ))}
        <div className="mt-3 pt-3 border-t border-gray-100">
          <button className="w-full flex items-center justify-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 py-2 rounded-xl transition-colors">
            View All Products <HiArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Middle — product overview */}
      <div className="p-5">
        <p className="text-[10px] font-bold tracking-widest text-blue-600 uppercase mb-2">
          Product Overview
        </p>
        <h3 className="text-lg font-bold text-gray-900 leading-snug mb-2">
          Powerful Products.
          <br />
          Built for Businesses.
        </h3>
        <p className="text-xs text-gray-500 leading-relaxed mb-4">
          Discover our suite of products designed to automate, manage, and grow
          your business.
        </p>
        {/* Mini dashboard */}
        <div className="rounded-xl border border-gray-200 bg-gray-50 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white px-3 py-1.5 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            </div>
            <span className="text-[9px] font-medium opacity-80">
              DeepRank Dashboard
            </span>
            <span className="text-[9px] opacity-50">Overview</span>
          </div>
          <div className="p-2.5 grid grid-cols-4 gap-1.5">
            {[
              { l: "Revenue", v: "₹24.8M", c: "+34.5%" },
              { l: "Users", v: "12,540", c: "+18.8%" },
              { l: "Tasks", v: "8,742", c: "+32%" },
              { l: "Conv.", v: "34.6%", c: "+12.7%" },
            ].map((s) => (
              <div key={s.l} className="bg-white rounded-lg p-1.5 shadow-sm">
                <p className="text-[8px] text-gray-400">{s.l}</p>
                <p className="text-[10px] font-bold text-gray-800">{s.v}</p>
                <p className="text-[8px] text-green-500 font-medium">{s.c}</p>
              </div>
            ))}
          </div>
          <div className="px-2.5 pb-2.5">
            <div className="bg-white rounded-lg p-1.5 h-12 flex items-end gap-0.5">
              {[40, 55, 35, 70, 60, 80, 65, 90, 75, 85].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-blue-500 opacity-70"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right — why choose */}
      <div className="p-5 bg-gray-50/80 border-l border-gray-100">
        <p className="text-[10px] font-bold tracking-widest text-blue-600 uppercase mb-2">
          Why Choose Us?
        </p>
        <h3 className="text-sm font-bold text-gray-900 leading-snug mb-4">
          All-in-One Solutions to Scale
        </h3>
        <div className="flex flex-col gap-3 mb-4">
          {whyChoose.map((item) => (
            <div key={item.title} className="flex items-start gap-2.5">
              <div className="w-6 h-6 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center mt-0.5">
                {item.icon}
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-900">
                  {item.title}
                </p>
                <p className="text-[11px] text-gray-400 leading-snug">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-blue-900 rounded-xl p-3 text-white">
          <p className="font-bold text-xs mb-1">Need Help Choosing?</p>
          <p className="text-[11px] text-blue-300 mb-2.5">
            Our experts are here to help you find the right product.
          </p>
          <button className="w-full bg-white text-blue-900 text-[11px] font-semibold py-1.5 rounded-lg flex items-center justify-center gap-1 hover:bg-blue-50 transition">
            Book a Free Call <HiArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

/* ─── Services mega menu ─────────────────────────────────────── */
const ServiceMegaMenu = ({ onClose }) => (
  <div className="w-245 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-100 max-h-[82vh] overflow-y-auto mega-menu-animate">
    {/* Service cards + featured */}
    <div className="grid grid-cols-[1fr_220px]">
      <div className="p-5">
        <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-3">
          Our Services
        </p>
        <div className="grid grid-cols-4 gap-2.5 mb-2.5">
          {serviceCards.slice(0, 4).map((s) => (
            <Link
              key={s.name}
              to={s.route}
              onClick={onClose}
              className={`block rounded-xl bg-gradient-to-br ${s.gradient} h-24 group overflow-hidden relative hover:scale-[1.03] transition-transform duration-200 shadow-sm`}
            >
              <div className="h-14 overflow-hidden">{s.visual}</div>

              <div className="px-2 pb-2">
                <p className="text-white text-[10px] font-semibold truncate">
                  {s.name}
                </p>

                <span className="text-white/60 text-[8px] flex items-center gap-0.5">
                  Explore <HiArrowRight className="w-2 h-2" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-2.5">
          {serviceCards.slice(4).map((s) => (
            <div
              key={s.name}
              className={`rounded-xl bg-gradient-to-br ${s.gradient} h-24 cursor-pointer group overflow-hidden relative hover:scale-[1.03] transition-transform duration-200 shadow-sm`}
            >
              <div className="h-14 overflow-hidden">{s.visual}</div>
              <div className="px-2 pb-2">
                <p className="text-white text-[10px] font-semibold truncate">
                  {s.name}
                </p>
                <span className="text-white/60 text-[8px] flex items-center gap-0.5 group-hover:text-white/90 transition">
                  Explore <HiArrowRight className="w-2 h-2" />
                </span>
              </div>
            </div>
          ))}
          <div />
        </div>
      </div>

      {/* Featured sidebar */}
      <div className="bg-gray-50 border-l border-gray-100 p-4 flex flex-col">
        <p className="text-[10px] font-bold tracking-widest text-blue-600 uppercase mb-2">
          Featured Service
        </p>
        <h3 className="text-base font-bold text-gray-900 leading-snug mb-1.5">
          AI Automation
        </h3>
        <p className="text-[11px] text-gray-500 leading-relaxed mb-3">
          Build AI employees that work 24/7, automate workflows, qualify leads
          and transform efficiency.
        </p>
        <Link
          to="/ai-automation"
          onClick={onClose}
          className="self-start flex items-center gap-1 bg-blue-900 text-white text-[11px] font-semibold px-3 py-1.5 rounded-lg hover:bg-blue-800 transition mb-3"
        >
          Learn More <HiArrowRight className="w-3 h-3" />
        </Link>
        <div className="flex-1 bg-gradient-to-br from-blue-900 to-indigo-900 rounded-xl flex items-center justify-center mb-3 min-h-16">
          <span className="text-4xl">🤖</span>
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {[
            { v: "200+", l: "AI Workflows" },
            { v: "24/7", l: "Operations" },
            { v: "80%+", l: "Time Saved" },
            { v: "3X", l: "Efficiency" },
          ].map((s) => (
            <div
              key={s.l}
              className="bg-white rounded-lg p-1.5 shadow-sm text-center border border-gray-100"
            >
              <p className="text-xs font-bold text-blue-900">{s.v}</p>
              <p className="text-[9px] text-gray-400">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Categories + CTA */}
    <div className="border-t border-gray-100 bg-gray-50/60 px-5 py-4 grid grid-cols-[1fr_1fr_1fr_1fr_180px] gap-5">
      {serviceCategories.map((cat) => (
        <div key={cat.label}>
          <p
            className={`text-[10px] font-bold tracking-widest uppercase mb-2.5 ${cat.color}`}
          >
            {cat.label}
          </p>
          <ul className="flex flex-col gap-1.5">
            {cat.items.map((item) => (
              <li
                key={item}
                className="text-[11px] text-gray-500 hover:text-blue-700 cursor-pointer transition-colors"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="bg-white rounded-xl border border-gray-200 p-3 shadow-sm flex flex-col justify-between">
        <div>
          <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center mb-2">
            <svg
              className="w-4 h-4 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </div>
          <p className="text-xs font-bold text-gray-900 mb-1">Need Help?</p>
          <p className="text-[11px] text-gray-400 leading-snug">
            Book a free discovery call with our experts.
          </p>
        </div>
        <button className="mt-3 flex items-center gap-1 text-blue-600 text-[11px] font-semibold hover:text-blue-800 transition">
          Schedule a Call <HiArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  </div>
);

/* ─── Navbar ─────────────────────────────────────────────────── */
const Navbar = () => {
  const { open: openModal } = useModal();
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const hideTimeout = useRef(null);

  const openMenu = (name) => {
    clearTimeout(hideTimeout.current);
    setActiveMenu(name);
  };
  const closeMenu = () => {
    hideTimeout.current = setTimeout(() => setActiveMenu(null), 150);
  };
  const closeMenuImmediate = () => {
    clearTimeout(hideTimeout.current);
    setActiveMenu(null);
  };
  const toggleMenu = (name) => setActiveMenu((v) => (v === name ? null : name));

  return (
    <>
      {/* Backdrop */}
      {activeMenu && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px]"
          onClick={() => setActiveMenu(null)}
        />
      )}

      <header className="relative w-full bg-white/95 backdrop-blur-sm border-b border-gray-100/80 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-sm">DR</span>
            </div>
            <h1 className="text-xl lg:text-2xl font-bold tracking-tight text-gray-900">
              DeepRank
            </h1>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex">
            <ul className="flex items-center gap-8 text-gray-600 text-sm font-medium">
              <li
                className="cursor-pointer hover:text-blue-700 transition-colors"
                onMouseEnter={() => openMenu("products")}
                onMouseLeave={closeMenu}
              >
                <span
                  className={`flex items-center gap-1 py-1 ${activeMenu === "products" ? "text-blue-700" : ""}`}
                  onClick={() => toggleMenu("products")}
                >
                  Products <Chevron open={activeMenu === "products"} />
                </span>
              </li>

              <li
                className="cursor-pointer hover:text-blue-700 transition-colors"
                onMouseEnter={() => openMenu("services")}
                onMouseLeave={closeMenu}
              >
                <span
                  className={`flex items-center gap-1 py-1 ${activeMenu === "services" ? "text-blue-700" : ""}`}
                  onClick={() => toggleMenu("services")}
                >
                  Services <Chevron open={activeMenu === "services"} />
                </span>
              </li>

              <li className="cursor-pointer hover:text-blue-700 transition-colors py-1">
                <Link to="/case-study" className="hover:text-blue-700 transition-colors">Case Study</Link>
              </li>
              <li className="cursor-pointer hover:text-blue-700 transition-colors py-1" onClick={openModal}>
                Contact Us
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={openModal}
              className="hidden lg:flex bg-blue-900 text-white px-5 py-2.5 rounded-xl items-center gap-2 text-sm font-semibold hover:bg-blue-800 transition-colors shadow-md shadow-blue-900/20">
              Book Discovery Call <HiArrowRight className="w-4 h-4" />
            </button>
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 bg-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <HiX className="w-5 h-5" />
              ) : (
                <HiMenu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Products mega menu — full-width container, flex-centered */}
        {activeMenu === "products" && (
          <div
            className="absolute top-full left-0 w-full flex justify-center px-4 z-50 pt-2"
            onMouseEnter={() => openMenu("products")}
            onMouseLeave={closeMenu}
          >
            <ProductMegaMenu />
          </div>
        )}

        {/* Services mega menu — full-width container, flex-centered */}
        {activeMenu === "services" && (
          <div
            className="absolute top-full left-0 w-full flex justify-center px-4 z-50 pt-2"
            onMouseEnter={() => openMenu("services")}
            onMouseLeave={closeMenu}
          >
            <ServiceMegaMenu onClose={closeMenuImmediate} />
          </div>
        )}

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 z-50">
            <div className="px-5 py-5">
              <ul className="flex flex-col gap-1 text-gray-700 font-medium text-sm mb-5">
                {[
                  { label: "Products",   to: null,           modal: false },
                  { label: "Services",   to: null,           modal: false },
                  { label: "Case Study", to: "/case-study",  modal: false },
                  { label: "Contact Us", to: null,           modal: true  },
                ].map((item) => (
                  <li
                    key={item.label}
                    className="py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
                    onClick={() => { setIsOpen(false); if (item.modal) openModal(); }}
                  >
                    {item.to ? <Link to={item.to} className="block w-full">{item.label}</Link> : item.label}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => { setIsOpen(false); openModal(); }}
                className="w-full bg-blue-900 text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-blue-800 transition text-sm"
              >
                Book Discovery Call <HiArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
