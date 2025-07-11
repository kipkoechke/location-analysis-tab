"use client";
import { PdfProvider } from "@/context/PdfContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useState } from "react";
import { Toaster } from "react-hot-toast";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
      <PdfProvider>{children}</PdfProvider>
    </QueryClientProvider>
  );
}
