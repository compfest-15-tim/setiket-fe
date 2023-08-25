import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MyOrdersTable from "./my-orders-data-table";
import { notFound } from "next/navigation";
import { getServerSession } from "@/lib/auth-server";

export const metadata: Metadata = {
  title: "My Orders | SeTiket",
};

const MyOrdersPage = async () => {
  const session = await getServerSession();

  // My Orders List page can only be accessed by user
  if (session && session.user_metadata.role !== "CUSTOMER") {
    notFound();
  }

  return (
    <section className="w-full">
      <Card>
        <CardHeader>
          <CardTitle>My Orders</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="pt-6">
          <MyOrdersTable />
        </CardContent>
      </Card>
    </section>
  );
};

export default MyOrdersPage;
