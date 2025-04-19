function ImpactAnalysis() {
  const impactPoints = [
    "45% increase in industrial development in the Brooklyn market",
    "Projected 3.2% compression in cap rates for similar assets over 24 months",
    "Notable increase in last-mile logistics facilities to support e-commerce growth",
  ];
  return (
    <div>
      <h3 className="text-lg font-bold text-gray-900 mb-4">
        Market Impact Analysis
      </h3>

      <p className="mb-4 text-gray-900">
        New development activity in the area indicates:
      </p>

      <ul className="space-y-4">
        {impactPoints.map((point, index) => (
          <li key={index} className="flex items-start">
            <div className="w-2 h-2 rounded-full bg-gray-900 mt-2 mr-3"></div>
            <span className="text-gray-900">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ImpactAnalysis;
