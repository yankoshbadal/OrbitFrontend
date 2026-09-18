import { Heart, MessageCircle, Trash2, X } from "lucide-react";
import { useState } from "react";

const ProfilePostDialog = ({ post, onClose, onDeleteComment }) => {
  const [isLikesOpen, setIsLikesOpen] = useState(false);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1e1d1b] font-[Inter] text-[#eee9e2]">
      <div className="mx-auto min-h-[100dvh] max-w-5xl px-4 py-5 sm:px-6 sm:py-8">
        <div className="mb-5 flex items-center justify-between">
          <div><p className="text-[11px] font-bold tracking-[0.1em] text-[#c0ab91]">YOUR POST</p><h2 className="mt-1 font-[Space_Grotesk] text-2xl font-semibold">Post details</h2></div>
          <button type="button" onClick={onClose} aria-label="Close post" className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#45413c] text-[#aaa39a] hover:bg-[#302d29] hover:text-[#eee9e2]"><X size={20} /></button>
        </div>
        <article className="overflow-hidden rounded-[22px] border border-[#45413c] bg-[#302d29] shadow-xl">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative flex aspect-square items-center justify-center lg:aspect-auto lg:min-h-[600px]" style={{ background: post.background }}>
              <span className="text-8xl">{post.emoji}</span>
              <span className="absolute bottom-5 left-5 rounded-full bg-black/45 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-sm">{post.tag}</span>
            </div>
            <div className="flex min-h-0 flex-col">
              <div className="border-b border-[#45413c] p-5">
                <p className="text-sm font-semibold">Yankosh</p>
                <p className="mt-0.5 text-[11px] text-[#aaa39a]">{post.time} · {post.location}</p>
                <p className="mt-4 text-sm leading-6 text-[#d5d0c9]">{post.caption}</p>
              </div>
              <div className="flex items-center gap-4 border-b border-[#45413c] px-5 py-4">
                <button type="button" onClick={() => setIsLikesOpen(true)} className="flex items-center gap-2 text-sm font-medium text-[#df7659] hover:text-[#f08a6e]"><Heart size={19} fill="currentColor" /> {post.likes.length} likes</button>
                <span className="flex items-center gap-2 text-sm text-[#bdb7ae]"><MessageCircle size={19} /> {post.comments.length}</span>
              </div>
              <div className="min-h-0 flex-1 overflow-y-auto p-5">
                <h3 className="text-sm font-semibold">Comments</h3>
                {post.comments.length ? (
                  <div className="mt-4 space-y-4">
                    {post.comments.map((comment) => (
                      <div key={comment.id} className="flex gap-3">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-semibold text-[#2b2522]" style={{ backgroundColor: comment.color }}>{comment.initials}</span>
                        <div className="min-w-0 flex-1"><p className="text-xs leading-5 text-[#d5d0c9]"><span className="mr-1.5 font-semibold text-[#eee9e2]">{comment.name}</span>{comment.text}</p><p className="mt-1 text-[10px] text-[#7f7770]">{comment.time}</p></div>
                        <button type="button" onClick={() => onDeleteComment(post.id, comment.id)} aria-label={`Delete ${comment.name}'s comment`} className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[#9b8177] hover:bg-[#513a31] hover:text-[#ef9a82]"><Trash2 size={15} /></button>
                      </div>
                    ))}
                  </div>
                ) : <p className="mt-4 text-sm text-[#aaa39a]">No comments yet.</p>}
              </div>
            </div>
          </div>
        </article>
      </div>
      {isLikesOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/65 p-4 backdrop-blur-sm">
          <div role="dialog" aria-modal="true" aria-label="People who liked this post" className="w-full max-w-sm rounded-[22px] border border-[#514d47] bg-[#302d29] p-5 shadow-2xl">
            <div className="flex items-center justify-between"><h3 className="text-lg font-semibold">Liked by</h3><button type="button" onClick={() => setIsLikesOpen(false)} aria-label="Close likes" className="flex h-8 w-8 items-center justify-center rounded-lg text-[#aaa39a] hover:bg-[#393631]"><X size={18} /></button></div>
            <div className="mt-4 space-y-2">
              {post.likes.map((user) => <div key={user.id} className="flex items-center gap-3 rounded-xl bg-[#393631] p-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl text-xs font-semibold text-[#2b2522]" style={{ backgroundColor: user.color }}>{user.initials}</span><span className="text-sm font-semibold">{user.name}</span></div>)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePostDialog;
