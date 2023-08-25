import { Metadata } from "next";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MyEventsTable from "./my-events-data-table";
import { getServerSession } from "@/lib/auth-server";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "My Events | SeTiket",
};

const MyEventsPage = async () => {
  const session = await getServerSession();

  // My Events List page can only be accessed by event organizer
  if (session && session.user_metadata.role !== "EVENT_ORGANIZER") {
    notFound();
  }

  return (
    <section className="w-full">
      <Card>
        <CardHeader>
          <div className="flex flex-row items-center justify-between gap-4">
            <CardTitle>My Events</CardTitle>
            <Link href="/dashboard/my-events/create-event">
              <Button>
                <Plus className="mr-1 h-5 w-5" />
                Create Event
              </Button>
            </Link>
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="pt-6">
          <MyEventsTable />
        </CardContent>
      </Card>
    </section>
  );
};

export default MyEventsPage;
