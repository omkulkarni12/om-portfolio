"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer";
import { posts } from "@/data/posts";
import { projects } from "@/data/projects";
import CommentSection from "@/components/blog/CommentSection";
import NewsletterSection from "@/components/blog/NewsletterSection";
import { 
  Calendar, 
  Clock, 
  Share2, 
  Link as LinkIcon, 
  ArrowLeft, 
  BookOpen, 
  ChevronRight,
  Sparkles,
  ChevronLeft
} from "lucide-react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default function BlogPostPage({ params }: Props) {
  const { slug } = use(params);
  const post = posts.find((p) => p.slug === slug);

  const [copied, setCopied] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  // Dynamic reading progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const percent = (window.scrollY / scrollHeight) * 100;
        setScrollPercent(percent);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center text-white">
        <h2 className="text-2xl font-bold">Article Not Found</h2>
        <Link href="/innovation-log" className="mt-4 text-blue-400 hover:underline">
          Return to The Innovation Log
        </Link>
      </div>
    );
  }

  // Find related project details
  const relatedProject = projects.find((p) => p.id === post.relatedProjectSlug);

  // Find next and previous posts
  const currentIndex = posts.findIndex((p) => p.id === post.id);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  // Take related posts in the same category (or other featured posts)
  const relatedPosts = posts
    .filter((p) => p.id !== post.id && (p.category === post.category || p.featured))
    .slice(0, 2);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
    <>
      <Navbar />

      {/* Reading Progress Indicator Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 z-50 transition-all duration-100"
        style={{ width: `${scrollPercent}%` }}
      />

      <main className="min-h-screen bg-background pt-32 pb-24 text-left">
        <div className="container-custom max-w-7xl">
          {/* Back button */}
          <Link
            href="/innovation-log"
            className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            ← Back to The Log
          </Link>

          {/* Hero Banner Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            {/* Image Container */}
            <div className="relative h-64 md:h-[450px] lg:col-span-8 w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent" />
            </div>

            {/* Core Info */}
            <div className="lg:col-span-4 space-y-6 flex flex-col justify-center h-full text-left">
              <div className="flex flex-wrap gap-2">
                <span className={`rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-wider ${categoryColor[post.category] || categoryColor.Projects}`}>
                  {post.category}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                {post.title}
              </h1>

              <p className="text-md text-blue-400 font-medium leading-relaxed">
                {post.subtitle}
              </p>

              <div className="flex items-center gap-6 text-xs text-slate-400 border-t border-white/10 pt-6">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} className="text-blue-400" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={13} className="text-blue-400" />
                  {post.readingTime}
                </span>
              </div>
            </div>
          </div>

          {/* Core Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
            {/* Sidebar Left: Table of Contents & Share Controls (4 Columns) */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-8 hidden lg:block text-left">
              {/* Table of Contents */}
              {post.toc && post.toc.length > 0 && (
                <div className="glass rounded-2xl border border-white/5 bg-slate-900/[0.15] p-6 backdrop-blur-sm">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <BookOpen size={13} className="text-blue-400" />
                    Table of Contents
                  </h3>
                  <ul className="space-y-3.5 text-sm text-slate-400">
                    {post.toc.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="hover:text-blue-400 hover:pl-1 transition-all duration-300 block"
                        >
                          • {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Share Controls */}
              <div className="glass rounded-2xl border border-white/5 bg-slate-900/[0.15] p-6 backdrop-blur-sm">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Share2 size={13} className="text-blue-400" />
                  Share Article
                </h3>
                <div className="flex gap-2">
                  <button
                    onClick={handleCopyLink}
                    className="flex items-center justify-center h-10 w-10 rounded-full border border-white/10 bg-slate-950/60 hover:bg-slate-900 text-slate-300 hover:text-white transition-colors cursor-pointer"
                    title="Copy Link"
                  >
                    {copied ? <span className="text-[10px] text-emerald-400 font-bold">Copied</span> : <LinkIcon size={16} />}
                  </button>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-10 w-10 rounded-full border border-white/10 bg-slate-950/60 hover:bg-slate-900 text-slate-300 hover:text-white transition-colors"
                    title="Share on LinkedIn"
                  >
                    <FaLinkedin size={16} />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-10 w-10 rounded-full border border-white/10 bg-slate-950/60 hover:bg-slate-900 text-slate-300 hover:text-white transition-colors"
                    title="Share on Twitter"
                  >
                    <FaTwitter size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Main content Area (8 Columns) */}
            <div className="lg:col-span-8 space-y-12 text-left">
              {/* Blog body html content */}
              <div 
                className="prose prose-invert max-w-none text-slate-300 leading-8"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Technologies list */}
              {post.technologies && post.technologies.length > 0 && (
                <div className="border-t border-white/10 pt-8 text-left">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                    Key Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {post.technologies.map((tech) => (
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

              {/* Related Project Reference Card */}
              {relatedProject && (
                <div className="glass rounded-3xl border border-blue-500/20 bg-blue-500/[0.02] p-8 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-left">
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-xs text-blue-400 font-semibold tracking-wide">
                      <Sparkles size={12} />
                      Featured Project Card
                    </span>
                    <h4 className="text-xl font-bold text-white leading-snug">
                      {relatedProject.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed max-w-lg">
                      {relatedProject.subtitle}
                    </p>
                  </div>
                  <Link
                    href={`/projects/${relatedProject.id}`}
                    className="flex-shrink-0 inline-flex items-center gap-1.5 rounded-full bg-blue-500 hover:bg-blue-600 px-5 py-2.5 text-xs font-bold text-white transition-all shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)] cursor-pointer"
                  >
                    View Project Details
                    <ChevronRight size={14} />
                  </Link>
                </div>
              )}

              {/* References Section */}
              {post.references && post.references.length > 0 && (
                <div className="border-t border-white/10 pt-8 text-left">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                    References & Academic Sources
                  </h4>
                  <ul className="space-y-3 text-xs text-slate-400 pl-1 leading-relaxed">
                    {post.references.map((ref, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span>[{idx + 1}]</span>
                        <span>{ref}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Author Card */}
              <div className="glass rounded-3xl border border-white/10 bg-slate-900/30 p-8 backdrop-blur-md flex flex-col sm:flex-row gap-6 items-start text-left">
                <div className="relative h-16 w-16 rounded-2xl overflow-hidden flex-shrink-0 border border-white/10 shadow-lg">
                  <Image
                    src="/images/awards/management-recognition.jpg"
                    alt="Om Rajendra Kulkarni"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-white text-lg flex items-center gap-2">
                    Om Rajendra Kulkarni
                    <span className="text-[9px] font-bold text-blue-400 uppercase tracking-wider rounded-full bg-blue-500/10 border border-blue-500/20 px-2 py-0.5">Founder</span>
                  </h4>
                  <p className="text-xs text-slate-500">Founder of Raghava Innovations & Electrical Engineer</p>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans text-justify">
                    Founder of Raghava Innovations and an Electrical Engineer passionate about Artificial Intelligence, Robotics, Electric Vehicles, Embedded Systems, Industrial Automation, and applied research. I enjoy transforming innovative engineering ideas into real-world products that create meaningful impact.
                  </p>
                </div>
              </div>

              {/* Newsletter subscription form */}
              <NewsletterSection 
                postTitle={post.title}
                postImage={post.image}
                postExcerpt={post.excerpt}
                postSlug={post.slug}
              />

              {/* Navigation Footer: Prev/Next articles */}
              <div className="flex items-center justify-between border-t border-white/10 pt-8">
                {prevPost ? (
                  <Link
                    href={`/innovation-log/${prevPost.slug}`}
                    className="group text-left flex flex-col gap-1.5 max-w-[200px]"
                  >
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold flex items-center gap-1">
                      <ChevronLeft size={12} /> Previous
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                      {prevPost.title}
                    </span>
                  </Link>
                ) : (
                  <div />
                )}

                {nextPost ? (
                  <Link
                    href={`/innovation-log/${nextPost.slug}`}
                    className="group text-right flex flex-col gap-1.5 max-w-[200px] items-end"
                  >
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold flex items-center gap-1">
                      Next <ChevronRight size={12} />
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                      {nextPost.title}
                    </span>
                  </Link>
                ) : (
                  <div />
                )}
              </div>

              {/* Related posts list */}
              {relatedPosts.length > 0 && (
                <div className="border-t border-white/10 pt-12 text-left">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">
                    Related Articles
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {relatedPosts.map((r) => (
                      <Link
                        key={r.id}
                        href={`/innovation-log/${r.slug}`}
                        className="glass group overflow-hidden rounded-2xl border border-white/5 bg-slate-900/[0.15] p-5 hover:border-blue-500/30 transition-all flex flex-col justify-between"
                      >
                        <div>
                          <span className={`text-[10px] font-bold uppercase tracking-wider rounded-full px-2.5 py-1 ${categoryColor[r.category] || categoryColor.Projects}`}>
                            {r.category}
                          </span>
                          <h5 className="text-md font-bold text-white mt-4 group-hover:text-blue-400 transition-colors duration-300 leading-snug line-clamp-2">
                            {r.title}
                          </h5>
                        </div>
                        <span className="text-xs text-blue-400 font-semibold mt-4 block">Read article →</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Discussion board */}
              <CommentSection postSlug={post.slug} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
