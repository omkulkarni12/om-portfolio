"use client";

import { experiences } from "@/data/experience";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-24"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute right-20 bottom-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">


        {/* Timeline */}
        <div className="relative">
          {/* Center Line (Desktop) */}
          <div className="absolute left-1/2 hidden h-full w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-500 via-cyan-400 to-transparent lg:block" />

          <div className="space-y-20">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`flex w-full ${
                  index % 2 === 0
                    ? "lg:justify-start"
                    : "lg:justify-end"
                }`}
              >
                <div className="w-full lg:w-[48%]">
                  <ExperienceCard
                    experience={experience}
                    index={index}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}