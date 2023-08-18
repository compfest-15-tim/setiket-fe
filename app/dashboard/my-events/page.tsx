import { Metadata } from "next";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "My Events | SeTiket",
};

export const MyEventsPage = () => {
  const myEvents = [
    {
      id: "7b92a264-5ff2-4ea1-b5ef-62c2b9cda87a",
      title: "Tech Conference 2023",
      date: "2023-09-15",
      location: "San Francisco, USA",
      capacity: "1000/1200",
      status: "verified",
    },
    {
      id: "f742e8e2-1fb7-4e8c-87d0-6720e4c2c981",
      title: "Music Festival: Summer Vibes",
      date: "2023-08-25",
      location: "Miami, USA",
      capacity: "50000/55000",
      status: "verified",
    },
    {
      id: "c501a615-3b31-44e6-b539-49f18c81ed65",
      title: "Art Exhibition: Modern Artistry",
      date: "2023-10-05",
      location: "Paris, France",
      capacity: "200/250",
      status: "pending",
    },
    {
      id: "8274f5f3-8f37-47ed-916d-7c9734225ad2",
      title: "Startup Summit",
      date: "2023-09-30",
      location: "Bangalore, India",
      capacity: "300/300",
      status: "rejected",
    },
    {
      id: "d28f32d0-84d2-4f5e-9ab3-51793df46cf3",
      title: "Food Festival: International Flavors",
      date: "2023-10-12",
      location: "Tokyo, Japan",
      capacity: "800/1000",
      status: "verified",
    },
    {
      id: "59aa525a-c0e5-47b0-8cc0-c6c7e5c242a7",
      title: "Fitness Workshop: Healthy Living",
      date: "2023-08-28",
      location: "Sydney, Australia",
      capacity: "50/60",
      status: "pending",
    },
    {
      id: "c3e585a2-3f6d-4d3c-8a72-cf0c2c0c5e7f",
      title: "Fashion Show: Urban Trends",
      date: "2023-09-22",
      location: "London, UK",
      capacity: "300/350",
      status: "verified",
    },
    {
      id: "b24a67e6-1523-48eb-89d3-03f9a741f774",
      title: "Tech Seminar: AI Insights",
      date: "2023-09-18",
      location: "Berlin, Germany",
      capacity: "150/200",
      status: "pending",
    },
    {
      id: "b9a9e692-7cd0-4242-97f7-3d78887db938",
      title: "Yoga Retreat: Mind and Body",
      date: "2023-09-10",
      location: "Bali, Indonesia",
      capacity: "20/25",
      status: "verified",
    },
    {
      id: "db786f08-7cd0-4e51-b4b9-ee64a2d0e51e",
      title: "Film Festival: Global Cinema",
      date: "2023-10-08",
      location: "New York City, USA",
      capacity: "500/600",
      status: "verified",
    },
    {
      id: "7314be9e-81b4-4eb3-90f3-94e5d20cfb36",
      title: "Business Summit: Strategies for Success",
      date: "2023-09-25",
      location: "Shanghai, China",
      capacity: "1500/1800",
      status: "pending",
    },
    {
      id: "d349b2fc-6a1c-41c1-88c4-6d7eb2df89e7",
      title: "Cooking Class: Italian Cuisine",
      date: "2023-10-15",
      location: "Rome, Italy",
      capacity: "30/30",
      status: "verified",
    },
    {
      id: "612c86b3-e2f9-4f95-9ca3-831c8c80e4a4",
      title: "Environmental Conference",
      date: "2023-09-05",
      location: "Vancouver, Canada",
      capacity: "200/250",
      status: "verified",
    },
    {
      id: "f7b484e9-10e7-45d5-9e49-aa2d961c99c5",
      title: "Charity Gala: A Night of Giving",
      date: "2023-08-27",
      location: "Rio de Janeiro, Brazil",
      capacity: "100/120",
      status: "pending",
    },
    {
      id: "8e7d05dd-d2c4-4c56-902d-7f07018e08c3",
      title: "Art Workshop: Sculpting Techniques",
      date: "2023-09-12",
      location: "Florence, Italy",
      capacity: "15/20",
      status: "verified",
    },
    {
      id: "d8e1b1ae-6743-4d13-9b34-c0daab7eb0e7",
      title: "Music Concert: Rock Fusion",
      date: "2023-09-08",
      location: "Austin, USA",
      capacity: "800/1000",
      status: "verified",
    },
    {
      id: "f098e0b7-5b12-47d0-8d50-1e1b4fcbf2ac",
      title: "Health Seminar: Wellness Insights",
      date: "2023-10-20",
      location: "Zurich, Switzerland",
      capacity: "50/50",
      status: "rejected",
    },
  ];

  return (
    <section className="w-full">
      <Card>
        <CardHeader>
          <div className="flex flex-row items-center justify-between gap-4">
            <CardTitle>My Events</CardTitle>
            <Link href="/dashboard/my-events/create-event">
              <Button>Create Event</Button>
            </Link>
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="pt-6">
          <Table className="border border-border">
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Capacity</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {myEvents.map((event) => {
                // get Badge variant
                const variant =
                  event.status === "verified"
                    ? "green"
                    : event.status === "pending"
                    ? "yellow"
                    : "destructive";

                return (
                  <TableRow key={event.id}>
                    <TableCell>{event.id}</TableCell>
                    <TableCell>
                      <Link
                        href={`/dashboard/my-events/${event.id}`}
                        className="font-medium text-foreground underline-offset-4 xl:hover:underline"
                      >
                        {event.title}
                      </Link>
                    </TableCell>
                    <TableCell>{event.date}</TableCell>
                    <TableCell>{event.location}</TableCell>
                    <TableCell>{event.capacity}</TableCell>
                    <TableCell>
                      <Badge variant={variant}>{event.status}</Badge>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  );
};

export default MyEventsPage;
