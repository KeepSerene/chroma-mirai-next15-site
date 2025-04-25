import SignOutButton from "@/components/authentication/SignOutButton";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

function ProtectedRouteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        <SidebarTrigger
          type="button"
          className="transition-colors hover:text-primary focus-visible:text-primary"
        />

        {/* <SignOutButton /> */}

        <div className="p-4 flex flex-col gap-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default ProtectedRouteLayout;
