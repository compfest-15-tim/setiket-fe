import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CustomerDataTable from "./customer-data-table";
import { getCurrencyIDR } from "@/lib/utils";

export const metadata: Metadata = {
  title: "My Events | SeTiket",
};

export const MyEventsDetailPage = () => {
  // Get Event data
  const event = {
    id: "7b92a264-5ff2-4ea1-b5ef-62c2b9cda87a",
    title: "Tech Conference 2023",
    date: "2023-09-15",
    location: "San Francisco, USA",
    capacity: "1000/1200",
    status: "verified",
  };
  const soldTicket = 1000;
  const ticketCapacity = 1200;
  const pricePerTicket = 500000;
  const totalProfit = soldTicket * pricePerTicket;

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
            <CardTitle>{event.title}</CardTitle>
          </div>
        </CardHeader>

        <Separator />

        {/* Sales overview, profit */}
        <CardContent className="flex flex-col gap-5 pt-6">
          {/* Subtitle */}
          <h4 className="text-xl font-semibold leading-none tracking-tight text-primary">
            Sales Overview
          </h4>

          <div className="flex flex-col gap-3">
            {/* Total Sold & Capacity */}
            <p className="text-base font-medium">
              Sold Ticket : {soldTicket} / {ticketCapacity}
            </p>

            {/* Price per one ticket */}
            <p className="text-base font-medium">
              Price per ticket : {getCurrencyIDR(pricePerTicket)}
            </p>

            {/* Total Profit */}
            <p className="text-base font-medium">
              Total Profit : {getCurrencyIDR(totalProfit)}
            </p>
          </div>
        </CardContent>

        <Separator />

        {/* All buyer data */}
        <CardContent className="flex flex-col gap-5 pt-6">
          <h4 className="text-xl font-semibold leading-none tracking-tight text-primary">
            Customer Table
          </h4>

          <CustomerDataTable />
        </CardContent>
      </Card>
    </section>
  );
};

export default MyEventsDetailPage;
