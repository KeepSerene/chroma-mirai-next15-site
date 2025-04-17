import type { Metadata } from "next";
import AuthFormWrapper from "@/components/authentication/AuthFormWrapper";

export const metadata: Metadata = {
  title: "Sign Up",
};

function SignUpPage() {
  return <AuthFormWrapper authRoute="sign-up" />;
}

export default SignUpPage;
