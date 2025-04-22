import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

interface UploadPdfResponse {
  [key: string]: any;
}

const uploadPdf = async (file: File): Promise<UploadPdfResponse> => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(
    "https://location-analysis-tab-api.onrender.com/pdf/upload",
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to upload PDF: ${response.statusText}`);
  }

  const data: UploadPdfResponse = await response.json();
  return data;
};

// React Query mutation hook
export const useUploadPdf = () => {
  const queryClient = useQueryClient();
  const { mutate: uploadPdfMutation, isPending: isUploading } = useMutation({
    mutationFn: uploadPdf,
    onSuccess: (data) => {
      // Invalidate and refetch queries if needed
      queryClient.invalidateQueries({ queryKey: ["pdfData"] });
      toast.success("PDF uploaded successfully!");
    },
    onError: (error) => {
      console.error("Error uploading PDF:", error);
      toast.error("Failed to upload PDF. Please try again.");
    },
  });
  return { uploadPdf: uploadPdfMutation, isUploading };
};
