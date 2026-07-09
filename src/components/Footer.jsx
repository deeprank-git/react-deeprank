import { SiInstagram, SiX, SiYoutube } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

const footerColumns = [
  {
    title: "Solutions",
    links: ["Templates", "Resume Builder", "Pricing", "Examples"],
  },
  {
    title: "Products",
    links: ["Blog", "Help Center", "Guides", "API Docs"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Contact", "Privacy"],
  },
];

const socials = [
  { icon: <SiInstagram className="w-4 h-4" />, label: "Instagram" },
  { icon: <FaLinkedinIn className="w-4 h-4" />, label: "LinkedIn" },
  { icon: <SiX className="w-4 h-4" />, label: "X" },
  { icon: <SiYoutube className="w-4 h-4" />, label: "YouTube" },
];

const Footer = () => (
  <footer className="text-white">

    {/* Accent strip — echoes the three product colors */}
    <div className="flex h-1">
      <div className="flex-1 bg-[#6C5CE7]" />
      <div className="flex-1 bg-[#10B981]" />
      <div className="flex-1 bg-[#2563EB]" />
    </div>

    <div style={{ backgroundColor: "#08104A" }} className="pt-11 pb-6">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-8">

          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <p className="text-2xl font-black text-white mb-2">DeepRank</p>
            <p className="text-sm text-white/60 leading-relaxed">
              Building the future of business.
            </p>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-lg font-bold text-white uppercase tracking-wide mb-3">{col.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/55 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white uppercase tracking-wide mb-3">Contact Us</h3>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href="mailto:info@deeprank.com" className="text-sm text-white/55 hover:text-white transition-colors">
                  info@deeprank.com
                </a>
              </li>
              <li>
                <a href="tel:+919332949176" className="text-sm text-white/55 hover:text-white transition-colors">
                  +91-9332949176
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-7 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50">© 2026 DeepRank. All rights reserved.</p>
          <div className="flex items-center gap-2.5">
            {socials.map((s) => (
              <button
                key={s.label}
                aria-label={s.label}
                className="w-8 h-8 rounded-lg border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all"
              >
                {s.icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;