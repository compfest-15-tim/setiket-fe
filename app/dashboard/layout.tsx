import DashboardSidebar from "@/components/dashboard-sidebar";
import { getServerSession } from "@/lib/auth-server";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  // Dashboard can only be accessed when user is authenticated
  if (!session) {
    redirect("/sign-in");
  }

  // GET VERIFIED STATUS

  return (
    <main className="flex flex-auto flex-col gap-6 bg-gray-100 p-5 md:p-12 lg:flex-row">
      <DashboardSidebar session={session} />
      {children}
    </main>
  );
}
