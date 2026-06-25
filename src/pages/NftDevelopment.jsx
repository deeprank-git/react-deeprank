import React from "react";
import {
  HiArrowRight,
  HiOutlineCube,
  HiOutlineSparkles,
  HiOutlineShieldCheck,
  HiOutlineDeviceMobile,
  HiOutlineCog,
  HiOutlineChartBar,
} from "react-icons/hi";
import heroImage from "../assets/hero4.png";
import project1 from "../assets/hero1.png";
import project2 from "../assets/hero2.png";
import project3 from "../assets/hero3.png";
import CTA from "../sections/CTA";
import Process from "../sections/Process";
import nftdevelopment from "../assets/nftdevelopment.png";

const serviceTiles = [
  {
    title: "NFT Marketplace Development",
    description:
      "Custom NFT marketplace development with advanced features and seamless user experience.",
    icon: <HiOutlineCube className="w-6 h-6" />,
  },
  {
    title: "NFT Collection Development",
    description:
      "Create unique NFT collections with generative art, metadata generation and rarity systems.",
    icon: <HiOutlineSparkles className="w-6 h-6" />,
  },
  {
    title: "Smart Contract Development",
    description:
      "Secure, audited and gas-optimized smart contracts for your NFT project.",
    icon: <HiOutlineShieldCheck className="w-6 h-6" />,
  },
  {
    title: "Wallet & DApp Integration",
    description:
      "Seamless wallet integration and decentralized app development for Web3.",
    icon: <HiOutlineDeviceMobile className="w-6 h-6" />,
  },
  {
    title: "NFT Launch & Marketing",
    description:
      "Go-to-market strategy, community building and marketing to ensure a successful NFT launch.",
    icon: <HiOutlineChartBar className="w-6 h-6" />,
  },
  {
    title: "Custom NFT Solutions",
    description:
      "Need something unique? We build custom NFT solutions tailored to your needs.",
    icon: <HiOutlineCog className="w-6 h-6" />,
  },
];

const blockchainLogos = [
  "Ethereum",
  "Polygon",
  "Solana",
  "BNB Chain",
  "Avalanche",
  "Arbitrum",
  "Optimism",
  "& More",
];

const nftProjects = [
  {
    label: "NFT COLLECTION",
    title: "Meta Astronauts",
    description: "10,000 generative NFTs with unique traits built on Ethereum.",
    stats: ["10K items", "4.8K owners", "12.5 ETH volume"],
    image: project1,
  },
  {
    label: "NFT MARKETPLACE",
    title: "Luxury Real Estate NFTs",
    description: "Marketplace for fractional ownership of luxury real estate assets.",
    stats: ["Platform", "Multi-chain", "50K+ users"],
    image: project2,
  },
  {
    label: "GAME NFTs",
    title: "Crypto Legends",
    description: "In-game NFTs and marketplace for a play-to-earn game.",
    stats: ["5K items", "3.2K owners", "8.7 ETH volume"],
    image: project3,
  },
];

const NftDevelopment = () => {
  return (
    <div className="bg-white text-slate-900">
      <main className="max-w-[1500px] mx-auto px-6 sm:px-8">
        {/* HERO SECTION */}
        <section className="pt-16 pb-20 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div>
              <p className="text-[#0B0F9C] text-sm font-bold uppercase tracking-[0.25em]">
                NFT DEVELOPMENT
              </p>

              <h1 className="mt-6 text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight">
                Bring Your Digital
                <br />
                <span className="text-[#0B0F9C]">
                  Assets to Life.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Secure, scalable and feature-rich NFT marketplaces, collections and blockchain solutions that turn your ideas into valuable digital assets.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="bg-[#0B0F9C] text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:bg-blue-800 transition">
                  Launch Your NFT Project →
                </button>

                <button className="bg-white border border-slate-200 px-8 py-4 rounded-2xl font-semibold shadow-sm hover:shadow-md transition">
                  View Our Work
                </button>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img src="https://i.pravatar.cc/40?img=21" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://i.pravatar.cc/40?img=22" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://i.pravatar.cc/40?img=23" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://i.pravatar.cc/40?img=24" className="w-10 h-10 rounded-full border-2 border-white" />
                </div>

                <p className="text-sm text-slate-600">
                  Trusted by 200+ NFT projects
                </p>
              </div>
            </div>

            {/* RIGHT SIDE - IMAGE */}
            <div className="relative">
              <img
                src={nftdevelopment}
                alt="NFT Development"
                className="w-full rounded-[32px] shadow-[0_20px_60px_rgba(15,23,42,0.12)]"
              />
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US SECTION */}
        <section className="py-16">
          <div className="grid lg:grid-cols-5 gap-6 items-start">
            {/* Heading */}
            <div className="lg:col-span-1">
              <p className="text-[#0B0F9C] text-sm font-semibold uppercase tracking-[0.25em]">
                WHY CHOOSE US
              </p>

              <h2 className="mt-4 text-3xl font-bold text-slate-900 leading-tight">
                Secure.
                <br />
                Scalable.
                <br />
                Successful.
              </h2>
            </div>

            {/* Card 1 */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#EEF2FF] flex items-center justify-center text-[#0B0F9C] text-xl mb-4">
                <HiOutlineShieldCheck className="w-6 h-6" />
              </div>

              <h3 className="font-semibold text-lg text-slate-900">
                Audited & Secure
              </h3>

              <p className="mt-3 text-sm text-slate-600 leading-6">
                Gas-optimized smart contracts with complete security audits.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#EEF2FF] flex items-center justify-center text-[#0B0F9C] text-xl mb-4">
                <HiOutlineSparkles className="w-6 h-6" />
              </div>

              <h3 className="font-semibold text-lg text-slate-900">
                Multi-Chain
              </h3>

              <p className="mt-3 text-sm text-slate-600 leading-6">
                Deploy across Ethereum, Polygon, Solana and more.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#EEF2FF] flex items-center justify-center text-[#0B0F9C] text-xl mb-4">
                <HiOutlineCube className="w-6 h-6" />
              </div>

              <h3 className="font-semibold text-lg text-slate-900">
                Custom Solutions
              </h3>

              <p className="mt-3 text-sm text-slate-600 leading-6">
                Tailored NFT solutions for your unique business needs.
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#EEF2FF] flex items-center justify-center text-[#0B0F9C] text-xl mb-4">
                <HiOutlineChartBar className="w-6 h-6" />
              </div>

              <h3 className="font-semibold text-lg text-slate-900">
                Launch Support
              </h3>

              <p className="mt-3 text-sm text-slate-600 leading-6">
                Go-to-market strategy and community building included.
              </p>
            </div>
          </div>
        </section>

        {/* OUR SERVICES SECTION */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[#0B0F9C] font-semibold uppercase tracking-[0.24em] text-sm">
              WHAT WE BUILD
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              End-to-End NFT Development Services
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-6">
            {serviceTiles.map((service) => (
              <div
                key={service.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[#0B0F9C] text-white shadow-lg shadow-[#0B0F9C]/20">
                  {service.icon}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>
                <button className="mt-8 inline-flex items-center gap-2 text-[#0B0F9C] font-semibold text-sm">
                  Learn More
                  <HiArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* BLOCKCHAINS SECTION */}
        <section className="py-12">
          <div className="rounded-[28px] bg-[#08104A] p-6">
            <div className="grid lg:grid-cols-[280px_1fr] gap-6 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-blue-200">
                  Blockchain Networks
                </p>

                <h3 className="text-white text-3xl font-bold mt-2 leading-tight">
                  We Support
                  <br />
                  All Major Chains
                </h3>
              </div>

              <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
                {blockchainLogos.map((blockchain) => (
                  <div
                    key={blockchain}
                    className="bg-white rounded-2xl p-4 flex items-center justify-center h-16"
                  >
                    <span className="text-xs font-semibold text-center">
                      {blockchain}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="pb-12">
          <div className="grid md:grid-cols-4 border-y border-slate-200">
            <div className="text-center py-8">
              <h3 className="text-4xl font-bold text-[#0B0F9C]">
                200+
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                NFT Projects Delivered
              </p>
            </div>

            <div className="text-center py-8 border-l border-slate-200">
              <h3 className="text-4xl font-bold text-[#0B0F9C]">
                50M+
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                Total Volume Generated
              </p>
            </div>

            <div className="text-center py-8 border-l border-slate-200">
              <h3 className="text-4xl font-bold text-[#0B0F9C]">
                100+
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                Happy Clients
              </p>
            </div>

            <div className="text-center py-8 border-l border-slate-200">
              <h3 className="text-4xl font-bold text-[#0B0F9C]">
                10+
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                Blockchain Networks
              </p>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="py-12">
          <div className="flex justify-between items-end mb-8">
            <div>
              <p className="text-[#0B0F9C] text-sm font-semibold uppercase">
                Our Recent Work
              </p>

              <h2 className="text-4xl font-bold mt-3">
                Launched. Growing. Thriving.
              </h2>
            </div>

            <button className="text-[#0B0F9C] font-semibold hover:underline">
              View All Projects →
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nftProjects.map((project) => (
              <div key={project.title} className="bg-white border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-48 w-full object-cover"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[#0B0F9C]">
                    {project.label}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-lg">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.stats.map((stat) => (
                      <span key={stat} className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium">
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Process />

        <section className="rounded-[40px] border border-slate-200 bg-slate-50 mb-20 px-8 py-14 shadow-sm">
          <div className="mx-auto flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0B0F9C]">
                READY TO LAUNCH YOUR NFT PROJECT?
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl text-slate-900">
                Let’s build something extraordinary together.
              </h2>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="inline-flex items-center justify-center rounded-full bg-[#0B0F9C] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#0B0F9C]/20 transition hover:bg-blue-900">
                Book a Free Consultation
              </button>
              <button className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-4 text-base font-semibold text-[#0B0F9C] transition hover:bg-slate-100">
                View Our NFT Work
              </button>
            </div>
          </div>
        </section>
      </main>
      <CTA />
    </div>
  );
};

export default NftDevelopment;
