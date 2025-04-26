"use client";

import { signOutAction } from "@/lib/actions/auth.actions";

function SignOutButton() {
  const handleSignOut = async () => {
    await signOutAction();
  };

  return (
    <button
      type="button"
      onClick={handleSignOut}
      className="w-max text-destructive capitalize"
    >
      Sign out
    </button>
  );
}

export default SignOutButton;
