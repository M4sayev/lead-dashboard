import { COLOR_MAP } from "@/lib/constants";
import { Status } from "@/lib/types";
import type { LucideIcon } from "lucide-react";

interface CustomIconProps {
  Icon: LucideIcon;
  status: Status;
  className?: string;
}

function CustomIcon({ Icon, status, className = "" }: CustomIconProps) {
  const color = COLOR_MAP[status];
  return (
    <div
      style={{ backgroundColor: color[1] }}
      className={`${className} bg-accent p-2 rounded-full`}
    >
      <Icon width={20} height={20} style={{ color: color[0] }} />
    </div>
  );
}

export default CustomIcon;
