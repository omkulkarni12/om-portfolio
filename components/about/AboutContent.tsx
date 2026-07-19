import { portfolio } from "@/data/portfolio";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function AboutContent() {
  return (
    <div className="space-y-8">

      <h3 className="text-4xl font-bold">
        {portfolio.name}
      </h3>

      <p className="leading-9 text-slate-400 text-justify">
        {portfolio.bio}
      </p>

      <div className="pt-4 text-left">
        <Link
          href="/story"
          className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-8 py-3.5 text-sm font-black text-white transition-all duration-300 shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:shadow-[0_0_35px_rgba(99,102,241,0.65)] hover:scale-[1.03] active:scale-[0.98] group overflow-hidden border border-white/20 cursor-pointer"
        >
          {/* Shimmer sweep effect */}
          <span className="absolute inset-0 w-[30%] h-full bg-white/20 skew-x-[-20deg] -translate-x-[150%] transition-transform duration-1000 ease-out group-hover:translate-x-[380%]" />
          
          <Sparkles size={16} className="text-blue-200 animate-pulse" />
          <span>Explore My Journey & Story →</span>
        </Link>
      </div>

      <div className="glass rounded-3xl p-8">

        <h4 className="mb-4 text-2xl font-semibold">
          Mission
        </h4>

        <p className="text-slate-400">
          My goal is to build intelligent systems
          combining Artificial Intelligence,
          Robotics, Electric Vehicles,
          Embedded Systems and Industrial Automation
          to solve real-world engineering problems.
        </p>

      </div>

    </div>
  );
}