import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimePassed = (date: Date) => {
  const time = date.getTime();
  const timeNow = Date.now();
  const timePassed = timeNow - time;

  // If years has passed
  const oneYear = 365 * 24 * 60 * 60 * 1000;
  if (timePassed >= oneYear) {
    const yearPassed = Math.floor(timePassed / oneYear);
    return `${yearPassed} year${yearPassed > 1 ? "s" : ""} ago`;
  }

  // If Months has passed
  const oneMonth = 30 * 24 * 60 * 60 * 1000;
  if (timePassed >= oneMonth) {
    const monthPassed = Math.floor(timePassed / oneMonth);
    return `${monthPassed} month${monthPassed > 1 ? "s" : ""} ago`;
  }

  // If weeks has passed
  const oneWeek = 7 * 24 * 60 * 60 * 1000;
  if (timePassed >= oneWeek) {
    const weekPassed = Math.floor(timePassed / oneWeek);
    return `${weekPassed} week${weekPassed > 1 ? "s" : ""} ago`;
  }

  // If days has passed
  const oneDay = 24 * 60 * 60 * 1000;
  if (timePassed >= oneDay) {
    const dayPassed = Math.floor(timePassed / oneDay);
    return `${dayPassed} day${dayPassed > 1 ? "s" : ""} ago`;
  }

  // If hours has passed
  const oneHour = 60 * 60 * 1000;
  if (timePassed >= oneHour) {
    const hourPassed = Math.floor(timePassed / oneHour);
    return `${hourPassed} hour${hourPassed > 1 ? "s" : ""} ago`;
  }

  // If minutes has passed
  const oneMinute = 60 * 1000;
  if (timePassed >= oneMinute) {
    const minutePassed = Math.floor(timePassed / oneMinute);
    return `${minutePassed} minute${minutePassed > 1 ? "s" : ""} ago`;
  }

  // If seconds has passed
  const oneSecond = 1000;
  if (timePassed >= oneSecond) {
    const secondPassed = Math.floor(timePassed / oneSecond);
    return `${secondPassed} second${secondPassed > 1 ? "s" : ""} ago`;
  }
};
