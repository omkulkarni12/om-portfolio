"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer";
import { 
  ChevronDown, 
  Sparkles, 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  X, 
  BookOpen, 
  Activity, 
  Trophy, 
  GraduationCap, 
  Wrench, 
  Flame 
} from "lucide-react";

export default function StoryPage() {
  const [showTimeline, setShowTimeline] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [showLightbox, setShowLightbox] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  const handleExplore = () => {
    setShowTimeline(true);
    setTimeout(() => {
      timelineRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
  };

  const chapters = [
    {
      id: "student",
      label: "Student",
      emoji: "😊",
      icon: <GraduationCap size={14} className="text-emerald-400" />,
      desc: "Academic roots & curiosity",
      posClass: "md:absolute md:top-2 md:left-1/2 md:-translate-x-1/2",
      styleFilter: "grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:border-emerald-500/50 border-emerald-500/20",
      image: "/images/awards/techgium-piping.png",
    },
    {
      id: "engineer",
      label: "Engineer",
      emoji: "😄",
      icon: <Wrench size={14} className="text-blue-400" />,
      desc: "B.Tech Electrical & GET",
      posClass: "md:absolute md:top-1/3 md:left-4 lg:left-12",
      styleFilter: "grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:border-blue-500/50 border-blue-500/20",
      image: "/images/projects/ev-chassis.jpg",
    },
    {
      id: "winner",
      label: "Award Winner",
      emoji: "😀",
      icon: <Trophy size={14} className="text-amber-400" />,
      desc: "Techgium Top 40 & MET 1st",
      posClass: "md:absolute md:top-1/3 md:right-4 lg:right-12",
      styleFilter: "grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:border-amber-500/50 border-amber-500/20",
      image: "/images/awards/met-entusia.jpg",
    },
    {
      id: "setback",
      label: "Difficult Phase",
      emoji: "😔",
      icon: <Activity size={14} className="text-red-400" />,
      desc: "Medical advice & withdrawal",
      posClass: "md:absolute md:bottom-2 md:left-[15%] lg:left-[22%]",
      styleFilter: "grayscale blur-[0.3px] opacity-50 hover:grayscale-0 hover:opacity-100 hover:blur-none hover:border-red-500/50 border-red-500/20",
      image: "/images/awards/gokhale-runnerup.jpg",
    },
    {
      id: "stronger",
      label: "Stronger Than Ever",
      emoji: "💪",
      icon: <Flame size={14} className="text-orange-400" />,
      desc: "Founding Raghava & Innovating",
      posClass: "md:absolute md:bottom-2 md:right-[15%] lg:right-[22%]",
      styleFilter: "opacity-75 hover:opacity-100 border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.2)] hover:border-orange-400",
      image: "/images/awards/management-recognition.jpg",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white flex flex-col justify-between overflow-hidden relative">
        
        {/* Animated Background Mesh & Grids */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-25" />

        {/* Intro Cinematic Section */}
        <section className="flex-1 flex flex-col items-center justify-center pt-32 pb-16 px-6 text-center min-h-[95vh] relative z-10">
          
          {/* Glowing Ambient Particles */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[130px] pointer-events-none rounded-full" />
          <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-indigo-500/5 blur-[110px] pointer-events-none rounded-full" />

          {/* Cinematic Avatar Cluster Container */}
          <div className="relative w-full max-w-4xl min-h-[450px] md:h-[480px] flex flex-col md:block items-center justify-center mb-6 mt-4">
            
            {/* Dashed Connecting Track / Orbit Lines for Desktop */}
            <div className="absolute inset-20 border border-white/5 rounded-full pointer-events-none hidden md:block" />
            <div className="absolute inset-36 border border-dashed border-blue-500/10 rounded-full pointer-events-none hidden md:block animate-spin-slow" />

            {/* Center Main Avatar */}
            <div className="relative md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 h-36 w-36 md:h-44 md:w-44 rounded-full overflow-hidden border-[6px] border-blue-500/15 bg-slate-900 shadow-2xl z-20 transition-all duration-500 hover:scale-105 hover:border-blue-500/40 flex-shrink-0">
              <Image
                src="/images/awards/management-recognition.jpg"
                alt="Om Rajendra Kulkarni"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
            </div>

            {/* Pulsing Ring behind central avatar */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-38 w-38 md:h-48 md:w-48 rounded-full border-2 border-blue-500/20 animate-ping z-10 opacity-25 hidden md:block" />

            {/* Floating Faded Chapter Avatars (Stacked on mobile/tablet, orbited on desktop) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:block gap-4 w-full px-4 md:px-0 z-20 mt-10 md:mt-0">
              {chapters.map((chapter) => (
                <div
                  key={chapter.id}
                  className={`flex items-center gap-3 bg-slate-900/80 border rounded-2xl p-3 backdrop-blur-md transition-all duration-500 cursor-pointer ${chapter.posClass} ${chapter.styleFilter} w-full md:w-[220px]`}
                >
                  <div className="relative h-12 w-12 rounded-xl overflow-hidden flex-shrink-0 border border-white/10 bg-slate-950">
                    <Image
                      src={chapter.image}
                      alt={chapter.label}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-950/20" />
                    <span className="absolute -bottom-1.5 -right-1 text-xs bg-slate-950/90 rounded-md px-1 py-0.5">{chapter.emoji}</span>
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-black text-slate-100 flex items-center gap-1">
                      {chapter.icon}
                      {chapter.label}
                    </p>
                    <p className="text-[10px] text-slate-300 font-medium mt-0.5 leading-tight">{chapter.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Headline & Subtitles */}
          <div className="space-y-4 max-w-2xl mb-8 relative z-10">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight gradient-text">
              Beyond the Resume
            </h1>
            <p className="text-lg md:text-xl text-slate-400 font-medium">
              The journey behind the engineer.
            </p>
          </div>

          {/* Film quotes / subtitles */}
          <div className="space-y-3 max-w-xl mb-12 text-slate-300 md:text-lg border-y border-white/5 py-6 w-full relative z-10">
            <p className="font-sans leading-relaxed">Every project has a purpose.</p>
            <p className="font-sans leading-relaxed">Every challenge became a lesson.</p>
            <p className="font-sans leading-relaxed text-blue-400 font-medium">Every setback shaped the engineer I am today.</p>
          </div>

          {/* Explore Button */}
          <button
            onClick={handleExplore}
            className="group flex flex-col items-center gap-2 cursor-pointer focus:outline-none relative z-10"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-500 hover:bg-blue-600 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:scale-[1.03]">
              <Sparkles size={14} className="animate-pulse" />
              Explore My Journey
            </span>
            <ChevronDown size={20} className="text-slate-500 group-hover:text-white transition-colors animate-bounce mt-2" />
          </button>
        </section>

        {/* Timeline Graphic Render Section */}
        {showTimeline && (
          <section 
            ref={timelineRef} 
            className="w-full bg-slate-900/60 border-t border-white/10 py-24 px-4 md:px-8 text-center backdrop-blur-md relative z-10"
          >
            <div className="container mx-auto max-w-5xl">
              
              {/* Header */}
              <div className="mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-left">
                <div>
                  <h2 className="text-3xl font-black text-white flex items-center gap-2">
                    <BookOpen className="text-blue-400" />
                    My Story Timeline
                  </h2>
                  <p className="text-sm text-slate-400 mt-1">Click the expand button to open the timeline in HD fullscreen.</p>
                </div>

                <div className="flex gap-2">
                  {/* Fullscreen Lightbox Trigger */}
                  <button
                    onClick={() => setShowLightbox(true)}
                    className="flex items-center gap-1.5 rounded-full bg-blue-500 hover:bg-blue-600 px-4 py-2 text-xs font-bold text-white transition-all shadow-[0_0_12px_rgba(59,130,246,0.2)] cursor-pointer"
                  >
                    <Maximize2 size={13} />
                    Open HD Fullscreen
                  </button>

                  <button
                    onClick={() => setIsZoomed(!isZoomed)}
                    className="flex items-center gap-1.5 rounded-full border border-white/10 bg-slate-950/80 px-4 py-2 text-xs font-bold text-slate-300 hover:text-white hover:border-white/20 transition-all cursor-pointer"
                  >
                    {isZoomed ? <ZoomOut size={13} /> : <ZoomIn size={13} />}
                    {isZoomed ? "Fit Width" : "Zoom Image"}
                  </button>
                </div>
              </div>

              {/* Graphic Display Box */}
              <div className="relative border border-white/10 rounded-[32px] overflow-hidden bg-slate-950 p-6 shadow-2xl transition-all duration-500">
                <div 
                  className={`w-full overflow-x-auto overflow-y-hidden ${isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"}`} 
                  onClick={() => setIsZoomed(!isZoomed)}
                >
                  <div 
                    className="relative transition-all duration-500 mx-auto"
                    style={{ 
                      width: isZoomed ? "1300px" : "100%",
                      minHeight: "450px"
                    }}
                  >
                    <img
                      src="/images/story-timeline.jpg"
                      alt="Om Kulkarni Engineering Story Timeline"
                      className="w-full h-auto rounded-2xl object-contain border border-white/5 shadow-inner"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 text-slate-400 text-xs flex justify-between items-center px-2">
                <p>* Toggle "Open HD Fullscreen" above to inspect details in maximum resolution.</p>
                <Link href="/" className="text-blue-400 hover:underline">
                  Back to homepage
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* HD Lightbox Overlay Modal */}
        {showLightbox && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md animate-fade-in">
            {/* Header info bar */}
            <div className="absolute top-0 left-0 right-0 p-5 bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between text-white z-10">
              <div>
                <h3 className="font-bold text-lg">My Story Timeline (High Definition)</h3>
                <p className="text-xs text-slate-400 mt-0.5">Use scrollbar or pinch to read details.</p>
              </div>
              
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowLightbox(false)}
                  className="rounded-full bg-white/10 hover:bg-white/20 p-2 text-white transition-colors cursor-pointer"
                  title="Close Lightbox"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Scrollable image container */}
            <div className="w-full h-full overflow-auto flex items-start justify-center pt-24 pb-8 scrollbar-thin">
              <div className="max-w-5xl w-full min-w-[900px] px-4">
                <img
                  src="/images/story-timeline.jpg"
                  alt="Om Kulkarni Engineering Story Timeline HD"
                  className="w-full h-auto rounded-3xl border border-white/10 shadow-2xl object-contain"
                />
              </div>
            </div>
          </div>
        )}

      </main>

      <Footer />
    </>
  );
}
