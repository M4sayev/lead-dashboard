import leads from "@/data/leads.json";
import type { Lead } from "./types";

export async function getLeads(): Promise<Lead[]> {
  return Promise.resolve(leads as Lead[]);
}
