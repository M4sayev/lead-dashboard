"use client";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="w-full flex-1 p-6 max-w-5xl mx-auto">
        <h1 className="text-fluid-2xl mb-5">Lead Dashboard</h1>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </main>
      <Footer />
    </div>
  );
}
