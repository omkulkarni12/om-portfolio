"use client";

import { useState } from "react";
import { Card, Button } from "@/components/ui";
import { portfolio } from "@/data/portfolio";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    // Prefill mailto URL
    const subject = encodeURIComponent(`Portfolio Connection - ${name}`);
    const body = encodeURIComponent(
      `Hi Om,\n\n${message}\n\n---\nSender: ${name}\nEmail: ${email}`
    );
    
    // Redirect to mailto
    window.location.href = `mailto:${portfolio.email}?subject=${subject}&body=${body}`;
    
    // Display Success banner
    setStatus("success");
    
    // Clear Form
    setName("");
    setEmail("");
    setMessage("");

    // Reset status after a few seconds
    setTimeout(() => {
      setStatus("idle");
    }, 5000);
  };

  return (
    <Card className="relative overflow-hidden">
      {status === "success" && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-slate-950/90 backdrop-blur-md p-6 text-center animate-fade-in">
          <div className="rounded-full bg-green-500/10 p-3 text-green-400 border border-green-500/25 mb-4 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
            <CheckCircle2 size={40} className="animate-bounce" />
          </div>
          <h4 className="text-xl font-bold text-white mb-2">Message Drafted!</h4>
          <p className="text-sm text-slate-300 max-w-sm leading-6">
            Opening your email application to send the message to <strong>{portfolio.email}</strong>.
          </p>
          <button 
            onClick={() => setStatus("idle")}
            type="button"
            className="mt-6 text-xs font-semibold text-blue-400 hover:text-blue-300 underline"
          >
            Send another message
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Your Name
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            className="w-full rounded-xl border border-white/10 bg-slate-950/20 p-4 text-white outline-none focus:border-blue-500/50 transition-all duration-300 placeholder:text-slate-600"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Your Email
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
            className="w-full rounded-xl border border-white/10 bg-slate-950/20 p-4 text-white outline-none focus:border-blue-500/50 transition-all duration-300 placeholder:text-slate-600"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Your Message
          </label>
          <textarea
            rows={6}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell me about your project, role, or collaboration idea..."
            className="w-full rounded-xl border border-white/10 bg-slate-950/20 p-4 text-white outline-none focus:border-blue-500/50 transition-all duration-300 placeholder:text-slate-600 resize-none"
          />
        </div>

        <button 
          type="submit" 
          className="w-full inline-flex items-center justify-center rounded-2xl px-8 py-4 font-semibold transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700 hover:scale-[1.01] shadow-lg shadow-blue-500/30 cursor-pointer gap-2"
        >
          <Send size={16} />
          Send Message
        </button>
      </form>
    </Card>
  );
}