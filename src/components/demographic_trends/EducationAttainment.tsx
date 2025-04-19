"use client";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { COLORS } from "./WorkforceComposition";

function EducationAttainment() {
  // Educational Attainment data
  const educationData = [
    { name: "High School", value: 30 },
    { name: "College", value: 20 },
    { name: "Bachelor's", value: 35 },
    { name: "Master's", value: 25 },
    { name: "PhD+", value: 12 },
  ];
  return (
    <div className="p-4 mb-8">
      <h3 className="text-lg font-bold text-primary mb-6">
        Educational Attainment
      </h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={educationData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip formatter={(value) => `${value}%`} />
            <Bar dataKey="value" fill="#3b82f6">
              {educationData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[0]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default EducationAttainment;
