export type AuthFormRoute = "sign-in" | "sign-up" | "reset-password";

export interface AuthActionResponse {
  data: unknown | null;
  success: boolean;
  errMsg: string;
}
