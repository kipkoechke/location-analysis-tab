"use client";

import { usePdfContext } from "@/context/PdfContext";
import LandSaleComparablesHeader from "./LandSaleComparablesHeader";

const PropertyListings = () => {
  const { pdfData } = usePdfContext();

  if (!pdfData?.salesComparables) {
    return (
      <p className="flex items-center justify-center">
        No data available. Please upload a PDF.
      </p>
    );
  }

  const properties = pdfData.salesComparables;

  return (
    <div className="overflow-x-auto">
      <LandSaleComparablesHeader />
      <table className="min-w-full border-collapse border border-gray-200 text-[12px]">
        <thead className="bg-gray-100">
          <tr>
            {[
              "Date",
              "Property Name",
              "Major Tenant",
              "Borough/Market",
              "SF",
              "PP",
              "PPSF",
              "Cap Rate",
              "Purchaser",
              "Seller",
            ].map((header) => (
              <th
                key={header}
                className="border border-gray-200 px-2 py-2 text-left"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {properties.map((property: any, index: number) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              {/* Date */}
              <td className="border border-gray-200 px-2 py-2">
                {property.date}
              </td>

              {/* Property Name */}
              <td className="border border-gray-200 px-2 py-2">
                {property.propertyName}
              </td>
              {/* Major Tenant */}
              <td className="border border-gray-200 px-2 py-2">
                {property.majorTenant}
              </td>
              {/* Borough/Market */}
              <td className="border border-gray-200 px-2 py-2">
                {property.boroughMarket}
              </td>
              {/* SF */}
              <td className="border border-gray-200 px-2 py-2">
                {property.sf.toLocaleString()}
              </td>
              {/* PP */}
              <td className="border border-gray-200 px-2 py-2">
                ${property.pp.toLocaleString()}
              </td>
              {/* PPSF */}
              <td className="border border-gray-200 px-2 py-2">
                ${property.ppsf.toLocaleString()}
              </td>
              {/* Cap Rate */}
              <td className="border border-gray-200 px-2 py-2">
                {property.capRate}%
              </td>
              {/* Purchaser */}
              <td className="border border-gray-200 px-2 py-2">
                {property.purchaser}
              </td>
              {/* Seller */}
              <td className="border border-gray-200 px-2 py-2">
                {property.seller}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropertyListings;
