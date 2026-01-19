import { COLOR_MAP } from "@/lib/constants";
import { Status } from "@/lib/types";

function StatusSpan({ status }: { status: Status }) {
  const color = COLOR_MAP[status];
  return (
    <span
      style={{ backgroundColor: color[1], color: color[0] }}
      className="px-3 py-1 rounded-lg"
    >
      {status}
    </span>
  );
}

export default StatusSpan;
