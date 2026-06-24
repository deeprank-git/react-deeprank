import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { SiGoogle, SiBinance, SiAirbnb, SiMeta, SiStripe } from "react-icons/si";
import { BsMicrosoft } from "react-icons/bs";
import { HiArrowRight } from "react-icons/hi";

import hero4 from "../assets/hero4.png";
import hero from "../assets/hero.png";
import hero5 from "../assets/hero5.png";

const companies = [
  { icon: <SiGoogle    className="text-2xl text-[#4285F4]" />, name: "Google"    },
  { icon: <BsMicrosoft className="text-2xl text-[#F25022]" />, name: "Microsoft" },
  { icon: <SiBinance   className="text-2xl text-[#F0B90B]" />, name: "Binance"   },
  { icon: <SiAirbnb    className="text-2xl text-[#FF5A5F]" />, name: "Airbnb"    },
  { icon: <SiMeta      className="text-2xl text-[#4267B2]" />, name: "Meta"      },
  { icon: <SiStripe    className="text-2xl text-[#635BFF]" />, name: "Stripe"    },
];

const Hero = () => {
  const images = [hero4, hero, hero5];
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 2;
      if (current >= 100) { current = 100; clearInterval(interval); }
      setCounter(current);
    }, 24);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Hero Swiper */}
      <div className="relative">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="w-full hero-swiper"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="relative">
                <img src={img} alt="" className="w-full h-[460px] sm:h-[560px] lg:h-[720px] object-cover" />
                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Hero text overlay */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 pb-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full mb-5 tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            AI · Automation · Innovation
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white max-w-5xl leading-[1.1] tracking-tight mb-6 drop-shadow-2xl">
            Building The Future<br className="hidden sm:block" /> of Business
          </h1>
          <p className="text-white/80 text-sm sm:text-base max-w-xl mb-8 leading-relaxed">
            AI-powered solutions that automate workflows, accelerate growth, and transform how businesses operate.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-blue-600/30">
              Book a Discovery Call <HiArrowRight className="w-4 h-4" />
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all">
              Explore Solutions <HiArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Counter card */}
        <div className="absolute bottom-6 right-6 z-30 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-2xl border border-white/60">
          <p className="text-4xl sm:text-5xl font-black text-green-500 leading-none">{counter}+</p>
          <p className="text-sm text-gray-500 font-medium mt-1">Solutions Delivered</p>
        </div>
      </div>

      {/* Trusted logos */}
      <div className="bg-gradient-to-r from-gray-50 via-white to-gray-50 border-y border-gray-100 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-10">
            <div className="shrink-0 text-center sm:text-left">
              <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Trusted by</p>
              <p className="text-lg font-bold text-gray-800">Innovative Companies</p>
            </div>
            <div className="w-px h-10 bg-gray-200 hidden sm:block shrink-0" />
            <div className="flex-1 w-full marquee-wrapper">
              <div className="marquee-track">
                {companies.concat(companies).map((c, i) => (
                  <div key={`${c.name}-${i}`} className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-xl shadow-sm border border-gray-100 min-w-max">
                    {c.icon}
                    <span className="text-sm font-semibold text-gray-600">{c.name}</span>
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
