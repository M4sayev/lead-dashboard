import { getLeads } from "@/lib/getLeads";
import { useQuery } from "@tanstack/react-query";

export function useLeads() {
  return useQuery({
    queryKey: ["leads"],
    queryFn: getLeads,
  });
}
