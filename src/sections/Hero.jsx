import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { SiGoogle, SiBinance, SiAirbnb, SiMeta, SiStripe } from "react-icons/si";
import { BsMicrosoft } from "react-icons/bs";

import hero4 from "../assets/hero4.png";
import hero from "../assets/hero.png";
import hero5 from "../assets/hero5.png";

const Hero = () => {
  const images = [hero4, hero, hero5];

  const companies = [
    { icon: <SiGoogle className="text-4xl text-[#4285F4]" />, name: "Google" },
    { icon: <BsMicrosoft className="text-4xl text-[#F25022]" />, name: "Microsoft" },
    { icon: <SiBinance className="text-4xl text-[#F0B90B]" />, name: "Binance" },
    { icon: <SiAirbnb className="text-4xl text-[#FF5A5F]" />, name: "Airbnb" },
    { icon: <SiMeta className="text-4xl text-[#4267B2]" />, name: "Meta" },
    { icon: <SiStripe className="text-4xl text-[#635BFF]" />, name: "Stripe" },
  ];

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const target = 100;
    const duration = 1200;
    const stepTime = Math.max(Math.floor(duration / target), 10);
    let current = 0;

    const interval = setInterval(() => {
      current += 2;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setCounter(current);
    }, stepTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative  pt-8 lg:pt-10 bg-white overflow-hidden">
      {/* Hero Image Section */}
      <div className="relative ">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000 }}
          loop
          className="w-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt=""
                className="w-full h-[550px] lg:h-[700px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 z-20 flex flex-col items-center text-center pt-20">
          {/* Badge */}
          <div className="text-center">
            <p className="text-[#0B0F9C] font-bold uppercase tracking-wider">
              AI. AUTOMATION. INNOVATION
            </p>
          </div>

          {/* Heading */}
          <div className="text-center mt-8">
            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold text-black max-w-6xl mx-auto leading-tight">
              Building The Future of Business
            </h1>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="bg-[#0B0F9C] text-white px-8 py-4 rounded-lg">
              Book a Call →
            </button>

            <button className="bg-white border border-gray-300 px-8 py-4 rounded-lg">
              Explore Solutions →
            </button>
          </div>
        </div>

        {/* Counter Card */}
        <div className="absolute bottom-0 right-0 bg-white px-10 py-2 z-30 shadow-2xl">
          <h2 className="text-6xl font-bold text-green-500">{counter}+</h2>

          <p className="text-xl mt-2 text-gray-700">Solutions Delivered</p>
        </div>
      </div>


      {/* Trusted Logos */}
      <section className="bg-[#F8F8F8] py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Left Text */}
            <div className="lg:min-w-[280px]">
              <h3 className="text-3xl font-medium text-gray-900">Trusted by</h3>

              <h3 className="text-3xl font-medium text-gray-900">
                Innovative Companies
              </h3>
            </div>

            {/* Logo Slider */}
            <div className="flex-1 w-full marquee-wrapper">
              <div className="marquee-track text-gray-500">
                {companies.concat(companies).map((company, index) => (
                  <div
                    key={`logo-${company.name}-${index}`}
                    className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl shadow-sm min-w-[120px]"
                  >
                    {company.icon}
                    <span className="text-sm font-semibold">{company.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
