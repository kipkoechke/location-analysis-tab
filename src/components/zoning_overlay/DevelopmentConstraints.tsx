function DevelopmentConstraints() {
  const buildableEnvelopeData = {
    lotSize: "178,575 sqft",
    maxBuildable: "357,151 sqft",
    currentBuilt: "357,151 sqft",
    remaining: "0 sqft",
  };

  const varianceHistory = [
    { address: "237 Kent Ave", type: "Height", date: "2023" },
    { address: "312 Wythe Ave", type: "Use", date: "2022" },
  ];

  return (
    <div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-4">
          Development Constraints Analysis
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Buildable Envelope */}
          <BuildableEnvelope data={buildableEnvelopeData} />

          {/* Variance History */}
          <VarianceHistory history={varianceHistory} />
        </div>
      </div>
    </div>
  );
}

function BuildableEnvelope({
  data,
}: {
  data: {
    lotSize: string;
    maxBuildable: string;
    currentBuilt: string;
    remaining: string;
  };
}) {
  return (
    <div className="p-4">
      <h4 className="font-bold mb-3">Buildable Envelope</h4>
      <div className="flex">
        <div className="space-y-2 text-xs text-tertiary">
          <p>Lot Size: {data.lotSize}</p>
          <p>Max Buildable: {data.maxBuildable}</p>
          <p>Current Built: {data.currentBuilt}</p>
          <p>Remaining: {data.remaining}</p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-24 h-20">
            <div className="absolute border border-dashed border-gray-900 w-full h-full"></div>
            <div className="absolute top-0 left-0 right-0 h-3/4 bg-blue-500 bg-opacity-20"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-xs">Maximum</span>
              <span className="text-xs">Buildable Area</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VarianceHistory({
  history,
}: {
  history: { address: string; type: string; date: string }[];
}) {
  return (
    <div className="p-4">
      <h4 className="font-bold mb-3">Recent Area Variances</h4>
      <table className="w-full text-xs">
        <thead className="bg-white">
          <tr>
            <th className="text-left p-2">Address</th>
            <th className="text-left p-2">Type</th>
            <th className="text-left p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="p-2 text-tertiary">{item.address}</td>
              <td className="p-2 text-tertiary">{item.type}</td>
              <td className="p-2 text-tertiary">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DevelopmentConstraints;
