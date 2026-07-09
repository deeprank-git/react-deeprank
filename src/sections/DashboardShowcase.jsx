import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const dashboardTabs = [
  {
    id: 1,
    title: "AI Chatbot",
    dashboardLabel: "AI Chatbot Dashboard",
    accent: "#3B82F6",
    metrics: [
      { label: "Total Conversations", value: "12,843", color: "text-white" },
      { label: "Resolved", value: "9,621", color: "text-white" },
      { label: "Resolution Rate", value: "74.8%", color: "text-green-400" },
      { label: "Avg Response", value: "2.3s", color: "text-blue-400" },
    ],
    chartData: [
      { day: "Mon", value: 900 },
      { day: "Tue", value: 1600 },
      { day: "Wed", value: 1300 },
      { day: "Thu", value: 2400 },
      { day: "Fri", value: 2100 },
      { day: "Sat", value: 3200 },
      { day: "Sun", value: 4300 },
    ],
  },
  {
    id: 2,
    title: "Sales Assistant",
    dashboardLabel: "Sales Assistant Dashboard",
    accent: "#8B7CF6",
    metrics: [
      { label: "Leads Engaged", value: "6,204", color: "text-white" },
      { label: "Qualified", value: "3,890", color: "text-white" },
      { label: "Conversion Rate", value: "62.7%", color: "text-green-400" },
      { label: "Avg Deal Time", value: "4.1d", color: "text-amber-400" },
    ],
    chartData: [
      { day: "Mon", value: 400 },
      { day: "Tue", value: 800 },
      { day: "Wed", value: 650 },
      { day: "Thu", value: 1200 },
      { day: "Fri", value: 1500 },
      { day: "Sat", value: 1100 },
      { day: "Sun", value: 1900 },
    ],
  },
  {
    id: 3,
    title: "Support Hub",
    dashboardLabel: "Support Hub Dashboard",
    accent: "#34D399",
    metrics: [
      { label: "Tickets Raised", value: "8,512", color: "text-white" },
      { label: "Closed", value: "7,980", color: "text-white" },
      { label: "CSAT Score", value: "91.4%", color: "text-green-400" },
      { label: "First Response", value: "38s", color: "text-blue-400" },
    ],
    chartData: [
      { day: "Mon", value: 1200 },
      { day: "Tue", value: 1400 },
      { day: "Wed", value: 1100 },
      { day: "Thu", value: 1700 },
      { day: "Fri", value: 1550 },
      { day: "Sat", value: 1850 },
      { day: "Sun", value: 2100 },
    ],
  },
];

const DashboardShowcase = () => {
  const [active, setActive] = useState(1);
  const [fade, setFade] = useState(true);

  const current = dashboardTabs.find((t) => t.id === active);

  const handleTabChange = (id) => {
    if (id === active) return;
    setFade(false);
    setTimeout(() => {
      setActive(id);
      setFade(true);
    }, 150);
  };

  return (
    <section className="py-15 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-[#030712] rounded-4xl overflow-hidden shadow-2xl">

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
                    onClick={() => handleTabChange(item.id)}
                    className={`w-full flex items-center gap-3 text-left px-5 py-4 rounded-xl transition ${active === item.id
                      ? "bg-white text-black"
                      : "bg-[#111827] text-white hover:bg-[#1F2937]"
                      }`}
                  >
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: item.accent }}
                    />
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
                    {current.dashboardLabel}
                  </p>

                  <h3 className="text-white text-xl font-semibold mt-1">
                    Performance Overview
                  </h3>
                </div>

                <button className="bg-[#111827] text-white px-4 py-2 rounded-lg">
                  This Week
                </button>

              </div>

              {/* Metrics + Chart — fade together on tab change */}
              <div className={`transition-opacity duration-200 ${fade ? "opacity-100" : "opacity-0"}`}>

                <div className="grid md:grid-cols-4 gap-4 mt-8">
                  {current.metrics.map((m) => (
                    <div key={m.label} className="bg-[#111827] rounded-xl p-5">
                      <p className="text-slate-400 text-sm">{m.label}</p>
                      <h3 className={`text-3xl font-bold mt-2 ${m.color}`}>{m.value}</h3>
                    </div>
                  ))}
                </div>

                <div className="bg-[#111827] rounded-2xl mt-8 p-6">
                  <ResponsiveContainer width="100%" height={280}>
                    <LineChart data={current.chartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                      <CartesianGrid stroke="#1F2937" vertical={false} />
                      <XAxis dataKey="day" stroke="#64748B" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="#64748B" fontSize={12} tickLine={false} axisLine={false} />
                      <Tooltip
                        contentStyle={{ background: "#111827", border: "1px solid #1F2937", borderRadius: 8, color: "#fff" }}
                        labelStyle={{ color: "#94A3B8" }}
                      />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke={current.accent}
                        strokeWidth={3}
                        dot={{ r: 5, fill: current.accent, strokeWidth: 0 }}
                        activeDot={{ r: 7 }}
                        isAnimationActive={true}
                        animationDuration={500}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>

  );
};

export default DashboardShowcase;