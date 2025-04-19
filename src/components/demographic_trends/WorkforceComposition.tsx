"use client";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

// Colors for charts
export const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

function WorkforceComposition() {
  // Workforce Composition data
  const workforceData = [
    { name: "Office/Admin", value: 23 },
    { name: "Manufacturing", value: 18 },
    { name: "Logistics/Transport", value: 32 },
    { name: "Retail", value: 15 },
    { name: "Other", value: 12 },
  ];

  return (
    <div className="p-4 mb-8">
      <h3 className="text-lg font-bold text-primary mb-6">
        Workforce Composition
      </h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={workforceData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {workforceData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value}%`} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default WorkforceComposition;
