import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import TopUpForm from "./topup-form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import WithdrawForm from "./withdraw-form";
import { Metadata } from "next";
import Layout from "../dashboard-layout";

export const metadata: Metadata = {
  title: "Account Information | Dashboard",
};

export default function Dashboad() {
  return (
    <Layout>
      <Card className="mb-10 h-[5%] w-full md:mt-10">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Account Information
            <Popover>
              <PopoverTrigger>
                <Button variant="default" type="button">
                  Top Up Balance
                </Button>
              </PopoverTrigger>
              <PopoverContent className="absolute -right-16">
                <h3 className="mb-6 text-xl font-semibold">Top Up Balance</h3>
                <TopUpForm />
              </PopoverContent>
            </Popover>
          </CardTitle>
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
                <div className="flex flex-row gap-4">
                  <p className="mb-2 uppercase">Current Balance</p>
                  <Popover>
                    <PopoverTrigger>
                      <p className="text-sm text-primary underline">
                        Withdraw Balance
                      </p>
                    </PopoverTrigger>
                    <PopoverContent className="absolute -right-16">
                      <h3 className="mb-6 text-xl font-semibold">
                        Withdraw Your Balance
                      </h3>
                      <WithdrawForm />
                    </PopoverContent>
                  </Popover>
                </div>
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
    </Layout>
  );
}

const formatter = (balance: number) => {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  return formatter.format(balance);
};
