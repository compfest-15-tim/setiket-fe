import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import RegisteredUsersTable from "@/app/dashboard/registered-users/registered-users-table";

export const metadata: Metadata = {
  title: "Registered Users List | SeTiket",
};
export default function RegisteredUsers() {
  return (
    <section className="w-full">
      <Card>
        <CardHeader>
          <CardTitle>Registered Users</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="pt-6">
          <RegisteredUsersTable />
        </CardContent>
      </Card>
    </section>
  );
}
