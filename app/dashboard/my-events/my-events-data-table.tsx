"use client";

import Link from "next/link";
import { getFormattedDate } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/data-table";
import { Badge } from "@/components/ui/badge";
import { BarChart4, MoreHorizontal } from "lucide-react";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { Trash2, FileEdit, CheckCircle2, Clock, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { InputFilter, FacetedFilter } from "@/types/data-table";

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  capacity: string;
  status: "verified" | "pending" | "rejected";
}

const MyEventsTable = () => {
  // Test Data
  const events: Event[] = [
    {
      id: "7b92a264-5ff2-4ea1-b5ef-62c2b9cda87a",
      title: "Tech Conference 2023",
      date: "2023-09-15T00:00:00Z",
      location: "San Francisco, USA",
      capacity: "1000/1200",
      status: "verified",
    },
    {
      id: "f742e8e2-1fb7-4e8c-87d0-6720e4c2c981",
      title: "Music Festival: Summer Vibes",
      date: "2023-08-25T00:00:00Z",
      location: "Miami, USA",
      capacity: "50000/55000",
      status: "verified",
    },
    {
      id: "c501a615-3b31-44e6-b539-49f18c81ed65",
      title: "Art Exhibition: Modern Artistry",
      date: "2023-10-05T00:00:00Z",
      location: "Paris, France",
      capacity: "200/250",
      status: "pending",
    },
    {
      id: "8274f5f3-8f37-47ed-916d-7c9734225ad2",
      title: "Startup Summit",
      date: "2023-09-30T00:00:00Z",
      location: "Bangalore, India",
      capacity: "300/300",
      status: "rejected",
    },
    {
      id: "d28f32d0-84d2-4f5e-9ab3-51793df46cf3",
      title: "Food Festival: International Flavors",
      date: "2023-10-12T00:00:00Z",
      location: "Tokyo, Japan",
      capacity: "800/1000",
      status: "verified",
    },
    {
      id: "59aa525a-c0e5-47b0-8cc0-c6c7e5c242a7",
      title: "Fitness Workshop: Healthy Living",
      date: "2023-08-28T00:00:00Z",
      location: "Sydney, Australia",
      capacity: "50/60",
      status: "pending",
    },
    {
      id: "c3e585a2-3f6d-4d3c-8a72-cf0c2c0c5e7f",
      title: "Fashion Show: Urban Trends",
      date: "2023-09-22T00:00:00Z",
      location: "London, UK",
      capacity: "300/350",
      status: "verified",
    },
    {
      id: "b24a67e6-1523-48eb-89d3-03f9a741f774",
      title: "Tech Seminar: AI Insights",
      date: "2023-09-18T00:00:00Z",
      location: "Berlin, Germany",
      capacity: "150/200",
      status: "pending",
    },
    {
      id: "b9a9e692-7cd0-4242-97f7-3d78887db938",
      title: "Yoga Retreat: Mind and Body",
      date: "2023-09-10T00:00:00Z",
      location: "Bali, Indonesia",
      capacity: "20/25",
      status: "verified",
    },
    {
      id: "db786f08-7cd0-4e51-b4b9-ee64a2d0e51e",
      title: "Film Festival: Global Cinema",
      date: "2023-10-08T00:00:00Z",
      location: "New York City, USA",
      capacity: "500/600",
      status: "verified",
    },
    {
      id: "7314be9e-81b4-4eb3-90f3-94e5d20cfb36",
      title: "Business Summit: Strategies for Success",
      date: "2023-09-25T00:00:00Z",
      location: "Shanghai, China",
      capacity: "1500/1800",
      status: "pending",
    },
    {
      id: "d349b2fc-6a1c-41c1-88c4-6d7eb2df89e7",
      title: "Cooking Class: Italian Cuisine",
      date: "2023-10-15T00:00:00Z",
      location: "Rome, Italy",
      capacity: "30/30",
      status: "verified",
    },
    {
      id: "612c86b3-e2f9-4f95-9ca3-831c8c80e4a4",
      title: "Environmental Conference",
      date: "2023-09-05T00:00:00Z",
      location: "Vancouver, Canada",
      capacity: "200/250",
      status: "verified",
    },
    {
      id: "f7b484e9-10e7-45d5-9e49-aa2d961c99c5",
      title: "Charity Gala: A Night of Giving",
      date: "2023-08-27T00:00:00Z",
      location: "Rio de Janeiro, Brazil",
      capacity: "100/120",
      status: "pending",
    },
    {
      id: "8e7d05dd-d2c4-4c56-902d-7f07018e08c3",
      title: "Art Workshop: Sculpting Techniques",
      date: "2023-09-12T00:00:00Z",
      location: "Florence, Italy",
      capacity: "15/20",
      status: "verified",
    },
    {
      id: "d8e1b1ae-6743-4d13-9b34-c0daab7eb0e7",
      title: "Music Concert: Rock Fusion",
      date: "2023-09-08T00:00:00Z",
      location: "Austin, USA",
      capacity: "800/1000",
      status: "verified",
    },
    {
      id: "f098e0b7-5b12-47d0-8d50-1e1b4fcbf2ac",
      title: "Health Seminar: Wellness Insights",
      date: "2023-10-20T00:00:00Z",
      location: "Zurich, Switzerland",
      capacity: "50/50",
      status: "rejected",
    },
  ];

  // Colums definition
  const columns: ColumnDef<Event>[] = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "title",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Title" />;
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const id = row.original.id;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <Link href={`/dashboard/my-events/${id}`}>
                <DropdownMenuItem>
                  <BarChart4 className="mr-2 h-4 w-4 stroke-popover-foreground" />
                  View Detail
                </DropdownMenuItem>
              </Link>
              <Link href={`/dashboard/my-events/${id}/edit`}>
                <DropdownMenuItem>
                  <FileEdit className="mr-2 h-4 w-4 stroke-popover-foreground" />
                  Edit
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem className="text-destructive focus:text-destructive">
                <Trash2 className="mr-2 h-4 w-4 stroke-destructive" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
    {
      accessorKey: "date",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Date" />;
      },
      cell: ({ row }) => {
        const date = new Date(row.original.date);

        return <span>{getFormattedDate(date)}</span>;
      },
    },

    {
      accessorKey: "location",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Location" />;
      },
    },
    {
      accessorKey: "capacity",
      header: "Capacity",
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
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
  ];

  // Input filter definition (zero or one input search only)
  const inputFilter: InputFilter = {
    columnId: "title",
    placeholder: "Filter by title...",
  };

  // Faceted filter(s) definition (zero or more faceted filter(s))
  const facetedFilters: FacetedFilter[] = [
    {
      columnId: "status",
      title: "Status",
      options: [
        {
          value: "verified",
          label: "verified",
          icon: CheckCircle2,
        },
        {
          value: "pending",
          label: "pending",
          icon: Clock,
        },
        {
          value: "rejected",
          label: "rejected",
          icon: XCircle,
        },
      ],
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={events}
      inputFilter={inputFilter}
      facetedFilters={facetedFilters}
    />
  );
};

export default MyEventsTable;
