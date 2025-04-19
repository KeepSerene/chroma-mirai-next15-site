import type { Metadata } from "next";
import SignOutButton from "@/components/authentication/SignOutButton";

export const metadata: Metadata = {
  title: "Dashboard",
};

function DashboardPage() {
  return (
    <div>
      <p>Dashboard Page</p>

      <SignOutButton />
    </div>
  );
}

export default DashboardPage;
