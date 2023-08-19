import { Metadata } from "next";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MyEventsTable from "./my-events-data-table";

export const metadata: Metadata = {
  title: "My Events | SeTiket",
};

const MyEventsPage = () => {
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
          <MyEventsTable />
        </CardContent>
      </Card>
    </section>
  );
};

export default MyEventsPage;
