function MajorTenantProximity() {
  // Data for the table of major tenants
  const tenantData = [
    {
      company: "FedEx",
      industry: "Logistics",
      distance: "1.2 mi",
      facilityType: "Distribution Center",
      size: "245,000",
    },
    {
      company: "Walmart",
      industry: "Retail",
      distance: "2.4 mi",
      facilityType: "Fulfillment Center",
      size: "310,000",
    },
    {
      company: "Home Depot",
      industry: "Retail",
      distance: "3.1 mi",
      facilityType: "Distribution Hub",
      size: "195,000",
    },
    {
      company: "UPS",
      industry: "Logistics",
      distance: "1.8 mi",
      facilityType: "Sorting Facility",
      size: "175,000",
    },
    {
      company: "Target",
      industry: "Retail",
      distance: "4.2 mi",
      facilityType: "Regional DC",
      size: "290,000",
    },
  ];

  return (
    <div className="mb-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">
        Major Tenant Proximity
      </h3>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-left text-gray-500 font-medium">
                Company
              </th>
              <th className="py-3 px-4 text-left text-gray-500 font-medium">
                Industry
              </th>
              <th className="py-3 px-4 text-left text-gray-500 font-medium">
                Distance
              </th>
              <th className="py-3 px-4 text-left text-gray-500 font-medium">
                Facility Type
              </th>
              <th className="py-3 px-4 text-left text-gray-500 font-medium">
                Size (sqft)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {tenantData.map((tenant, index) => (
              <tr key={index}>
                <td className="py-3 px-4 text-gray-900">{tenant.company}</td>
                <td className="py-3 px-4 text-gray-900">{tenant.industry}</td>
                <td className="py-3 px-4 text-gray-900">{tenant.distance}</td>
                <td className="py-3 px-4 text-gray-900">
                  {tenant.facilityType}
                </td>
                <td className="py-3 px-4 text-gray-900">{tenant.size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MajorTenantProximity;
