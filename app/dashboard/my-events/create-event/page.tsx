import { Metadata } from "next";
import Link from "next/link";
import CreateEventForm from "./create-event-form";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Create Event | SeTiket",
};

export const MyEventsDetailPage = () => {
  // Get Event data

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
            <div className="flex flex-col gap-1">
              <CardTitle>Create Event</CardTitle>
              <CardDescription>
                Register your event and wait for verification complete!
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <Separator />

        <CardContent className="pt-6">
          <CreateEventForm />
        </CardContent>
      </Card>
    </section>
  );
};

export default MyEventsDetailPage;
