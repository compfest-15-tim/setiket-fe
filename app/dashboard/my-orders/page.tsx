import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MyOrdersTable from "./my-orders-data-table";

export const metadata: Metadata = {
  title: "My Orders | SeTiket",
};

const MyOrdersPage = () => {
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
