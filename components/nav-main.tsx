"use client";

import { SidebarNavItem } from "@/types";
import { usePathname } from "next/navigation";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  CreditCard,
  Frame,
  Image,
  Images,
  Layers,
  Settings2,
  SquareTerminal,
} from "lucide-react";

const sidebarNavItems: SidebarNavItem[] = [
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

export function NavMain() {
  const pathname = usePathname();

  const checkIsActive = (item: SidebarNavItem) => {
    const isActive =
      pathname === item.url ||
      (pathname.startsWith(item.url) && item.url !== "/");

    return isActive;
  };

  return (
    <SidebarGroup>
      <SidebarGroupLabel>AI Studio</SidebarGroupLabel>

      <SidebarMenu>
        {sidebarNavItems.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton tooltip={item.title} asChild>
              <Link
                href={item.url}
                className={cn(
                  checkIsActive(item)
                    ? "bg-primary/20 text-primary font-medium"
                    : "text-muted-foreground"
                )}
              >
                {item.icon && <item.icon />}

                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
