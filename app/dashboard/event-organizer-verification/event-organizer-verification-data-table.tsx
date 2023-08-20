"use client";

import { useState } from "react";
import { InputFilter } from "@/types/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/data-table";
import { Badge } from "@/components/ui/badge";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { revalidatePath } from "next/cache";

export interface EventOrganizer {
  id: string;
  email: string;
  fullName: string;
  role: "Event Organizer";
  status: "verified" | "pending" | "rejected";
  createdAt: string;
}

const EventOrganizerVerificationDataTable = () => {
  // Loading state
  const [isLoading, setIsLoading] = useState(false);

  // Toast hook
  const { toast } = useToast();

  // Test Data
  // Get all event organizer pending data from API
  const users: EventOrganizer[] = [
    {
      id: "9d496a4f-11e2-4e10-a61c-f52b24a2e1f1",
      email: "random1@gmail.com",
      fullName: "John Doe 1",
      role: "Event Organizer",
      status: "pending",
      createdAt: "2023-08-20T10:00:00Z",
    },
    {
      id: "83bbef0d-6b62-472c-837b-828bd9cc2c4b",
      email: "random2@gmail.com",
      fullName: "Jane Smith 2",
      role: "Event Organizer",
      status: "pending",
      createdAt: "2023-08-20T11:30:00Z",
    },
    {
      id: "6a5cc16f-5136-44b2-9f61-e2e00f01cf64",
      email: "random3@gmail.com",
      fullName: "Alex Johnson 3",
      role: "Event Organizer",
      status: "pending",
      createdAt: "2023-08-20T12:45:00Z",
    },
    {
      id: "f714d7d9-bd24-4a34-a04d-9b8795b4c9cc",
      email: "random4@gmail.com",
      fullName: "Michael Brown 4",
      role: "Event Organizer",
      status: "pending",
      createdAt: "2023-08-20T14:20:00Z",
    },
    {
      id: "8ebe25e9-c01b-42e4-b992-3bce4f13b6e9",
      email: "random5@gmail.com",
      fullName: "Emily Davis 5",
      role: "Event Organizer",
      status: "pending",
      createdAt: "2023-08-20T15:10:00Z",
    },
    {
      id: "3d82c7a0-d0c2-49c2-b2d3-8e3d9ce010ce",
      email: "random6@gmail.com",
      fullName: "Daniel Wilson 6",
      role: "Event Organizer",
      status: "pending",
      createdAt: "2023-08-20T16:30:00Z",
    },
    {
      id: "9ef711ab-3f60-4e5f-aed0-5e896a1c947b",
      email: "random7@gmail.com",
      fullName: "Olivia Miller 7",
      role: "Event Organizer",
      status: "pending",
      createdAt: "2023-08-20T17:15:00Z",
    },
    {
      id: "067d04a5-dbd6-4b9e-8e47-9a94a8e51d76",
      email: "random8@gmail.com",
      fullName: "William Johnson 8",
      role: "Event Organizer",
      status: "pending",
      createdAt: "2023-08-20T18:40:00Z",
    },
    {
      id: "a4c9b34d-c89f-42d9-a88f-cb07d7447756",
      email: "random9@gmail.com",
      fullName: "Sophia Smith 9",
      role: "Event Organizer",
      status: "pending",
      createdAt: "2023-08-20T19:55:00Z",
    },
    {
      id: "6e0da4d5-4a0e-43a6-8b22-9a1932d11f0d",
      email: "random10@gmail.com",
      fullName: "James Anderson 10",
      role: "Event Organizer",
      status: "pending",
      createdAt: "2023-08-20T20:20:00Z",
    },
    {
      id: "b3c686e2-e1b3-406c-95bb-4ec2b3d58d12",
      email: "random11@gmail.com",
      fullName: "Ava Martinez 11",
      role: "Event Organizer",
      status: "pending",
      createdAt: "2023-08-20T21:45:00Z",
    },
    {
      id: "d1a674e0-2dbf-48b5-9f5e-4340c0457e85",
      email: "random12@gmail.com",
      fullName: "Logan Johnson 12",
      role: "Event Organizer",
      status: "pending",
      createdAt: "2023-08-20T22:10:00Z",
    },
    {
      id: "f5c8d053-07cd-4d8f-b83b-ba74025c097c",
      email: "random13@gmail.com",
      fullName: "Isabella Clark 13",
      role: "Event Organizer",
      status: "pending",
      createdAt: "2023-08-20T23:25:00Z",
    },
    {
      id: "70323c98-2e0f-4019-bc7d-2f7c4ab6d3ad",
      email: "random14@gmail.com",
      fullName: "Noah Taylor 14",
      role: "Event Organizer",
      status: "pending",
      createdAt: "2023-08-21T00:50:00Z",
    },
    {
      id: "082789e3-6ac1-4603-965f-0ce175155d12",
      email: "random15@gmail.com",
      fullName: "Emma White 15",
      role: "Event Organizer",
      status: "pending",
      createdAt: "2023-08-21T01:15:00Z",
    },
    {
      id: "865d7f81-bbab-4d15-8d52-49783c395f48",
      email: "random16@gmail.com",
      fullName: "Liam Rodriguez 16",
      role: "Event Organizer",
      status: "pending",
      createdAt: "2023-08-21T02:30:00Z",
    },
    {
      id: "72922f91-9ce3-4d01-95a1-7b805ab752e1",
      email: "random17@gmail.com",
      fullName: "Oliver Garcia 17",
      role: "Event Organizer",
      status: "pending",
      createdAt: "2023-08-21T03:55:00Z",
    },
    {
      id: "a94d4aa4-8e33-4f3a-832b-87a4e29c5e06",
      email: "random18@gmail.com",
      fullName: "Sophia Martinez 18",
      role: "Event Organizer",
      status: "pending",
      createdAt: "2023-08-21T04:20:00Z",
    },
    {
      id: "68739c67-468e-4a5d-8c9b-efbf5f65647f",
      email: "random19@gmail.com",
      fullName: "Benjamin Hernandez 19",
      role: "Event Organizer",
      status: "pending",
      createdAt: "2023-08-21T05:35:00Z",
    },
    {
      id: "f0d0d1d8-9d0c-4b11-9cc2-50cfc6f968a4",
      email: "random20@gmail.com",
      fullName: "Mia Johnson 20",
      role: "Event Organizer",
      status: "pending",
      createdAt: "2023-08-21T06:00:00Z",
    },
    {
      id: "a40a3a44-9e1b-421e-89a7-1c5691392f2e",
      email: "random21@gmail.com",
      fullName: "Ethan Smith 21",
      role: "Event Organizer",
      status: "pending",
      createdAt: "2023-08-21T07:25:00Z",
    },
    {
      id: "65d2aa04-0793-43c1-94a3-34488ab3d53d",
      email: "random22@gmail.com",
      fullName: "Ava Davis 22",
      role: "Event Organizer",
      status: "pending",
      createdAt: "2023-08-21T08:40:00Z",
    },
    {
      id: "98e7f143-c7e6-4b37-9b02-35e001b457c9",
      email: "random23@gmail.com",
      fullName: "Liam Wilson 23",
      role: "Event Organizer",
      status: "pending",
      createdAt: "2023-08-21T09:05:00Z",
    },
    {
      id: "f41ea86c-715a-4d64-bf66-9d59bfdfb84b",
      email: "random24@gmail.com",
      fullName: "Olivia Martinez 24",
      role: "Event Organizer",
      status: "pending",
      createdAt: "2023-08-21T10:20:00Z",
    },
    {
      id: "af4ea7aa-4d68-44a3-96ed-8b510992d7a7",
      email: "random25@gmail.com",
      fullName: "Noah Brown 25",
      role: "Event Organizer",
      status: "pending",
      createdAt: "2023-08-21T11:35:00Z",
    },
    {
      id: "48dbd5a0-7c5a-4ee2-bf6b-bd4b3608e4bb",
      email: "random26@gmail.com",
      fullName: "Emma Johnson 26",
      role: "Event Organizer",
      status: "pending",
      createdAt: "2023-08-21T12:50:00Z",
    },
    {
      id: "6be1de32-bc5a-4b29-bf23-61597e54c45e",
      email: "random27@gmail.com",
      fullName: "William Miller 27",
      role: "Event Organizer",
      status: "pending",
      createdAt: "2023-08-21T13:05:00Z",
    },
    {
      id: "897e47e4-ebc2-4a98-a92f-17dbf1f01544",
      email: "random28@gmail.com",
      fullName: "Sophia Anderson 28",
      role: "Event Organizer",
      status: "pending",
      createdAt: "2023-08-21T14:20:00Z",
    },
    {
      id: "f0b8d2c3-ea22-4a02-9f33-9b4987c4488c",
      email: "random29@gmail.com",
      fullName: "James Thomas 29",
      role: "Event Organizer",
      status: "pending",
      createdAt: "2023-08-21T15:35:00Z",
    },
    {
      id: "7f868b63-12c3-43de-b58a-7a63e34b3ae3",
      email: "random30@gmail.com",
      fullName: "Isabella Martin 30",
      role: "Event Organizer",
      status: "pending",
      createdAt: "2023-08-21T16:50:00Z",
    },
    {
      id: "2e1e0d36-68f6-4bf1-8b31-6aeb8ab6b830",
      email: "random31@gmail.com",
      fullName: "Logan Thompson 31",
      role: "Event Organizer",
      status: "pending",
      createdAt: "2023-08-21T18:05:00Z",
    },
    {
      id: "ec32c1f4-39ed-4d5c-a936-b3b8f31b4b7c",
      email: "random32@gmail.com",
      fullName: "Mia Hernandez 32",
      role: "Event Organizer",
      status: "pending",
      createdAt: "2023-08-21T19:20:00Z",
    },
    {
      id: "4d6f5591-0d22-43c2-bf34-7e7c58ac8d2c",
      email: "random33@gmail.com",
      fullName: "Ethan Wilson 33",
      role: "Event Organizer",
      status: "pending",
      createdAt: "2023-08-21T20:35:00Z",
    },
    {
      id: "9e15c097-0e9b-415e-afab-992a22a7d93a",
      email: "random34@gmail.com",
      fullName: "Ava Davis 34",
      role: "Event Organizer",
      status: "pending",
      createdAt: "2023-08-21T21:50:00Z",
    },
    {
      id: "c19cf917-e4de-44ed-9d12-42de5498d9f5",
      email: "random35@gmail.com",
      fullName: "Liam Johnson 35",
      role: "Event Organizer",
      status: "pending",
      createdAt: "2023-08-21T23:05:00Z",
    },
    {
      id: "7f15510e-f3ad-4745-a5c9-c86ea189a4c2",
      email: "random36@gmail.com",
      fullName: "Olivia Smith 36",
      role: "Event Organizer",
      status: "pending",
      createdAt: "2023-08-22T00:20:00Z",
    },
    {
      id: "dc6a0750-e352-4c86-9ef6-63a11efc7c2e",
      email: "random37@gmail.com",
      fullName: "Noah Miller 37",
      role: "Event Organizer",
      status: "pending",
      createdAt: "2023-08-22T01:35:00Z",
    },
    {
      id: "f24a127e-707f-473c-a408-8ab94f6ef7ef",
      email: "random38@gmail.com",
      fullName: "Emma Johnson 38",
      role: "Event Organizer",
      status: "pending",
      createdAt: "2023-08-22T02:50:00Z",
    },
    {
      id: "933df6e4-3169-4d5f-af2a-94690dd91ac1",
      email: "random39@gmail.com",
      fullName: "William Brown 39",
      role: "Event Organizer",
      status: "pending",
      createdAt: "2023-08-22T04:05:00Z",
    },
    {
      id: "3db390c6-57fb-4e23-a07f-1292c7ad9c3c",
      email: "random40@gmail.com",
      fullName: "Sophia Davis 40",
      role: "Event Organizer",
      status: "pending",
      createdAt: "2023-08-22T05:20:00Z",
    },
  ];

  // Colums definition
  const columns: ColumnDef<EventOrganizer>[] = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "email",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Email" />;
      },
    },
    {
      accessorKey: "fullName",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Full Name" />;
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.original.status;
        const variant =
          status === "verified"
            ? "green"
            : status === "pending"
            ? "yellow"
            : "destructive";

        return <Badge variant={variant}>{status}</Badge>;
      },
    },
    {
      accessorKey: "createdAt",
      header: ({ column }) => {
        return (
          <DataTableColumnHeader column={column} title="Registered Since" />
        );
      },
      cell: ({ row }) => {
        const date = new Date(row.original.createdAt);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = String(date.getFullYear());

        return <span>{`${day}-${month}-${year}`}</span>;
      },
    },
    {
      id: "verification",
      cell: ({ row }) => {
        // Get id
        const id = row.original.id;

        const onClick = async (action: "reject" | "verify") => {
          // Create form data
          const formData = new FormData();
          formData.append("status", action);

          // Intialize loading state
          setIsLoading(true);
          toast({
            variant: "default",
            title: "Loading",
            description: "Please wait...",
          });

          // Try catch to handle network error from fetch()
          try {
            const res = await fetch(
              "https://random-data-api.com/api/users/random_user"
            );
            const resJSON = await res.json();

            // API error, Throw error message
            if (!res.ok) {
              throw new Error(resJSON.message);
            }
          } catch (error) {
            // Error
            setIsLoading(false);
            toast({
              variant: "destructive",
              title: "Error",
              description: error as string,
            });
            return;
          }

          // Success
          setIsLoading(false);
          toast({
            variant: "success",
            title: "Success",
            description: "Event organizer verification has been rejected.",
          });

          // Revalidate page data
          // revalidatePath("/dashboard/event-organizer-verification");
        };

        return (
          <div className="flex flex-row gap-3">
            {/* Reject Button & Alert Confirmation */}
            <AlertDialog>
              <AlertDialogTrigger disabled={isLoading}>
                <Button
                  size="icon"
                  variant="destructive"
                  className="h-8 w-8"
                  disabled={isLoading}
                >
                  <X className="h-5 w-5" />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will reject the event
                    organizer verification.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={() => onClick("reject")}>
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            {/* Verify button & Alert Confirmation */}
            <AlertDialog>
              <AlertDialogTrigger disabled={isLoading}>
                <Button
                  size="icon"
                  className="h-8 w-8 bg-green-500 xl:hover:bg-green-500/80"
                  disabled={isLoading}
                >
                  <Check className="h-5 w-5" />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will verify the event
                    organizer.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={() => onClick("verify")}>
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        );
      },
    },
  ];

  // Input filter definition (zero or one input search only)
  const inputFilter: InputFilter = {
    columnId: "email",
    placeholder: "Filter by email...",
  };

  return <DataTable columns={columns} data={users} inputFilter={inputFilter} />;
};

export default EventOrganizerVerificationDataTable;
