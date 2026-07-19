"use client";

import * as React from "react";
import { Brain, Code2, Zap, Cpu, Wrench, Cloud } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

interface SkillCardProps {
  category: SkillCategory;
}

const iconMap: Record<string, React.ReactNode> = {
  "Artificial Intelligence": <Brain size={22} className="text-blue-400" />,
  "Programming": <Code2 size={22} className="text-blue-400" />,
  "Electrical Engineering": <Zap size={22} className="text-blue-400" />,
  "Robotics & Embedded": <Cpu size={22} className="text-blue-400" />,
  "CAD & Simulation": <Wrench size={22} className="text-blue-400" />,
  "Cloud & Tools": <Cloud size={22} className="text-blue-400" />,
};

export default function SkillCard({
  category,
}: SkillCardProps) {
  return (
    <div className="glass rounded-3xl border border-white/10 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10">

      <div className="mb-6 flex items-center gap-4">
        {/* Vector Icon Container */}
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-500/20 shadow-md">
          {iconMap[category.title] || <Brain size={22} className="text-blue-400" />}
        </div>

        <h3 className="text-xl font-bold tracking-tight text-white">
          {category.title}
        </h3>
      </div>

      {/* Skills capsule tags */}
      <div className="flex flex-wrap gap-2.5">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-xl border border-white/5 bg-white/[0.02] px-3.5 py-2 text-xs font-semibold text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-300 cursor-default select-none"
          >
            {skill}
          </span>
        ))}
      </div>

    </div>
  );
}