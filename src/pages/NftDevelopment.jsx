import React from "react";
import {
  HiArrowRight,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineCollection,
  HiOutlineCube,
  HiOutlineLightningBolt,
  HiOutlineGlobe,
} from "react-icons/hi";
import CTA from "../sections/CTA";
import Process from "../sections/Process";

const services = [
  {
    title: "NFT Smart Contracts",
    description:
      "Secure, audited ERC-721 and ERC-1155 smart contracts that power your NFT collection with full ownership rights.",
    icon: <HiOutlineCube className="w-6 h-6 text-white" />,
  },
  {
    title: "NFT Marketplace Development",
    description:
      "Custom marketplace platforms for minting, buying, selling, and auctioning NFTs with seamless wallet integrations.",
    icon: <HiOutlineCollection className="w-6 h-6 text-white" />,
  },
  {
    title: "Generative Art & Metadata",
    description:
      "Algorithmically generated NFT art with dynamic trait rarity, IPFS metadata storage, and reveal mechanics.",
    icon: <HiOutlineSparkles className="w-6 h-6 text-white" />,
  },
  {
    title: "Blockchain Integration",
    description:
      "Multi-chain support across Ethereum, Polygon, Solana, and more — giving your project maximum reach.",
    icon: <HiOutlineGlobe className="w-6 h-6 text-white" />,
  },
  {
    title: "Security & Auditing",
    description:
      "Comprehensive smart contract audits and penetration testing to protect your project and your community.",
    icon: <HiOutlineShieldCheck className="w-6 h-6 text-white" />,
  },
  {
    title: "Launch & Minting Portal",
    description:
      "Custom minting websites with whitelist management, countdown timers, and wallet-connect functionality.",
    icon: <HiOutlineLightningBolt className="w-6 h-6 text-white" />,
  },
];

const NftDevelopment = () => {
  return (
    <div className="bg-white text-slate-900">
      <main className="max-w-[1500px] mx-auto px-6 sm:px-8">

        {/* Hero */}
        <section className="pt-16 pb-20 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#0B0F9C] text-sm font-bold uppercase tracking-[0.25em]">
                NFT DEVELOPMENT
              </p>
              <h1 className="mt-6 text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight">
                NFTs Built For
                <br />
                <span className="text-[#0B0F9C]">The Future.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                End-to-end NFT development — from smart contracts and generative
                art to marketplace launch and community growth.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="bg-[#0B0F9C] text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:bg-blue-800 transition">
                  Book Discovery Call →
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
                <p className="text-sm text-slate-600">Trusted by 200+ Web3 projects worldwide</p>
              </div>
            </div>

            {/* Stats card */}
            <div className="relative flex justify-center">
              <div className="w-full max-w-md rounded-[32px] bg-[#08104A] p-10 text-white shadow-2xl">
                <div className="flex items-center gap-4 pb-6 border-b border-white/10">
                  <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl">🖼️</div>
                  <div>
                    <h3 className="text-4xl font-bold">150+</h3>
                    <p className="text-blue-200">NFT Projects Launched</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 py-6 border-b border-white/10">
                  <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl">⛓️</div>
                  <div>
                    <h3 className="text-4xl font-bold">10+</h3>
                    <p className="text-blue-200">Blockchains Supported</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 pt-6">
                  <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl">🔒</div>
                  <div>
                    <h3 className="text-4xl font-bold">100%</h3>
                    <p className="text-blue-200">Audited Contracts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[#0B0F9C] font-semibold uppercase tracking-[0.24em] text-sm">WHAT WE BUILD</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight">End-to-End NFT Development Services.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[#0B0F9C] text-white shadow-lg shadow-[#0B0F9C]/20">
                  {service.icon}
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">{service.description}</p>
                <button className="mt-8 inline-flex items-center gap-2 text-[#0B0F9C] font-semibold">
                  Learn More <HiArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-12">
          <div className="rounded-[28px] bg-[#08104A] p-6">
            <div className="grid lg:grid-cols-[280px_1fr] gap-6 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-blue-200">Web3 Technologies</p>
                <h3 className="text-white text-3xl font-bold mt-2 leading-tight">Built On<br />Proven Chains</h3>
              </div>
              <div className="grid grid-cols-5 md:grid-cols-10 gap-4">
                {["Ethereum","Polygon","Solana","BNB Chain","Avalanche","IPFS","Hardhat","OpenZeppelin","Moralis","Alchemy"].map((tech) => (
                  <div key={tech} className="bg-white rounded-2xl p-4 flex items-center justify-center h-20">
                    <span className="text-xs font-semibold text-center">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="pb-12">
          <div className="grid md:grid-cols-4 border-y border-slate-200">
            <div className="text-center py-8">
              <h3 className="text-4xl font-bold text-[#0B0F9C]">150+</h3>
              <p className="text-gray-600 text-sm mt-2">NFT Projects Launched</p>
            </div>
            <div className="text-center py-8 border-l border-slate-200">
              <h3 className="text-4xl font-bold text-[#0B0F9C]">$50M+</h3>
              <p className="text-gray-600 text-sm mt-2">Total Sales Volume</p>
            </div>
            <div className="text-center py-8 border-l border-slate-200">
              <h3 className="text-4xl font-bold text-[#0B0F9C]">10+</h3>
              <p className="text-gray-600 text-sm mt-2">Blockchains Supported</p>
            </div>
            <div className="text-center py-8 border-l border-slate-200">
              <h3 className="text-4xl font-bold text-[#0B0F9C]">98%</h3>
              <p className="text-gray-600 text-sm mt-2">Client Satisfaction</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[#0B0F9C] text-sm font-semibold uppercase tracking-[0.25em]">FAQ</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight">Frequently Asked<br />Questions</h2>
              <p className="mt-4 text-slate-600 leading-7">Everything you need to know about launching your NFT project with us.</p>
            </div>
            <div className="space-y-4">
              {[
                "How long does an NFT project take to launch?",
                "Which blockchains do you support?",
                "Do you handle smart contract auditing?",
                "Can you help with NFT marketing?",
              ].map((faq) => (
                <div key={faq} className="flex items-center justify-between border rounded-2xl px-5 py-4 hover:bg-slate-50 cursor-pointer">
                  <span className="font-medium text-slate-700">{faq}</span>
                  <span className="text-[#0B0F9C] text-xl">+</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Process />
      </main>
      <CTA />
    </div>
  );
};

export default NftDevelopment;
