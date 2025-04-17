import type { AuthFormRoute } from "@/types";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import Link from "next/link";
import ResetPasswordForm from "./ResetPasswordForm";

function AuthFormWrapper({ authRoute }: { authRoute: AuthFormRoute }) {
  return (
    <div className="space-y-4">
      <section className="text-center flex flex-col gap-2">
        <h1 className="text-2xl font-semibold capitalize tracking-tight">
          {authRoute === "sign-in"
            ? "Sign in"
            : authRoute === "sign-up"
            ? "Sign up"
            : "Reset password"}
        </h1>

        <p className="text-muted-foreground text-sm">
          {authRoute === "sign-in"
            ? "Enter your email address and password to log into your account."
            : authRoute === "sign-up"
            ? "Enter your name, email address, and set a password to create an account."
            : "Enter your registered email address to reset your password."}
        </p>
      </section>

      <>
        {authRoute === "sign-in" && (
          <>
            <SignInForm />

            <div className="text-primary text-sm font-semibold flex justify-between items-center">
              <Link
                href="/sign-up"
                className="hover:underline hover:underline-offset-4 focus-visible:underline focus-visible:underline-offset-4"
              >
                Don't have an account? Sign up
              </Link>

              <Link
                href="/reset-password"
                className="hover:underline hover:underline-offset-4 focus-visible:underline focus-visible:underline-offset-4"
              >
                Forgot password?
              </Link>
            </div>
          </>
        )}
      </>

      <>
        {authRoute === "sign-up" && (
          <>
            <SignUpForm />

            <Link
              href="/sign-in"
              className="block w-max text-primary text-sm font-semibold mx-auto hover:underline hover:underline-offset-4 focus-visible:underline focus-visible:underline-offset-4"
            >
              Already have an account? Sign in
            </Link>

            <p className="text-muted-foreground text-sm text-center px-8">
              By clicking on Sign up, you agree to our{" "}
              <Link
                href="#"
                className="underline underline-offset-4 transition-colors hover:text-primary focus-visible:text-primary"
              >
                Terms of Service
              </Link>
              , and{" "}
              <Link
                href="#"
                className="underline underline-offset-4 transition-colors hover:text-primary focus-visible:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </>
        )}
      </>

      <>
        {authRoute === "reset-password" && (
          <>
            <ResetPasswordForm />

            <Link
              href="/sign-in"
              className="block w-max text-primary text-sm font-semibold mx-auto hover:underline hover:underline-offset-4 focus-visible:underline focus-visible:underline-offset-4"
            >
              Sign in instead
            </Link>
          </>
        )}
      </>
    </div>
  );
}

export default AuthFormWrapper;
