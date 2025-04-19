import DemographicTrends from "@/components/demographic_trends/DemographicTrends";
import LandSaleComparables from "@/components/land_sale_comparables/LandSaleComparables";
import ProximityInsights from "@/components/proximity_insights/ProximityInsights";
import SupplyPipeline from "@/components/supply_pipeline/SupplyPipeline";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/tabs/Tabs";
import ZoningOverlay from "@/components/zoning_overlay/ZoningOverlay";

export default function Location() {
  return (
    <div className="container mx-auto">
      <Tabs defaultValue="supply-pipeline" className="w-full">
        <TabsList>
          <TabsTrigger value="supply-pipeline">Supply Pipeline</TabsTrigger>
          <TabsTrigger value="land-scale-comparables">
            Land Scale Comparables
          </TabsTrigger>
          <TabsTrigger value="demographic-trends">
            Demographic Trends
          </TabsTrigger>
          <TabsTrigger value="proximity-insights">
            Proximity Insights
          </TabsTrigger>
          <TabsTrigger value="zoning-overlays">Zoning Overlays</TabsTrigger>
        </TabsList>
        <TabsContent value="supply-pipeline">
          <SupplyPipeline />
        </TabsContent>
        <TabsContent value="land-scale-comparables">
          <LandSaleComparables />
        </TabsContent>
        <TabsContent value="demographic-trends">
          <DemographicTrends />
        </TabsContent>
        <TabsContent value="proximity-insights">
          <ProximityInsights />
        </TabsContent>
        <TabsContent value="zoning-overlays">
          <ZoningOverlay />
        </TabsContent>
      </Tabs>
    </div>
  );
}
