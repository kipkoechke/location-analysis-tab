"use client";
import Image from "next/image";
import { useState } from "react";
import LeftColumnData from "./LeftColumnData";
import MiddleColumnData from "./MiddleColumnData";
import RightColumnData from "./RightColumnData";

function PropertyListings() {
  const [expandedProperty, setExpandedProperty] = useState<number | null>(null);

  const properties = [
    {
      id: 1,
      name: "280 Richards",
      location: "Brooklyn, NY",
      date: "-",
      tenant: "Amazon",
      pp: "$143,000,000",
      ppsf: "$458",
      capRate: "3.5%",
      purchaser: "-",
      seller: "Thor Equities",
      sqft: "312,000 SF",
      image: "/assets/sale-comparable-1.png",
      status: "neutral",
    },
    {
      id: 2,
      name: "39 Edgeboro Road",
      location: "Millstone, NJ",
      date: "Oct-23",
      tenant: "FedEx",
      pp: "$165,776,520",
      ppsf: "$323",
      capRate: "5.1%",
      purchaser: "Blackstone",
      seller: "IDI Logistics",
      sqft: "513,240 SF",
      image: "/assets/sale-comparable-2.png",
      status: "active",
      pros: [
        "Location and Access: Both properties are strategically positioned near major highways, with 39 Edgeboro close to I-95 and 280 Richards benefiting from NYC metro access. This supports efficient regional and national logistics operations.",
        "Logistics and Distribution Capabilities: Designed for high-capacity logistics, both properties feature large square footage, high clear heights (40 feet at Edgeboro, 36 feet at Richards), and substantial parking, essential for last-mile distribution.",
        "Build Quality and Modern Features: Both are newly constructed with modern standards. 39 Edgeboro's ESFR sprinkler system, ample power, and reinforced flooring align with the infrastructure needed for tenants like Amazon at 280 Richards.",
        "Tax and Zone Benefits: Edgeboro's 30-year PILOT tax abatement and Opportunity Zone designation make it financially attractive, paralleling 280 Richards' advantageous Brooklyn logistics market location",
      ],
      cons: [
        "Urban Proximity: 39 Edgeboro lacks close access to densely populated urban centers like Downtown Manhattan, unlike 280 Richards, which is well-situated in Brooklyn for last-mile delivery.",
        "Tenant Profile Suitability: With a larger footprint, 39 Edgeboro may be better suited for tenants with regional distribution needs rather than urban-focused logistics operations, limiting its appeal for tenants like Amazon focused on dense, urban areas.",
        "Infrastructure Specificity: Although well-equipped, 39 Edgeboro does not feature some urban-specific amenities, such as EV charging stations, which are critical to 280 Richards' appeal for sustainability-conscious tenants.",
        "Market Rental Growth: Despite its tax incentives, 39 Edgeboro is in a market with potentially lower rental growth compared to Brooklyn's high-demand, low-vacancy market, which supports stronger long-term rent escalations at 280 Richards",
      ],
    },
    {
      id: 3,
      name: "1 Debaun Road",
      location: "Millstone, NJ",
      date: "Jun-24",
      tenant: "Berry Plastics",
      pp: "$41,903,580",
      ppsf: "$315",
      capRate: "5.0%",
      purchaser: "Cabot",
      seller: "Scannell Properties",
      sqft: "132,930 SF",
      image: "/assets/sale-comparable-3.png",
      status: "active",
    },
    {
      id: 4,
      name: "Baylis 495 Business Park",
      location: "Melville, NY",
      date: "May-24",
      tenant: "Dr. Pepper",
      pp: "$44,000,000",
      ppsf: "$425",
      capRate: "5.1%",
      purchaser: "Bentall Green Oak",
      seller: "Creation Equity",
      sqft: "103,500 SF",
      image: "/assets/sale-comparable-4.png",
      status: "active",
    },
    {
      id: 5,
      name: "Terminal Logistics Center",
      location: "Queens, NY",
      date: "Mar-23",
      tenant: "Do & Co",
      pp: "$136,000,000",
      ppsf: "$405",
      capRate: "4-4%",
      purchaser: "Triangle Equities",
      seller: "L&B Realty Advisors",
      sqft: "336,000 SF",
      image: "/assets/sale-comparable-2.png",
      status: "warning",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500";
      case "warning":
        return "bg-yellow-500";
      default:
        return "hidden";
    }
  };

  const toggleExpand = (id: number) => {
    if (expandedProperty === id) {
      setExpandedProperty(null);
    } else {
      setExpandedProperty(id);
    }
  };

  return (
    <div className="divide-y divide-tertiary">
      {properties.map((property) => (
        <div key={property.id} className="border-b border-gray-200">
          {/* Property Row (Always Visible) */}
          <div
            className={`grid grid-cols-8 gap-4 px-4 py-4 items-center ${
              property.id !== 1 ? "cursor-pointer hover:bg-gray-50" : ""
            }`}
            onClick={
              property.id !== 1 ? () => toggleExpand(property.id) : undefined
            }
          >
            <div className="col-span-3 flex items-center">
              <div className="relative mr-2">
                <div
                  className={`w-2 h-2 rounded-full absolute -left-4 top-1/2 transform -translate-y-1/2 ${getStatusColor(
                    property.status
                  )}`}
                ></div>
              </div>
              <div
                className={`mr-3 relative ${
                  property.id === 1
                    ? "w-[265px] h-[167px]"
                    : "w-[209px] h-[117px]"
                } overflow-hidden rounded`}
              >
                <Image
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover rounded"
                  width={property.id === 1 ? 265 : 209}
                  height={property.id === 1 ? 167 : 117}
                />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between">
                  <p className="font-bold text-[12px] text-sm">
                    {property.name}
                  </p>
                </div>
                <p className="text-xs text-gray-500">{property.location}</p>
                <p className="text-xs text-gray-500">{property.sqft}</p>
              </div>
            </div>
            <div className="col-span-1">{property.date}</div>
            <div className="col-span-1">{property.tenant}</div>
            <div className="col-span-1">{property.pp}</div>
            <div className="col-span-1">{property.ppsf}</div>
            <div className="col-span-1">{property.capRate}</div>
          </div>

          {/* Expanded Content (Conditional) */}
          {expandedProperty === property.id && (
            <div className="px-4 py-4 bg-gray-50">
              <div className="grid grid-cols-3 gap-6">
                {/* Left Column - Pros */}
                <LeftColumnData property={property} />
                {/* Middle Column - Cons */}
                <MiddleColumnData property={property} />
                {/* Right Column - Data */}
                <RightColumnData property={property} />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default PropertyListings;
