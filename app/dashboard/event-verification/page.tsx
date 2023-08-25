import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EventVerificationDataTable from "./event-verification-table";
import { getServerSession } from "@/lib/auth-server";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Events Verification | SeTiket",
};

const EventVerificationPage = async () => {
  const session = await getServerSession();

  // Event verification page can only be seen by admin
  if (session && session.user_metadata.role !== "ADMIN") {
    notFound();
  }

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
