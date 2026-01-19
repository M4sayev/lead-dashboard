import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Status } from "@/lib/types";
import { SetStateAction } from "react";

interface FilterDropdownProps {
  filterValue: Status | "Total";
  setFilterValue: React.Dispatch<SetStateAction<Status | "Total">>;
}

export function FilterDropdown({
  filterValue,
  setFilterValue,
}: FilterDropdownProps) {
  return (
    <Select
      value={filterValue}
      onValueChange={(value) => setFilterValue(value as Status | "Total")}
    >
      <SelectTrigger
        className="w-45"
        aria-controls="leads-table"
        aria-label="Filter leads by status"
      >
        <SelectValue placeholder="Select a status" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Statuses</SelectLabel>
          <SelectItem value="Total">Total</SelectItem>
          <SelectItem value="New">New</SelectItem>
          <SelectItem value="Contacted">Contacted</SelectItem>
          <SelectItem value="Qualified">Qualified</SelectItem>
          <SelectItem value="Lost">Lost</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
