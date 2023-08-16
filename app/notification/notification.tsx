"use client";

import { getTimePassed } from "@/lib/utils";
import Link from "next/link";

interface NotificationProps {
  id: string;
  title: string;
  description: string;
  isSeen: boolean;
  date: Date;
  redirectLink: string;
}

const Notification = ({
  id,
  title,
  description,
  isSeen,
  date,
  redirectLink,
}: NotificationProps) => {
  const handleClick = () => {
    // Update database notification to be seen
  };

  return (
    <Link href={redirectLink}>
      <li
        key={id}
        tabIndex={0}
        className={`cursor-pointer rounded-md border border-border p-3 ${
          isSeen ? "bg-background" : "bg-blue-50"
        } `}
        onClick={handleClick}
      >
        <h2 className="text-base font-semibold">{title}</h2>
        <p className="text-sm">{description}</p>
        <p className="text-xs">{getTimePassed(date)}</p>
      </li>
    </Link>
  );
};

export default Notification;
