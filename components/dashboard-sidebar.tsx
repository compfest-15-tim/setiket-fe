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
import {
  LogOut,
  Ban,
  User,
  ShoppingCart,
  PartyPopper,
  Users,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function DashboardSidebar() {
  const pathname = usePathname();

  const customerMenus = [
    {
      name: "My Order",
      url: "/dashboard/my-order",
      icon: <ShoppingCart />,
    },
  ];

  const eventOrganizerMenus = [
    {
      name: "My Events",
      url: "/dashboard/my-events",
      icon: <PartyPopper />,
    },
  ];

  const adminMenus = [
    {
      name: "Event Organizers",
      url: "/dashboard/event-organizers",
      icon: <Users />,
    },
    {
      name: "Events",
      url: "/dashboard/events",
      icon: <PartyPopper />,
    },
  ];

  return (
    <Card className="mt-10 h-[5%] w-full lg:max-w-xs">
      <CardHeader>
        <CardTitle>Henry Salim</CardTitle>
        <CardDescription>
          <span
            className={cn(
              "mt-2 flex items-center gap-2 font-semibold text-red-500"
            )}
          >
            <Ban />
            Not Verified Yet
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Print out user's role */}
        <ul className="mb-4">
          <li className="text-sm uppercase text-gray-400">Customer</li>
        </ul>

        {/* User's menu */}
        <ul>
          <li className="mb-3">
            <Link
              href="/dashboard/my-account"
              className={cn(
                "flex w-full items-center gap-3 rounded-md p-3 duration-300 ease-in-out hover:bg-gray-200 hover:text-primary",
                pathname == "/dashboard/my-account"
                  ? "bg-gray-200 font-semibold text-primary"
                  : ""
              )}
            >
              <User />
              My Account
            </Link>
          </li>

          {/* User's menus based on users' role */}
          {customerMenus.map((path, index) => (
            <li key={index} className="mb-3">
              <Link
                className={cn(
                  "flex w-full items-center gap-3 rounded-md p-3 duration-300 ease-in-out hover:bg-gray-200 hover:text-primary",
                  pathname.startsWith(path.url)
                    ? "bg-gray-200 font-semibold text-primary"
                    : ""
                )}
                href={path.url}
              >
                {path.icon}
                {path.name}
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
      <Separator />

      {/* User's logout button */}
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
