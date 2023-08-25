import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import RegisteredUsersTable from "@/app/dashboard/registered-users/registered-users-table";
import { getServerSession } from "@/lib/auth-server";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Registered Users List | SeTiket",
};
export default async function RegisteredUsers() {
  const session = await getServerSession();

  // Registered Users List page can only be accessed by admin
  if (session && session.user_metadata.role !== "ADMIN") {
    notFound();
  }

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
