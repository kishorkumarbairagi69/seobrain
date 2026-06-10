import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  badge: string;
}

export default function StatsCard({
  title,
  value,
  icon: Icon,
  badge,
}: StatsCardProps) {
  return (
    <Card className="border-zinc-800 bg-zinc-950 text-white transition hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/10">

      <CardContent className="p-6">

        <div className="flex items-center justify-between">

          <div>
            <p className="text-sm text-zinc-400">
              {title}
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              {value}
            </h2>
          </div>

          <div className="rounded-xl bg-zinc-900 p-3">
            <Icon className="h-5 w-5 text-yellow-400" />
          </div>

        </div>

        <div className="mt-5">
          <Badge>
            {badge}
          </Badge>
        </div>

      </CardContent>

    </Card>
  );
}