"use client";

import ConstructionTimeline from "./ConstructionTimeline";
import ImpactAnalysis from "./ImpactAnalysis";
import NearbyDevelopment from "./NearbyDevelopment";
import PropertyTypeMix from "./PropertyTypeMix";
import SupplyPipelineHeader from "./SupplyPipelineHeader";

export default function SupplyPipeline() {
  return (
    <div className="min-h-screen">
      {/* Supply Pipeline Section */}
      <section className="container mx-auto px-4 space-y-8">
        {/* Header */}
        <SupplyPipelineHeader />

        {/* First Row: Construction Timeline and Property Type Mix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ConstructionTimeline />
          <PropertyTypeMix />
        </div>

        {/* Second Row: Nearby Developments and Impact Analysis */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <NearbyDevelopment />
          </div>
          <ImpactAnalysis />
        </div>
      </section>
    </div>
  );
}
