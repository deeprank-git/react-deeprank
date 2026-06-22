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
import { aiAutomationCaseStudy } from "../data/caseStudies";
import robot from "../assets/robot.png";

const AIAutomation = () => {
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
      title: "AI Chatbots",
      image: chatbotImg,
      features: ["Customer Support", "Lead Qualification", "Knowledge Base AI"],
    },
    {
      id: 2,
      title: "AI Voice Agents",
      image: voiceAgentImg,
      features: ["Appointment Booking", "Customer Calls", "Lead Qualification"],
    },
    {
      id: 3,
      title: "Workflow Automation",
      image: workflowImg,
      features: ["Email Automation", "CRM Automation", "Lead Routing"],
    },
    {
      id: 4,
      title: "AI Knowledge Systems",
      image: knowledgeImg,
      features: [
        "Internal AI Assistant",
        "Company Knowledge Base",
        "Training Support",
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
                AI AUTOMATION
              </p>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mt-4">
                Build an
                <br />
                <span className="text-[#0B0F9C]">AI</span> Workforce.
              </h1>

              <p className="mt-6 text-gray-600 text-lg max-w-xl">
                Automate operations, eliminate repetitive tasks, and deploy
                intelligent AI agents that work 24/7 to scale your business.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <button className="bg-[#0B0F9C] text-white px-7 py-4 rounded-xl flex items-center gap-2">
                  Book Discovery Call
                  <HiArrowRight />
                </button>

                <button className="border border-gray-300 px-7 py-4 rounded-xl">
                  See AI Demo
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
              <div className="absolute inset-0 rounded-full bg-blue-100 blur-3xl opacity-50"></div>

              <img
                src={robot}
                alt=""
                className="relative z-10 w-full max-w-lg mx-auto"
              />

              {/* Floating Card */}
              <div className="absolute right-0 top-1/2 bg-white shadow-2xl rounded-2xl p-6 z-20">
                <h3 className="text-5xl font-bold text-[#0B0F9C]">
                  {counter}+
                </h3>

                <p className="text-gray-600 mt-2">Solutions Delivered</p>

                <div className="mt-4 h-12 flex items-end gap-1">
                  <div className="w-3 h-3 bg-blue-300 rounded"></div>
                  <div className="w-3 h-5 bg-blue-400 rounded"></div>
                  <div className="w-3 h-6 bg-blue-500 rounded"></div>
                  <div className="w-3 h-8 bg-blue-600 rounded"></div>
                  <div className="w-3 h-10 bg-blue-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Problem + Stats */}
        <div className="max-w-7xl mt-15 mx-auto px-6 ">
          <div className="bg-white rounded-3xl shadow-sm p-8">
            <div className="grid lg:grid-cols-4 gap-8 items-center ">
              <div>
                <p className="text-[#0B0F9C] text-xs font-bold uppercase">
                  The Problem
                </p>

                <h3 className="text-2xl font-bold mt-3">
                  Businesses Are Losing Thousands Of Hours To Manual Work
                </h3>
              </div>

              <div className="text-center border-l">
                <h3 className="text-5xl font-bold">40%</h3>
                <p className="text-gray-500 mt-2">
                  Time Spent On Repetitive Tasks
                </p>
              </div>

              <div className="text-center border-l">
                <h3 className="text-5xl font-bold">60%</h3>
                <p className="text-gray-500 mt-2">
                  Customer Queries Handled Manually
                </p>
              </div>

              <div className="text-center border-l">
                <h3 className="text-5xl font-bold">24/7</h3>
                <p className="text-gray-500 mt-2">
                  Customers Expect Instant Responses
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

                <ul className="mt-4 space-y-2 text-gray-600">
                  {item.features.map((feature, index) => (
                    <li key={index}>✓ {feature}</li>
                  ))}
                </ul>

                <button className="mt-6 text-[#0B0F9C] font-semibold">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
        <DashboardShowcase />
      </section>
      <Industries />
      <Process />
      <CaseStudyFAQ data={aiAutomationCaseStudy} />
    <CTA />
    </>
  );
};

export default AIAutomation;
