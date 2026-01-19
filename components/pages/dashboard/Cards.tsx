import { Lead, Status } from "@/lib/types";
import { ICON_MAP } from "@/lib/constants";
import CustomCard from "@/components/shared/Cards/CustomCard";

interface CardsProps {
  data: Lead[];
}

function Cards({ data }: CardsProps) {
  const analytics: Record<Status | "Total", number> = {
    Total: data.length,
    New: 0,
    Contacted: 0,
    Qualified: 0,
    Lost: 0,
  };

  // for loop is more performant
  for (const lead of data) {
    analytics[lead.status]++;
  }

  return (
    <ul className="flex justify-center gap-5 w-full flex-wrap items-center">
      {(Object.entries(analytics) as [Status, number][]).map(
        ([status, count]) => {
          return (
            <li key={status} className="flex-1 min-w-40">
              <CustomCard
                status={status}
                headerText={`${status} Leads`}
                Icon={ICON_MAP[status]}
                result={count}
              />
            </li>
          );
        },
      )}
    </ul>
  );
}

export default Cards;
