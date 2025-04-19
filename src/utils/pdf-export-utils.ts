/**
 * PDF Export Utilities
 *
 * This file contains utility functions for exporting different tabs of the
 * Location Analysis page to PDF format.
 */

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

/**
 * Default property information
 */
const DEFAULT_PROPERTY = {
  name: "280 Richards, Brooklyn, NY",
  type: "Warehouse | Amazon | 357,151 sqft",
};

/**
 * Creates and returns a formatted date string
 */
export const getFormattedDate = () => {
  const date = new Date();
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

/**
 * Applies temporary style overrides to handle OKLCH colors
 * @returns The style element that was added (should be removed after export)
 */
const applyColorOverrides = () => {
  const tempStyles = document.createElement("style");
  tempStyles.textContent = `
      /* Override any OKLCH colors with safe fallbacks */
      * {
        color-scheme: light !important;
      }
      
      /* Completely disable OKLCH colors */
      *[style*="oklch"] {
        color: #000000 !important;
        background-color: #ffffff !important;
        border-color: #d1d5db !important;
      }
      
      /* Basic text and background overrides */
      body, div, span, p, h1, h2, h3, h4, h5, h6 {
        color: #000000 !important;
      }
      
      /* Specific overrides for UI elements */
      button, .bg-gray-900, .bg-primary/90, [class*="bg-gray-9"], [class*="bg-gray-8"] {
        background-color: #1a202c !important;
        color: #ffffff !important;
      }
      
      /* Background colors */
      .bg-gray-50, [class*="bg-gray-5"] {
        background-color: #f9fafb !important;
      }
      
      /* Border colors */
      [class*="border"] {
        border-color: #d1d5db !important;
      }
      
      /* Text colors */
      .text-gray-500, [class*="text-gray-5"] {
        color: #6b7280 !important;
      }
      
      /* Additional overrides for Tailwind colors that might be using OKLCH */
      [class*="text-blue"], [class*="text-indigo"], [class*="text-purple"], 
      [class*="text-pink"], [class*="text-red"], [class*="text-orange"], 
      [class*="text-yellow"], [class*="text-green"], [class*="text-teal"], 
      [class*="text-cyan"] {
        color: #1a202c !important;
      }
      
      [class*="bg-blue"], [class*="bg-indigo"], [class*="bg-purple"], 
      [class*="bg-pink"], [class*="bg-red"], [class*="bg-orange"], 
      [class*="bg-yellow"], [class*="bg-green"], [class*="bg-teal"], 
      [class*="bg-cyan"] {
        background-color: #e5e7eb !important;
      }
      
      /* Override any computed styles that might be using OKLCH */
      [style*="color"], [style*="background"] {
        color: #000000 !important;
        background-color: #ffffff !important;
        background-image: none !important;
      }
    `;
  document.head.appendChild(tempStyles);
  return tempStyles;
};

/**
 * Directly modifies element styles to remove OKLCH colors
 * @param element Element to process
 */
const processElementStyles = (element: HTMLElement) => {
  const allElements = element.querySelectorAll("*");

  // Function to replace OKLCH colors with safe alternatives
  const processCSSProperty = (el: Element, prop: string) => {
    const value = window.getComputedStyle(el).getPropertyValue(prop);
    if (value.includes("oklch")) {
      (el as HTMLElement).style.setProperty(prop, "#000000", "important");
    }
  };

  // Process all elements
  allElements.forEach((el) => {
    processCSSProperty(el, "color");
    processCSSProperty(el, "background-color");
    processCSSProperty(el, "border-color");

    // Remove any inline styles containing OKLCH
    const style = (el as HTMLElement).getAttribute("style");
    if (style && style.includes("oklch")) {
      (el as HTMLElement).setAttribute(
        "style",
        style.replace(/oklch\([^)]+\)/g, "#000000")
      );
    }
  });
};

/**
 * Renders an element to canvas with enhanced OKLCH handling
 * @param element Element to render
 * @returns Canvas with the rendered element
 */
const renderElementToCanvas = async (element: HTMLElement) => {
  const { container, elementClone } = createOffscreenClone(element);

  try {
    // Process element styles directly
    processElementStyles(elementClone);

    const canvas = await html2canvas(elementClone, {
      scale: 2,
      useCORS: true,
      logging: false,
      allowTaint: true,
      backgroundColor: "#ffffff",
      removeContainer: true,
      ignoreElements: ignoreProblematicElements,
      onclone: (documentClone, elementClone) => {
        // Additional processing after clone is created
        processElementStyles(elementClone);
      },
    });

    return canvas;
  } finally {
    if (document.body.contains(container)) {
      document.body.removeChild(container);
    }
  }
};

/**
 * Creates a clone of an element in an offscreen container
 * @param element The element to clone
 * @returns Object containing the container and cloned element
 */
const createOffscreenClone = (element: HTMLElement) => {
  const elementClone = element.cloneNode(true) as HTMLElement;
  elementClone.style.backgroundColor = "#ffffff";

  const container = document.createElement("div");
  container.style.position = "absolute";
  container.style.left = "-9999px";
  container.style.top = "-9999px";
  container.appendChild(elementClone);
  document.body.appendChild(container);

  return { container, elementClone };
};

/**
 * Element filter for html2canvas to ignore problematic elements
 */
const ignoreProblematicElements = (element: Element) => {
  const tagName = element.tagName.toLowerCase();
  return tagName === "iframe" || tagName === "video";
};

/**
 * Adds a footer to the current PDF page
 */
const addFooterToPdfPage = (
  pdf: jsPDF,
  pageNumber?: number,
  totalPages?: number
) => {
  pdf.setFontSize(8);
  pdf.setTextColor(100, 100, 100);

  let footerText = `© 2025 Starboard AI | Generated on ${getFormattedDate()}`;

  if (pageNumber && totalPages) {
    footerText += ` | Page ${pageNumber} of ${totalPages}`;
  } else if (pageNumber) {
    footerText += ` | Page ${pageNumber}`;
  }

  pdf.text(footerText, 105, 287, { align: "center" });
};

/**
 * Adds an image across multiple pages if needed
 */
const addImageToPdf = (
  pdf: jsPDF,
  imgData: string,
  imgWidth: number,
  imgHeight: number,
  startPosition: number,
  addFooter: boolean = true
) => {
  const pageHeight = 277;

  // Add first page image
  pdf.addImage(imgData, "PNG", 10, startPosition, imgWidth, imgHeight);
  let heightLeft = imgHeight - (pageHeight - startPosition);

  // Add additional pages if content exceeds page height
  let pageCount = 1;

  while (heightLeft >= 0) {
    pageCount++;
    const position = heightLeft - imgHeight;
    pdf.addPage();
    pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    if (addFooter) {
      addFooterToPdfPage(pdf, pdf.getNumberOfPages());
    }
  }

  return pageCount;
};

/**
 * Exports an element to PDF with custom formatting options
 */
export const exportElementToPDF = async (
  elementId: string,
  fileName: string,
  options = {
    addFooter: true,
    addHeader: true,
    propertyName: DEFAULT_PROPERTY.name,
    propertyType: DEFAULT_PROPERTY.type,
  }
) => {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`Element with ID ${elementId} not found`);
    return false;
  }

  let tempStyles = null;

  try {
    // Apply temporary style overrides to handle OKLCH colors
    tempStyles = applyColorOverrides();

    // Render element to canvas
    const canvas = await renderElementToCanvas(element as HTMLElement);

    // Create PDF
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    // Add header if requested
    if (options.addHeader) {
      pdf.setFontSize(14);
      pdf.setFont("helvetica", "bold");
      pdf.text(options.propertyName, 15, 15);
      pdf.setFontSize(10);
      pdf.setFont("helvetica", "normal");
      pdf.text(options.propertyType, 15, 22);
      pdf.line(15, 25, 195, 25);
    }

    // Convert canvas to image
    const imgData = canvas.toDataURL("image/png");
    const imgWidth = 190;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    // Start position considering header
    const startPosition = options.addHeader ? 30 : 10;

    // Add image across pages
    addImageToPdf(
      pdf,
      imgData,
      imgWidth,
      imgHeight,
      startPosition,
      options.addFooter
    );

    // Add footer to first page
    if (options.addFooter) {
      pdf.setPage(1);
      addFooterToPdfPage(pdf, 1, pdf.getNumberOfPages());
    }

    // Save the PDF
    pdf.save(fileName);
    return true;
  } catch (error) {
    console.error("Error generating PDF:", error);
    return false;
  } finally {
    // Remove temporary styles
    if (tempStyles) {
      document.head.removeChild(tempStyles);
    }
  }
};

/**
 * Creates a PDF with all tabs combined
 */
export const exportAllTabsToPDF = async (
  tabIds: string[],
  fileName: string,
  propertyInfo = DEFAULT_PROPERTY
) => {
  let tempStyles = null;

  try {
    // Apply temporary style overrides to handle OKLCH colors
    tempStyles = applyColorOverrides();

    // Create PDF
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    // Add cover page
    pdf.setFontSize(22);
    pdf.setFont("helvetica", "bold");
    pdf.text("Location Analysis", 105, 100, { align: "center" });

    pdf.setFontSize(16);
    pdf.text(propertyInfo.name, 105, 120, { align: "center" });

    pdf.setFontSize(12);
    pdf.setFont("helvetica", "normal");
    pdf.text(propertyInfo.type, 105, 130, { align: "center" });

    pdf.setFontSize(10);
    pdf.text(`Generated on ${getFormattedDate()}`, 105, 150, {
      align: "center",
    });

    // Add footer to cover page
    addFooterToPdfPage(pdf, 1);

    // Add each tab
    for (let i = 0; i < tabIds.length; i++) {
      const element = document.getElementById(tabIds[i]);
      if (!element) continue;

      // Add new page for each tab
      if (i > 0) pdf.addPage();

      // Render element to canvas
      const canvas = await renderElementToCanvas(element as HTMLElement);

      // Add canvas to PDF
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      addImageToPdf(pdf, imgData, imgWidth, imgHeight, 10, true);
    }

    // Save the PDF
    pdf.save(fileName);
    return true;
  } catch (error) {
    console.error("Error generating combined PDF:", error);
    return false;
  } finally {
    // Remove temporary styles
    if (tempStyles) {
      document.head.removeChild(tempStyles);
    }
  }
};
