"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { LogOut, BadgeCheck, Ban } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <Card className="mt-10 h-[5%] w-full md:w-1/4">
      <CardHeader>
        <CardTitle>Henry Salim</CardTitle>
        <CardDescription>
          <span className={cn("mt-2 flex items-center gap-2 text-red-500 font-semibold")}>
            <Ban />
            Not Verified Yet
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul>
          <li className="mb-2">
            <Link
              href="/dashboard"
              className={cn(
                "block w-full rounded-md p-3 duration-300 ease-in-out hover:bg-gray-200 hover:text-primary",
                pathname == "/dashboard" ? "font-semibold text-primary bg-gray-200" : ""
              )}
            >
              Account Information
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/my-order"
              className="block w-full rounded-md p-3 duration-300 ease-in-out hover:bg-gray-200 hover:text-primary"
            >
              My Order
            </Link>
          </li>
        </ul>
      </CardContent>
      <Separator />
      <CardFooter>
        <ul>
          <li className="mt-3">
            <Link
              href=""
              className="flex w-full flex-row items-center gap-2 rounded-md p-3 text-destructive duration-300 ease-in-out hover:bg-gray-200"
            >
              <LogOut className="stroke-destructive" size={20} />
              Logout
            </Link>
          </li>
        </ul>
      </CardFooter>
    </Card>
  );
}
