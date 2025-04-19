import DemographicInsights from "./DemographicInsights";
import DemographicTrendsHeader from "./DemographicTrendsHeader";
import EducationAttainment from "./EducationAttainment";
import MedianHouseholdIncome from "./MedianHouseholdIncome";
import PopulationGrowthTrends from "./PopulationGrowthTrends";
import WorkforceComposition from "./WorkforceComposition";

export default function DemographicTrends() {
  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4">
        {/* Demographics Header */}

        <DemographicTrendsHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Population Growth Trends */}
          <PopulationGrowthTrends />

          {/* Median Household Income */}
          <MedianHouseholdIncome />

          {/* Workforce Composition */}
          <WorkforceComposition />

          {/* Educational Attainment */}
          <EducationAttainment />

          {/* Key Demographic Insights */}
          <DemographicInsights />
        </div>
      </section>
    </div>
  );
}
