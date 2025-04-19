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
      <section className="container mx-auto px-4">
        <SupplyPipelineHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Construction Timeline Chart */}
          <ConstructionTimeline />
          {/* Property Type Mix */}
          <PropertyTypeMix />
          {/* Nearby Developments Table */}
          <NearbyDevelopment />

          {/* Impact Analysis */}
          <ImpactAnalysis />
        </div>
      </section>
    </div>
  );
}
