"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer";
import { posts } from "@/data/posts";
import { Post } from "@/types/post";
import { Search, Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

export default function BlogLandingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Projects",
    "Research",
    "Artificial Intelligence",
    "Machine Learning",
    "Robotics",
    "Automotive",
    "Electrical Engineering",
    "Entrepreneurship",
    "Career",
    "Personal Journey",
    "Engineering Thoughts",
    "Tutorials",
  ];

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

  // Filter posts based on category and search query
  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.technologies?.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  // Separate the featured article (the first one matching from filtered list or default)
  const featuredArticle = filteredPosts.find((p) => p.featured);
  const regularArticles = filteredPosts.filter(
    (p) => p.id !== featuredArticle?.id
  );

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background pt-32 pb-24">
        <div className="container-custom">
          {/* Back button */}
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            ← Back to Portfolio
          </Link>

          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="gradient-text text-5xl font-black md:text-6xl tracking-tight">
              The Innovation Log
            </h1>
            <p className="mt-4 text-xl text-slate-400 max-w-3xl leading-relaxed">
              Where engineering meets curiosity, research, and innovation. Exploring the systems, equations, code, and lessons behind what I build.
            </p>
          </div>

          {/* Filters Bar */}
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Search Input */}
            <div className="relative max-w-md w-full">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles, stack, keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-white/10 bg-slate-900/40 py-3 pl-12 pr-6 text-sm text-white placeholder-slate-500 focus:border-blue-500/50 focus:outline-none backdrop-blur-md transition-all duration-300"
              />
            </div>

            {/* Categories Scrollable Area */}
            <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 scrollbar-none">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-300 whitespace-nowrap border ${
                    activeCategory === category
                      ? "bg-blue-500 text-white border-blue-500 shadow-[0_0_15px_-3px_rgba(59,130,246,0.4)]"
                      : "bg-slate-900/40 text-slate-400 border-white/5 hover:text-white hover:border-white/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="glass rounded-3xl border border-white/15 p-16 text-center max-w-xl mx-auto my-12 backdrop-blur-md">
              <div className="mb-4 text-4xl">🔍</div>
              <h3 className="text-xl font-bold text-white mb-2">No Articles Found</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                We couldn't find any articles matching your search query or category filters. Try checking your spelling or selecting another category.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="rounded-full bg-blue-500 hover:bg-blue-600 px-6 py-2.5 text-xs font-bold text-white transition-all duration-300"
              >
                Clear Search & Filters
              </button>
            </div>
          )}

          {/* Featured Hero Article */}
          {featuredArticle && searchQuery === "" && (
            <div className="mb-16">
              <h2 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">
                Featured Article
              </h2>
              <Link
                href={`/innovation-log/${featuredArticle.slug}`}
                className="glass group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-md transition-all duration-500 hover:border-blue-500/45 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)] grid grid-cols-1 lg:grid-cols-12 gap-0 text-left cursor-pointer"
              >
                {/* Photo */}
                <div className="relative h-64 lg:h-auto lg:col-span-7 min-h-[320px] overflow-hidden">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950/80 lg:from-transparent to-transparent" />
                  
                  {/* Category Tag */}
                  <div className="absolute left-6 top-6">
                    <span className={`rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider ${categoryColor[featuredArticle.category] || categoryColor.Projects}`}>
                      {featuredArticle.category}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-8 lg:p-12 lg:col-span-5 flex flex-col justify-between bg-neutral-900/10">
                  <div>
                    {/* Metadata */}
                    <div className="flex items-center gap-4 text-xs text-slate-400 mb-6">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} className="text-blue-400" />
                        {featuredArticle.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={13} className="text-blue-400" />
                        {featuredArticle.readingTime}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors duration-300 leading-snug mb-4">
                      {featuredArticle.title}
                    </h3>

                    <p className="text-slate-400 leading-relaxed mb-6">
                      {featuredArticle.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-sm font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                    Read Article
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Grid Layout of Other Articles */}
          {filteredPosts.length > 0 && (
            <div>
              {featuredArticle && searchQuery === "" && (
                <h2 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-6">
                  Latest Entries
                </h2>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(searchQuery === "" && featuredArticle ? regularArticles : filteredPosts).map((post) => (
                  <Link
                    key={post.id}
                    href={`/innovation-log/${post.slug}`}
                    className="glass group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/45 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)] flex flex-col h-full"
                  >
                    {/* Cover image */}
                    <div className="relative h-52 w-full overflow-hidden flex-shrink-0">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
                      
                      {/* Tag */}
                      <div className="absolute left-5 top-5">
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${categoryColor[post.category] || categoryColor.Projects}`}>
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 flex flex-col flex-grow bg-neutral-900/10 justify-between">
                      <div>
                        {/* Meta */}
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

                        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300 leading-snug mb-3">
                          {post.title}
                        </h3>

                        <p className="text-xs text-slate-400 leading-relaxed mb-6 line-clamp-3">
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
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
