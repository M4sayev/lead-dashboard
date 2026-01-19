import {
  CheckCircle2,
  LucideIcon,
  Phone,
  Plus,
  User2,
  XCircle,
} from "lucide-react";
import type { Status } from "./types";

export const COLOR_MAP: Record<Status | "Total", string[]> = {
  Total: ["#1D4ED8", "#DBEAFE"],
  New: ["#3899FAFF", "#e9f4ff"],
  Qualified: ["#F59E0BFF", "#fff7dd"],
  Lost: ["#EA580CFF", "#fef2e8"],
  Contacted: ["#16A34AFF", "#e6faec"],
};

export const ICON_MAP: Record<Status | "Total", LucideIcon> = {
  Total: User2,
  New: Plus,
  Contacted: Phone,
  Qualified: CheckCircle2,
  Lost: XCircle,
};
