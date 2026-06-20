import { HiArrowRight } from "react-icons/hi";

const CTA = () => (
  <section className="py-20 relative overflow-hidden bg-gray-950">
    {/* Background grid */}
    <div className="absolute inset-0 opacity-[0.03]"
      style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)", backgroundSize: "40px 40px" }}
    />
    {/* Glow blobs */}
    <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

    <div className="relative max-w-3xl mx-auto px-5 text-center">
      <span className="inline-block text-[10px] font-bold tracking-widest text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full mb-5">
        Let's Work Together
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
        Let's Build the Future<br className="hidden sm:block" /> Together
      </h2>
      <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-10 max-w-xl mx-auto">
        Share your idea or challenge, and let's create technology that drives{" "}
        <span className="text-blue-400 font-semibold">Real Results.</span>
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-blue-600/30">
          Book a Discovery Call <HiArrowRight className="w-4 h-4" />
        </button>
        <button className="flex items-center justify-center gap-2 border border-white/10 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-sm transition-all">
          Explore Solutions <HiArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  </section>
);

export default CTA;
