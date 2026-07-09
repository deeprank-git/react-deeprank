import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HiArrowRight, HiX } from "react-icons/hi";
import { useEffect, useState, useRef } from "react";
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
import { useModal } from "../context/ModalContext";

const demoScript = [
  { who: "user", text: "Can you help me automate customer support?" },
  { who: "ai", text: "Absolutely — I can qualify leads, answer FAQs, and escalate complex issues to your team in real time." },
  { who: "user", text: "How fast is the response time?" },
  { who: "ai", text: "Under 300ms on average, 24/7, in over 30 languages." },
];

const AIDemoModal = ({ open, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const timers = useRef([]);

  useEffect(() => {
    if (!open) return;

    setMessages([]);
    setTyping(false);
    timers.current.forEach(clearTimeout);
    timers.current = [];

    let delay = 300;
    demoScript.forEach((m) => {
      if (m.who === "ai") {
        timers.current.push(setTimeout(() => setTyping(true), delay));
        delay += 700;
        timers.current.push(
          setTimeout(() => {
            setTyping(false);
            setMessages((prev) => [...prev, m]);
          }, delay)
        );
        delay += 300;
      } else {
        timers.current.push(
          setTimeout(() => setMessages((prev) => [...prev, m]), delay)
        );
        delay += 600;
      }
    });

    return () => timers.current.forEach(clearTimeout);
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white rounded-2xl w-full max-w-sm p-5 shadow-2xl">
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm font-bold text-gray-900">AI Assistant demo</p>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 transition-colors">
            <HiX className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col gap-2.5 min-h-[220px]">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${m.who === "user"
                  ? "self-end bg-[#0B0F9C] text-white"
                  : "self-start bg-gray-100 text-gray-900"
                }`}
            >
              {m.text}
            </div>
          ))}
          {typing && (
            <div className="self-start bg-gray-100 text-gray-400 px-3.5 py-2.5 rounded-2xl text-sm">
              AI is typing...
            </div>
          )}
        </div>

        <button
          onClick={onClose}
          className="w-full mt-5 bg-[#0B0F9C] text-white py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
        >
          Book Discovery Call <HiArrowRight />
        </button>
      </div>
    </div>
  );
};

const AIAutomation = () => {
  const { open: openModal } = useModal();
  const [counter, setCounter] = useState(0);
  const [demoOpen, setDemoOpen] = useState(false);

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
                <button
                  onClick={openModal}
                  className="bg-[#0B0F9C] text-white px-7 py-4 rounded-xl flex items-center gap-2 cursor-pointer"
                >
                  Book Discovery Call
                  <HiArrowRight />
                </button>

                <button
                  onClick={() => setDemoOpen(true)}
                  className="border border-gray-300 px-7 py-4 rounded-xl cursor-pointer hover:border-[#0B0F9C] hover:text-[#0B0F9C] transition-colors"
                >
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

            {/* Right — image with floating proof-point cards */}
            <div className="relative py-6">
              <div className="absolute inset-0 rounded-full bg-blue-100 blur-3xl opacity-50"></div>

              <div className="relative z-10 w-full max-w-lg mx-auto">
                <img src={robot} alt="AI agent" className="w-full" />

                {/* Chat bubble */}
                <div className="hidden sm:block absolute -top-2 -left-6 bg-white rounded-2xl px-4 py-3 shadow-lg text-sm text-gray-800 max-w-[190px] animate-[float_4s_ease-in-out_infinite]">
                  Hi! How can I help today? 👋
                </div>

                {/* Live badge */}
                <div className="hidden sm:flex absolute bottom-16 -right-8 items-center gap-2 bg-white rounded-xl px-4 py-2.5 shadow-lg text-xs font-semibold text-gray-800 animate-[float_4s_ease-in-out_infinite_0.5s]">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  24/7 Active
                </div>

                {/* Stat badge */}
                <div className="hidden sm:block absolute -bottom-4 left-4 bg-white rounded-xl px-4 py-2.5 shadow-lg text-xs font-semibold text-gray-800 animate-[float_4s_ease-in-out_infinite_1s]">
                  ⚡ 0.3s avg response
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

      <AIDemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
};

export default AIAutomation;