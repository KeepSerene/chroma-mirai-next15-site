"use server";

import type { AuthActionResponse } from "@/types";
import { createClient } from "../supabase/server";
import { redirect } from "next/navigation";

export async function signUpAction(
  formData: FormData
): Promise<AuthActionResponse> {
  try {
    const supabase = await createClient();

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const fullName = formData.get("fullName") as string;

    if (!email || !password) {
      return {
        data: null,
        success: false,
        errMsg: "Email and password are required",
      };
    }

    const userCredentials = {
      email,
      password,
      options: {
        data: {
          fullName,
        },
      },
    };

    // Create account
    const { data, error } = await supabase.auth.signUp(userCredentials);

    if (error) {
      console.error("SignUp error:", error);

      return {
        data: null,
        success: false,
        errMsg: error.message || "Failed to sign up the user!",
      };
    }

    return {
      data,
      success: true,
      errMsg: "",
    };
  } catch (err) {
    console.error("Unexpected error during signup:", err);

    return {
      data: null,
      success: false,
      errMsg:
        err instanceof Error
          ? err.message
          : "An unexpected error occurred during sign up",
    };
  }
}

export async function signInAction(
  formData: FormData
): Promise<AuthActionResponse> {
  try {
    const supabase = await createClient();

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      return {
        data: null,
        success: false,
        errMsg: "Email and password are required",
      };
    }

    const userCredentials = {
      email,
      password,
    };

    // Sign in
    const { data, error } = await supabase.auth.signInWithPassword(
      userCredentials
    );

    if (error) {
      console.error("SignIn error:", error);

      return {
        data: null,
        success: false,
        errMsg: error.message || "Failed to sign in the user!",
      };
    }

    return {
      data,
      success: true,
      errMsg: "",
    };
  } catch (err) {
    console.error("Unexpected error during signin:", err);
    return {
      data: null,
      success: false,
      errMsg:
        err instanceof Error
          ? err.message
          : "An unexpected error occurred during sign in",
    };
  }
}

export async function signOutAction(): Promise<void> {
  try {
    const supabase = await createClient();
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("SignOut error:", error);
      // Even if there's an error, we still attempt to redirect the user
      // as they likely should be logged out of the client-side session
    }
  } catch (err) {
    console.error("Error during signout:", err);
  } finally {
    // The redirect function terminates execution, so no return is needed
    // Next.js will handle the special redirect related error it throws in server actions
    redirect("/sign-in");
  }
}
