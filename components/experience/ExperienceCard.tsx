"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  Calendar,
  MapPin,
  Award,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";
import type { Experience } from "@/types/experience";
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetHeader } from "@/components/ui";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({
  experience,
  index,
}: ExperienceCardProps) {
  return (
    <Sheet>
      <SheetTrigger render={
        <button className="group w-full text-left rounded-3xl border border-white/10 bg-neutral-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer focus:outline-none" />
      }>
        <div className="flex flex-col md:flex-row gap-5 items-start">
          {/* Logo */}
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white p-2.5 shadow-md">
            <Image
              src={experience.logo}
              alt={experience.company}
              width={40}
              height={40}
              className="object-contain"
            />
          </div>

          {/* Details */}
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start gap-2">
              <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300 truncate">
                {experience.role}
              </h3>
            </div>
            
            <p className="text-blue-400 font-medium text-sm mt-0.5">
              {experience.company}
            </p>

            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Calendar size={13} />
                {experience.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={13} />
                {experience.location}
              </span>
            </div>

            {/* Top 3 technologies */}
            {experience.technologies && experience.technologies.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {experience.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-blue-500/5 px-2.5 py-1 text-[11px] font-medium text-blue-300 border border-blue-500/10"
                  >
                    {tech}
                  </span>
                ))}
                {experience.technologies.length > 3 && (
                  <span className="text-[11px] text-slate-500 flex items-center">
                    +{experience.technologies.length - 3} more
                  </span>
                )}
              </div>
            )}
          </div>

          <div className="self-center hidden md:block text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300">
            <ChevronRight size={20} />
          </div>
        </div>
      </SheetTrigger>

      <SheetContent className="w-full max-w-lg p-8 bg-neutral-950 border-l border-white/10 text-white overflow-y-auto z-50 flex flex-col gap-6 h-full shadow-2xl">
        <SheetHeader className="border-b border-white/10 pb-6">
          <div className="flex items-start gap-5">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-white p-2 shadow-lg">
              <Image
                src={experience.logo}
                alt={experience.company}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div>
              <SheetTitle className="text-2xl font-extrabold text-white">
                {experience.role}
              </SheetTitle>
              <p className="text-lg font-bold text-blue-400 mt-1">
                {experience.company}
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <Briefcase size={16} />
              {experience.type ?? "Experience"}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              {experience.duration}
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={16} />
              {experience.location}
            </span>
          </div>
        </SheetHeader>

        {/* Scrollable details container */}
        <div className="flex-grow overflow-y-auto space-y-6 pr-2">
          {/* Description list */}
          <div>
            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
              Responsibilities & Scope
            </h4>
            <div className="space-y-4">
              {experience.description.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-2.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  <p className="text-[14px] leading-6 text-slate-200">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          {experience.achievements && experience.achievements.length > 0 && (
            <div className="border-t border-white/10 pt-6">
              <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                <Award size={16} className="text-yellow-400" />
                Key Achievements
              </h4>
              <ul className="space-y-3">
                {experience.achievements.map((achievement) => (
                  <li key={achievement} className="flex items-start gap-3 text-slate-200">
                    <span className="text-green-400 text-sm mt-0.5">✔</span>
                    <span className="text-[14px] leading-6">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          {experience.technologies && experience.technologies.length > 0 && (
            <div className="border-t border-white/10 pt-6">
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3.5 py-1.5 text-xs font-medium text-cyan-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        {experience.website && (
          <div className="border-t border-white/10 pt-6 mt-auto">
            <Link
              href={experience.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-4 text-sm font-semibold text-white transition hover:bg-blue-700 shadow-lg shadow-blue-500/20"
            >
              Visit Company Website
              <ArrowUpRight size={18} />
            </Link>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}