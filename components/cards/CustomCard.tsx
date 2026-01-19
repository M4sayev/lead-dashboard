import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Status } from "@/lib/types";
import type { LucideIcon } from "lucide-react";
import CustomIcon from "../CustomIcon/CustomIcon";
import ClientSideCountUp from "../CountUp/CountUp";

interface CardProps {
  headerText: string;
  result: string;
  description: string;
  Icon: LucideIcon;
  status: Status;
  className?: string;
}

function CustomCard({
  headerText,
  result,
  description,
  Icon,
  status = "New",
  className = "",
}: CardProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex justify-between items-center gap-2">
          <CardTitle>{headerText}</CardTitle>
          <CustomIcon
            Icon={Icon}
            status={status}
            className="p-3 md:p-2 lg:p-3"
          />
        </div>
      </CardHeader>
      <CardContent>
        <span className="text-fluid-3xl font-bold ">
          <ClientSideCountUp end={Number(result)} />
        </span>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

export default CustomCard;
