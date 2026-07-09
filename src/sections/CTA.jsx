import { HiArrowRight } from "react-icons/hi";
import { useModal } from "../context/ModalContext";

const CTA = () => {
  const { open } = useModal();

  return (
    <section className="py-20 mx-7 mb-5 relative overflow-hidden rounded-4xl" style={{ background: "linear-gradient(135deg, #c4d8e5 0%, #e8ecef 50%, #c4d8e5 100%)" }}>

      <div className="relative max-w-3xl mx-auto px-5 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#08104A] leading-tight mb-5">
          Let's Build the Future Together
        </h2>
        <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-10 max-w-xl mx-auto">
          Share Your Idea or Challenge, and let's create technology that drives{" "}
          <span className="text-orange-500 font-semibold">Real</span>{" "}
          <span className="text-gray-700 font-semibold">Results.</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={open}
            className="inline-flex items-center justify-center gap-2 bg-[#08104A] hover:bg-blue-900 text-white px-8 py-4 rounded-full font-semibold text-sm transition-all shadow-lg"
          >
            Book a Discovery Call <HiArrowRight className="w-4 h-4" />
          </button>


        </div>
      </div>
    </section>
  );
};

export default CTA;
