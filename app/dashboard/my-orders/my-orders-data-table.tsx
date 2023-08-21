"use client";

import { getFormattedDate, getCurrencyIDR } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/data-table";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { InputFilter } from "@/types/data-table";

export interface Order {
  id: string;
  title: string;
  date: string;
  location: string;
  quantity: number;
  total: number;
  createdAt: string;
}

const MyOrdersTable = () => {
  // Test Data
  const orders: Order[] = [
    {
      id: "1c51a0e2-0ca3-4e19-9db9-0e5ce4b6b2cc",
      title: "Event 1",
      date: "2023-08-22T10:00:00Z",
      location: "City A",
      quantity: 3,
      total: 185000,
      createdAt: "2023-08-22T08:30:00Z",
    },
    {
      id: "831d78bf-5b61-4eaa-af2d-c28a46076416",
      title: "Conference 2",
      date: "2023-09-05T09:30:00Z",
      location: "City B",
      quantity: 2,
      total: 220000,
      createdAt: "2023-08-18T14:15:00Z",
    },
    {
      id: "a4b7f06b-4d6a-4847-8ea9-6a0c4e17b9e2",
      title: "Seminar 3",
      date: "2023-08-30T14:00:00Z",
      location: "City C",
      quantity: 4,
      total: 295000,
      createdAt: "2023-08-10T11:45:00Z",
    },
    {
      id: "7dab5e34-c4ef-466c-b92e-5f2f1429c752",
      title: "Workshop 4",
      date: "2023-09-12T11:15:00Z",
      location: "City D",
      quantity: 1,
      total: 115000,
      createdAt: "2023-07-29T16:20:00Z",
    },
    {
      id: "3f599499-e947-4190-b3b3-78e67c1a8b17",
      title: "Exhibition 5",
      date: "2023-09-25T10:30:00Z",
      location: "City E",
      quantity: 5,
      total: 255000,
      createdAt: "2023-08-05T09:10:00Z",
    },
    {
      id: "ca123a2d-8e01-4aa1-9e78-290731499a7d",
      title: "Symposium 6",
      date: "2023-09-08T13:45:00Z",
      location: "City F",
      quantity: 3,
      total: 165000,
      createdAt: "2023-07-15T18:05:00Z",
    },
    {
      id: "9b47e9d3-c0d1-471b-b8d3-1d31ea6c3a42",
      title: "Lecture 7",
      date: "2023-09-18T15:20:00Z",
      location: "City G",
      quantity: 2,
      total: 135000,
      createdAt: "2023-08-02T10:25:00Z",
    },
    {
      id: "8da482df-9dd7-4b1b-9aef-8f7c781b5eb2",
      title: "Conference 8",
      date: "2023-10-02T09:00:00Z",
      location: "City H",
      quantity: 4,
      total: 255000,
      createdAt: "2023-07-12T12:40:00Z",
    },
    {
      id: "6d3c7b17-d5ea-4c75-9a65-d876f7ee69d3",
      title: "Event 9",
      date: "2023-09-14T12:45:00Z",
      location: "City I",
      quantity: 1,
      total: 120000,
      createdAt: "2023-08-20T17:55:00Z",
    },
    {
      id: "22a71c3d-07d4-4ca7-a62c-ea6ee74a8d0e",
      title: "Workshop 10",
      date: "2023-09-28T11:30:00Z",
      location: "City J",
      quantity: 5,
      total: 295000,
      createdAt: "2023-08-08T08:15:00Z",
    },
    {
      id: "f437c46f-98aa-4eab-80b1-315c3c2d167c",
      title: "Seminar 11",
      date: "2023-09-10T14:15:00Z",
      location: "City A",
      quantity: 3,
      total: 175000,
      createdAt: "2023-08-16T13:30:00Z",
    },
    {
      id: "de3b73c6-8d51-47b6-9e66-2e882e85b651",
      title: "Exhibition 12",
      date: "2023-10-05T10:45:00Z",
      location: "City B",
      quantity: 2,
      total: 135000,
      createdAt: "2023-07-25T09:40:00Z",
    },
    {
      id: "c8a3be03-2896-48b4-b9c7-c5eaa17d75e4",
      title: "Symposium 13",
      date: "2023-09-20T13:30:00Z",
      location: "City C",
      quantity: 4,
      total: 260000,
      createdAt: "2023-08-14T14:50:00Z",
    },
    {
      id: "372dd8d0-95f4-4d52-93e3-67d2715d7e9f",
      title: "Lecture 14",
      date: "2023-10-08T15:00:00Z",
      location: "City D",
      quantity: 1,
      total: 105000,
      createdAt: "2023-07-30T16:05:00Z",
    },
    {
      id: "85dbd8ab-634d-470f-b2a6-502d3eb21fc1",
      title: "Event 15",
      date: "2023-09-22T12:00:00Z",
      location: "City E",
      quantity: 5,
      total: 280000,
      createdAt: "2023-08-04T11:10:00Z",
    },
    {
      id: "2b4d8a91-70a1-4ef5-a5d6-434e33d76a5d",
      title: "Conference 16",
      date: "2023-10-12T09:45:00Z",
      location: "City F",
      quantity: 3,
      total: 195000,
      createdAt: "2023-07-10T19:25:00Z",
    },
    {
      id: "a1e520a0-cd5b-4269-91f9-066b88e8e297",
      title: "Workshop 17",
      date: "2023-09-26T11:15:00Z",
      location: "City G",
      quantity: 2,
      total: 145000,
      createdAt: "2023-08-06T10:35:00Z",
    },
    {
      id: "f4f54d6a-5d3b-44f3-97f1-1e51ab28c46c",
      title: "Seminar 18",
      date: "2023-10-15T14:30:00Z",
      location: "City H",
      quantity: 4,
      total: 240000,
      createdAt: "2023-07-20T15:15:00Z",
    },
    {
      id: "8e142703-0cc0-4840-9bfc-88e6f8037e34",
      title: "Exhibition 19",
      date: "2023-09-29T10:00:00Z",
      location: "City I",
      quantity: 1,
      total: 110000,
      createdAt: "2023-08-12T12:00:00Z",
    },
    {
      id: "8e9b5be7-3a8a-44e2-8c0c-c2b68af12e71",
      title: "Symposium 20",
      date: "2023-10-18T13:15:00Z",
      location: "City J",
      quantity: 5,
      total: 275000,
      createdAt: "2023-08-01T16:40:00Z",
    },
  ];

  // Colums definition
  const columns: ColumnDef<Order>[] = [
    {
      accessorKey: "id",
      header: "Transaction ID",
    },
    {
      accessorKey: "title",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Title" />;
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
      accessorKey: "quantity",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Quantity" />;
      },
    },
    {
      accessorKey: "total",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Total" />;
      },
      cell: ({ row }) => {
        const amount = getCurrencyIDR(row.original.total);
        return <span>{amount}</span>;
      },
    },
    {
      accessorKey: "createdAt",
      header: ({ column }) => {
        return (
          <DataTableColumnHeader column={column} title="Transaction Date" />
        );
      },
      cell: ({ row }) => {
        const date = new Date(row.original.createdAt);

        return <span>{getFormattedDate(date)}</span>;
      },
    },
  ];

  // Input filter definition (zero or one input search only)
  const inputFilter: InputFilter = {
    columnId: "title",
    placeholder: "Filter by title...",
  };

  return (
    <DataTable columns={columns} data={orders} inputFilter={inputFilter} />
  );
};

export default MyOrdersTable;
