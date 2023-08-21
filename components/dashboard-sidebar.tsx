"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  LogOut,
  Ban,
  User,
  ShoppingCart,
  CheckCircle,
  Users,
  CalendarDays,
  CalendarCheck,
  UserCheck,
} from "lucide-react";

export default function DashboardSidebar() {
  const pathname = usePathname();
  const isVerified = true; // from session data
  const customerMenus = [
    {
      name: "My Orders",
      url: "/dashboard/my-orders",
      icon: <ShoppingCart />,
    },
  ];

  const eventOrganizerMenus = [
    {
      name: "My Events",
      url: "/dashboard/my-events",
      icon: <CalendarDays />,
    },
  ];

  const adminMenus = [
    {
      name: "Organizer Verification",
      url: "/dashboard/event-organizer-verification",
      icon: <UserCheck />,
    },
    {
      name: "Event Verification",
      url: "/dashboard/event-verification",
      icon: <CalendarCheck />,
    },
    {
      name: "Registered Users",
      url: "/dashboard/registered-users",
      icon: <Users />,
    },
  ];

  const allMenuForEasyTesting = [
    ...customerMenus,
    ...eventOrganizerMenus,
    ...adminMenus,
  ];

  return (
    <aside className="w-full lg:max-w-xs">
      <Card>
        <CardHeader className="flex flex-col gap-2">
          <CardTitle>Henry Salim</CardTitle>
          <CardDescription
            className={`flex items-center gap-2 font-semibold ${
              isVerified ? "text-green-500" : "text-red-500"
            }`}
          >
            {isVerified ? <CheckCircle /> : <Ban />}
            {isVerified ? "Verified" : "Not verified"}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {/* Print out user's role */}
          <p className="text-sm uppercase text-gray-400">Customer</p>

          {/* User's menu */}
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                href="/dashboard/my-account"
                className={cn(
                  "flex w-full items-center gap-3 rounded-md p-3 duration-300 ease-in-out hover:bg-gray-200 hover:text-primary",
                  pathname === "/dashboard/my-account" &&
                    "bg-gray-200 font-semibold text-primary"
                )}
              >
                <User />
                My Account
              </Link>
            </li>

            {/* User's menus based on users' role */}
            {allMenuForEasyTesting.map((path, index) => (
              <li key={index}>
                <Link
                  href={path.url}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-md p-3 duration-300 ease-in-out hover:bg-gray-200 hover:text-primary",
                    pathname.startsWith(path.url) &&
                      "bg-gray-200 font-semibold text-primary"
                  )}
                >
                  {path.icon}
                  {path.name}
                </Link>
              </li>
            ))}

            <Separator />

            <li
              className="flex w-full cursor-pointer flex-row items-center gap-2 rounded-md p-3 text-destructive duration-300 ease-in-out hover:bg-gray-200"
              onClick={() => {}}
            >
              <LogOut className="mr-2 stroke-destructive" />
              Logout
            </li>
          </ul>
        </CardContent>
      </Card>
    </aside>
  );
}
