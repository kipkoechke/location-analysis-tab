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

function MedianHouseholdIncome() {
  // Median Household Income data
  const incomeData = [
    { year: "2020", Brooklyn: 70000, Radius: 75000 },
    { year: "2021", Brooklyn: 73000, Radius: 77000 },
    { year: "2022", Brooklyn: 80000, Radius: 83000 },
    { year: "2023", Brooklyn: 87000, Radius: 90000 },
    { year: "2024", Brooklyn: 95000, Radius: 98000 },
  ];
  return (
    <div className="p-4 mb-8">
      <h3 className="text-lg font-bold text-primary mb-6">
        Median Household Income
      </h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={incomeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip formatter={(value) => `$${value}`} />
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

export default MedianHouseholdIncome;
