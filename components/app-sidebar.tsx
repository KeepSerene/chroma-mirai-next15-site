import * as React from "react";
import {
  CreditCard,
  Frame,
  Image,
  Images,
  Layers,
  Settings2,
  Sparkles,
  SquareTerminal,
} from "lucide-react";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export async function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  let userDetails = null;

  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    userDetails = user;
  } catch (err) {
    console.error("Error fetching user details:", err);
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Link href="/" className="flex items-center gap-2">
          <span className="size-8 aspect-square bg-sidebar-primary text-sidebar-primary-foreground rounded-lg flex justify-center items-center">
            <Sparkles className="size-4" />
          </span>

          <span className="flex-1 text-left text-sm leading-tight grid grid-cols-1">
            <span className="truncate font-medium">ChromaMirai</span>

            <span className="truncate text-xs">Pro</span>
          </span>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <NavMain />
      </SidebarContent>

      <SidebarFooter>
        {userDetails && (
          <NavUser
            user={{
              name: userDetails.user_metadata?.fullName ?? "User",
              email: userDetails.email ?? "",
              avatar: userDetails.user_metadata?.avatar ?? "",
            }}
          />
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
