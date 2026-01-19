"use client";
import DateTime from "@/app/A11y/DateTime";
import { TableCell, TableRow } from "@/components/ui/table";
import { Lead } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { useState } from "react";
import LeadsDialog from "../LeadsDialog/LeadsDialog";
import StatusSpan from "@/components/StatusSpan/StatusSpan";

function LeadTableRow({ lead }: { lead: Lead }) {
  const [isOpen, setIsOpen] = useState(false);

  const { id, status, notes, name, email, createdAt } = lead;

  const handleRowClicked = () => {
    setIsOpen(true);
  };

  const handleEnterClicked = (
    event: React.KeyboardEvent<HTMLTableRowElement>,
  ) => {
    if (event.key !== "Enter") return;
    setIsOpen(true);
  };

  return (
    <>
      <TableRow
        className="h-12 cursor-pointer"
        onClick={handleRowClicked}
        tabIndex={0}
        onKeyDown={handleEnterClicked}
        aria-label="View lead details"
      >
        <TableCell className="font-medium">{id}</TableCell>
        <TableCell>{name}</TableCell>
        <TableCell className="hidden lg:table-cell">{email}</TableCell>
        <TableCell className="hidden sm:table-cell">
          <DateTime date={formatDate(createdAt)} />
        </TableCell>
        <TableCell className="text-right w-[10%]">
          <StatusSpan status={status} />
        </TableCell>
      </TableRow>
      <LeadsDialog lead={lead} open={isOpen} setOpen={setIsOpen} />
    </>
  );
}

export default LeadTableRow;
