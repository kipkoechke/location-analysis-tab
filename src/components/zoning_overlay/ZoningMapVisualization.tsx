function ZoningMapVisualization() {
  const zones = [
    {
      name: "M1-1",
      color: "rgba(59, 130, 246, 0.5)",
      style: {
        top: "20%",
        left: "25%",
        width: "40%",
        height: "30%",
        clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)",
      },
    },
    {
      name: "M2-1",
      color: "rgba(16, 185, 129, 0.5)",
      style: {
        top: "30%",
        left: "55%",
        width: "30%",
        height: "35%",
        clipPath: "polygon(0 0, 100% 0, 80% 100%, -20% 100%)",
      },
    },
    {
      name: "M3-1",
      color: "rgba(245, 158, 11, 0.5)",
      style: {
        top: "50%",
        left: "25%",
        width: "40%",
        height: "35%",
        clipPath: "polygon(0 0, 90% 0, 100% 100%, 10% 100%)",
      },
    },
    {
      name: "R6A",
      color: "rgba(239, 68, 68, 0.5)",
      style: {
        top: "25%",
        left: "10%",
        width: "20%",
        height: "35%",
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 40% 100%)",
      },
    },
  ];

  const zoningDetails = [
    { label: "Permitted Use Groups", value: "6-18" },
    { label: "FAR", value: "2.0" },
    { label: "Max Building Height", value: "60 ft" },
    { label: "Parking Requirement", value: "1:1000 sqft" },
    { label: "Loading Berths", value: "1 per 25,000 sqft" },
    { label: "Yard Requirements", value: "15ft rear" },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Zoning Map Section */}
        <div className="lg:col-span-2">
          <div className="p-4 h-full">
            <h3 className="font-bold text-lg mb-4">Zoning Map</h3>
            <div className="bg-gray-100 rounded relative h-64 lg:h-80">
              <div className="absolute inset-2">
                <div className="w-full h-full relative">
                  {/* Render Zones */}
                  {zones.map((zone, index) => (
                    <div
                      key={index}
                      className="absolute"
                      style={{
                        ...zone.style,
                        backgroundColor: zone.color,
                      }}
                    ></div>
                  ))}

                  {/* Subject Property Marker */}
                  <div
                    className="absolute bg-gray-900 rounded-full w-8 h-8 flex items-center justify-center text-white"
                    style={{ top: "45%", left: "40%" }}
                  >
                    S
                  </div>

                  {/* Legend */}
                  <Legend zones={zones} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Zoning Details Section */}
        <div>
          <div className="p-4 h-full">
            <h3 className="font-bold text-lg mb-4">
              <span className="font-bold">Zoning Details:</span> M-2
            </h3>
            <ZoningDetails details={zoningDetails} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Legend({ zones }: { zones: { name: string; color: string }[] }) {
  return (
    <div className="absolute top-4 left-4 bg-white bg-opacity-90 p-2 rounded">
      {zones.map((zone, index) => (
        <div key={index} className="flex items-center mb-2">
          <div
            className="w-4 h-4 mr-2"
            style={{ backgroundColor: zone.color }}
          ></div>
          <span className="text-xs">{zone.name}</span>
        </div>
      ))}
    </div>
  );
}

function ZoningDetails({
  details,
}: {
  details: { label: string; value: string }[];
}) {
  return (
    <div className="space-y-3">
      {details.map((detail, index) => (
        <p key={index} className="text-sm text-primary">
          <span className="font-bold">{detail.label}:</span> {detail.value}
        </p>
      ))}
    </div>
  );
}

export default ZoningMapVisualization;
