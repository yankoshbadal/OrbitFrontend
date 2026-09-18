import ProfilePostCard from "./ProfilePostCard";

const ProfilePosts = ({ posts, onDelete, onUpdate, onOpen }) => (
  <section className="mt-8">
    <div className="mb-4">
      <p className="text-[11px] font-bold tracking-[0.1em] text-[#c0ab91]">ACTIVITY</p>
      <h2 className="mt-1 font-[Space_Grotesk] text-2xl font-semibold">Your posts</h2>
    </div>
    {posts.length ? (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => <ProfilePostCard key={post.id} post={post} onDelete={onDelete} onUpdate={onUpdate} onOpen={onOpen} />)}
      </div>
    ) : (
      <div className="rounded-[20px] border border-[#45413c] bg-[#302d29] px-6 py-12 text-center text-sm text-[#aaa39a]">You have no posts yet.</div>
    )}
  </section>
);

export default ProfilePosts;
