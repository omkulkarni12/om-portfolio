"use client";

import Image from "next/image";
import { awards } from "@/data/awards";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui";
import { Trophy, Calendar, Sparkles, Cpu, Maximize2 } from "lucide-react";

export default function Award() {
  const featuredAwards = awards.filter((award) => award.featured);

  const categoryColor = {
    Research: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    Competition: "bg-orange-500/10 text-orange-400 border border-orange-500/20",
    Innovation: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    Leadership: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
    Academic: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
    Professional: "bg-pink-500/10 text-pink-400 border border-pink-500/20",
  };

  return (
    <section id="awards" className="section">
      <div className="container-custom">
        <div className="mb-20 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Moments & Accomplishments
          </p>

          <h2 className="gradient-text mt-4 text-5xl font-black">
            Awards & Recognitions Gallery
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            A visual showcase of awards, journal publications, and innovation hackathons 
            reflecting my engineering research and development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredAwards.map((award) => (
            <Dialog key={award.id}>
              <DialogTrigger render={
                <button className="glass group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)] flex flex-col text-left focus:outline-none cursor-pointer" />
              }>
                {/* Photo Container */}
                <div className="relative h-64 w-full overflow-hidden flex-shrink-0">
                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />
                  
                  {/* Category Tag on Image */}
                  <div className="absolute left-5 top-5">
                    <span className={`rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-wider ${categoryColor[award.category]}`}>
                      {award.category}
                    </span>
                  </div>

                  {/* Hover visual cue */}
                  <div className="absolute inset-0 flex items-center justify-center bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-2 rounded-xl bg-slate-950/80 px-4 py-2 text-xs font-semibold text-white border border-white/10 shadow-lg">
                      <Maximize2 size={14} />
                      View Details
                    </div>
                  </div>
                </div>

                {/* Divider Line */}
                <div className="w-full h-px bg-white/10" />

                {/* Details Below the Line */}
                <div className="p-6 w-full flex-grow bg-neutral-900/10 flex flex-col justify-between">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 leading-snug">
                    {award.title}
                  </h3>
                  <div className="mt-3 flex items-center justify-between text-sm text-slate-400">
                    <span className="font-semibold text-blue-400">{award.organization}</span>
                    <span className="flex items-center gap-1">📅 {award.year}</span>
                  </div>
                </div>
              </DialogTrigger>

              {/* Lightbox / Details Modal */}
              <DialogContent className="w-full max-w-xl p-8 bg-neutral-950 border border-white/10 text-white rounded-3xl overflow-y-auto max-h-[90vh] z-50 shadow-2xl flex flex-col gap-6 scrollbar-thin">
                <DialogHeader className="border-b border-white/10 pb-5">
                  <div className="relative h-48 w-full overflow-hidden rounded-2xl border border-white/10 mb-5">
                    <Image
                      src={award.image}
                      alt={award.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <span className={`inline-flex rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-wider mb-3 ${categoryColor[award.category]}`}>
                    {award.category}
                  </span>

                  <DialogTitle className="text-2xl font-black text-white leading-snug">
                    {award.title}
                  </DialogTitle>

                  <p className="text-md font-bold text-blue-400 mt-1">
                    {award.organization}
                  </p>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Date & Year */}
                  <div className="flex gap-6 text-sm text-slate-300 bg-white/[0.02] border border-white/5 p-4 rounded-xl">
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-semibold">Year</p>
                      <p className="mt-1 font-bold text-white flex items-center gap-1.5">
                        <Calendar size={14} className="text-blue-400" />
                        {award.year}
                      </p>
                    </div>
                    <div className="h-8 w-px bg-white/10" />
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-semibold">Event / Date</p>
                      <p className="mt-1 font-bold text-white">{award.date}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Trophy size={14} className="text-yellow-400" />
                      About the Achievement
                    </h4>
                    <DialogDescription className="text-slate-300 text-sm leading-6 flex flex-col gap-3">
                      <span>{award.description}</span>
                      {award.link && (
                        <a
                          href={award.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 self-start text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          View LinkedIn Post →
                        </a>
                      )}
                    </DialogDescription>
                  </div>

                  {/* Key Achievements */}
                  {award.achievements && award.achievements.length > 0 && (
                    <div className="border-t border-white/10 pt-5">
                      <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Sparkles size={14} className="text-blue-400" />
                        Key Highlights
                      </h4>
                      <ul className="space-y-2">
                        {award.achievements.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-slate-300 text-sm">
                            <span className="text-green-400 mt-0.5">✔</span>
                            <span className="leading-6">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  {award.technologies && award.technologies.length > 0 && (
                    <div className="border-t border-white/10 pt-5">
                      <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Cpu size={14} className="text-cyan-400" />
                        Technologies Involved
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {award.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg border border-blue-500/20 bg-blue-500/5 px-3 py-1.5 text-xs text-blue-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
