import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";
import StatsCard from "@/components/dashboard/StatsCard";
import RecentActivity from "@/components/dashboard/RecentActivity";
import QuickActions from "@/components/dashboard/QuickActions";

import {
  FileText,
  PlayCircle,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-black">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        <Navbar />

        <main className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white">
              Dashboard
            </h1>

            <p className="mt-2 text-zinc-400">
              Welcome to SEO Brain Pro
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <StatsCard
              title="Total Jobs"
              value="128"
              icon={FileText}
              badge="+12%"
            />

            <StatsCard
              title="Running Jobs"
              value="12"
              icon={PlayCircle}
              badge="Live"
            />

            <StatsCard
              title="Completed Jobs"
              value="110"
              icon={CheckCircle2}
              badge="+8%"
            />

            <StatsCard
              title="Failed Jobs"
              value="6"
              icon={AlertTriangle}
              badge="Attention"
            />
          </div>

          {/* Bottom Section */}
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <QuickActions />

            <RecentActivity />
          </div>
        </main>
      </div>
    </div>
  );
}