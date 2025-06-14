
import React from "react";
import { Sidebar } from "@/components/Sidebar";
import { Topbar } from "@/components/Topbar";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/Button";

const dummyProjects = [
  {
    title: "Chatbot Demo",
    description: "Conversational AI model using Gemma 2.",
    lastModified: "Just now",
    starred: true,
  },
  {
    title: "Text Summarization",
    description: "Summarize news stories into concise snippets.",
    lastModified: "2 days ago",
  },
  {
    title: "Code Interpreter",
    description: "Execute code and get output using Python.",
    lastModified: "1 week ago",
  },
];

const DashboardPage: React.FC = () => {
  return (
    <div className="bg-[#f7fafd] min-h-screen flex">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <Topbar />
        <div className="flex-1 px-6 py-8 max-w-7xl mx-auto w-full">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-2">
            <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">
              Your projects
            </h2>
            <Button size="md" className="shadow" >
              + Create new project
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {/* Dummy project cards */}
            {dummyProjects.map((proj) => (
              <ProjectCard key={proj.title} {...proj} />
            ))}
            {/* Add New Project Card (with dashed border, CTA style) */}
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-blue-300 rounded-xl bg-blue-50 hover:bg-blue-100 transition cursor-pointer min-h-[200px]">
              <span className="text-4xl text-blue-400 mb-2">+</span>
              <span className="font-medium text-blue-700">New Project</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
