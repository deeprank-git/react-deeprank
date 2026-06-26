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
  { icon: <SiInstagram className="w-4 h-4" />,  label: "Instagram" },
  { icon: <FaLinkedinIn className="w-4 h-4" />, label: "LinkedIn" },
  { icon: <SiX className="w-4 h-4" />,          label: "X" },
  { icon: <SiYoutube className="w-4 h-4" />,    label: "YouTube" },
];

const Footer = () => (
  <footer style={{ backgroundColor: "#03045e" }} className="text-white relative overflow-hidden">

    {/* Background watermark */}
    <div className="absolute top-0 inset-x-0 flex items-center justify-center pointer-events-none select-none overflow-hidden h-36">
      <p className="text-[96px] sm:text-[130px] lg:text-[160px] font-black whitespace-nowrap tracking-tighter leading-none"
        style={{ color: "rgba(255,255,255,0.06)" }}>
        DeepRank
      </p>
    </div>

    <div className="max-w-6xl mx-auto px-5 lg:px-8 pt-24 pb-8 relative z-10">

      {/* Main card */}
      <div className="border border-white/20 rounded-2xl p-8 lg:p-10">

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10">

          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <p className="text-2xl font-black text-white mb-3">DeepRank</p>
            <p className="text-sm text-white/70 leading-relaxed">
              Building the Future of Business
            </p>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-bold text-white mb-4">{col.title}</h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4">Contact Us</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="mailto:info@deeprank.com" className="text-sm text-white/60 hover:text-white transition-colors">
                  info@deeprank.com
                </a>
              </li>
              <li>
                <a href="tel:+919332949176" className="text-sm text-white/60 hover:text-white transition-colors">
                  +91-9332949176
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/15 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">© 2026 DeepRank. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <button
                key={s.label}
                aria-label={s.label}
                className="w-9 h-9 rounded-lg border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-all"
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
