import { usePdfContext } from "@/context/PdfContext";
import MajorTenantProximity from "./MajorTenantProximity";
import Proximity from "./PData";
import ProximityInsightsHeader from "./ProximityInsightsHeader";
import ProximityToKeyInfra from "./ProximityToKeyInfra";

export default function ProximityInsights() {
  const { pdfData } = usePdfContext();

  const hasProximityData = pdfData?.proximityData;

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4">
        {hasProximityData ? (
          <div>
            {/* Proximity Insights Header */}
            <ProximityInsightsHeader />

            {/* Proximity Section */}
            <Proximity />

            {/* Proximity to Key Infrastructure */}
            <ProximityToKeyInfra />

            {/* Major Tenant Proximity */}
            <MajorTenantProximity />
          </div>
        ) : (
          <div className="flex items-center justify-center mt-20">
            <p className="text-gray-700 text-lg font-semibold">
              No proximity data available. Please upload a PDF.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
