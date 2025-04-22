"use client";

import DemographicTrends from "@/components/demographic_trends/DemographicTrends";
import LandSaleComparables from "@/components/land_sale_comparables/LandSaleComparables";
import PdfUpload from "@/components/pdf_upload/PdfUpload";
import ProximityInsights from "@/components/proximity_insights/ProximityInsights";
import SupplyPipeline from "@/components/supply_pipeline/SupplyPipeline";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/tabs/Tabs";
import ZoningOverlay from "@/components/zoning_overlay/ZoningOverlay";
import {
  exportAllTabsToPDF,
  exportElementToPDF,
} from "@/utils/pdf-export-utils";
import { useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { FiFileText } from "react-icons/fi";

export default function Location() {
  const [activeTab, setActiveTab] = useState("supply-pipeline");
  const [isExporting, setIsExporting] = useState(false);
  const [showExportOptions, setShowExportOptions] = useState(false);

  // Property info constants
  const propertyName = "280 Richards, Brooklyn, NY";
  const propertyType = "Warehouse | Amazon | 357,151 sqft";

  // Function to get the appropriate filename based on active tab
  const getFileName = (tab: string = activeTab) => {
    const formattedPropertyName = propertyName
      .replace(/,\s*/g, "-")
      .replace(/\s+/g, "-");
    return `${formattedPropertyName}-${tab}.pdf`;
  };

  // Handle tab change
  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  // Handle export of currently active tab
  const handleExportActiveTab = async () => {
    setIsExporting(true);
    try {
      await exportElementToPDF("location-content", getFileName(), {
        addFooter: true,
        addHeader: true,
        propertyName,
        propertyType,
      });
    } finally {
      setIsExporting(false);
      setShowExportOptions(false);
    }
  };

  // Handle export of all tabs combined
  const handleExportAllTabs = async () => {
    setIsExporting(true);
    try {
      const tabIds = [
        "supply-pipeline-content",
        "land-comps-content",
        "demographics-content",
        "proximity-content",
        "zoning-content",
      ];

      await exportAllTabsToPDF(
        tabIds,
        `${propertyName
          .replace(/,\s*/g, "-")
          .replace(/\s+/g, "-")}-Complete-Location-Analysis.pdf`,
        {
          name: propertyName,
          type: propertyType,
        }
      );
    } finally {
      setIsExporting(false);
      setShowExportOptions(false);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold mb-6">Location Analysis</h1>
        <PdfUpload />
      </div>
      {/* <div className="flex justify-between items-center mb-6">
        <Image
          src="/assets/sale-comparable-1.png"
          alt="Location"
          width={333}
          height={187}
          className="rounded-md"
        />

       
        <div className="p-4 rounded flex items-center justify-between w-full max-w-3xl mr-4">
          <div>
            <h2 className="text-lg font-bold">{propertyName}</h2>
            <p className="text-gray-500">{propertyType}</p>
          </div>

        
          <div className="relative">
            <button
              onClick={() => setShowExportOptions(!showExportOptions)}
              className="bg-primary hover:bg-primary/85 hover:cursor-pointer text-white px-4 py-2 rounded flex items-center"
              disabled={isExporting}
            >
              {isExporting ? (
                <>
                  <span className="mr-2 h-4 w-4 animate-spin">◌</span>
                  <span>Exporting...</span>
                </>
              ) : (
                <>
                  <FiFileText className="mr-2 h-4 w-4" />
                  <span>Export</span>
                  <FaChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </button>

            {showExportOptions && (
              <div className="absolute right-0 mt-1 bg-white border border-gray-200 rounded shadow-lg z-10 w-56">
                <button
                  onClick={handleExportActiveTab}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center"
                >
                  <FaFileDownload className="mr-2 h-4 w-4" />
                  <span>Export Current Tab</span>
                </button>
                <button
                  onClick={handleExportAllTabs}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center"
                >
                  <FiFileText className="mr-2 h-4 w-4" />
                  <span>Export All Tabs</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div> */}

      <div id="location-content">
        <Tabs
          defaultValue="supply-pipeline"
          className="w-full"
          onValueChange={handleTabChange}
        >
          <div className="flex items-center justify-between mb-6">
            <TabsList>
              <TabsTrigger value="supply-pipeline">Supply Pipeline</TabsTrigger>
              <TabsTrigger value="land-sale-comparables">
                Land Sale Comparables
              </TabsTrigger>
              <TabsTrigger value="demographic-trends">
                Demographic Trends
              </TabsTrigger>
              <TabsTrigger value="proximity-insights">
                Proximity Insights
              </TabsTrigger>
              <TabsTrigger value="zoning-overlays">Zoning Overlays</TabsTrigger>
            </TabsList>
            {/* Export Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowExportOptions(!showExportOptions)}
                className="bg-primary hover:bg-primary/85 hover:cursor-pointer text-white px-4 py-2 rounded flex items-center"
                disabled={isExporting}
              >
                {isExporting ? (
                  <>
                    <span className="mr-2 h-4 w-4 animate-spin">◌</span>
                    <span>Exporting...</span>
                  </>
                ) : (
                  <>
                    <FiFileText className="mr-2 h-4 w-4" />
                    <span>Export</span>
                    <FaChevronDown className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>

              {showExportOptions && (
                <div className="absolute right-0 mt-1 bg-white border border-gray-200 rounded shadow-lg z-10 w-56">
                  <button
                    onClick={handleExportActiveTab}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center"
                  >
                    <FaFileDownload className="mr-2 h-4 w-4" />
                    <span>Export Current Tab</span>
                  </button>
                  <button
                    onClick={handleExportAllTabs}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center"
                  >
                    <FiFileText className="mr-2 h-4 w-4" />
                    <span>Export All Tabs</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          <TabsContent value="supply-pipeline">
            <div id="supply-pipeline-content">
              <SupplyPipeline />
            </div>
          </TabsContent>

          <TabsContent value="land-sale-comparables">
            <div id="land-comps-content">
              <LandSaleComparables />
            </div>
          </TabsContent>

          <TabsContent value="demographic-trends">
            <div id="demographics-content">
              <DemographicTrends />
            </div>
          </TabsContent>

          <TabsContent value="proximity-insights">
            <div id="proximity-content">
              <ProximityInsights />
            </div>
          </TabsContent>

          <TabsContent value="zoning-overlays">
            <div id="zoning-content">
              <ZoningOverlay />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
