
import { ChevronRight } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description?: string;
  lastModified: string;
  starred?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  lastModified,
  starred,
}) => {
  return (
    <div className={cn(
      "group bg-white shadow-sm border border-gray-100 rounded-xl p-6 flex flex-col justify-between transition hover:shadow-md focus-within:shadow-md cursor-pointer",
      "focus-visible:ring-2 focus-visible:ring-blue-300"
    )} tabIndex={0}>
      <div className="flex items-center gap-2 mb-4">
        <div className="bg-blue-100 text-blue-600 rounded-lg p-2 mr-2">
          <ChevronRight size={24} />
        </div>
        <h3 className="font-semibold text-lg text-gray-800 group-hover:text-blue-700 transition">
          {title}
        </h3>
        {starred && (
          <span className="ml-2 text-yellow-400 font-bold text-lg" title="Starred">
            ★
          </span>
        )}
      </div>
      <div className="flex-1">
        <p className="text-gray-500 text-sm mb-2 line-clamp-2">{description}</p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <span className="text-xs text-gray-400">{lastModified}</span>
        <button className="rounded-full p-2 hover:bg-gray-100 text-gray-400 hover:text-blue-600">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};
