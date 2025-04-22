"use client";

import { usePdfContext } from "@/context/PdfContext";

const Proximity = () => {
  const { pdfData } = usePdfContext();

  if (!pdfData?.proximityData) {
    return (
      <p className="flex justify-center items-center">
        No proximity data available. Please upload a PDF.
      </p>
    );
  }

  const { distances, adjacentFacilities, strategicAdvantages } =
    pdfData.proximityData;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      {/* Left Column: Distances */}
      <div>
        <h2 className="text-lg font-bold mb-4">Access to NY Metro</h2>
        <div className="space-y-2">
          {Object.entries(distances).map(([location, distance], index) => (
            <div key={index} className="flex items-center gap-x-2 text-[12px]">
              <span className="font-bold">{String(distance)} MILES</span>
              <span className="text-black">→</span>
              <span className="text-tertiary">{location.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Adjacent Facilities and Strategic Advantages */}
      <div>
        {/* Adjacent Facilities */}
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4">Adjacent Facilities</h2>
          <ul className="list-disc pl-5 space-y-2">
            {adjacentFacilities.map((facility: any, index: number) => (
              <li key={index}>
                <strong>{facility.name}:</strong> {facility.description}
              </li>
            ))}
          </ul>
        </div>

        {/* Strategic Advantages */}
        <div>
          <h2 className="text-lg font-bold mb-4">Strategic Advantages</h2>
          <ul className="list-disc pl-5 space-y-2">
            {strategicAdvantages.map((advantage: string, index: number) => (
              <li key={index}>{advantage}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Proximity;
