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

const dashboardData = {
  "Keyword Tracking": {
    chartTitle: "Organic Traffic Growth",
    accent: "#3B82F6",
    accentLight: "#60A5FA",
    format: "k",
    metrics: [
      { label: "Organic Traffic", value: "24.8K", delta: "+18%" },
      { label: "Keywords Ranked", value: "428", delta: "+12%" },
      { label: "CTR", value: "5.8%", delta: "+7%" },
      { label: "Conversion Rate", value: "12.6%", delta: "+15%" },
    ],
    chartData: [
      { month: "Jan", value: 12000 },
      { month: "Feb", value: 14500 },
      { month: "Mar", value: 16800 },
      { month: "Apr", value: 19200 },
      { month: "May", value: 22100 },
      { month: "Jun", value: 24800 },
    ],
  },
  "Technical SEO": {
    chartTitle: "Site Health Score Trend",
    accent: "#34D399",
    accentLight: "#6EE7B7",
    format: "plain",
    metrics: [
      { label: "Site Health", value: "98%", delta: "+4%" },
      { label: "Crawl Errors", value: "0", delta: "-100%" },
      { label: "Core Web Vitals", value: "92", delta: "+9%" },
      { label: "Pages Indexed", value: "142", delta: "+12%" },
    ],
    chartData: [
      { month: "Jan", value: 82 },
      { month: "Feb", value: 86 },
      { month: "Mar", value: 89 },
      { month: "Apr", value: 91 },
      { month: "May", value: 94 },
      { month: "Jun", value: 98 },
    ],
  },
  "Content Optimization": {
    chartTitle: "Content Traffic Growth",
    accent: "#A78BFA",
    accentLight: "#C4B5FD",
    format: "k",
    metrics: [
      { label: "Content Traffic", value: "18.2K", delta: "+22%" },
      { label: "Pages Optimized", value: "320", delta: "+9%" },
      { label: "Avg Time on Page", value: "3:42", delta: "+11%" },
      { label: "Conversion Rate", value: "15.4%", delta: "+15%" },
    ],
    chartData: [
      { month: "Jan", value: 8000 },
      { month: "Feb", value: 10500 },
      { month: "Mar", value: 12800 },
      { month: "Apr", value: 14900 },
      { month: "May", value: 16700 },
      { month: "Jun", value: 18200 },
    ],
  },
};

const serviceButtons = ["Keyword Tracking", "Technical SEO", "Content Optimization"];

export default function SEOAnalyticsDashboard() {
  const [active, setActive] = useState("Keyword Tracking");
  const [fade, setFade] = useState(true);
  const current = dashboardData[active];

  const handleTabChange = (label) => {
    if (label === active) return;
    setFade(false);
    setTimeout(() => {
      setActive(label);
      setFade(true);
    }, 150);
  };

  return (
    <section className="w-full p-6 md:p-10">
      <div className="w-full bg-[#030B1E] rounded-4xl p-6 md:p-8 lg:p-10 shadow-lg">
        <div className="grid lg:grid-cols-[340px_1fr] gap-6">
          {/* LEFT PANEL */}
          <aside className="w-85 shrink-0">
            <div className="h-full rounded-2xl p-6 md:p-8 bg-linear-to-b from-[#051127]/10 to-transparent">
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
                  const accent = dashboardData[label].accent;
                  return (
                    <button
                      key={label}
                      onClick={() => handleTabChange(label)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ease-in-out shadow-sm border border-transparent flex items-center gap-3 ${isActive
                        ? "bg-white text-[#030B1E]"
                        : "bg-[#061226] text-white hover:bg-[#0B1B33]"
                        }`}
                    >
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: accent }}
                      />
                      <span className="font-medium flex-1">{label}</span>
                      {isActive && <span className="text-xs opacity-70">Selected</span>}
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

              {/* Metrics + Chart — fade together on tab change */}
              <div className={`transition-opacity duration-200 ${fade ? "opacity-100" : "opacity-0"}`}>

                {/* Metrics Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
                  {current.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl"
                    >
                      <div className="text-sm text-slate-300">{m.label}</div>
                      <div className="text-white text-xl font-bold mt-1">{m.value}</div>
                      <div className="text-sm text-green-400 mt-2">{m.delta}</div>
                    </div>
                  ))}
                </div>

                {/* Chart Area */}
                <div className="mt-6 bg-[#041324] p-4 md:p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-sm text-slate-300">SEO Performance</div>
                      <div className="text-white text-lg font-semibold">{current.chartTitle}</div>
                    </div>
                  </div>

                  <div className="w-full h-[220px]">
                    <ResponsiveContainer width="100%" height={220}>
                      <LineChart
                        data={current.chartData}
                        margin={{ top: 10, right: 20, left: -10, bottom: 0 }}
                      >
                        <defs>
                          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor={current.accentLight} stopOpacity={1} />
                            <stop offset="100%" stopColor={current.accent} stopOpacity={1} />
                          </linearGradient>
                          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                            <feMerge>
                              <feMergeNode in="coloredBlur" />
                              <feMergeNode in="SourceGraphic" />
                            </feMerge>
                          </filter>
                        </defs>

                        <CartesianGrid stroke="rgba(255,255,255,0.03)" vertical={false} />
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
                          tickFormatter={(value) =>
                            current.format === "k" ? `${value / 1000}K` : value
                          }
                        />
                        <Tooltip
                          contentStyle={{
                            background: "#ffffff",
                            border: "1px solid rgba(255,255,255,0.04)",
                          }}
                        />

                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="url(#lineGradient)"
                          strokeWidth={3}
                          dot={false}
                          isAnimationActive={true}
                          animationDuration={500}
                          activeDot={{
                            r: 5,
                            stroke: "#fff",
                            strokeWidth: 2,
                            fill: current.accentLight,
                          }}
                          strokeLinecap="round"
                          style={{ filter: "url(#glow)" }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}