import { CalendarDays, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import Link from "next/link";

export interface Event {
  id: string,
  title: string;
  date: string;
  location: string;
  capacity: string;
}

// Test Data
const events: Event[] = [
  {
    id: "7b92a264-5ff2-4ea1-b5ef-62c2b9cda87a",
    title: "Tech Conference 2023",
    date: "15-09-2023",
    location: "San Francisco, USA",
    capacity: "1000/1200",
  },
  {
    id: "f742e8e2-1fb7-4e8c-87d0-6720e4c2c981",
    title: "Music Festival: Summer Vibes",
    date: "25-08-2023",
    location: "Miami, USA",
    capacity: "50000/55000",
  },
  {
    id: "c501a615-3b31-44e6-b539-49f18c81ed65",
    title: "Art Exhibition: Modern Artistry",
    date: "05-10-2023",
    location: "Paris, France",
    capacity: "200/250",
  },
  {
    id: "8274f5f3-8f37-47ed-916d-7c9734225ad2",
    title: "Startup Summit",
    date: "30-09-2023",
    location: "Bangalore, India",
    capacity: "300/300",
  },
  {
    id: "d28f32d0-84d2-4f5e-9ab3-51793df46cf3",
    title: "Food Festival: International Flavors",
    date: "12-10-2023",
    location: "Tokyo, Japan",
    capacity: "800/1000",
  },
  {
    id: "59aa525a-c0e5-47b0-8cc0-c6c7e5c242a7",
    title: "Fitness Workshop: Healthy Living",
    date: "28-08-2023",
    location: "Sydney, Australia",
    capacity: "50/60",
  },
  {
    id: "c3e585a2-3f6d-4d3c-8a72-cf0c2c0c5e7f",
    title: "Fashion Show: Urban Trends",
    date: "22-09-2023",
    location: "London, UK",
    capacity: "300/350",
  },
  {
    id: "b24a67e6-1523-48eb-89d3-03f9a741f774",
    title: "Tech Seminar: AI Insights",
    date: "18-09-2023",
    location: "Berlin, Germany",
    capacity: "150/200",
  },
];

export default function EventCards() {
  return (
    <>
      {events.map((e, key) => (
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
                  {e.date}
                </p>
                <p className="inline-flex gap-2">
                  <MapPin />
                  {e.location}
                </p>
                <p className="inline-flex gap-2">
                  <Users />
                  {e.capacity}
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </>
  );
}
