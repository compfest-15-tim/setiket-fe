import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EventVerificationDataTable from "./event-verification-table";

export const metadata: Metadata = {
  title: "Events Verification | SeTiket",
};

const EventVerificationPage = () => {
  return (
    <section className="w-full">
      <Card>
        <CardHeader>
          <CardTitle>Event Verification</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="pt-6">
          <EventVerificationDataTable />
        </CardContent>
      </Card>
    </section>
  );
};

export default EventVerificationPage;
