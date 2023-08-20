"use client";

import {ColumnDef} from "@tanstack/react-table";
import {DataTableColumnHeader} from "@/components/ui/data-table-column-header";
import {Badge} from "@/components/ui/badge";
import {formatDate} from "@/lib/utils";
import {FacetedFilter, InputFilter} from "@/types/data-table";
import {DataTable} from "@/components/ui/data-table";
import {User, PartyPopper, UserCircle2, Check, CheckCircle2, Clock, XCircle} from "lucide-react";

export interface RegisteredUsers {
    id: string;
    email: string;
    full_name: string;
    role: "Customer" | "Admin" | "Event Organizer";
    status: "verified" | "pending" | "rejected" | boolean;
    created_at: string;
}

const users: RegisteredUsers[] = [
    {
        "id": "2f0d36e2-6e42-4baf-bf35-01d0764a29d1",
        "email": "user1@example.com",
        "full_name": "John Doe",
        "role": "Customer",
        "status": "verified",
        "created_at": "2023-08-19T12:30:45Z"
    },
    {
        "id": "f794a841-2955-4d64-8f62-4e07e2d3e82a",
        "email": "user2@example.com",
        "full_name": "Jane Smith",
        "role": "Admin",
        "status": "pending",
        "created_at": "2023-08-18T09:15:30Z"
    },
    {
        "id": "ac8efab9-1f7d-42fe-9a19-0ffce87c3eeb",
        "email": "user3@example.com",
        "full_name": "Michael Johnson",
        "role": "Event Organizer",
        "status": "rejected",
        "created_at": "2023-08-17T16:45:00Z"
    },
    {
        "id": "6a2c9e4d-3801-4f8c-8e6d-81f7836c9b00",
        "email": "user1@example.com",
        "full_name": "John Doe",
        "role": "Customer",
        "status": "verified",
        "created_at": "2023-08-19T10:15:30Z"
    },
    {
        "id": "e5d7ab8c-84e2-432d-b3ab-0aebac9801f9",
        "email": "user2@example.com",
        "full_name": "Jane Smith",
        "role": "Admin",
        "status": "pending",
        "created_at": "2023-08-18T15:45:00Z"
    },
    {
        "id": "319c0aa5-4373-42c5-9a07-9011c8c907b3",
        "email": "user3@example.com",
        "full_name": "Michael Johnson",
        "role": "Event Organizer",
        "status": "rejected",
        "created_at": "2023-08-17T08:30:15Z"
    },
    {
        "id": "8f764e26-7d27-4f18-8e25-6b3b0ab86b01",
        "email": "user1@example.com",
        "full_name": "John Doe",
        "role": "Customer",
        "status": "verified",
        "created_at": "2023-08-19T10:15:30Z"
    },
    {
        "id": "e1c20b1c-aa5d-4e91-88c6-9241ee82972c",
        "email": "user2@example.com",
        "full_name": "Jane Smith",
        "role": "Admin",
        "status": "pending",
        "created_at": "2023-08-18T15:45:00Z"
    },
    {
        "id": "09ac25a6-981e-44c9-98f3-cccd0d5e7d1e",
        "email": "user3@example.com",
        "full_name": "Michael Johnson",
        "role": "Event Organizer",
        "status": "rejected",
        "created_at": "2023-08-17T08:30:15Z"
    },
]

const columns: ColumnDef<RegisteredUsers>[] = [
    {
        accessorKey: "email",
        header: ({column}) => <DataTableColumnHeader column={column} title="Email"/>
    },
    {
        accessorKey: "full_name",
        header: ({column}) => <DataTableColumnHeader column={column} title="Full Name"/>
    },
    {
        accessorKey: "role",
        header: ({column}) => <DataTableColumnHeader column={column} title="Role"/>,
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        }
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({row}) => {
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
            return value.includes(row.getValue(id))
        }
    },
    {
        accessorKey: "created_at",
        header: ({column}) => <DataTableColumnHeader column={column} title="Created at"/>,
        cell: ({row}) => {
            const {day, month, year} = formatDate(row)

            return <span>{`${day}-${month}-${year}`}</span>;
        },
    }
]

const facetedFilters: FacetedFilter[] = [
    {
        columnId: "role",
        title: "Role",
        options: [
            {
                value: "Admin",
                label: "Admin",
                icon: UserCircle2
            },
            {
                value: "Customer",
                label: "Customer",
                icon: User
            },
            {
                value: "Event Organizer",
                label: "Event Organizer",
                icon: PartyPopper
            },
        ]
    },
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
        ]
    }
]

const inputFilter: InputFilter = {
    columnId: "full_name",
    placeholder: "Search by Full Name..."
}

export default function RegisteredUsersTable() {
    return (
        <DataTable
            columns={columns}
            inputFilter={inputFilter}
            data={users}
            facetedFilters={facetedFilters}
        />
    )
}