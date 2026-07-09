import React, { useState } from "react";
import { aiAutomationCaseStudy } from "../data/caseStudies";
const CaseStudyFAQ = ({ data }) => {
  const {
    badge,
    title,
    description,
    stats = [],
    image,
    floatingCard = {},
    faqs = [],
    cta = {},
    faqBadge,
    faqTitle,
    faqDescription,
  } = data || {};

  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex((current) => (current === index ? -1 : index));
  };

  const chartPoints = floatingCard.chartPoints || [28, 62, 46, 78, 64];

  return (
    <section className="bg-[#F8FAFC] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-[65%_35%] gap-6 items-stretch">
          <div className="relative rounded-[32px] bg-white p-10 border border-gray-100 shadow-sm h-full">
            <span className="inline-flex rounded-full bg-[#eef2ff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0B0F9C]">
              {badge}
            </span>

            <div className="mt-8 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-start gap-10">
              <div>
                <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
                  {title}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  {description}
                </p>

                <div className="flex gap-12 mt-10">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <h3 className="text-5xl font-bold text-[#0B0F9C]">
                        {stat.value}
                      </h3>

                      <p className="text-gray-500 mt-2">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <button className="mt-10 inline-flex items-center rounded-full bg-[#0B0F9C] px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-[#0B0F9C]/20 transition hover:bg-[#1315b0]">
                  {cta.label}
                </button>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="relative w-full max-w-[460px] overflow-hidden rounded-[2rem] bg-slate-950 p-6 shadow-2xl ring-1 ring-slate-900/10">
                  <div className="absolute inset-x-6 top-6 h-1 rounded-full bg-slate-700/70" />
                  <div className="relative h-[360px] rounded-[1.75rem] bg-slate-900/70">
                    {typeof image === "string" ? (
                      <img
                        src={image}
                        alt="Case study visual"
                        className="w-full h-[340px] object-cover rounded-2xl"
                      />
                    ) : (
                      image
                    )}
                  </div>
                </div>

                {/* <div className="absolute bottom-8 right-4 w-64 rounded-[1.75rem] border border-white/70 bg-white/95 p-5 shadow-2xl shadow-slate-900/10 backdrop-blur-xl">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-[#0B0F9C]">
                        {floatingCard.title}
                      </p>
                      <p className="mt-2 text-3xl font-bold text-slate-900">
                        {floatingCard.value}
                      </p>
                    </div>
                    <span className="rounded-full bg-[#eef2ff] px-3 py-1 text-sm font-semibold text-[#0B0F9C]">
                      {floatingCard.delta}
                    </span>
                  </div>

                  <div className="mt-4 rounded-3xl bg-[#eef2ff] p-3">
                    <div className="flex h-20 items-end gap-2">
                      {chartPoints.map((height, index) => (
                        <span
                          key={index}
                          className="block w-2 rounded-full bg-[#0B0F9C]"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-[0_24px_64px_rgba(15,23,42,0.06)] sm:p-8">
            <span className="inline-flex rounded-full bg-[#eef2ff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0B0F9C]">
              {faqBadge}
            </span>
            <h3 className="mt-6 text-3xl font-bold tracking-tight text-slate-900">
              {faqTitle}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              {faqDescription}
            </p>

            <div className="mt-8 space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = activeIndex === index;
                return (
                  <div
                    key={faq.question}
                    className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 transition-shadow duration-300 hover:shadow-lg"
                  >
                    <button
                      type="button"
                      onClick={() => handleToggle(index)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm font-semibold text-slate-900">
                        {faq.question}
                      </span>
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-full border text-lg font-bold transition ${isOpen
                          ? "border-[#0B0F9C] bg-[#0B0F9C] text-white"
                          : "border-slate-200 bg-white text-slate-500"
                          }`}
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden px-5 transition-all duration-300 ease-in-out ${isOpen ? "pb-5" : "pb-0"
                        }`}
                      style={{ maxHeight: isOpen ? "240px" : "0px" }}
                    >
                      <p className="text-sm leading-7 text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyFAQ;
