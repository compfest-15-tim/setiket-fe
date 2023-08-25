import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EventOrganizerVerificationDataTable from "./event-organizer-verification-data-table";
import { getServerSession } from "@/lib/auth-server";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Events Organizer Verification | SeTiket",
};

const EventOrganizerVerificationPage = async () => {
  const session = await getServerSession();

  // EO verification page can only be accessed by admin
  if (session && session.user_metadata.role !== "ADMIN") {
    notFound();
  }

  return (
    <section className="w-full">
      <Card>
        <CardHeader>
          <CardTitle>Event Organizer Verification</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="pt-6">
          <EventOrganizerVerificationDataTable />
        </CardContent>
      </Card>
    </section>
  );
};

export default EventOrganizerVerificationPage;
