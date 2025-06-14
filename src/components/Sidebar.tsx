
import {
  Menu,
  LayoutDashboard,
  ChevronRight,
  ChevronLeft,
  Search,
  CircleArrowRight,
  CircleArrowUp,
} from "lucide-react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Projects",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "Models",
    icon: CircleArrowUp,
    href: "#",
    disabled: true,
  },
  {
    label: "Datasets",
    icon: CircleArrowRight,
    href: "#",
    disabled: true,
  },
];

export const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "flex flex-col bg-white border-r border-gray-200 h-screen relative z-20 group transition-all duration-300",
        collapsed ? "w-16" : "w-60"
      )}
    >
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <img
            src="https://ssl.gstatic.com/aia/u/branding/favicon.svg"
            alt="Logo"
            className={cn("h-8 w-8", collapsed && "mx-auto")}
          />
          {!collapsed && (
            <span className="font-semibold text-lg tracking-tight text-gray-800 hidden md:block">
              AI Studio
            </span>
          )}
        </div>
        <button
          className="group rounded-full p-2 hover:bg-gray-100 transition-all"
          onClick={() => setCollapsed((c) => !c)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? (
            <ChevronRight size={20} className="text-gray-500" />
          ) : (
            <ChevronLeft size={20} className="text-gray-500" />
          )}
        </button>
      </div>
      <nav className="flex-1 flex flex-col gap-2 mt-4">
        {navItems.map(({ label, icon: Icon, href, disabled }) => (
          <a
            key={label}
            href={href}
            className={cn(
              "flex items-center gap-3 px-4 py-2 rounded-lg mx-2 font-medium transition focus:bg-blue-50 hover:bg-blue-50 text-gray-700",
              collapsed && "justify-center px-0",
              disabled && "opacity-40 pointer-events-none"
            )}
            tabIndex={disabled ? -1 : 0}
          >
            <Icon size={22} className="text-gray-500" />
            {!collapsed && <span className="truncate">{label}</span>}
          </a>
        ))}
        <div className="border-t border-gray-100 my-3" />
        <a
          href="#"
          className={cn(
            "flex items-center gap-3 px-4 py-2 mx-2 rounded-lg font-medium text-gray-600 hover:bg-gray-50 transition",
            collapsed && "justify-center px-0"
          )}
        >
          <Search size={20} className="text-gray-400" />
          {!collapsed && <span>Search</span>}
        </a>
      </nav>
      <div className="pb-5 px-2 mt-auto">
        <div
          className={cn(
            "flex items-center gap-3 p-2 rounded-lg bg-gray-100",
            collapsed && "justify-center"
          )}
        >
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User avatar"
            className="h-8 w-8 rounded-full"
          />
          {!collapsed && (
            <div className="flex flex-col">
              <span className="text-gray-900 text-sm font-medium">
                Alex Doe
              </span>
              <span className="text-gray-500 text-xs">alex@dummy.com</span>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
