"use client";

import MunicipalReferences from "./MunicipalReferences";
import ZoningMapVisualization from "./ZoningMapVisualization";
import ZoningOverlaysHeader from "./ZoningOverlaysHeader";

export default function ZoningOverlays() {
  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4">
        {/* Zoning Overlays Header */}
        <ZoningOverlaysHeader />

        <div className="space-y-6">
          {/* Zoning Map Visualization */}
          <ZoningMapVisualization />

          {/* Zoning Data */}
          <MunicipalReferences />
        </div>
      </section>
    </div>
  );
}
