"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface PdfContextType {
  pdfData: any | null;
  setPdfData: (data: any) => void;
}

const PdfContext = createContext<PdfContextType | undefined>(undefined);

export const PdfProvider = ({ children }: { children: ReactNode }) => {
  const [pdfData, setPdfData] = useState<any | null>(null);

  return (
    <PdfContext.Provider value={{ pdfData, setPdfData }}>
      {children}
    </PdfContext.Provider>
  );
};

export const usePdfContext = () => {
  const context = useContext(PdfContext);
  if (!context) {
    throw new Error("usePdfContext must be used within a PdfProvider");
  }
  return context;
};
