"use client"

import { CalendarDays, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { useEffect, useState } from "react";

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  capacity: string;
  booked: string
}

// Test Data

export default function EventCards() {
  const [events, setEvents] = useState<Event[]>()

  useEffect(() => {
    // Define a function to fetch event data here
    const fetchEventData = async () => {
      try {
        const response = await fetch(
          "https://setiket-api.up.railway.app/api/events"
        );
        const eventData = await response.json();
        console.log(eventData);
        setEvents(eventData);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    fetchEventData();
  }, []);

  return (
    <>
      {events?.map((e, key) => (
        <Link href={`/events/${e.id}`} key={key}>
          <Card className="mb-10 w-full">
            <CardHeader>
              <CardTitle className="h-16 text-center">{e.title}</CardTitle>
            </CardHeader>
            <Separator />
            <CardContent>
              <div className="mt-4 flex flex-col gap-4">
                <p className="inline-flex gap-2">
                  <CalendarDays />
                  {new Date(e.date).toLocaleDateString()}
                </p>
                <p className="inline-flex gap-2">
                  <MapPin />
                  {e.location}
                </p>
                <p className="inline-flex gap-2">
                  <Users />
                  {e.booked}/{e.capacity}
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </>
  );
}
