"use client";
import Cards from "@/components/pages/dashboard/Cards";
import { useLeads } from "@/hooks/useLead";
import LoadingSR from "../A11y/LoadingSR";
import ErrorMessage from "@/components/Errors/ErrorMessage";
import EmptyResponse from "@/components/Errors/EmptyResponse";
import LeadTableCard from "@/components/pages/dashboard/LeadsTable/LeadTable";
import CardsSkeleton from "@/components/shared/Cards/CardsSkeleton";
import LeadsTableSkeleton from "@/components/pages/dashboard/LeadsTable/LeadsTableSkeleton";
import FilterComponent from "@/components/pages/dashboard/filters/FilterComponent";
import { useMemo, useState } from "react";
import { Status } from "@/lib/types";

export default function DashBoard() {
  const { data, isError, isLoading, error } = useLeads();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterValue, setFilterValue] = useState<Status | "Total">("Total");

  const filteredData = useMemo(() => {
    if (!data) return [];

    let filtered = [...data];

    if (filterValue !== "Total") {
      filtered = filtered.filter((lead) => lead.status === filterValue);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (lead) =>
          lead.name.toLowerCase().includes(query) ||
          lead.email.toLowerCase().includes(query),
      );
    }

    return filtered;
  }, [data, filterValue, searchQuery]);

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
      <div className="flex min-h-screen w-full flex-col items-center gap-10 sm:items-start">
        {isLoading ? (
          <>
            <LoadingSR text="loading dashboard" />
            <CardsSkeleton />
            <LeadsTableSkeleton />
          </>
        ) : (
          <>
            <Cards data={data} />
            <div className="w-full">
              <FilterComponent
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                setFilterValue={setFilterValue}
                filterValue={filterValue}
              />
              <LeadTableCard data={filteredData} searchQuery={searchQuery} />
            </div>
          </>
        )}
      </div>
    </section>
  );
}
