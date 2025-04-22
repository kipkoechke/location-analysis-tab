"use client";

import { usePdfContext } from "@/context/PdfContext";
import { useUploadPdf } from "@/hooks/uploadPdf";
import React, { useState } from "react";
import toast from "react-hot-toast";

const PdfUpload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { uploadPdf, isUploading } = useUploadPdf();
  const { setPdfData } = usePdfContext();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      uploadPdf(selectedFile, {
        onSuccess: (data) => {
          setPdfData(data);
        },
      });
    } else {
      toast.error("Please select a PDF file to upload.");
    }
  };

  return (
    <div className="p-4 bg-white/50 rounded">
      <h1 className="font-bold text-lg mb-1">Upload PDF</h1>
      <div className="flex flex-col gap-4">
        {/* Styled File Input */}
        <label className="block">
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="block w-full text-sm text-tertiary file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/85"
          />
        </label>

        {/* Conditionally Rendered Button */}
        {selectedFile && (
          <button
            className={`px-4 py-2 rounded text-white font-semibold flex items-center justify-center ${
              isUploading
                ? "bg-tertiary cursor-not-allowed"
                : "bg-primary hover:bg-primary/85"
            }`}
            onClick={handleUpload}
            disabled={isUploading}
          >
            {isUploading ? "Uploading..." : "Upload"}
          </button>
        )}
      </div>
    </div>
  );
};

export default PdfUpload;
