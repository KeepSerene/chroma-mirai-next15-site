import type { LucideIcon } from "lucide-react";

export type AuthFormRoute = "sign-in" | "sign-up" | "reset-password";

export interface AuthActionResponse {
  data: unknown | null;
  success: boolean;
  errMsg: string;
}

export interface SidebarNavItem {
  title: string;
  url: string;
  icon: LucideIcon;
}
