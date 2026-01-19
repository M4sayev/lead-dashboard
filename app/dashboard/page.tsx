"use client";
import Cards from "@/components/cards/Cards";
import { useLeads } from "@/hooks/useLead";
import LoadingSR from "../A11y/LoadingSR";
import CardsSkeleton from "@/components/cards/CardsSkeleton";
import ErrorMessage from "@/components/Errors/ErrorMessage";
import EmptyResponse from "@/components/Errors/EmptyResponse";

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
    <div className="flex min-h-screen w-full flex-col items-center justify-between sm:items-start">
      {isLoading ? (
        <>
          <LoadingSR text="loading dashboard" />
          <CardsSkeleton />
        </>
      ) : (
        <>
          <Cards data={data} />
        </>
      )}
    </div>
  );
}
