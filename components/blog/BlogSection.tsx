"use client";

import Link from "next/link";
import Image from "next/image";
import { posts } from "@/data/posts";
import { ArrowRight, BookOpen, Calendar, Clock } from "lucide-react";

export default function BlogSection() {
  // Take latest 3 featured articles
  const featuredPosts = posts.filter((post) => post.featured).slice(0, 3);

  const categoryColor = {
    Projects: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    Research: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
    "Artificial Intelligence": "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    "Machine Learning": "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20",
    Robotics: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
    Automotive: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
    "Electrical Engineering": "bg-rose-500/10 text-rose-400 border border-rose-500/20",
    Entrepreneurship: "bg-teal-500/10 text-teal-400 border border-teal-500/20",
    Career: "bg-pink-500/10 text-pink-400 border border-pink-500/20",
    "Personal Journey": "bg-orange-500/10 text-orange-400 border border-orange-500/20",
    "Engineering Thoughts": "bg-sky-500/10 text-sky-400 border border-sky-500/20",
    Tutorials: "bg-lime-500/10 text-lime-400 border border-lime-500/20",
  };

  return (
    <section id="innovation-log" className="section py-24">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-20 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Insights & Engineering Notes
          </p>
          <h2 className="gradient-text mt-4 text-5xl font-black">
            The Innovation Log
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Where engineering meets curiosity, research, and innovation. An engineering journal documenting my projects, experiments, failures, and discoveries.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <Link
              key={post.id}
              href={`/innovation-log/${post.slug}`}
              className="glass group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/45 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)] flex flex-col h-full"
            >
              {/* Photo Container */}
              <div className="relative h-56 w-full overflow-hidden flex-shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
                
                {/* Category Tag */}
                <div className="absolute left-5 top-5">
                  <span className={`rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider ${categoryColor[post.category] || categoryColor.Projects}`}>
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow bg-neutral-900/10 justify-between">
                <div>
                  {/* Metadata */}
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} className="text-blue-400" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} className="text-blue-400" />
                      {post.readingTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 leading-snug mb-3">
                    {post.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                  Read Article
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <Link
            href="/innovation-log"
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/25 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 shadow-[0_0_20px_-5px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_-3px_rgba(59,130,246,0.35)]"
          >
            <BookOpen size={16} />
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
