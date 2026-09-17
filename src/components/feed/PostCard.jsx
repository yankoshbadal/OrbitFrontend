import React from "react";

import { useState } from "react";

import {
  Heart,
  MessageCircle,
  Send,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const PostCard = ({
  post,
  onNext,
  onPrevious,
  hasNext,
  hasPrevious,
}) => {
  const [showComments, setShowComments] = useState(false);
  const [liked, setLiked] = useState(false);

  const likes = post.likes + (liked ? 1 : 0);

  return (
    <article className="overflow-hidden rounded-[22px] border border-[#45413c] bg-[#302d29] shadow-xl">
      <div className="grid lg:grid-cols-[1.25fr_0.75fr]">

        {/* Post */}
        <div
          className="relative flex aspect-square items-center justify-center lg:aspect-auto lg:min-h-[560px]"
          style={{
            background: post.background,
          }}
        >
          <span className="select-none text-7xl sm:text-8xl">
            {post.emoji}
          </span>

          <span className="absolute bottom-5 left-5 rounded-full bg-black/50 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-md">
            {post.tag}
          </span>
        </div>

        {/* Details */}
        <div className="flex min-h-[400px] flex-col">

          {/* User */}
          <div className="flex items-center gap-3 border-b border-[#45413c] p-5">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-xl text-sm font-semibold text-white"
              style={{
                backgroundColor: post.avatarColor,
              }}
            >
              {post.initial}
            </div>

            <div>
              <p className="text-sm font-semibold">
                {post.name}
              </p>

              <p className="mt-0.5 text-[11px] text-[#aaa39a]">
                {post.time} · {post.location}
              </p>
            </div>
          </div>

          {/* Caption */}
          <div className="border-b border-[#45413c] p-5">
            <p className="text-sm leading-6 text-[#d5d0c9]">
              <span className="mr-2 font-semibold text-[#eee9e2]">
                {post.name}
              </span>

              {post.caption}
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-5 border-b border-[#45413c] px-5 py-4">

            <button
              onClick={() => setLiked((value) => !value)}
              className={`flex items-center gap-2 text-sm transition ${
                liked
                  ? "text-[#df7659]"
                  : "text-[#bdb7ae] hover:text-[#eee9e2]"
              }`}
            >
              <Heart
                size={20}
                fill={liked ? "currentColor" : "none"}
              />

              {likes}
            </button>

            <button
              onClick={() =>
                setShowComments((value) => !value)
              }
              className={`flex items-center gap-2 text-sm transition ${
                showComments
                  ? "text-[#df7659]"
                  : "text-[#bdb7ae] hover:text-[#eee9e2]"
              }`}
            >
              <MessageCircle size={20} />

              {post.comments.length}
            </button>

            <button
              className="ml-auto text-[#bdb7ae] transition hover:text-[#eee9e2]"
              aria-label="Share post"
            >
              <Send size={19} />
            </button>
          </div>

          {/* Comments */}
          {showComments && (
            <div className="flex flex-1 flex-col">

              <div className="max-h-[270px] space-y-4 overflow-y-auto p-5">
                {post.comments.length > 0 ? (
                  post.comments.map((comment) => (
                    <div
                      key={comment.id}
                      className="flex gap-3"
                    >
                      <div
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[10px] font-semibold text-white"
                        style={{
                          backgroundColor: comment.avatarColor,
                        }}
                      >
                        {comment.initial}
                      </div>

                      <p className="text-xs leading-5 text-[#d5d0c9]">
                        <span className="mr-2 font-semibold text-[#eee9e2]">
                          {comment.name}
                        </span>

                        {comment.text}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-[#817b73]">
                    No comments yet.
                  </p>
                )}
              </div>

              {/* Comment input */}
              <div className="mt-auto border-t border-[#45413c] p-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    className="min-w-0 flex-1 rounded-xl border border-[#45413c] bg-[#1e1d1b] px-3 py-2.5 text-xs text-[#eee9e2] outline-none placeholder:text-[#6f6a64] focus:border-[#df7659]"
                  />

                  <button className="rounded-xl bg-[#df7659] px-4 text-xs font-semibold text-white transition hover:bg-[#e98267]">
                    Post
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          {!showComments && (
            <div className="mt-auto flex items-center justify-between border-t border-[#45413c] px-5 py-4">

              <button
                onClick={onPrevious}
                disabled={!hasPrevious}
                className="flex items-center gap-1 text-xs text-[#aaa39a] transition hover:text-[#eee9e2] disabled:cursor-not-allowed disabled:opacity-20"
              >
                <ChevronLeft size={17} />
                Previous
              </button>

              <span className="text-[10px] text-[#6f6a64]">
                {post.position} / {post.total}
              </span>

              <button
                onClick={onNext}
                disabled={!hasNext}
                className="flex items-center gap-1 text-xs text-[#aaa39a] transition hover:text-[#eee9e2] disabled:cursor-not-allowed disabled:opacity-20"
              >
                Next
                <ChevronRight size={17} />
              </button>

            </div>
          )}

        </div>
      </div>
    </article>
  );
};

export default PostCard;