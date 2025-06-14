
import React from "react";
import { Menu } from "lucide-react";
import { Button } from "./Button";

export const Topbar: React.FC = () => {
  return (
    <header className="flex items-center h-16 px-8 border-b border-gray-200 bg-white justify-between z-10 ">
      <div className="flex items-center gap-4">
        <span className="text-lg font-medium text-gray-800 tracking-tight">
          Dashboard
        </span>
      </div>
      <div className="flex items-center gap-3">
        <Button
          variant="secondary"
          size="sm"
          className="hidden md:inline-flex"
        >
          Feedback
        </Button>
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Avatar"
          className="h-9 w-9 rounded-full border border-gray-200 shadow"
        />
      </div>
    </header>
  );
};
