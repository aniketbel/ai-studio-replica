
import React from "react";
import { Button } from "@/components/Button";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const features = [
  {
    title: "Build AI Apps Instantly",
    desc: "Start new projects with Google models, no setup required.",
  },
  {
    title: "Visual Canvas",
    desc: "Design workflows visually with drag-and-drop blocks.",
  },
  {
    title: "Collaborate & Share",
    desc: "Invite teammates and iterate together in real-time.",
  },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 flex flex-col">
      <nav className="flex justify-between items-center px-8 h-16 border-b border-gray-100 shadow-sm bg-white">
        <div className="flex items-center gap-2">
          <img
            src="https://ssl.gstatic.com/aia/u/branding/favicon.svg"
            alt="logo"
            className="h-8 w-8"
          />
          <span className="font-semibold text-lg text-gray-800">AI Studio</span>
        </div>
        <Button variant="secondary" size="sm" onClick={() => navigate("/dashboard")}>
          Go to Dashboard
        </Button>
      </nav>

      <main className="flex-1 flex flex-col items-center justify-center px-8 pt-12 pb-10">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-5 tracking-tight">
            Google AI Studio <span className="text-blue-600">Clone</span>
          </h1>
          <p className="text-lg text-gray-700 mb-9">
            Experiment with generative AI, build and share projects—all in your browser.
          </p>
          <Button
            size="lg"
            className="w-full max-w-xs mx-auto group"
            onClick={() => navigate("/dashboard")}
          >
            Get started
            <ChevronRight
              className="ml-2 transition-transform group-hover:translate-x-1"
              size={22}
            />
          </Button>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-7 w-full max-w-4xl">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {f.title}
              </h3>
              <p className="text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <footer className="text-center text-gray-400 text-xs py-6 border-t border-gray-100">
        <span>
          Not affiliated with Google. &copy; {new Date().getFullYear()} AI Studio Clone.
        </span>
      </footer>
    </div>
  );
};

export default Index;
