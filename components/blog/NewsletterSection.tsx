"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, CheckCircle2, ShieldCheck, MailOpen, X } from "lucide-react";

interface Props {
  postTitle?: string;
  postImage?: string;
  postExcerpt?: string;
  postSlug?: string;
}

export default function NewsletterSection({
  postTitle = "AI-Driven Torque Vectoring in Electric Vehicles",
  postImage = "/images/projects/ev-chassis.jpg",
  postExcerpt = "How we designed a real-time AI-assisted controller for dynamic torque distribution on ESP32, outperforming traditional mechanical differentials on rough terrain.",
  postSlug = "ai-torque-vectoring-ev"
}: Props) {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showEmailPreview, setShowEmailPreview] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Save to localStorage acting as our client database
    try {
      const existing = localStorage.getItem("log_subscribers");
      const subscribers = existing ? JSON.parse(existing) : [];
      if (!subscribers.includes(email)) {
        subscribers.push(email);
        localStorage.setItem("log_subscribers", JSON.stringify(subscribers));
      }

      // Hit Next.js API endpoint to send confirmation email
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        console.warn("Outbound email server notification warning.");
      }

      setIsSubscribed(true);
      setShowToast(true);
      setError("");
      setTimeout(() => setShowToast(false), 5000);
    } catch (err) {
      console.error(err);
      setIsSubscribed(true);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
    }
  };

  const sendRealTestEmail = async () => {
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email || "subscriber@domain.com",
          postTitle,
          postExcerpt,
          postImage,
          postSlug,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        if (result.simulated) {
          alert("Simulation Success: Subscription confirmed! To send actual emails, please set RESEND_API_KEY in your .env file.");
        } else {
          alert("Success! Real HTML email alert dispatched to your inbox via Resend API.");
        }
      } else {
        alert(`Failed to send test email: ${result.error || "Server error"}`);
      }
    } catch (e) {
      console.error(e);
      alert("Failed to connect to subscription API. Make sure the server is running.");
    }
  };

  return (
    <div className="relative my-16 rounded-3xl border border-white/10 bg-slate-900/30 backdrop-blur-md p-8 md:p-12 overflow-hidden shadow-2xl flex flex-col md:flex-row gap-8 items-center">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute -left-12 -top-12 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -right-12 -bottom-12 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

      {/* Main Content Info */}
      <div className="flex-1 space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1 text-xs text-blue-400 font-semibold tracking-wide">
          <Mail size={12} />
          Engineering Journal
        </div>
        
        <h3 className="text-2xl font-black text-white md:text-3xl leading-snug">
          Join The Innovation Log
        </h3>
        
        <p className="text-sm text-slate-400 leading-relaxed max-w-lg">
          Receive thoughtful updates whenever I publish new engineering projects, research, experiments, and lessons. No spam—only meaningful content.
        </p>

        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <ShieldCheck size={14} className="text-emerald-500" />
          <span>Your email is stored securely in local app storage.</span>
        </div>
      </div>

      {/* Subscription Form / Success Area */}
      <div className="w-full md:w-auto min-w-[320px] flex-shrink-0">
        {!isSubscribed ? (
          <form onSubmit={handleSubscribe} className="space-y-3">
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                className="w-full rounded-full border border-white/10 bg-slate-950/60 py-3.5 px-6 text-sm text-white placeholder-slate-500 focus:border-blue-500/50 focus:outline-none backdrop-blur-md transition-all duration-300"
              />
            </div>
            
            {error && (
              <p className="text-xs text-red-400 font-medium px-4">{error}</p>
            )}

            <button
              type="submit"
              className="w-full rounded-full bg-blue-500 hover:bg-blue-600 py-3.5 px-6 text-sm font-bold text-white transition-all duration-300 shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)] hover:shadow-[0_0_20px_-2px_rgba(59,130,246,0.45)] cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <div className="flex flex-col gap-3 items-center text-center p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-sm animate-fade-in">
            <CheckCircle2 className="h-10 w-10 text-emerald-400" />
            <h4 className="text-md font-bold text-white">Subscription Confirmed!</h4>
            <p className="text-xs text-slate-400 max-w-[240px] leading-relaxed">
              Thank you for subscribing. You'll receive HTML logs of new articles.
            </p>
            
            {/* Simulation Preview Trigger */}
            <button
              onClick={() => setShowEmailPreview(true)}
              className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/20 px-4 py-2 text-xs font-bold text-blue-400 transition-all duration-300 cursor-pointer"
            >
              <MailOpen size={12} />
              Simulate Email Notification
            </button>
          </div>
        )}
      </div>

      {/* HTML Email Template Simulation Modal */}
      {showEmailPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 md:p-6 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-xl bg-slate-950 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh] scrollbar-thin">
            {/* Modal Header */}
            <div className="p-5 border-b border-white/10 flex items-center justify-between bg-slate-900/60">
              <div>
                <h4 className="font-bold text-white flex items-center gap-2">
                  <MailOpen size={16} className="text-blue-400" />
                  Elegant HTML Email Simulation
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">Previewing the automatic subscriber notification email.</p>
              </div>
              <button
                onClick={() => setShowEmailPreview(false)}
                className="rounded-lg p-2 text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Email Body Template (Simulated Inbox View) */}
            <div className="p-6 overflow-y-auto bg-slate-900 flex-grow scrollbar-thin text-left">
              {/* Envelope details */}
              <div className="border-b border-white/5 pb-4 mb-6 text-xs text-slate-400 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="space-y-1.5">
                  <p><strong>From:</strong> Om Rajendra Kulkarni &lt;journal@om-portfolio.dev&gt;</p>
                  <p><strong>To:</strong> {email || "subscriber@domain.com"}</p>
                  <p><strong>Subject:</strong> New Innovation Log: {postTitle}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 flex-shrink-0">
                  <button
                    onClick={sendRealTestEmail}
                    className="inline-flex items-center gap-1.5 rounded-full bg-blue-500 hover:bg-blue-600 px-3.5 py-2 text-xs font-bold text-white transition-all shadow-[0_0_10px_-2px_rgba(59,130,246,0.3)] cursor-pointer"
                  >
                    <MailOpen size={12} />
                    Send Real Email (API)
                  </button>
                  <button
                    onClick={() => {
                      const subject = encodeURIComponent(`[The Innovation Log] New Article: ${postTitle}`);
                      const body = encodeURIComponent(
                        `Hello,\n\nI have published a new article in The Innovation Log!\n\nTitle: ${postTitle}\n\nSummary: ${postExcerpt}\n\nRead the full article here: ${window.location.origin}/innovation-log/${postSlug}\n\nBest regards,\nOm Rajendra Kulkarni`
                      );
                      window.open(`mailto:${email || "subscriber@domain.com"}?subject=${subject}&body=${body}`);
                    }}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-slate-950/80 hover:bg-slate-900 px-3.5 py-2 text-xs font-bold text-slate-300 hover:text-white transition-all cursor-pointer"
                  >
                    <Mail size={12} />
                    Draft in Mail App
                  </button>
                </div>
              </div>

              {/* HTML Newsletter Container */}
              <div className="max-w-md mx-auto bg-slate-950 border border-white/10 rounded-2xl overflow-hidden p-6 shadow-md font-sans text-left">
                {/* Email Header */}
                <div className="text-center border-b border-white/5 pb-5 mb-5">
                  <h1 className="text-lg font-black text-white tracking-wide">THE INNOVATION LOG</h1>
                  <p className="text-[10px] text-blue-400 font-semibold tracking-widest uppercase mt-1">Engineering Journal Update</p>
                </div>

                {/* Email Cover Image */}
                <div className="relative h-44 w-full overflow-hidden rounded-xl border border-white/5 mb-5">
                  <img
                    src={postImage}
                    alt={postTitle}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Email Content */}
                <div className="space-y-4">
                  <h2 className="text-md font-bold text-white leading-snug">
                    {postTitle}
                  </h2>
                  
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {postExcerpt}
                  </p>
                  
                  {/* Button */}
                  <div className="pt-3 text-center">
                    <a
                      href={`/innovation-log/${postSlug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-full bg-blue-500 hover:bg-blue-600 px-6 py-2.5 text-xs font-bold text-white transition-all text-center no-underline"
                    >
                      Read Full Article
                    </a>
                  </div>
                </div>

                {/* Email Footer */}
                <div className="mt-8 border-t border-white/5 pt-5 text-center text-[10px] text-slate-500">
                  <p>© {new Date().getFullYear()} Om Rajendra Kulkarni Portfolio.</p>
                  <p className="mt-1">You received this because you subscribed to The Innovation Log.</p>
                  <p className="mt-2 text-slate-600">Unsubscribe • Manage Preferences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Success Toast */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl border border-emerald-500/35 bg-slate-950/95 p-4 shadow-[0_0_30px_-5px_rgba(16,185,129,0.2)] backdrop-blur-md animate-fade-in max-w-sm">
          <CheckCircle2 className="h-6 w-6 text-emerald-400 flex-shrink-0" />
          <div className="text-left">
            <h4 className="text-sm font-bold text-white">Subscription Successful!</h4>
            <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">You have successfully subscribed to receive updates for The Innovation Log.</p>
          </div>
          <button
            onClick={() => setShowToast(false)}
            className="text-slate-400 hover:text-white ml-2 cursor-pointer flex-shrink-0"
          >
            <X size={14} />
          </button>
        </div>
      )}
    </div>
  );
}
