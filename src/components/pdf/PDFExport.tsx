"use client";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import { FiFileText } from "react-icons/fi";

interface PDFExportProps {
  elementId: string;
  fileName?: string;
  label?: string;
  propertyName?: string;
  propertyType?: string;
}

const PDFExport = ({
  elementId,
  fileName = "location-analysis.pdf",
  label = "Export to PDF",
  propertyName = "280 Richards, Brooklyn, NY",
  propertyType = "Warehouse | Amazon | 357,151 sqft",
}: PDFExportProps) => {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    setIsExporting(true);

    try {
      // Instead of using the utility, implement a direct fix here
      const element = document.getElementById(elementId);
      if (!element) {
        console.error(`Element with ID ${elementId} not found`);
        return;
      }

      // Apply OKLCH fix directly
      const tempStyles = document.createElement("style");
      tempStyles.textContent = `
        * {
          color-scheme: light !important;
        }
        *[style*="oklch"] {
          color: #000000 !important;
          background-color: #ffffff !important;
          border-color: #d1d5db !important;
        }
        [style*="color"], [style*="background"] {
          color: #000000 !important;
          background-color: #ffffff !important;
          background-image: none !important;
        }
      `;
      document.head.appendChild(tempStyles);

      // Create an off-screen clone to avoid modifying the visible element
      const elementClone = element.cloneNode(true) as HTMLElement;
      elementClone.style.backgroundColor = "#ffffff";

      const container = document.createElement("div");
      container.style.position = "absolute";
      container.style.left = "-9999px";
      container.style.top = "-9999px";
      container.appendChild(elementClone);
      document.body.appendChild(container);

      // Process all elements to remove OKLCH colors
      const allElements = elementClone.querySelectorAll("*");
      allElements.forEach((el) => {
        const style = (el as HTMLElement).getAttribute("style");
        if (style && style.includes("oklch")) {
          (el as HTMLElement).setAttribute(
            "style",
            style.replace(/oklch\([^)]+\)/g, "#000000")
          );
        }
      });

      try {
        // Create canvas
        const canvas = await html2canvas(elementClone, {
          scale: 2,
          useCORS: true,
          logging: false,
          allowTaint: true,
          backgroundColor: "#ffffff",
          onclone: (doc, elem) => {
            // Additional processing during clone
            elem.querySelectorAll("*").forEach((el) => {
              if (el instanceof HTMLElement) {
                const style = el.getAttribute("style");
                if (style && style.includes("oklch")) {
                  el.setAttribute(
                    "style",
                    style.replace(/oklch\([^)]+\)/g, "#000000")
                  );
                }
              }
            });
          },
        });

        // Create PDF
        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "mm",
          format: "a4",
        });

        // Add header
        pdf.setFontSize(14);
        pdf.setFont("helvetica", "bold");
        pdf.text(propertyName, 15, 15);
        pdf.setFontSize(10);
        pdf.setFont("helvetica", "normal");
        pdf.text(propertyType, 15, 22);
        pdf.line(15, 25, 195, 25);

        // Add content
        const imgData = canvas.toDataURL("image/png");
        const imgWidth = 190;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        pdf.addImage(imgData, "PNG", 10, 30, imgWidth, imgHeight);

        // Add footer
        pdf.setFontSize(8);
        pdf.setTextColor(100, 100, 100);
        const date = new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        });
        pdf.text(`© 2025 Starboard AI | Generated on ${date}`, 105, 287, {
          align: "center",
        });

        // Save the PDF
        pdf.save(fileName);
      } finally {
        // Clean up
        if (document.body.contains(container)) {
          document.body.removeChild(container);
        }
      }

      // Remove temp styles
      document.head.removeChild(tempStyles);
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <button
      onClick={handleExport}
      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
      disabled={isExporting}
    >
      {isExporting ? (
        <>
          <BiLoaderAlt className="w-4 h-4 animate-spin" />
          <span>Exporting...</span>
        </>
      ) : (
        <>
          <FiFileText className="w-4 h-4" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
};

export default PDFExport;
