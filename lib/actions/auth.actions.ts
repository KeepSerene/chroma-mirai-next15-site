"use server";

import type { AuthActionResponse } from "@/types";
import { createClient } from "../supabase/server";
import { redirect } from "next/navigation";

export async function signUpAction(
  formData: FormData
): Promise<AuthActionResponse> {
  const supabase = await createClient();

  const userCredentials = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    options: {
      data: {
        fullName: formData.get("fullName") as string,
      },
    },
  };

  // Create account
  const { data, error } = await supabase.auth.signUp(userCredentials);

  return {
    data,
    success: !error,
    errMsg: error?.message ?? "Failed to sign up the user!",
  };
}

export async function signInAction(
  formData: FormData
): Promise<AuthActionResponse> {
  const supabase = await createClient();

  const userCredentials = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  // Sign in
  const { data, error } = await supabase.auth.signInWithPassword(
    userCredentials
  );

  return {
    data,
    success: !error,
    errMsg: error?.message ?? "Failed to sign in the user!",
  };
}

export async function signOutAction(): Promise<void> {
  const supabase = createClient();

  (await supabase).auth.signOut();

  redirect("/sign-in");
}
