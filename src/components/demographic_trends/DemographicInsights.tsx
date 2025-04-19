function DemographicInsights() {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-bold text-primary mb-4">
        Key Demographic Insights
      </h3>
      <ul className="space-y-4">
        <li className="flex items-start">
          <span className="w-5 h-5 rounded-full bg-blue-500 mr-4 mt-1"></span>
          <span>
            Population Growth: 1.8% annually (above borough average of 1.2%)
          </span>
        </li>
        <li className="flex items-start">
          <span className="w-5 h-5 rounded-full bg-green-500 mr-4 mt-1"></span>
          <span>
            Income Growth: 3.2% annually (consistent with borough trends)
          </span>
        </li>
        <li className="flex items-start">
          <span className="w-5 h-5 rounded-full bg-amber-500 mr-4 mt-1"></span>
          <span>
            Workforce: Strong logistics/transport employment aligns with
            property use
          </span>
        </li>
        <li className="flex items-start">
          <span className="w-5 h-5 rounded-full bg-red-500 mr-4 mt-1"></span>
          <span>
            Education: 36% of workforce has bachelor&apos;s degree or higher
          </span>
        </li>
        <li className="flex items-start">
          <span className="w-5 h-5 rounded-full bg-purple-500 mr-4 mt-1"></span>
          <span>
            Age: Median age of 34.2 years (3.1 years younger than borough
            average)
          </span>
        </li>
      </ul>
    </div>
  );
}

export default DemographicInsights;
