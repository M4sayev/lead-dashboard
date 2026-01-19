import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Status } from "@/lib/types";
import type { LucideIcon } from "lucide-react";
import ClientSideCountUp from "../CountUp/CountUp";
import CustomIcon from "../CustomIcon/CustomIcon";

interface CardProps {
  headerText: string;
  result: number;
  Icon: LucideIcon;
  status: Status;
  className?: string;
}

function CustomCard({
  headerText,
  result,
  Icon,
  status = "New",
  className = "",
}: CardProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex justify-between items-center gap-2">
          <CardTitle>{headerText}</CardTitle>
          <CustomIcon Icon={Icon} status={status} />
        </div>
      </CardHeader>
      <CardContent>
        <span className="text-fluid-4xl font-bold text-blue-500">
          <ClientSideCountUp end={result} />
        </span>
      </CardContent>
    </Card>
  );
}

export default CustomCard;
