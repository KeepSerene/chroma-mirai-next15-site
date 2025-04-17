"use server";

import type { AuthActionResponse } from "@/types";
import { createClient } from "../supabase/client";

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

  const { data, error } = await supabase.auth.signUp(userCredentials);

  return {
    data,
    success: !error,
    error: error?.message ?? "Failed to sign up the user!",
  };
}
