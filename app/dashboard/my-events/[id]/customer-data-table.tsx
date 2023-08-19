"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/data-table";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { InputFilter } from "@/types/data-table";
import { getCurrencyIDR } from "@/lib/utils";

export interface Transaction {
  id: string;
  fullName: string;
  date: string;
  quantity: number;
  amount: number;
}

// Test Data
const data: Transaction[] = [
  {
    id: "c394f6f1-9419-4e2d-ae58-8eaa4e8d50d1",
    fullName: "John Doe",
    date: "2023-08-19T10:30:00Z",
    quantity: 5,
    amount: 100000,
  },
  {
    id: "d95c9979-14b5-42a5-91de-eacde8f20079",
    fullName: "Jane Smith",
    date: "2023-08-18T15:45:00Z",
    quantity: 3,
    amount: 70000,
  },
  {
    id: "6a8e5b4f-2b98-45ae-bc7e-4f1347a2d6b2",
    fullName: "Michael Johnson",
    date: "2023-08-17T09:00:00Z",
    quantity: 8,
    amount: 100005,
  },
  {
    id: "0f3c968a-45c5-42e6-8a95-0c09584a84e9",
    fullName: "Emily Williams",
    date: "2023-08-16T14:20:00Z",
    quantity: 2,
    amount: 40000,
  },
  {
    id: "23db68c6-62bf-49e3-bff7-ba191e23f289",
    fullName: "Daniel Brown",
    date: "2023-08-15T08:10:00Z",
    quantity: 6,
    amount: 100002,
  },
  {
    id: "7248b6fe-7ea6-4dd5-a622-48567fe5c8b5",
    fullName: "Olivia Taylor",
    date: "2023-08-14T17:55:00Z",
    quantity: 4,
    amount: 80000,
  },
  {
    id: "acde56b1-fa34-4a89-9e0e-2c2c8c170f82",
    fullName: "William Anderson",
    date: "2023-08-13T12:40:00Z",
    quantity: 9,
    amount: 100008,
  },
  {
    id: "b31e5c7d-07e1-4f2f-a4e9-86250e96b7bb",
    fullName: "Sophia Martinez",
    date: "2023-08-12T19:25:00Z",
    quantity: 7,
    amount: 100004,
  },
  {
    id: "c3f8a7e5-1283-4a86-98da-7b8aefb9b23d",
    fullName: "James Jackson",
    date: "2023-08-11T23:15:00Z",
    quantity: 5,
    amount: 100000,
  },
  {
    id: "e5ff55c2-9142-406d-b15f-7f3df57a0a0d",
    fullName: "Isabella Clark",
    date: "2023-08-10T06:50:00Z",
    quantity: 3,
    amount: 70000,
  },
  {
    id: "a58778f6-8133-4682-b3fe-72bfa19a1bf9",
    fullName: "Ethan White",
    date: "2023-08-09T15:30:00Z",
    quantity: 8,
    amount: 100005,
  },
  {
    id: "b3026597-dbc3-46d3-912d-cc99b7a116c0",
    fullName: "Mia Rodriguez",
    date: "2023-08-08T08:20:00Z",
    quantity: 2,
    amount: 40000,
  },
  {
    id: "ea3b20a3-c1c7-4b15-bb1f-5dbf078f779c",
    fullName: "Alexander Lee",
    date: "2023-08-07T14:15:00Z",
    quantity: 6,
    amount: 100002,
  },
  {
    id: "eb021373-2d84-4c3b-8e0e-ebde6a3e68b0",
    fullName: "Ava Harris",
    date: "2023-08-06T19:05:00Z",
    quantity: 4,
    amount: 80000,
  },
  {
    id: "319c8ad6-458c-4d3e-bdef-1e1e8d663dda",
    fullName: "Liam Martin",
    date: "2023-08-05T10:55:00Z",
    quantity: 9,
    amount: 100008,
  },
  {
    id: "92d4c4c3-69c9-4b4f-8c92-4b18a1d34ce0",
    fullName: "Scarlett Walker",
    date: "2023-08-04T17:45:00Z",
    quantity: 7,
    amount: 100004,
  },
  {
    id: "1a72e720-3d54-47e3-89a9-68d99b315045",
    fullName: "Benjamin Turner",
    date: "2023-08-03T22:35:00Z",
    quantity: 5,
    amount: 100000,
  },
  {
    id: "acfb59dd-5950-4cd1-9a00-4919b288c07e",
    fullName: "Nora Martinez",
    date: "2023-08-02T05:25:00Z",
    quantity: 3,
    amount: 70000,
  },
  {
    id: "1f54c4c8-eb0d-4b46-8b6f-e3e2f41f00ac",
    fullName: "Logan Adams",
    date: "2023-08-01T13:15:00Z",
    quantity: 8,
    amount: 100005,
  },
  {
    id: "13d9c77d-45b5-4e35-9dc7-9138b3ee4e89",
    fullName: "Emma Wilson",
    date: "2023-07-31T18:10:00Z",
    quantity: 2,
    amount: 40000,
  },
  {
    id: "16ef90e4-0ac2-48a0-82c4-725c2ef76b45",
    fullName: "Noah Garcia",
    date: "2023-07-30T23:00:00Z",
    quantity: 6,
    amount: 100002,
  },
  {
    id: "f2d336d0-1aa2-44a2-97f3-02eef6da239d",
    fullName: "Aria Brown",
    date: "2023-07-29T05:50:00Z",
    quantity: 4,
    amount: 80000,
  },
  {
    id: "7eac6136-2e4b-46b3-a11a-6a1ec8439a49",
    fullName: "Elijah Smith",
    date: "2023-07-28T12:40:00Z",
    quantity: 9,
    amount: 100008,
  },
  {
    id: "7fe36b74-50ed-4e6c-a34f-33b86590f635",
    fullName: "Luna Johnson",
    date: "2023-07-27T17:30:00Z",
    quantity: 7,
    amount: 100004,
  },
  {
    id: "cfb873b2-0e3b-4dfb-879e-6746f9f1367e",
    fullName: "Carter Williams",
    date: "2023-07-26T22:20:00Z",
    quantity: 5,
    amount: 100000,
  },
  {
    id: "2bfe7d46-c5b6-4c85-aeff-6235d4a84e5d",
    fullName: "Grace Anderson",
    date: "2023-07-25T04:10:00Z",
    quantity: 3,
    amount: 70000,
  },
  {
    id: "6f40b6c3-001d-4567-9e85-d0a29c8c79cc",
    fullName: "Henry Miller",
    date: "2023-07-24T10:00:00Z",
    quantity: 8,
    amount: 100005,
  },
  {
    id: "88299ce1-6522-4b4b-b1fc-eaf0aa7222b4",
    fullName: "Chloe Wilson",
    date: "2023-07-23T15:50:00Z",
    quantity: 2,
    amount: 40000,
  },
  {
    id: "85d04b6c-777a-4d8f-9689-9c0e9d9b1ca7",
    fullName: "William Thompson",
    date: "2023-07-22T21:40:00Z",
    quantity: 6,
    amount: 100002,
  },
  {
    id: "f9be808a-5783-4164-a864-6b4b3c0a3b72",
    fullName: "Avery Harris",
    date: "2023-07-21T03:30:00Z",
    quantity: 4,
    amount: 80000,
  },
  {
    id: "96f25efb-123e-4bf1-b78e-9e25d7e69a53",
    fullName: "Oliver Davis",
    date: "2023-07-20T09:20:00Z",
    quantity: 9,
    amount: 100008,
  },
  {
    id: "c8d3000c-14c2-41ce-a0db-9f14571b4255",
    fullName: "Evelyn Moore",
    date: "2023-07-19T15:10:00Z",
    quantity: 7,
    amount: 100004,
  },
  {
    id: "4c776a3f-4a29-4cb6-8f0d-0b68b62a169b",
    fullName: "Sebastian Jackson",
    date: "2023-07-18T21:00:00Z",
    quantity: 5,
    amount: 100000,
  },
  {
    id: "be409740-81e2-43a2-89e9-6550a3b2894f",
    fullName: "Lily Martinez",
    date: "2023-07-17T02:50:00Z",
    quantity: 3,
    amount: 70000,
  },
  {
    id: "a46d8323-6d59-488d-bb32-9da3fb36426a",
    fullName: "Jackson Thompson",
    date: "2023-07-16T08:40:00Z",
    quantity: 8,
    amount: 100005,
  },
  {
    id: "a9c5bde0-9970-4fb2-9b5e-6d3d14a5f8c3",
    fullName: "Sofia Wilson",
    date: "2023-07-15T14:30:00Z",
    quantity: 2,
    amount: 40000,
  },
  {
    id: "601f1f75-1ac2-4d74-9c9e-8d167da1a5ce",
    fullName: "Aiden Davis",
    date: "2023-07-14T20:20:00Z",
    quantity: 6,
    amount: 100002,
  },
  {
    id: "1b15d4f3-d200-43b4-ba97-15867b10cc29",
    fullName: "Mila Johnson",
    date: "2023-07-13T02:10:00Z",
    quantity: 4,
    amount: 80000,
  },
  {
    id: "36c18f4e-9db7-4e74-92c4-4b68a69b7072",
    fullName: "Lucas Brown",
    date: "2023-07-12T08:00:00Z",
    quantity: 9,
    amount: 100008,
  },
  {
    id: "8857436c-e801-4d11-9dd0-946ba55e8e1b",
    fullName: "Ella Williams",
    date: "2023-07-11T13:50:00Z",
    quantity: 7,
    amount: 100004,
  },
];

// Colums definition
const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "fullName",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Full Name" />;
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Date" />;
    },
    cell: ({ row }) => {
      const date = new Date(row.original.date);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = String(date.getFullYear());

      return <span>{`${day}-${month}-${year}`}</span>;
    },
  },
  {
    accessorKey: "quantity",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Quantity" />;
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Amount" />;
    },
    cell: ({ row }) => {
      const amount = getCurrencyIDR(row.original.amount);
      return <span>{amount}</span>;
    },
  },
];

// Input filter definition (zero or one input search only)
const inputFilter: InputFilter = {
  columnId: "fullName",
  placeholder: "Filter by full name...",
};

const CustomerDataTable = () => {
  return <DataTable columns={columns} data={data} inputFilter={inputFilter} />;
};

export default CustomerDataTable;
