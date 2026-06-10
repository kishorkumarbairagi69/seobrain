"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarItems } from "@/components/navigation/sidebarItems";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-zinc-800 bg-zinc-950 text-white p-6">

      <h1 className="text-2xl font-bold text-yellow-400">
        SEO Brain Pro
      </h1>

      <div className="mt-10 space-y-8">

        {sidebarItems.map((section) => (
          <div key={section.section}>

            <h2 className="text-xs text-zinc-500 mb-3 uppercase">
              {section.section}
            </h2>

            <div className="space-y-2">

              {section.items.map((item) => {
                const Icon = item.icon;
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all
                    ${
                      active
                        ? "bg-yellow-400 text-black font-medium"
                        : "text-zinc-300 hover:bg-zinc-900 hover:text-white"
                    }`}
                  >
                    <Icon className="h-4 w-4" />

                    <span>{item.label}</span>
                  </Link>
                );
              })}

            </div>

          </div>
        ))}

      </div>

    </aside>
  );
}