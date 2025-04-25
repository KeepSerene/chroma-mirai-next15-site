"use client";

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
import { cn } from "@/lib/utils";

// Sidebar nav items
const sidebarNavItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: SquareTerminal,
  },
  {
    title: "Generate Image",
    url: "/generate-image",
    icon: Image,
  },
  {
    title: "My Models",
    url: "/models",
    icon: Frame,
  },
  {
    title: "Train Model",
    url: "/train-model",
    icon: Layers,
  },
  {
    title: "My Images",
    url: "/gallery",
    icon: Images,
  },
  {
    title: "Billing",
    url: "/billing",
    icon: CreditCard,
  },
  {
    title: "Account Settings",
    url: "/account-settings",
    icon: Settings2,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className={cn("bg-background")}>
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
        <NavMain items={sidebarNavItems} />
      </SidebarContent>

      <SidebarFooter>{/* <NavUser user={data.user} /> */}</SidebarFooter>
    </Sidebar>
  );
}
