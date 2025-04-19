function DistanceDetails() {
  // Data for key nodes distances
  const nodeData = [
    { type: "Highway Access", icon: "H", color: "#3b82f6", distance: "0.7 mi" },
    { type: "Port Terminal", icon: "P", color: "#10b981", distance: "1.3 mi" },
    { type: "Rail Spur", icon: "R", color: "#f59e0b", distance: "0.5 mi" },
    { type: "Airport", icon: "A", color: "#8b5cf6", distance: "14.2 mi" },
  ];
  return (
    <div>
      <div className="mt-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          Distance to Key Nodes
        </h3>

        <div className="space-y-4">
          {nodeData.map((node, index) => (
            <div key={index}>
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs mr-3"
                    style={{ backgroundColor: node.color }}
                  >
                    {node.icon}
                  </div>
                  <span>{node.type}</span>
                </div>
                <span className="font-medium">{node.distance}</span>
              </div>
              {index < nodeData.length - 1 && (
                <hr className="border-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DistanceDetails;
