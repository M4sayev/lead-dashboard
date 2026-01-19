import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 p-6">
        <h1 className="text-fluid-2xl">Lead Dashboard</h1>
      </main>
      <Footer />
    </div>
  );
}
