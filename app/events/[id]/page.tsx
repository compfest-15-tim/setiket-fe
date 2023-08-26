"use client";

import { type Metadata } from "next";
import Link from "next/link";
import { getCurrencyIDR, getFormattedDate } from "@/lib/utils";
import Carousel from "@/components/carousel";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import OrderForm from "./order-form";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  images: string[];
  location: string;
  capacity: number;
  status: "verified" | "pending" | "rejected";
  category: string;
  price: number;
  booked: number;
}

// // Generate metadata
// export const generateMetadata = async ({
//   params,
// }: {
//   params: { id: string };
// }): Promise<Metadata> => {
//   // Get event detail

//   return {
//     title: "Event Detail",
//   };
// };

const EventDetailPage = () => {
  const { id } = useParams();
  

  const [eventDetail, setEventDetail] = useState({
    id: "7b92a264-5ff2-4ea1-b5ef-62c2b9cda87a",
    title: "Tech Conference 2023",
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    date: "2023-08-24T13:58:33.049Z",
    images: ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg"],
    location: "San Francisco, USA",
    capacity: 1200,
    status: "verified",
    category: "SEMINARS",
    price: 100000,
    booked: 0
  });

  // Fetch data
  // const eventDetail: Event = {
  //   id: "7b92a264-5ff2-4ea1-b5ef-62c2b9cda87a",
  //   title: "Tech Conference 2023",
  //   description:
  //     "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
  //   date: "2023-08-24T13:58:33.049Z",
  //   images: ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg"],
  //   location: "San Francisco, USA",
  //   capacity: 1200,
  //   status: "verified",
  //   category: "SEMINARS",
  //   price: 100000,
  // };

  useEffect(() => {
    // Define a function to fetch event data here
    const fetchEventDetails = async () => {
      try {
        const response = await fetch(
          `https://setiket-api.up.railway.app/api/events/${id}`
        ); // Replace with your actual API endpoint
        const eventDetails = await response.json();
        setEventDetail(eventDetails);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    fetchEventDetails(); // Call the function to fetch event data
  }, [id]);

  const sold = eventDetail.booked;
  // Also get number of ticket solds

  return (
    <main className="flex flex-auto justify-center bg-muted p-5 sm:p-10">
      <article className="flex w-full max-w-6xl flex-col gap-6">
        <Card>
          <CardHeader>
            <div className="flex flex-col gap-4">
              <Link href="/events">
                <Button size="icon" variant="outline">
                  <ArrowLeft />
                </Button>
              </Link>
              <div className="flex flex-col gap-2">
                <CardTitle>{eventDetail.title}</CardTitle>
                <CardDescription>{eventDetail.category}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              {/* Carousel */}
              <Carousel images={eventDetail.images} />

              {/* Description */}
              <div>
                <h4 className="text-lg font-bold">Description</h4>
                <p>{eventDetail.description}</p>
              </div>

              {/* Date and Location Information */}
              <div>
                <h4 className="text-lg font-bold">Location and Date</h4>
                <p>
                  {eventDetail.location},{" "}
                  {getFormattedDate(new Date(eventDetail.date))}
                </p>
              </div>

              {/* Ticket Information */}
              <div>
                <h4 className="text-lg font-bold">Ticket Information</h4>
                <p>
                  Sold Tickets:{" "}
                  <span className="font-medium">
                    {sold}/{eventDetail.capacity}
                  </span>
                </p>
                <p>
                  Each Ticket Price:{" "}
                  <span className="font-medium">
                    {getCurrencyIDR(eventDetail.price)}
                  </span>
                </p>
              </div>

              {/* Order Ticket */}
              <div>
                <h4 className="text-lg font-bold">Order Ticket</h4>
                <OrderForm event={eventDetail} totalSold={sold} />
              </div>
            </div>
          </CardContent>
        </Card>
      </article>
    </main>
  );
};

export default EventDetailPage;
