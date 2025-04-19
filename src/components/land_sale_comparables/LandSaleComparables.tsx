"use client";

import LandSaleComparablesHeader from "./LandSaleComparablesHeader";
import PropertyListings from "./PropertyListings";
import TableHeaders from "./TableHeaders";

export default function LandSaleComparables() {
  return (
    <div className="min-h-screen">
      <LandSaleComparablesHeader />

      {/* Table Headers */}
      <TableHeaders />

      {/* Property Listings */}
      <PropertyListings />
    </div>
  );
}
