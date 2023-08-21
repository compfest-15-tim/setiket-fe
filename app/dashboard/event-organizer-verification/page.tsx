import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EventOrganizerVerificationDataTable from "./event-organizer-verification-data-table";

export const metadata: Metadata = {
  title: "Events Organizer Verification | SeTiket",
};

const MyEventsPage = () => {
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

export default MyEventsPage;
