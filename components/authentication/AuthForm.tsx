"use client";

import { useState } from "react";
import SignInForm from "./SignInForm";
import { Button } from "../ui/button";
import SignUpForm from "./SignUpForm";
import Link from "next/link";
import ResetPassword from "./ResetPassword";

type AuthFormMode = "sign-in" | "sign-up" | "reset-password";

function AuthForm() {
  const [mode, setMode] = useState<AuthFormMode>("sign-in");

  return (
    <div className="space-y-4">
      <section className="text-center flex flex-col gap-2">
        <h1 className="text-2xl font-semibold capitalize tracking-tight">
          {mode === "sign-in"
            ? "Sign in"
            : mode === "sign-up"
            ? "Sign up"
            : "Reset password"}
        </h1>

        <p className="text-muted-foreground text-sm">
          {mode === "sign-in"
            ? "Enter your email address and password to log into your account."
            : mode === "sign-up"
            ? "Enter your name, email address, and set a password to create an account."
            : "Enter your registered email address to reset your password."}
        </p>
      </section>

      <>
        {mode === "sign-in" && (
          <>
            <SignInForm />

            <div className="flex justify-between items-center">
              <Button
                type="button"
                variant="link"
                onClick={() => setMode("sign-up")}
                className="p-0"
              >
                Don't have an account? Sign up
              </Button>

              <Button
                type="button"
                variant="link"
                onClick={() => setMode("reset-password")}
                className="p-0"
              >
                Forgot password?
              </Button>
            </div>
          </>
        )}
      </>

      <>
        {mode === "sign-up" && (
          <>
            <SignUpForm />

            <Button
              type="button"
              variant="link"
              onClick={() => setMode("sign-in")}
              className="block p-0 mx-auto"
            >
              Already have an account? Sign in
            </Button>

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
        {mode === "reset-password" && (
          <>
            <ResetPassword />
          </>
        )}
      </>
    </div>
  );
}

export default AuthForm;
