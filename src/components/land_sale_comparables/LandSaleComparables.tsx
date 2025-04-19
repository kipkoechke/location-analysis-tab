"use client";

import PropertyListings from "./PropertyListings";
import TableHeaders from "./TableHeaders";

export default function LandSaleComparables() {
  return (
    <div className="min-h-screen">
      {/* Table Headers */}
      <TableHeaders />
      {/* Property Listings */}
      <PropertyListings />

      {/* Property Listings with Accordion */}
    </div>
  );
}
