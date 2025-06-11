import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAbsoluteUrl(url: string | undefined): string {
  if (!url) return "/placeholder.svg";
  if (url.startsWith("//")) {
    return `https:${url}`;
  }
  return url;
}
