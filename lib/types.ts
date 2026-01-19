export type Status = "New" | "Contacted" | "Qualified" | "Lost";
export type Lead = {
  id: string;
  name: string;
  email: string;
  status: "New" | "Contacted" | "Qualified" | "Lost";
  createdAt: string;
  notes: string;
};
