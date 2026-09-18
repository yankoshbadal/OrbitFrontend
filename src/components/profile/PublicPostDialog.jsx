import { Heart, MessageCircle, Send, X } from "lucide-react";
import { useState } from "react";

const PublicPostDialog = ({ profile, post, onClose, onLike, onAddComment }) => {
  const [comment, setComment] = useState("");
  const comments = post.commentList || [];

  const submitComment = (event) => {
    event.preventDefault();
    const text = comment.trim();
    if (!text) return;
    onAddComment(post.id, text);
    setComment("");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1e1d1b] font-[Inter] text-[#eee9e2]">
      <div className="mx-auto min-h-[100dvh] max-w-5xl px-4 py-5 sm:px-6 sm:py-8">
        <div className="mb-5 flex items-center justify-between">
          <div><p className="text-[11px] font-bold tracking-[0.1em] text-[#c0ab91]">{profile.name.toUpperCase()} · POST</p><h2 className="mt-1 font-[Space_Grotesk] text-2xl font-semibold">Post details</h2></div>
          <button type="button" onClick={onClose} aria-label="Close post" className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#45413c] text-[#aaa39a] hover:bg-[#302d29] hover:text-[#eee9e2]"><X size={20} /></button>
        </div>
        <article className="overflow-hidden rounded-[22px] border border-[#45413c] bg-[#302d29] shadow-xl">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative flex aspect-square items-center justify-center lg:aspect-auto lg:min-h-[600px]" style={{ background: post.background }}><span className="text-8xl">{post.emoji}</span><span className="absolute bottom-5 left-5 rounded-full bg-black/45 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-sm">{post.tag}</span></div>
            <div className="flex min-h-[600px] flex-col">
              <div className="border-b border-[#45413c] p-5"><p className="text-sm font-semibold">{profile.name}</p><p className="mt-0.5 text-[11px] text-[#aaa39a]">{post.time} · {post.location}</p><p className="mt-4 text-sm leading-6 text-[#d5d0c9]">{post.caption}</p></div>
              <div className="flex items-center gap-4 border-b border-[#45413c] px-5 py-4">
                <button type="button" onClick={() => onLike(post.id)} className={`flex items-center gap-2 text-sm font-medium ${post.liked ? "text-[#df7659]" : "text-[#bdb7ae] hover:text-[#df7659]"}`}><Heart size={19} fill={post.liked ? "currentColor" : "none"} /> {post.likes}</button>
                <span className="flex items-center gap-2 text-sm text-[#bdb7ae]"><MessageCircle size={19} /> {post.comments}</span>
              </div>
              <div className="min-h-0 flex-1 overflow-y-auto p-5"><h3 className="text-sm font-semibold">Comments</h3>{comments.length ? <div className="mt-4 space-y-4">{comments.map((item) => <div key={item.id} className="flex gap-3"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-semibold text-[#2b2522]" style={{ backgroundColor: item.color || "#c5b59d" }}>{item.initials || "Y"}</span><div><p className="text-xs leading-5 text-[#d5d0c9]"><span className="mr-1.5 font-semibold text-[#eee9e2]">{item.name || "Yankosh"}</span>{item.text}</p><p className="mt-1 text-[10px] text-[#7f7770]">{item.time || "now"}</p></div></div>)}</div> : <p className="mt-4 text-sm text-[#aaa39a]">Be the first to comment.</p>}</div>
              <form onSubmit={submitComment} className="border-t border-[#45413c] p-4"><div className="flex gap-2"><input value={comment} onChange={(event) => setComment(event.target.value)} placeholder="Add a comment..." className="min-w-0 flex-1 rounded-xl border border-[#45413c] bg-[#1e1d1b] px-3 py-2.5 text-xs text-[#eee9e2] outline-none placeholder:text-[#6f6a64] focus:border-[#df7659]" /><button type="submit" className="flex items-center gap-1 rounded-xl bg-[#df7659] px-4 text-xs font-semibold text-white hover:bg-[#e98267]"><Send size={14} /> Post</button></div></form>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default PublicPostDialog;
