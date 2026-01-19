import DateTime from "@/app/A11y/DateTime";
import EmailLink from "@/app/A11y/EmailLink";
import StatusSpan from "@/components/StatusSpan/StatusSpan";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Lead } from "@/lib/types";
import { formatFullDate } from "@/lib/utils";

import React, { SetStateAction } from "react";

interface LeadsDialogProps {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  lead: Lead;
}

function LeadsDialog({ lead, open, setOpen }: LeadsDialogProps) {
  const { name, id, status, createdAt, notes, email } = lead;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="overflow-y-scroll max-h-120 [@media(max-height:400px)]:max-h-75 sm:max-h-screen sm:overflow-auto">
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription className="sr-only">
            {`Information about ${name}`}
          </DialogDescription>
        </DialogHeader>
        <ul className="flex flex-col gap-2">
          <li className="flex justify-between items-center border-b py-3 text-fluid-s">
            <span className="text-muted-foreground capitalize">id:</span>
            <span>{id}</span>
          </li>
          <li className="flex justify-between items-center border-b py-3 text-fluid-s">
            <span className="text-muted-foreground capitalize">email:</span>
            <EmailLink email={email} />
          </li>
          <li className="flex justify-between items-center border-b py-3 text-fluid-s">
            <span className="text-muted-foreground capitalize">
              created at:
            </span>
            <DateTime date={formatFullDate(createdAt)} />
          </li>
          <li className="flex justify-between items-center border-b py-3 text-fluid-s">
            <span className="text-muted-foreground capitalize">status:</span>
            <StatusSpan status={status} />
          </li>
          <li className="flex flex-col justify-between  py-3 text-fluid-s ">
            <span className="capitalize mb-5 text-muted-foreground">
              notes:
            </span>
            <span className="border rounded bg-white p-5 ">{notes}</span>
          </li>
        </ul>
      </DialogContent>
    </Dialog>
  );
}

export default LeadsDialog;
