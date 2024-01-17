import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

export function formatDateString(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", options);

  const time = date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return `${formattedDate} at ${time}`;
}

export function toRelativeTime(dateString: string): string {
  const date = new Date(dateString);

  const now = new Date();

  const diffInMs = now.getTime() - date.getTime();

  const diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));

  const diffInMonths = now.getMonth() - date.getMonth();

  const diffInYears = now.getFullYear() - date.getFullYear();

  let relativeTime;

  if (diffInYears > 0) {
    relativeTime = `${diffInYears} years ago`;
  } else if (diffInMonths > 0) {
    relativeTime = `${diffInMonths} months ago`;
  } else if (diffInDays === 0) {
    const diffInHours = Math.round(diffInMs / (1000 * 60 * 60));
    relativeTime = `${diffInHours} hours ago`;
  } else {
    relativeTime = `${diffInDays} days ago`;
  }

  return relativeTime;
}

export const checkIsLiked = (likeList: string[], userId: string) => {
  return likeList.includes(userId);
};
