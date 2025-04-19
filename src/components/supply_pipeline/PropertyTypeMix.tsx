"use client";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

function PropertyTypeMix() {
  const propertyTypeData = [
    { name: "Logistics", value: 45, color: "#3b82f6" },
    { name: "Mixed Use", value: 25, color: "#10b981" },
    { name: "Office", value: 20, color: "#f59e0b" },
    { name: "Retail", value: 10, color: "#ef4444" },
  ];

  return (
    <div className="md:ml-8">
      <h3 className="text-lg font-bold text-primary mb-6">Property Type Mix</h3>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Chart Section */}
        <div className="w-full md:w-1/3">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={propertyTypeData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                dataKey="value"
              >
                {propertyTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend Section */}
        <div className="w-full md:w-2/3 grid grid-cols-2 gap-2">
          {propertyTypeData.map((item) => (
            <div key={item.name} className="flex items-center">
              <div
                className="w-4 h-4 mr-2"
                style={{ backgroundColor: item.color }}
              ></div>
              <span>
                {item.name} - {item.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PropertyTypeMix;
