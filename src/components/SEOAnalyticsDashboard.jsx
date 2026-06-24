import React, { useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const seoChartData = [
  { month: "Jan", traffic: 12000 },
  { month: "Feb", traffic: 14500 },
  { month: "Mar", traffic: 16800 },
  { month: "Apr", traffic: 19200 },
  { month: "May", traffic: 22100 },
  { month: "Jun", traffic: 24800 },
];
const dashboardData = {
  "Keyword Tracking": {
    title: "Organic Traffic Growth",
    traffic: "24.8K",
    keywords: "428",
    ctr: "5.8%",
    conversion: "12.6%",
  },

  "Technical SEO": {
    title: "Site Health Analysis",
    traffic: "98%",
    keywords: "142",
    ctr: "0 Errors",
    conversion: "92 Score",
  },

  "Content Optimization": {
    title: "Content Performance",
    traffic: "18.2K",
    keywords: "320",
    ctr: "7.2%",
    conversion: "15.4%",
  },
};

export default function SEOAnalyticsDashboard() {
  const [active, setActive] = useState("Keyword Tracking");
  const current = dashboardData[active];

  const serviceButtons = [
    "Keyword Tracking",
    "Technical SEO",
    "Content Optimization",
  ];

  return (
    <section className="w-full p-6 md:p-10">
      <div className="w-full bg-[#030B1E] rounded-[32px] p-6 md:p-8 lg:p-10 shadow-lg">
        <div className="grid lg:grid-cols-[340px_1fr] gap-6">
          {/* LEFT PANEL */}
          <aside className="w-[340px] shrink-0">
            <div className="h-full rounded-2xl p-6 md:p-8 bg-gradient-to-b from-[#051127]/10 to-transparent">
              <div className="text-sm text-sky-300 font-semibold tracking-wider mb-3">
                SEO SHOWCASE
              </div>
              <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight mb-3">
                See Our SEO Results In Action
              </h3>
              <p className="text-slate-300 mb-6">
                Track keyword rankings, organic traffic growth, technical SEO
                performance and conversion improvements from a single dashboard.
              </p>

              <div className="space-y-3">
                {serviceButtons.map((label) => {
                  const isActive = active === label;
                  return (
                    <button
                      key={label}
                      onClick={() => setActive(label)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ease-in-out shadow-sm border border-transparent flex items-center justify-between ${
                        isActive
                          ? "bg-white text-[#030B1E]"
                          : "bg-[#061226] text-white"
                      }`}
                    >
                      <span className="font-medium">{label}</span>
                      <span className="text-sm opacity-70">
                        {isActive ? "Selected" : ""}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* RIGHT PANEL */}
          <main className="flex-1 bg-transparent">
            <div className="rounded-2xl p-4 md:p-6 bg-[#030B1E] shadow-inner">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm text-slate-300">
                    SEO Analytics Dashboard
                  </div>
                  <h2 className="text-white text-2xl font-bold">
                    Performance Overview
                  </h2>
                </div>

                <div>
                  <button className="bg-[#0B1B33] text-white px-3 py-2 rounded-md text-sm shadow-sm hover:bg-[#0E2540] transition">
                    This Month
                  </button>
                </div>
              </div>

              {/* Metrics Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                  <div className="text-sm text-slate-300">Organic Traffic</div>
                  <div className="text-white text-xl font-bold mt-1">
                    {current.traffic}
                  </div>
                  <div className="text-sm text-green-400 mt-2">+18%</div>
                </div>

                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                  <div className="text-sm text-slate-300">Keywords Ranked</div>
                  <div className="text-white text-xl font-bold mt-1">
                    {current.keywords}
                  </div>
                  <div className="text-sm text-green-400 mt-2">+12%</div>
                </div>

                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                  <div className="text-sm text-slate-300">CTR</div>
                  <div className="text-white text-xl font-bold mt-1">
                    {current.ctr}
                  </div>
                  <div className="text-sm text-green-400 mt-2">+7%</div>
                </div>

                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                  <div className="text-sm text-slate-300">Conversion Rate</div>
                  <div className="text-white text-xl font-bold mt-1">
                    {current.conversion}
                  </div>
                  <div className="text-sm text-green-400 mt-2">+15%</div>
                </div>
              </div>

              {/* Chart Area */}
          
              <div className="mt-6 bg-[#041324] p-4 md:p-6 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="text-sm text-slate-300">
                      Organic Traffic Growth
                    </div>
                    <div className="text-white text-lg font-semibold">
                      Organic Traffic Growth
                    </div>
                  </div>
                </div>

                <div className="w-full h-[220px]">
                  <ResponsiveContainer width="100%" height={220}>
                    <LineChart
                      data={seoChartData}
                      margin={{ top: 10, right: 20, left: -10, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient
                          id="lineGradient"
                          x1="0"
                          y1="0"
                          x2="1"
                          y2="0"
                        >
                          <stop
                            offset="0%"
                            stopColor="#60A5FA"
                            stopOpacity={1}
                          />
                          <stop
                            offset="100%"
                            stopColor="#3B82F6"
                            stopOpacity={1}
                          />
                        </linearGradient>
                        <filter
                          id="glow"
                          x="-50%"
                          y="-50%"
                          width="200%"
                          height="200%"
                        >
                          <feGaussianBlur
                            stdDeviation="4"
                            result="coloredBlur"
                          />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>

                      <CartesianGrid
                        stroke="rgba(255,255,255,0.03)"
                        vertical={false}
                      />
                      <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        stroke="#375b8e"
                      />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        stroke="#94A3B8"
                        tickFormatter={(value) => `${value / 1000}K`}
                      />
                      <Tooltip
                        contentStyle={{
                          background: "#ffffff",
                          border: "1px solid rgba(255,255,255,0.04)",
                        }}
                      />

                      <Line
                        type="monotone"
                        dataKey="traffic"
                        stroke="url(#lineGradient)"
                        strokeWidth={3}
                        dot={false}
                        activeDot={{
                          r: 5,
                          stroke: "#fff",
                          strokeWidth: 2,
                          fill: "#60A5FA",
                        }}
                        strokeLinecap="round"
                        style={{ filter: "url(#glow)" }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                
                  {/* <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-[#061226] p-5 rounded-xl">
                      <h4 className="text-white font-semibold mb-3">
                        Top Keywords
                      </h4>

                      <ul className="space-y-2 text-slate-300 text-sm">
                        <li>seo agency (#1)</li>
                        <li>enterprise seo (#2)</li>
                        <li>local seo services (#3)</li>
                        <li>technical seo (#5)</li>
                        <li>seo consultant (#7)</li>
                      </ul>
                    </div>

                    <div className="bg-[#061226] p-5 rounded-xl">
                      <h4 className="text-white font-semibold mb-3">
                        Traffic Sources
                      </h4>

                      <div className="space-y-3">
                        <div>
                          <p className="text-slate-300 text-sm">
                            Organic Search 68%
                          </p>
                          <div className="h-2 bg-slate-700 rounded-full mt-1">
                            <div className="h-2 bg-blue-500 rounded-full w-[68%]"></div>
                          </div>
                        </div>

                        <div>
                          <p className="text-slate-300 text-sm">Direct 15%</p>
                          <div className="h-2 bg-slate-700 rounded-full mt-1">
                            <div className="h-2 bg-green-500 rounded-full w-[15%]"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#061226] p-5 rounded-xl">
                      <h4 className="text-white font-semibold mb-3">
                        Rankings
                      </h4>

                      <div className="space-y-2 text-slate-300 text-sm">
                        <p>Top 3 Keywords: 42</p>
                        <p>Top 10 Keywords: 128</p>
                        <p>Top 100 Keywords: 428</p>
                      </div>
                    </div> */}
                  {/* </div>
                </div>
              </div> */}
              </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
