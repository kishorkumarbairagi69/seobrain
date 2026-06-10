import { CheckCircle2, AlertTriangle } from "lucide-react";

export default function RecentActivity() {
  const activities = [
    {
      icon: CheckCircle2,
      color: "text-green-500",
      message: "Weekly Report Generated",
    },
    {
      icon: CheckCircle2,
      color: "text-green-500",
      message: "SEO Brain Job Completed",
    },
    {
      icon: AlertTriangle,
      color: "text-yellow-500",
      message: "Page Traffic Job Failed",
    },
    {
      icon: CheckCircle2,
      color: "text-green-500",
      message: "GA4 Sync Completed",
    },
  ];

  return (
    <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Recent Activity
      </h2>

      <div className="space-y-5">
        {activities.map((activity, index) => {
          const Icon = activity.icon;

          return (
            <div
              key={index}
              className="flex items-center gap-4 border-b border-zinc-800 pb-4 last:border-0"
            >
              <Icon className={`h-5 w-5 ${activity.color}`} />

              <p className="text-zinc-300">
                {activity.message}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}