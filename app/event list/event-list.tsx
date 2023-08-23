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
<<<<<<< HEAD
  const options = { day: 'numeric', month: 'long', year: 'numeric' } as const;
  return new Date(inputDate).toLocaleDateString('id-ID', options);
=======
  const options = { day: "numeric", month: "long", year: "numeric" } as const;
  return new Date(inputDate).toLocaleDateString("id-ID", options);
>>>>>>> c00d1d5697d861a4c20ed8e691479c5d47a4376f
}

function getAvailability(capacity: number, isFull: boolean): string {
  if (capacity > 0 && isFull) {
<<<<<<< HEAD
    return 'Tersedia sekarang';
  } else {
    return 'Tidak tersedia';
=======
    return "Tersedia sekarang";
  } else {
    return "Tidak tersedia";
>>>>>>> c00d1d5697d861a4c20ed8e691479c5d47a4376f
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
<<<<<<< HEAD

  const availability = getAvailability(capacity, true);

  return (

=======
  const availability = getAvailability(capacity, true);

  return (
>>>>>>> c00d1d5697d861a4c20ed8e691479c5d47a4376f
    <Link href={redirectLink}>
      <div
        key={id}
        className="relative inline-block cursor-pointer p-2 duration-300 ease-in-out hover:scale-105"
      >
        <img
<<<<<<< HEAD
          className="w-64 h-32 object-cover rounded-md mb-2"
=======
          className="mb-2 h-32 w-64 rounded-md object-cover"
>>>>>>> c00d1d5697d861a4c20ed8e691479c5d47a4376f
          src={image}
          alt={title}
          draggable="false"
        ></img>
        <div className="p-3">
          <h2 className="text-base font-semibold">{title}</h2>
          <p className="text-xs text-gray-500">{location}</p>
          <p className="text-xs  text-gray-500">{formatDate(date)}</p>
<<<<<<< HEAD
          <p className="text-m mt-3 font-bold text-red-500">{formatCurrency(price)}</p>
          <p className={`text-xs ${availability === 'Tidak tersedia' ? 'text-red-500' : 'text-green-600'}`}>
=======
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
>>>>>>> c00d1d5697d861a4c20ed8e691479c5d47a4376f
            {availability}
          </p>
        </div>
      </div>
    </Link>
  );
};

<<<<<<< HEAD
export default EventList;
=======
export default EventList;
>>>>>>> c00d1d5697d861a4c20ed8e691479c5d47a4376f
