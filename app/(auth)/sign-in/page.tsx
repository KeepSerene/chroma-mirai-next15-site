import type { Metadata } from "next";
import AuthFormWrapper from "@/components/authentication/AuthFormWrapper";

export const metadata: Metadata = {
  title: "Sign In",
};

function SignInPage() {
  return <AuthFormWrapper authRoute="sign-in" />;
}

export default SignInPage;
