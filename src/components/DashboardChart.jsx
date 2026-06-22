import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { performanceData } from "../data/dashboardTabs";

const DashboardChart = () => {
  return (
    <div className="bg-[#111827] rounded-2xl p-6 h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={performanceData}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#1F2937"
          />

          <XAxis
            dataKey="day"
            stroke="#94A3B8"
          />

          <YAxis
            stroke="#94A3B8"
          />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="conversations"
            stroke="#3B82F6"
            strokeWidth={4}
            dot={{
              r: 5,
              fill: "#3B82F6",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardChart;