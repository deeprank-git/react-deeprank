import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HiArrowRight } from "react-icons/hi";
import { useEffect, useState } from "react";
import chatbotImg from "../assets/chatbot.png";
import voiceAgentImg from "../assets/voice-agent.png";
import workflowImg from "../assets/workflow.png";
import knowledgeImg from "../assets/knowledge.png";
import DashboardShowcase from "../sections/DashboardShowcase";
import CTA from "../sections/CTA";
import Industries from "../sections/Industries";
import Process from "../sections/Process";
import CaseStudyFAQ from "../components/CaseStudyFAQ";
import { seoCaseStudy } from "../data/caseStudies";
import seo from "../assets/seo.png";
import SEOAnalyticsDashboard from "../components/SEOAnalyticsDashboard";
import { useModal } from "../context/ModalContext";
const AIAutomation = () => {
  const { open } = useModal();
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 2;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
      }
      setCounter(current);
    }, 24);
    return () => clearInterval(interval);
  }, []);

  const solutions = [
    {
      id: 1,
      title: "Keyword Research",
      image: chatbotImg,
      features: [
        "we find high-value keywords your audience is searching for",
      ],
    },
    {
      id: 2,
      title: "On-Page SEO",
      image: voiceAgentImg,
      features: [
        "Optimize Your website's content, structure, and metadata for higher rankings",
      ],
    },
    {
      id: 3,
      title: "Technical SEO",
      image: workflowImg,
      features: [
        "Improve site speed, crawlability, indexing and overall site health",
      ],
    },
    {
      id: 4,
      title: "Local SEO",
      image: knowledgeImg,
      features: [
        "Rank in local search results and attract nearby customers",
      ],
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <p className="text-[#0B0F9C] font-bold uppercase tracking-wider text-sm">
                SEO SERVICES
              </p>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mt-4">
                Rank Higher.
                <br />
                <span className="text-[#0B0F9C]">Get Found.</span> Grow Faster.
              </h1>

              <p className="mt-6 text-gray-600 text-lg max-w-xl">
                Increase organic traffic, generate qualified leads, and dominate search rankings with DeepRank's data-driven SEO strategies.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  onClick={open}
                  className="bg-[#0B0F9C] text-white px-7 py-4 rounded-xl flex items-center gap-2"
                >
                  Book Discovery Call
                  <HiArrowRight />
                </button>

                <button className="border border-gray-300 px-7 py-4 rounded-xl">
                  See SEO Results
                </button>
              </div>

              {/* Users */}
              <div className="flex items-center gap-4 mt-8">
                <div className="flex -space-x-3">
                  <img
                    src="https://i.pravatar.cc/40?img=1"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://i.pravatar.cc/40?img=2"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://i.pravatar.cc/40?img=3"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://i.pravatar.cc/40?img=4"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                </div>

                <p className="text-gray-600 text-sm">
                  Trusted by 500+ businesses worldwide
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="relative">
              <img
                src={seo}
                alt=""
                className="w-full max-w-2xl mx-auto"
              />
            </div>
          </div>
        </div>
        {/* Problem + Stats */}
        <div className="max-w-7xl mt-15 mx-auto px-6 ">
          <div className="bg-white rounded-3xl shadow-sm p-8">
            <div className="grid lg:grid-cols-4 gap-8 items-center ">
              <div>
                <p className="text-[#0B0F9C] text-xs font-bold uppercase">
                  The SEO Advantage
                </p>

                <h3 className="text-2xl font-bold mt-3">
                  Stronger Rankings, More Traffic, Better Conversions
                </h3>
              </div>

              <div className="text-center border-l">
                <h3 className="text-5xl font-bold">90%</h3>
                <p className="text-gray-500 mt-2">
                  Higher Organic Traffic
                </p>
              </div>

              <div className="text-center border-l">
                <h3 className="text-5xl font-bold">3X</h3>
                <p className="text-gray-500 mt-2">
                  More Qualified Leads
                </p>
              </div>

              <div className="text-center border-l">
                <h3 className="text-5xl font-bold">70%</h3>
                <p className="text-gray-500 mt-2">
                  Lower Acquisition Cost
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* AI Solutions */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-[#0B0F9C] font-semibold uppercase">
              WHAT WE BUILD
            </p>

            <h2 className="text-5xl font-bold mt-3">
              AI Solutions That Drive Results
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-44 object-cover rounded-2xl mb-6"
                />

                <h3 className="text-2xl font-bold">{item.title}</h3>

                {/* <ul className="mt-4 space-y-2 text-gray-600">
                  {item.features.map((feature, index) => (
                    <li key={index}>✓ {feature}</li>
                  ))}
                </ul> */}
                <p className="mt-4 space-y-2 text-gray-600">{item.features}</p>

                <button className="mt-6 text-[#0B0F9C] font-semibold">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
        <SEOAnalyticsDashboard />
      </section>
      <Industries />
      <Process />
      <CaseStudyFAQ data={seoCaseStudy} />
      <CTA />
    </>
  );
};

export default AIAutomation;
