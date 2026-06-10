"use client";

import { Bell, Settings } from "lucide-react";

export default function Navbar() {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 18
      ? "Good Afternoon"
      : "Good Evening";

  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="h-20 border-b border-zinc-800 bg-zinc-950 flex items-center justify-between px-8">

      <div>
        <h1 className="text-2xl font-bold text-white">
          {greeting}, Kishor 👋
        </h1>

        <p className="mt-1 text-sm text-zinc-400">
          {date}
        </p>
      </div>

      <div className="flex items-center gap-4">

        <button className="rounded-xl border border-zinc-800 p-3 text-zinc-400 transition hover:bg-zinc-900 hover:text-white">
          <Bell className="h-5 w-5" />
        </button>

        <button className="rounded-xl border border-zinc-800 p-3 text-zinc-400 transition hover:bg-zinc-900 hover:text-white">
          <Settings className="h-5 w-5" />
        </button>

        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-400 font-bold text-black">
          K
        </div>

      </div>
    </header>
  );
}