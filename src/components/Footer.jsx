import { HiArrowRight } from "react-icons/hi";
import { SiInstagram, SiX, SiYoutube } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

const footerColumns = [
  { title: "Solutions", links: ["Templates", "Website Builder", "Pricing", "Examples"] },
  { title: "Products",  links: ["Blog", "Help Center", "Guides", "API Docs"] },
  { title: "Company",   links: ["About Us", "Team", "Contact", "Privacy"] },
];

const socials = [
  { icon: <SiInstagram className="w-3.5 h-3.5" />, label: "Instagram" },
  { icon: <SiX         className="w-3.5 h-3.5" />, label: "X" },
  { icon: <FaLinkedinIn className="w-3.5 h-3.5" />, label: "LinkedIn" },
  { icon: <SiYoutube   className="w-3.5 h-3.5" />, label: "YouTube" },
];

const Footer = () => (
  <footer className="bg-gray-950 text-white relative overflow-hidden">
    {/* Subtle top gradient */}
    <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-blue-500/30 to-transparent" />

    <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-16 pb-10">
      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10">

        {/* Brand */}
        <div className="col-span-2 sm:col-span-3 lg:col-span-1">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-sm">DR</span>
            </div>
            <span className="text-xl font-black text-white">DeepRank</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
            Building the Future of Business with AI, Automation &amp; Innovation.
          </p>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-2">Stay Updated</p>
          <div className="flex gap-2 max-w-xs">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 min-w-0 bg-gray-800/80 border border-gray-700/50 text-white text-sm px-3 py-2.5 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/50 placeholder-gray-500 transition"
            />
            <button className="shrink-0 bg-blue-600 hover:bg-blue-500 transition px-3 py-2.5 rounded-xl">
              <HiArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Link columns */}
        {footerColumns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-bold text-white mb-4">{col.title}</h3>
            <ul className="flex flex-col gap-3">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div>
          <h3 className="text-sm font-bold text-white mb-4">Contact Us</h3>
          <ul className="flex flex-col gap-3 mb-6">
            <li><a href="mailto:info@deeprank.com" className="text-sm text-gray-400 hover:text-white transition-colors">info@deeprank.com</a></li>
            <li><a href="tel:+1234567890" className="text-sm text-gray-400 hover:text-white transition-colors">+123-456-7890</a></li>
          </ul>
          <div className="flex flex-wrap gap-2">
            {socials.map((s) => (
              <button key={s.label} aria-label={s.label}
                className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-blue-600 border border-gray-700/50 hover:border-blue-600 flex items-center justify-center transition-all">
                {s.icon}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800/60 mt-12 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">© 2026 DeepRank. All rights reserved.</p>
        <div className="flex flex-wrap gap-4 sm:gap-6">
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
            <a key={item} href="#" className="text-gray-500 text-xs hover:text-white transition-colors whitespace-nowrap">{item}</a>
          ))}
        </div>
      </div>
    </div>

    {/* Watermark */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 select-none pointer-events-none">
      <p className="text-[80px] sm:text-[130px] lg:text-[180px] font-black text-white/3 whitespace-nowrap tracking-tighter leading-none">
        DeepRank
      </p>
    </div>
  </footer>
);

export default Footer;
