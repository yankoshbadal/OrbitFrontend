import { Heart, MessageCircle } from "lucide-react";

const PublicProfilePosts = ({ profile, posts, onOpen }) => (
  <section className="mt-8">
    <div className="mb-4">
      <p className="text-[11px] font-bold tracking-[0.1em] text-[#c0ab91]">ACTIVITY</p>
      <h2 className="mt-1 font-[Space_Grotesk] text-2xl font-semibold">{profile.name}'s posts</h2>
    </div>
    {posts.length ? (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <article key={post.id} onClick={() => onOpen(post.id)} className="cursor-pointer overflow-hidden rounded-[20px] border border-[#45413c] bg-[#302d29] transition-colors hover:border-[#67574e]">
            <div className="relative flex aspect-[16/9] items-center justify-center" style={{ background: post.background }}>
              <span className="text-6xl sm:text-7xl">{post.emoji}</span>
              <span className="absolute bottom-3 left-3 rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-sm">{post.tag}</span>
            </div>
            <div className="p-4">
              <p className="text-sm font-semibold">{profile.name}</p>
              <p className="mt-0.5 text-[10px] text-[#aaa39a]">{post.time} · {post.location}</p>
              <p className="mt-3 text-sm leading-6 text-[#d5d0c9]">{post.caption}</p>
              <div className="mt-4 flex items-center gap-4 text-xs text-[#aaa39a]">
                <span className="flex items-center gap-1.5"><Heart size={15} /> {post.likes}</span>
                <span className="flex items-center gap-1.5"><MessageCircle size={15} /> {post.comments}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    ) : <div className="rounded-[20px] border border-[#45413c] bg-[#302d29] px-6 py-12 text-center text-sm text-[#aaa39a]">No posts yet.</div>}
  </section>
);

export default PublicProfilePosts;
