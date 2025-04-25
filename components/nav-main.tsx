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

export function NavMain({ items }: { items: SidebarNavItem[] }) {
  const pathname = usePathname();

  const checkIsActive = (item: SidebarNavItem) => {
    const isActive =
      pathname === item.url ||
      (pathname.startsWith(item.url) && item.url !== "/");

    return isActive;
  };

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>

      <SidebarMenu>
        {items.map((item) => (
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
