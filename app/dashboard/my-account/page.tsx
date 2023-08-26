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
import { getCurrencyIDR, getFormattedDate } from "@/lib/utils";
import { Metadata } from "next";
import { getServerSession } from "@/lib/auth-server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "My Account | SeTiket",
};

export default async function MyAccountPage() {
  const session = await getServerSession();
  const cookie = cookies();
  const accessToken = cookie.get("accessToken");

  if (!session) {
    redirect("/sign-in");
  }

  const email = session.user_metadata.email;
  const fullName = session.user_metadata.full_name;
  const role = session.user_metadata.role;
  const signedUpAt = getFormattedDate(new Date(session.confirmed_at));
  // GET BALANCE DATA

  return (
    <Card className="h-[5%] w-full">
      <CardHeader>
        <CardTitle className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          My Account
          <div className="flex flex-row gap-4">
            <Popover>
              <PopoverTrigger>
                <Button variant="default" type="button">
                  Top Up Balance
                </Button>
              </PopoverTrigger>
              <PopoverContent className="absolute -left-16">
                <h3 className="mb-6 text-xl font-semibold">Top Up Balance</h3>
                <TopUpForm accessToken={accessToken?.value} />
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger>
                <Button variant="secondary" type="button">
                  Withdraw Balance
                </Button>
              </PopoverTrigger>
              <PopoverContent className="absolute -right-20">
                <h3 className="mb-6 text-xl font-semibold">
                  Withdraw Your Balance
                </h3>
                <WithdrawForm accessToken={accessToken?.value} />
              </PopoverContent>
            </Popover>
          </div>
        </CardTitle>
      </CardHeader>
      <Separator />
      <CardContent>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2">
          <div>
            <div className="mb-10">
              <p className="mb-2 uppercase">Email</p>
              <p className="font-medium text-primary">{email}</p>
            </div>
            <div className="mb-10">
              <p className="mb-2 uppercase">Full Name</p>
              <p className="font-medium text-primary">{fullName}</p>
            </div>
          </div>

          <div>
            <div className="mb-10">
              <p className="mb-2 uppercase">Current Balance</p>
              <p className="font-medium text-primary" id="current-balance">
                {getCurrencyIDR(50000)}
              </p>
            </div>
            <div>
              <p className="mb-2 uppercase">Registered as</p>
              <p className="font-medium text-primary" id="role">
                {role}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="p-4">
        <small className="text-gray-400">{signedUpAt}</small>
      </CardFooter>
    </Card>
  );
}
