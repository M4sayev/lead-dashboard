import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Table, TableBody } from "@/components/ui/table";
import { Lead } from "@/lib/types";
import LeadTableRow from "./LeadTableRow";

interface DataTableCardProps {
  data: Lead[];
}

function LeadTableCard({ data }: DataTableCardProps) {
  const isEmpty = data.length === 0;
  return (
    <Card
      id="leads-table"
      className=" w-full overflow-auto mb-20 md:mb-10 mt-5"
    >
      <CardHeader>
        <h2>Leads Table</h2>
      </CardHeader>
      <CardContent>
        {isEmpty ? (
          <div
            className="py-12 text-center text-muted-foreground"
            role="status"
            aria-live="polite"
          >
            No leads match your search or filters.
          </div>
        ) : (
          <Table>
            <TableBody>
              {data.map((lead) => (
                <LeadTableRow key={lead.id} lead={lead} />
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
}

export default LeadTableCard;
