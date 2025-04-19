import MajorTenantProximity from "./MajorTenantProximity";
import ProximityInsightsHeader from "./ProximityInsightsHeader";
import ProximityToKeyInfra from "./ProximityToKeyInfra";

export default function ProximityInsights() {
  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <main className="container mx-auto px-4">
        {/* Proximity Section */}
        <div>
          {/* Proximity Insights Header */}
          <ProximityInsightsHeader />

          <ProximityToKeyInfra />

          {/* Major Tenant Proximity */}
          <MajorTenantProximity />
        </div>
      </main>
    </div>
  );
}
