import type { Metadata } from "next";
import AuthFormWrapper from "@/components/authentication/AuthFormWrapper";

export const metadata: Metadata = {
  title: "Reset Password",
};

function ResetPasswordPage() {
  return <AuthFormWrapper authRoute="reset-password" />;
}

export default ResetPasswordPage;
