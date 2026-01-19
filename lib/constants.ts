import type { Status } from "./types";

export const COLOR_MAP: Record<Status, string[]> = {
  New: ["#3899FAFF", "#e9f4ff"],
  Qualified: ["#F59E0BFF", "#fff7dd"],
  Lost: ["#EA580CFF", "#fef2e8"],
  Contacted: ["#16A34AFF", "#e6faec"],
};
