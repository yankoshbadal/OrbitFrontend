import { Check, Ellipsis, Pencil, Trash2, X } from "lucide-react";
import { useState } from "react";

const ProfilePostCard = ({ post, onDelete, onUpdate, onOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(post.caption);

  const saveEdit = () => {
    const caption = draft.trim();
    if (caption) onUpdate(post.id, caption);
    setIsEditing(false);
  };

  return (
    <article onClick={() => !isEditing && onOpen(post.id)} className="cursor-pointer overflow-hidden rounded-[20px] border border-[#45413c] bg-[#302d29] transition-colors hover:border-[#67574e]">
      <div className="relative flex aspect-[16/9] items-center justify-center" style={{ background: post.background }}>
        <span className="text-6xl sm:text-7xl">{post.emoji}</span>
        <span className="absolute bottom-3 left-3 rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-sm">{post.tag}</span>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold">Yankosh</p>
            <p className="mt-0.5 text-[10px] text-[#aaa39a]">{post.time} · {post.location}</p>
          </div>
          <div className="relative" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              aria-label={`Options for post from ${post.time}`}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-[#aaa39a] hover:bg-[#393631] hover:text-[#eee9e2]"
            >
              <Ellipsis size={19} />
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 top-9 z-10 w-36 rounded-xl border border-[#514d47] bg-[#302d29] p-1 shadow-xl shadow-black/30">
                <button type="button" onClick={() => { setIsMenuOpen(false); setIsEditing(true); }} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs font-medium hover:bg-[#393631]">
                  <Pencil size={14} /> Edit post
                </button>
                <button type="button" onClick={() => onDelete(post.id)} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs font-medium text-[#e9a28e] hover:bg-[#513a31]">
                  <Trash2 size={14} /> Delete post
                </button>
              </div>
            )}
          </div>
        </div>
        {isEditing ? (
          <div className="mt-3">
            <textarea value={draft} onChange={(event) => setDraft(event.target.value)} aria-label="Edit post caption" className="min-h-20 w-full rounded-xl border border-[#5b554f] bg-[#393631] p-3 text-sm text-[#eee9e2] outline-none focus:border-[#a66450]" />
            <div className="mt-2 flex justify-end gap-2">
              <button type="button" onClick={() => { setDraft(post.caption); setIsEditing(false); }} className="flex h-8 items-center gap-1 rounded-lg px-2.5 text-xs text-[#b7aaa0] hover:bg-[#393631]"><X size={14} /> Cancel</button>
              <button type="button" onClick={saveEdit} className="flex h-8 items-center gap-1 rounded-lg bg-[#df6e51] px-2.5 text-xs font-semibold text-white hover:bg-[#ec7d60]"><Check size={14} /> Save</button>
            </div>
          </div>
        ) : (
          <p className="mt-3 text-sm leading-6 text-[#d5d0c9]">{post.caption}</p>
        )}
        <p className="mt-3 text-xs text-[#aaa39a]">{post.likes.length} likes · {post.comments.length} comments</p>
      </div>
    </article>
  );
};

export default ProfilePostCard;
