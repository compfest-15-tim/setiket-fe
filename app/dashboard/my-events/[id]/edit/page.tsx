import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EditEventForm from "./edit-event-form";
import { getServerSession } from "@/lib/auth-server";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Create Event | SeTiket",
};

const EditEventPage = async () => {
  // Get session
  const session = await getServerSession();

  // Edit event page can only be accessed by event organizer
  if (session && session.user_metadata.role !== "EVENT_ORGANIZER") {
    notFound();
  }

  // Get Event data
  const event = {
    id: "7b92a264-5ff2-4ea1-b5ef-62c2b9cda87a",
    title: "Tech Conference 2023",
    date: "2023-09-15",
    location: "San Francisco, USA",
    capacity: "1000/1200",
    status: "verified",
  };

  return (
    <section className="w-full">
      <Card>
        <CardHeader>
          <div className="flex flex-row items-center gap-4">
            <Link href="/dashboard/my-events/">
              <Button size="icon" variant="ghost">
                <ArrowLeft />
              </Button>
            </Link>
            <CardTitle>Edit Event</CardTitle>
          </div>
        </CardHeader>

        <Separator />

        <CardContent className="pt-6">
          <EditEventForm />
        </CardContent>
      </Card>
    </section>
  );
};

export default EditEventPage;
