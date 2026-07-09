import { useEffect, useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import { SiGoogle, SiBinance, SiAirbnb, SiMeta, SiStripe } from "react-icons/si";
import { BsMicrosoft } from "react-icons/bs";
import { useModal } from "../context/ModalContext";
import hero5 from "../assets/hero5.png";
import automationBg from "../assets/automationBg.png";
import webDevelopmentBg from "../assets/webDevelopmentBg.png";
import marketingBg from "../assets/marketingBg.png";

const heroImages = [hero5, automationBg, webDevelopmentBg, marketingBg];

const companies = [
  { icon: <SiGoogle className="text-xl text-[#4285F4]" />, name: "Google" },
  { icon: <BsMicrosoft className="text-xl text-[#F25022]" />, name: "Microsoft" },
  { icon: <SiBinance className="text-xl text-[#F0B90B]" />, name: "Binance" },
  { icon: <SiAirbnb className="text-xl text-[#FF5A5F]" />, name: "Airbnb" },
  { icon: <SiMeta className="text-xl text-[#4267B2]" />, name: "Meta" },
  { icon: <SiStripe className="text-xl text-[#635BFF]" />, name: "Stripe" },
];

const Hero = () => {
  const { open } = useModal();
  const [count, setCount] = useState(0);
  const [bgIdx, setBgIdx] = useState(0);

  useEffect(() => {
    let c = 0;
    const t = setInterval(() => {
      c += 2;
      if (c >= 100) { setCount(100); clearInterval(t); }
      else setCount(c);
    }, 20);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setBgIdx((i) => (i + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="overflow-hidden">

      {/* ── Hero image with text overlaid ── */}
      <div>
        <div className="relative overflow-hidden">
          <img
            src={heroImages[bgIdx]}
            alt="AI Solutions"
            className="w-full h-120 sm:h-135 lg:h-150  object-center transition-opacity duration-700"
          />

          {/* Text overlay — centered on the image */}
          <div className="absolute inset-x-0 top-0 flex flex-col items-center text-center px-5 pt-4">
            <p className="text-lg font-bold tracking-[0.22em] text-[#08104A] uppercase my-5 mb-3">
              AI. AUTOMATION. INNOVATION
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#08104A] leading-[1.1] tracking-tight mb-10">
              BuiLding The Future of Business
            </h1>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={open}
                className="inline-flex items-center gap-2 bg-[#08104A] hover:bg-blue-900 text-white px-7 py-3 rounded-full font-semibold text-base transition-all shadow-lg cursor-pointer"
              >
                Book a Call <HiArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center gap-2 bg-white/80 border-2 border-[#08104A] text-[#08104A] hover:bg-[#08104A] hover:text-white px-7 py-3 rounded-full font-semibold text-base transition-all cursor-pointer">
                Explore Solutions <HiArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Floating stat card */}
          <div
            className="absolute bottom-0 right-0 bg-blue-50 px-24 py-4 shadow-2xl border border-gray-100 text-right"
            style={{
              clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)"
            }}
          >
            <p className="text-6xl font-black text-green-500 leading-none">{count}+</p>
            <p className="text-xl text-black font-medium mt-1">Solution Delivered</p>
          </div>
        </div>
      </div>

      {/* ── Trusted companies ── */}
      <div
        className="py-10 px-4"
        style={{
          background: "linear-gradient(180deg, #F0F2F5 0%, #DBE5ED 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-5 lg:gap-10">

            <div className="shrink-0 text-center sm:text-left">
              <p className="text-[14px] font-bold tracking-widest text-blue-500 uppercase">Trusted by</p>
              <p className="text-base font-bold text-orange-500 mt-0.5">Innovative Companies</p>
            </div>

            <div className="w-px h-10 bg-gray-200 hidden sm:block shrink-0" />

            <div className="flex-1 w-full marquee-wrapper">
              <div className="marquee-track">
                {companies.concat(companies).map((c, i) => (
                  <div key={`${c.name}-${i}`} className="flex items-center gap-2 px-5 py-2 min-w-max">
                    {c.icon}
                    <span className="text-base font-semibold text-gray-600">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
