import { Metadata } from "next";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import DashboardSidebar from "@/components/dashboard-sidebar";

export const metadata: Metadata = {
  title: "Account Information | Dashboard",
};

export default function Dashboard() {
  return (
    <main className="flex flex-auto flex-col gap-6 bg-gray-100 px-16 md:flex-row">
      <DashboardSidebar />

      <Card className="mb-10 h-[5%] w-full md:mt-10">
        <CardHeader>
          <CardTitle>Account Information</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2">
            <div>
              <div className="mb-10">
                <p className="mb-2 uppercase">Email</p>
                <p className="font-medium text-primary">
                  henrysalim22@gmail.com
                </p>
              </div>
              <div className="mb-10">
                <p className="mb-2 uppercase">Full Name</p>
                <p className="font-medium text-primary">Henry Salim</p>
              </div>
            </div>

            <div>
              <div className="mb-10">
                <p className="mb-2 uppercase">Current Balance</p>
                <p className="font-medium text-primary" id="current-balance">
                  {formatter(50000)}
                </p>
              </div>
              <div className="mb-10">
                <p className="mb-2 uppercase">Registered as</p>
                <p className="font-medium text-primary" id="current-balance">
                  Customer
                </p>
              </div>
            </div>
          </div>
        </CardContent>
        <Separator />
        <CardFooter className="p-4">
          <small className="text-gray-400">Created at: 16 Aug 2023</small>
        </CardFooter>
      </Card>
    </main>
  );
}

const formatter = (balance: number) => {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  return formatter.format(balance);
};