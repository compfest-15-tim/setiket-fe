"use client";

import Link from "next/link";

interface EventListProps {
  id: string;
  date: Date;
  location: string;
  title: string;
  capacity: number;
  description: string;
  image: string;
  price: number;
  isVerified: boolean;
  createdAt: Date;
  eventOrganizerId: string;
  transactions: string;
  redirectLink: string;
}

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatDate(inputDate: Date) {
  const options = { day: "numeric", month: "long", year: "numeric" } as const;
  return new Date(inputDate).toLocaleDateString("id-ID", options);
}

function getAvailability(capacity: number, isFull: boolean): string {
  if (capacity > 0 && isFull) {
    return "Tersedia sekarang";
  } else {
    return "Tidak tersedia";
  }
}

const EventList = ({
  id,
  date,
  location,
  title,
  capacity,
  description,
  image,
  price,
  isVerified,
  createdAt,
  eventOrganizerId,
  transactions,
  redirectLink,
}: EventListProps) => {
  const availability = getAvailability(capacity, true);

  return (
    <Link href={redirectLink}>
      <div
        key={id}
        className="relative inline-block cursor-pointer p-2 duration-300 ease-in-out hover:scale-105"
      >
        <img
          className="mb-2 h-32 w-64 rounded-md object-cover"
          src={image}
          alt={title}
          draggable="false"
        ></img>
        <div className="p-3">
          <h2 className="text-base font-semibold">{title}</h2>
          <p className="text-xs text-gray-500">{location}</p>
          <p className="text-xs  text-gray-500">{formatDate(date)}</p>
          <p className="text-m mt-3 font-bold text-red-500">
            {formatCurrency(price)}
          </p>
          <p
            className={`text-xs ${
              availability === "Tidak tersedia"
                ? "text-red-500"
                : "text-green-600"
            }`}
          >
            {availability}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default EventList;
