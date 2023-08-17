import DashboardSidebar from "@/components/dashboard-sidebar";

export default function Layout({children} : {children: React.ReactNode}) {
  return (
    <main className="flex flex-auto flex-col gap-6 bg-gray-100 px-5 md:px-16 md:flex-row">
      <DashboardSidebar />

      {children}
    </main>
  );
}

