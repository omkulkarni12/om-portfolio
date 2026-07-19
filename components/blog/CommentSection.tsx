"use client";

import { useState, useEffect } from "react";
import { MessageSquare, ThumbsUp, Trash2, ShieldAlert, Award, LogIn, Reply, Send, Check } from "lucide-react";

interface Comment {
  id: string;
  author: string;
  avatar: string;
  provider: "google" | "github";
  content: string;
  timestamp: string;
  likes: number;
  likedBy: string[];
  reported: boolean;
  replies: ReplyComment[];
}

interface ReplyComment {
  id: string;
  author: string;
  avatar: string;
  provider: "google" | "github";
  content: string;
  timestamp: string;
  likes: number;
}

interface Props {
  postSlug: string;
}

export default function CommentSection({ postSlug }: Props) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newCommentText, setNewCommentText] = useState("");
  const [replyTexts, setReplyTexts] = useState<{ [commentId: string]: string }>({});
  const [activeReplyId, setActiveReplyId] = useState<string | null>(null);

  // Authenticated user state
  const [user, setUser] = useState<{
    name: string;
    avatar: string;
    provider: "google" | "github";
  } | null>(null);

  const [spamLock, setSpamLock] = useState(false);
  const [showModeratorPanel, setShowModeratorPanel] = useState(false);

  // Load comments and user session from localStorage
  useEffect(() => {
    try {
      const storedComments = localStorage.getItem(`comments_${postSlug}`);
      if (storedComments) {
        setComments(JSON.parse(storedComments));
      } else {
        // Mock initial discussions
        const initialMock: Comment[] = [
          {
            id: "1",
            author: "Dr. Sandip Kulkarni",
            avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=sandip",
            provider: "google",
            content: "Excellent writeup! The torque calculation model you shared dynamically adjusts for vertical roll angle, which is a major challenge for off-road operations. Did you observe any issues with high-frequency noise from the IMU?",
            timestamp: "July 16, 2026 at 10:45 AM",
            likes: 4,
            likedBy: [],
            reported: false,
            replies: [
              {
                id: "1-1",
                author: "Om Kulkarni",
                avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=om",
                provider: "github",
                content: "Thanks, Dr. Sandip! Yes, IMU sensor noise from the RC motor vibrations was a severe issue initially. We mitigated this by mounting the IMU on a vibration-damping silicone gel pad and implementing a digital low-pass Butterworth filter in the firmware task loop.",
                timestamp: "July 16, 2026 at 11:20 AM",
                likes: 2
              }
            ]
          }
        ];
        setComments(initialMock);
        localStorage.setItem(`comments_${postSlug}`, JSON.stringify(initialMock));
      }

      const storedUser = localStorage.getItem("log_user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (e) {
      console.error(e);
    }
  }, [postSlug]);

  const saveComments = (updatedComments: Comment[]) => {
    setComments(updatedComments);
    try {
      localStorage.setItem(`comments_${postSlug}`, JSON.stringify(updatedComments));
    } catch (e) {
      console.error(e);
    }
  };

  const handleLogin = (provider: "google" | "github") => {
    const mockUser = {
      name: provider === "google" ? "Jane Doe" : "dev-ninja",
      avatar: `https://api.dicebear.com/7.x/adventurer/svg?seed=${provider === "google" ? "jane" : "dev"}`,
      provider
    };
    setUser(mockUser);
    try {
      localStorage.setItem("log_user", JSON.stringify(mockUser));
    } catch (e) {
      console.error(e);
    }
  };

  const handleLogout = () => {
    setUser(null);
    try {
      localStorage.removeItem("log_user");
    } catch (e) {
      console.error(e);
    }
  };

  const submitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !newCommentText.trim() || spamLock) return;

    // Simulate spam protection rate-limiting
    setSpamLock(true);
    setTimeout(() => setSpamLock(false), 5000); // 5-second lock

    const newComment: Comment = {
      id: Date.now().toString(),
      author: user.name,
      avatar: user.avatar,
      provider: user.provider,
      content: newCommentText,
      timestamp: "Just now",
      likes: 0,
      likedBy: [],
      reported: false,
      replies: []
    };

    saveComments([newComment, ...comments]);
    setNewCommentText("");
  };

  const submitReply = (commentId: string) => {
    const text = replyTexts[commentId];
    if (!user || !text?.trim()) return;

    const newReply: ReplyComment = {
      id: Date.now().toString(),
      author: user.name,
      avatar: user.avatar,
      provider: user.provider,
      content: text,
      timestamp: "Just now",
      likes: 0
    };

    const updated = comments.map((c) => {
      if (c.id === commentId) {
        return {
          ...c,
          replies: [...c.replies, newReply]
        };
      }
      return c;
    });

    saveComments(updated);
    setReplyTexts({ ...replyTexts, [commentId]: "" });
    setActiveReplyId(null);
  };

  const toggleLike = (commentId: string) => {
    if (!user) return;
    const updated = comments.map((c) => {
      if (c.id === commentId) {
        const hasLiked = c.likedBy.includes(user.name);
        const newLikedBy = hasLiked
          ? c.likedBy.filter((n) => n !== user.name)
          : [...c.likedBy, user.name];
        return {
          ...c,
          likes: hasLiked ? c.likes - 1 : c.likes + 1,
          likedBy: newLikedBy
        };
      }
      return c;
    });
    saveComments(updated);
  };

  const reportComment = (commentId: string) => {
    const updated = comments.map((c) => {
      if (c.id === commentId) {
        return { ...c, reported: true };
      }
      return c;
    });
    saveComments(updated);
    alert("Comment reported successfully. It has been flagged for moderation.");
  };

  const deleteComment = (commentId: string) => {
    const updated = comments.filter((c) => c.id !== commentId);
    saveComments(updated);
  };

  return (
    <div className="border-t border-white/10 pt-16 mt-16 max-w-3xl mx-auto">
      {/* Header Info */}
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
          <MessageSquare className="text-blue-400" />
          Discussions ({comments.length})
        </h3>

        {comments.some((c) => c.reported) && (
          <button
            onClick={() => setShowModeratorPanel(!showModeratorPanel)}
            className="flex items-center gap-1.5 rounded-full bg-red-500/10 border border-red-500/35 px-3 py-1.5 text-xs font-semibold text-red-400 transition-colors cursor-pointer"
          >
            <ShieldAlert size={13} />
            Moderator Panel
          </button>
        )}
      </div>

      {/* Auth Control Block */}
      <div className="glass rounded-2xl border border-white/10 p-5 bg-slate-900/30 backdrop-blur-md mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {user ? (
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <img src={user.avatar} alt={user.name} className="h-9 w-9 rounded-full bg-slate-950 p-0.5 border border-white/10" />
              <div>
                <p className="text-sm font-bold text-white flex items-center gap-1">
                  {user.name}
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">({user.provider})</span>
                </p>
                <p className="text-xs text-slate-500">Authenticated Reader</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="text-xs text-slate-500 hover:text-white transition-colors cursor-pointer"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <>
            <div>
              <h4 className="text-sm font-bold text-white">Join the Discussion</h4>
              <p className="text-xs text-slate-400 mt-1">Authenticate using Google or GitHub to submit replies and reactions.</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleLogin("google")}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/80 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-900 transition-colors cursor-pointer"
              >
                <LogIn size={13} />
                Google
              </button>
              <button
                onClick={() => handleLogin("github")}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/80 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-900 transition-colors cursor-pointer"
              >
                <LogIn size={13} />
                GitHub
              </button>
            </div>
          </>
        )}
      </div>

      {/* Flagged Moderator Panel */}
      {showModeratorPanel && (
        <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-5 mb-8 text-left">
          <h4 className="text-sm font-bold text-red-400 flex items-center gap-1.5 mb-4">
            <ShieldAlert size={15} />
            Flagged Comments (Admin Moderation Mode)
          </h4>
          <div className="space-y-4">
            {comments.filter((c) => c.reported).map((c) => (
              <div key={c.id} className="flex items-center justify-between border-b border-white/5 pb-3">
                <div>
                  <p className="text-xs font-semibold text-white">{c.author}: <span className="text-slate-400 italic font-normal">"{c.content}"</span></p>
                  <p className="text-[10px] text-red-400 mt-1">Status: Reported</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      const updated = comments.map((item) => item.id === c.id ? { ...item, reported: false } : item);
                      saveComments(updated);
                    }}
                    className="flex items-center gap-1 rounded bg-emerald-500/10 text-emerald-400 px-2.5 py-1 text-[10px] font-bold hover:bg-emerald-500/20 cursor-pointer"
                  >
                    <Check size={12} />
                    Approve
                  </button>
                  <button
                    onClick={() => deleteComment(c.id)}
                    className="flex items-center gap-1 rounded bg-red-500/10 text-red-400 px-2.5 py-1 text-[10px] font-bold hover:bg-red-500/20 cursor-pointer"
                  >
                    <Trash2 size={12} />
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Comment Input */}
      {user && (
        <form onSubmit={submitComment} className="mb-10 relative">
          <textarea
            placeholder="Type comment (supports **markdown** formatting)..."
            value={newCommentText}
            onChange={(e) => setNewCommentText(e.target.value)}
            disabled={spamLock}
            className="w-full rounded-2xl border border-white/10 bg-slate-950/60 p-4 pb-14 text-sm text-white placeholder-slate-500 focus:border-blue-500/50 focus:outline-none backdrop-blur-md transition-all duration-300 min-h-[100px] resize-y"
          />
          <div className="absolute right-4 bottom-4 flex items-center gap-3">
            {spamLock && (
              <span className="text-[10px] text-yellow-500 font-semibold uppercase animate-pulse">Spam Lock: 5s</span>
            )}
            <button
              type="submit"
              disabled={spamLock || !newCommentText.trim()}
              className="flex items-center gap-1.5 rounded-full bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2 text-xs font-bold text-white transition-all cursor-pointer"
            >
              <Send size={12} />
              Submit
            </button>
          </div>
        </form>
      )}

      {/* Comment List */}
      <div className="space-y-6 text-left">
        {comments.map((comment) => (
          <div key={comment.id} className={`glass rounded-2xl border ${comment.reported ? "border-red-500/20 bg-red-500/[0.02]" : "border-white/5 bg-slate-900/[0.15]"} p-6 backdrop-blur-sm transition-all duration-300`}>
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <img src={comment.avatar} alt={comment.author} className="h-8 w-8 rounded-full bg-slate-950 border border-white/5" />
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    {comment.author}
                    {comment.author === "Om Kulkarni" && (
                      <span className="inline-flex items-center gap-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 text-[9px] text-blue-400 font-bold uppercase">
                        <Award size={9} /> Author
                      </span>
                    )}
                  </h4>
                  <p className="text-[10px] text-slate-500">{comment.timestamp}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <p className="text-sm text-slate-300 leading-relaxed mb-4 pl-1 font-sans">
              {comment.content}
            </p>

            {/* Actions Footer */}
            <div className="flex items-center gap-4 text-xs text-slate-500 pl-1">
              <button
                onClick={() => toggleLike(comment.id)}
                disabled={!user}
                className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                  user && comment.likedBy.includes(user.name)
                    ? "text-blue-400 font-bold"
                    : "hover:text-white"
                }`}
              >
                <ThumbsUp size={13} />
                <span>{comment.likes} {comment.likes === 1 ? "Like" : "Likes"}</span>
              </button>

              {user && (
                <button
                  onClick={() => {
                    setActiveReplyId(activeReplyId === comment.id ? null : comment.id);
                  }}
                  className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
                >
                  <Reply size={13} />
                  Reply
                </button>
              )}

              {user && comment.author !== user.name && (
                <button
                  onClick={() => reportComment(comment.id)}
                  className="flex items-center gap-1.5 hover:text-red-400 transition-colors ml-auto cursor-pointer"
                >
                  Report
                </button>
              )}
            </div>

            {/* Nested Reply Form */}
            {activeReplyId === comment.id && (
              <div className="mt-4 pt-4 border-t border-white/5 pl-4 sm:pl-8 flex gap-3 items-end">
                <textarea
                  placeholder="Type reply..."
                  value={replyTexts[comment.id] || ""}
                  onChange={(e) => setReplyTexts({ ...replyTexts, [comment.id]: e.target.value })}
                  className="flex-1 rounded-xl border border-white/15 bg-slate-950/60 p-3 text-xs text-white placeholder-slate-500 focus:border-blue-500/50 focus:outline-none backdrop-blur-md min-h-[50px] resize-y"
                />
                <button
                  onClick={() => submitReply(comment.id)}
                  disabled={!replyTexts[comment.id]?.trim()}
                  className="rounded-xl bg-blue-500 hover:bg-blue-600 disabled:opacity-50 px-4 py-2.5 text-xs font-bold text-white transition-all cursor-pointer"
                >
                  Reply
                </button>
              </div>
            )}

            {/* Threaded Nested Replies */}
            {comment.replies && comment.replies.length > 0 && (
              <div className="mt-6 space-y-4 pl-4 sm:pl-8 border-l border-white/5">
                {comment.replies.map((reply) => (
                  <div key={reply.id} className="pt-4 border-t border-white/[0.03]">
                    <div className="flex items-center gap-3 mb-2">
                      <img src={reply.avatar} alt={reply.author} className="h-7 w-7 rounded-full bg-slate-950 border border-white/5" />
                      <div>
                        <h5 className="text-xs font-bold text-white flex items-center gap-1">
                          {reply.author}
                          {reply.author === "Om Kulkarni" && (
                            <span className="inline-flex items-center gap-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 text-[8px] text-blue-400 font-bold uppercase">
                              Author
                            </span>
                          )}
                        </h5>
                        <p className="text-[9px] text-slate-500">{reply.timestamp}</p>
                      </div>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed pl-1">
                      {reply.content}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
