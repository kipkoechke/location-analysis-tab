"use client";
import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
function ConstructionTimeline() {
  const constructionData = [
    {
      name: "640 Columbia - Logistics",
      start: 2024,
      end: 2025,
      duration: 1,
      color: "#3b82f6",
    },
    {
      name: "39 Edgeboro - Mixed Use",
      start: 2024,
      end: 2026,
      duration: 1,
      color: "#10b981",
    },
    {
      name: "Terminal Logistics Center",
      start: 2024,
      end: 2027,
      duration: 1,
      color: "#f59e0b",
    },
  ];

  // Custom tooltip for the construction timeline
  const CustomTooltip = ({
    active,
    payload,
  }: {
    active?: boolean;
    payload?: any[];
  }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-2 border border-gray-200 shadow-sm rounded text-sm">
          <p className="font-semibold">{data.name}</p>
          <p>
            Timeline: {data.start} - {data.end}
          </p>
          <p>Duration: {data.duration} year(s)</p>
        </div>
      );
    }
    return null;
  };

  // Transform data for the construction timeline to work correctly
  const transformedConstructionData = constructionData.map((item) => ({
    ...item,
    startPos: item.start - 2024,
    duration: item.end - item.start,
  }));

  return (
    <div>
      <div className=" mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          Construction Timeline
        </h3>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={transformedConstructionData}
              margin={{ top: 20, right: 30, left: 0, bottom: 10 }}
              barSize={30}
            >
              <XAxis
                type="number"
                domain={[0, 3]}
                tickCount={4}
                tickFormatter={(tick) => `${tick + 2024}`}
                label={{ value: "Year", position: "bottom", offset: 0 }}
              />
              <YAxis
                dataKey="name"
                type="category"
                tick={{ fontSize: 12 }}
                width={120}
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: "transparent" }}
              />
              <Bar
                dataKey="duration"
                background={{ fill: "#f3f4f6" }}
                radius={[0, 0, 0, 0]}
                // startPointsAt="startPos"
              >
                {transformedConstructionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="flex justify-center items-center space-x-6 mt-8">
          {constructionData.map((project, index) => (
            <div key={index} className="flex items-center">
              <div
                className="w-3 h-3 mr-1"
                style={{ backgroundColor: project.color }}
              ></div>
              <span className="text-xs text-gray-600">
                {project.name.split(" - ")[0]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ConstructionTimeline;
