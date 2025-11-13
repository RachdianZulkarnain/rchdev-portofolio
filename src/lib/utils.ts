import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getRandomElement = <T>(arr: T[]): T => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const parseMessageWithMentions = (content: string) => {
  const mentionRegex = /(@\w+)/g;
  const parts = content.split(mentionRegex);

  return parts.map((part, index) => {
    if (part.match(mentionRegex)) {
      return {
        type: "mention" as const,
        content: part,
        key: `mention-${index}`,
      };
    }
    return {
      type: "text" as const,
      content: part,
      key: `text-${index}`,
    };
  });
};

export const getStartValue = (value?: number) =>
  value && value > 50 ? value - 50 : 0;

export function trackEvent(
  eventName: string,
  eventParams?: Record<string, any>
): void {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, eventParams);
  }
}

export function isMac(): boolean {
  if (typeof navigator === "undefined") return false;
  return navigator.platform.toLowerCase().includes("mac");
}
export function getModifierKey(): string {
  return isMac() ? "⌘" : "Ctrl";
}

export function formatShortcut(key: string): string {
  return `${getModifierKey()}+${key}`;
}
