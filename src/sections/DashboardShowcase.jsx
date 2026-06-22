import { useState } from "react";
import { dashboardTabs } from "../data/dashboardTabs";
import DashboardChart from "../components/DashboardChart";

const DashboardShowcase = () => {
  const [active, setActive] = useState(1);

  return (
    <section className="py-15 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-[#030712] rounded-[32px] overflow-hidden shadow-2xl">

          <div className="grid lg:grid-cols-3">

            {/* LEFT PANEL */}
            <div className="p-10 border-r border-slate-800">

              <p className="text-blue-400 uppercase text-xs font-bold tracking-wider">
                AI Showcase
              </p>

              <h2 className="text-white text-5xl font-bold mt-4 leading-tight">
                See Our AI Agents
                In Action
              </h2>

              <p className="text-slate-400 mt-6 leading-relaxed">
                Explore how AI solutions work together
                to automate, engage and scale your business.
              </p>

              <div className="mt-10 space-y-4">

                {dashboardTabs.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActive(item.id)}
                    className={`w-full text-left px-5 py-4 rounded-xl transition ${
                      active === item.id
                        ? "bg-white text-black"
                        : "bg-[#111827] text-white hover:bg-[#1F2937]"
                    }`}
                  >
                    {item.title}
                  </button>
                ))}

              </div>
            </div>

            {/* RIGHT DASHBOARD */}
            <div className="lg:col-span-2 p-8">

              <div className="flex justify-between items-center">

                <div>
                  <p className="text-slate-400 text-sm">
                    AI Chatbot Dashboard
                  </p>

                  <h3 className="text-white text-xl font-semibold mt-1">
                    Performance Overview
                  </h3>
                </div>

                <button className="bg-[#111827] text-white px-4 py-2 rounded-lg">
                  This Week
                </button>

              </div>

              {/* Metrics */}
              <div className="grid md:grid-cols-4 gap-4 mt-8">

                <div className="bg-[#111827] rounded-xl p-5">
                  <p className="text-slate-400 text-sm">
                    Total Conversations
                  </p>

                  <h3 className="text-white text-3xl font-bold mt-2">
                    12,843
                  </h3>
                </div>

                <div className="bg-[#111827] rounded-xl p-5">
                  <p className="text-slate-400 text-sm">
                    Resolved
                  </p>

                  <h3 className="text-white text-3xl font-bold mt-2">
                    9,621
                  </h3>
                </div>

                <div className="bg-[#111827] rounded-xl p-5">
                  <p className="text-slate-400 text-sm">
                    Resolution Rate
                  </p>

                  <h3 className="text-green-400 text-3xl font-bold mt-2">
                    74.8%
                  </h3>
                </div>

                <div className="bg-[#111827] rounded-xl p-5">
                  <p className="text-slate-400 text-sm">
                    Avg Response
                  </p>

                  <h3 className="text-red-400 text-3xl font-bold mt-2">
                    2.3s
                  </h3>
                </div>

              </div>

              {/* Chart */}
              {/* <div className="bg-[#111827] rounded-2xl mt-8 p-6">

                <div className="flex items-end justify-between h-[280px]">

                  <div className="h-[100px] w-10 bg-blue-500 rounded-t"></div>
                  <div className="h-[140px] w-10 bg-blue-500 rounded-t"></div>
                  <div className="h-[90px] w-10 bg-blue-500 rounded-t"></div>
                  <div className="h-[180px] w-10 bg-blue-500 rounded-t"></div>
                  <div className="h-[150px] w-10 bg-blue-500 rounded-t"></div>
                  <div className="h-[220px] w-10 bg-blue-500 rounded-t"></div>
                  <div className="h-[260px] w-10 bg-blue-500 rounded-t"></div>

                </div>

                <div className="flex justify-between text-slate-500 mt-4">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div> */}
                <div className="bg-[#111827] rounded-2xl mt-8 p-6">
                    <DashboardChart />

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
    
  );
};

export default DashboardShowcase;