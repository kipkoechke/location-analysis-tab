interface Property {
  name: string;
  ppsf?: string;
  capRate?: string;
  tenant?: string;
}

function RightColumnData({ property }: { property: Property }) {
  return (
    <div>
      <div>
        <h3 className="font-bold text-lg mb-3">Data</h3>
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className="border border-primary py-2 px-4 font-bold text-[12px] text-primary bg-gray-100">
                Metric
              </th>
              <th className="border border-primary py-2 px-4 font-bold text-[12px] text-primary bg-gray-100">
                {property.name}
              </th>
              <th className="border border-primary py-2 px-4 font-bold text-[12px] text-primary bg-gray-100">
                Comparison
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-primary py-2 px-4 font-bold text-[12px] text-primary">
                PPSF
              </td>
              <td className="border border-primary py-2 px-4">
                {property.ppsf || "N/A"}
              </td>
              <td className="border border-primary py-2 px-4">$323.00</td>
            </tr>
            <tr>
              <td className="border border-primary py-2 px-4 font-bold text-[12px] text-primary">
                Cap Rate
              </td>
              <td className="border border-primary py-2 px-4">
                {property.capRate || "N/A"}
              </td>
              <td className="border border-primary py-2 px-4">5.1%</td>
            </tr>
            <tr>
              <td className="border border-primary py-2 px-4 font-bold text-[12px] text-primary">
                Year Built
              </td>
              <td className="border border-primary py-2 px-4">2021</td>
              <td className="border border-primary py-2 px-4">2020</td>
            </tr>
            <tr>
              <td className="border border-primary py-2 px-4 font-bold text-[12px] text-primary">
                Occupancy
              </td>
              <td className="border border-primary py-2 px-4">100%</td>
              <td className="border border-primary py-2 px-4">100%</td>
            </tr>
            <tr>
              <td className="border border-primary py-2 px-4 font-bold text-[12px] text-primary">
                Tenant
              </td>
              <td className="border border-primary py-2 px-4">
                {property.tenant || "N/A"}
              </td>
              <td className="border border-primary py-2 px-4">FedEx</td>
            </tr>
            <tr>
              <td className="border border-primary py-2 px-4 font-bold text-[12px] text-primary">
                Rent psf
              </td>
              <td className="border border-primary py-2 px-4">$24.40</td>
              <td className="border border-primary py-2 px-4">$19.20</td>
            </tr>
            <tr>
              <td className="border border-primary py-2 px-4 font-bold text-[12px] text-primary">
                Clear Height
              </td>
              <td className="border border-primary py-2 px-4">36&#39;</td>
              <td className="border border-primary py-2 px-4">40&#39;</td>
            </tr>
            <tr>
              <td className="border border-primary py-2 px-4 font-bold text-[12px] text-primary">
                Parking Spaces
              </td>
              <td className="border border-primary py-2 px-4">393</td>
              <td className="border border-primary py-2 px-4">281</td>
            </tr>
            <tr>
              <td className="border border-primary py-2 px-4 font-bold text-[12px] text-primary">
                Submarket Vacancy Rates
              </td>
              <td className="border border-primary py-2 px-4">5%</td>
              <td className="border border-primary py-2 px-4">5%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RightColumnData;
