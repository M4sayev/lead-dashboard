"use client";
import { FilterDropdown } from "@/components/shared/Filter/FilterDropdown";
import SearchBar from "@/components/shared/SearchBar/SearchBar";
import { Status } from "@/lib/types";
import { SetStateAction, useState } from "react";

interface FilterComponentProps {
  filterValue: Status | "Total";
  setFilterValue: React.Dispatch<SetStateAction<Status | "Total">>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<SetStateAction<string>>;
}

function FilterComponent({
  searchQuery,
  setSearchQuery,
  filterValue,
  setFilterValue,
}: FilterComponentProps) {
  return (
    <section>
      <h2 className="text-fluid-xl">Filter Section</h2>
      <div className="flex flex-col sm:flex-row gap-2">
        <SearchBar
          id="leads-search"
          srLabel="search for leads by email or name"
          placeholder="Search by email or name"
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <FilterDropdown
          filterValue={filterValue}
          setFilterValue={setFilterValue}
        />
      </div>
    </section>
  );
}

export default FilterComponent;
