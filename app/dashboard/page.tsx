"use client";
import Cards from "@/components/pages/dashboard/Cards";
import { useLeads } from "@/hooks/useLead";
import LoadingSR from "../A11y/LoadingSR";
import CardsSkeleton from "@/components/Cards/CardsSkeleton";
import ErrorMessage from "@/components/Errors/ErrorMessage";
import EmptyResponse from "@/components/Errors/EmptyResponse";
import LeadTableRow from "@/components/pages/dashboard/Table/LeadTableRow";
import { Lead } from "@/lib/types";
import LeadTableCard from "@/components/pages/dashboard/Table/LeadTable";

export default function DashBoard() {
  const { data, isError, isLoading, error } = useLeads();

  if (isError) {
    return (
      <ErrorMessage error={error}>
        <span className="pt-10">Error loading dashboard</span>
      </ErrorMessage>
    );
  }

  if (!data) {
    return (
      <EmptyResponse>
        <span>No data found</span>
      </EmptyResponse>
    );
  }

  return (
    <section>
      <h2 className="text-fluid-lg mb-2"> Analytics</h2>
      <div className="flex min-h-screen w-full flex-col items-center justify-between sm:items-start">
        {isLoading ? (
          <>
            <LoadingSR text="loading dashboard" />
            <CardsSkeleton />
          </>
        ) : (
          <>
            <Cards data={data} />
            <LeadTableCard data={data} />
          </>
        )}
      </div>
    </section>
  );
}
