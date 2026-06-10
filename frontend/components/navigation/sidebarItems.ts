import {
  LayoutDashboard,
  Search,
  Brain,
  BarChart3,
  LineChart,
  Globe,
  Activity,
  Gauge,
  Link2,
  FileText,
  Settings,
} from "lucide-react";

export const sidebarItems = [
  {
    section: "Dashboard",
    items: [
      {
        label: "Overview",
        icon: LayoutDashboard,
        href: "/dashboard",
      },
    ],
  },

  {
    section: "Modules",
    items: [
      {
        label: "Page Traffic",
        icon: Search,
        href: "/page-traffic",
      },
      {
        label: "SEO Brain",
        icon: Brain,
        href: "/seo-brain",
      },
      {
        label: "Category Monitor",
        icon: BarChart3,
        href: "/category-monitor",
      },
      {
        label: "Weekly Report",
        icon: LineChart,
        href: "/weekly-report",
      },
      {
        label: "GA4 Analytics",
        icon: Activity,
        href: "/ga4",
      },
      {
        label: "GMB Tools",
        icon: Globe,
        href: "/gmb",
      },
      {
        label: "PageSpeed",
        icon: Gauge,
        href: "/pagespeed",
      },
      {
        label: "URL Inspection",
        icon: Link2,
        href: "/url-inspection",
      },
    ],
  },

  {
    section: "System",
    items: [
      {
        label: "Jobs",
        icon: FileText,
        href: "/jobs",
      },
      {
        label: "Settings",
        icon: Settings,
        href: "/settings",
      },
    ],
  },
];