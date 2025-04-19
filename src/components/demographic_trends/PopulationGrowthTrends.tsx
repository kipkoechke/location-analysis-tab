"use client";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
function PopulationGrowthTrends() {
  // Population Growth Trends data
  const populationData = [
    { year: "2020", Brooklyn: 75000, Radius: 90000 },
    { year: "2021", Brooklyn: 80000, Radius: 88000 },
    { year: "2022", Brooklyn: 88000, Radius: 90000 },
    { year: "2023", Brooklyn: 95000, Radius: 97000 },
    { year: "2024", Brooklyn: 105000, Radius: 110000 },
  ];

  return (
    <div className="p-4 mb-8">
      <h3 className="text-lg font-bold text-primary mb-6">
        Population Growth Trends
      </h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={populationData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Brooklyn"
              stroke="#3b82f6"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="Radius" stroke="#10b981" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default PopulationGrowthTrends;
