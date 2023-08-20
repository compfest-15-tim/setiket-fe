import DashboardSidebar from "@/components/dashboard-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-auto flex-col gap-6 bg-gray-100 p-5 md:p-12 lg:flex-row">
      <DashboardSidebar />
      {children}
    </main>
  );
}
