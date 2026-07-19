"use client";

import { portfolio } from "@/data/portfolio";
import { TypeAnimation } from "react-type-animation";

export default function HeroContent() {
  return (
    <div className="space-y-10">

      {/* Greeting */}

      <div className="space-y-5">

        <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-5 py-2">

          <span className="h-3 w-3 animate-pulse rounded-full bg-green-500" />

          <span className="text-sm font-semibold tracking-wide text-green-400">
            OPEN TO WORK
          </span>

        </div>

        <p className="text-xl font-medium text-blue-400">
          👋 Hello, I'm
        </p>

      </div>

      {/* Name */}

      <h1 className="gradient-text text-6xl font-black leading-[1.05] md:text-7xl xl:text-8xl">
        {portfolio.name}
      </h1>

      {/* Founder */}

      <div className="space-y-3">

        <h2 className="text-3xl font-bold text-white">
          Founder • {portfolio.brand}
        </h2>

        <TypeAnimation
          sequence={[
            "Artificial Intelligence",
            2000,
            "Robotics",
            2000,
            "Electric Vehicles",
            2000,
            "Embedded Systems",
            2000,
            "Research & Innovation",
            2000,
          ]}
          wrapper="div"
          speed={50}
          repeat={Infinity}
          className="text-2xl font-semibold text-slate-300"
        />

      </div>

      {/* Description */}

      <p className="max-w-2xl text-xl leading-9 text-slate-400 text-justify">
        {portfolio.bio}
      </p>

    </div>
  );
}