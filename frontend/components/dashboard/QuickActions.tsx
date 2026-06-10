import { Button } from "@/components/ui/button";
import {
  Search,
  Brain,
  BarChart3,
  Activity,
} from "lucide-react";

export default function QuickActions() {
  return (
    <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-950 p-6">

      <h2 className="mb-6 text-xl font-semibold text-white">
        Quick Actions
      </h2>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

        <Button className="h-20 justify-start gap-3 bg-zinc-900 hover:bg-zinc-800">
          <Search className="h-5 w-5 text-yellow-400" />
          Run Page Traffic
        </Button>

        <Button className="h-20 justify-start gap-3 bg-zinc-900 hover:bg-zinc-800">
          <Brain className="h-5 w-5 text-yellow-400" />
          Run SEO Brain
        </Button>

        <Button className="h-20 justify-start gap-3 bg-zinc-900 hover:bg-zinc-800">
          <BarChart3 className="h-5 w-5 text-yellow-400" />
          Weekly Report
        </Button>

        <Button className="h-20 justify-start gap-3 bg-zinc-900 hover:bg-zinc-800">
          <Activity className="h-5 w-5 text-yellow-400" />
          GA4 Sync
        </Button>

      </div>
    </div>
  );
}