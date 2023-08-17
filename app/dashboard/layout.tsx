import DashboardSidebar from "@/components/dashboard-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-auto flex-col gap-6 bg-gray-100 px-5 lg:flex-row md:px-12 lg:px-16">
      <DashboardSidebar />
      {children}
    </main>
  );
}
