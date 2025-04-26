import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getNameInitials(name: string): string {
  return name
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join("");
}
