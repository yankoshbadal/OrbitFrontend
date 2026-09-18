import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Sidebar } from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import MobileNav from "../components/layout/MobileNav";
import ProfileOverview from "../components/profile/ProfileOverview";
import PublicProfileHeader from "../components/profile/PublicProfileHeader";
import PublicProfilePosts from "../components/profile/PublicProfilePosts";
import PublicPostDialog from "../components/profile/PublicPostDialog";
import { getPublicProfile } from "../data/publicProfiles";

const sampleComments = [
  { name: "Priya", initials: "P", color: "#60907a", text: "This looks so good!" },
  { name: "Aarav", initials: "A", color: "#806c99", text: "Adding this to my weekend plans." },
  { name: "Zoya", initials: "Z", color: "#866b80", text: "Love this energy." },
];

const withComments = (posts = []) => posts.map((post) => ({
  ...post,
  commentList: post.commentList || sampleComments.slice(0, Math.min(post.comments, sampleComments.length)).map((comment, index) => ({ ...comment, id: `${post.id}-comment-${index}`, time: `${index + 1}h` })),
}));

const UserProfile = () => {
  const { profileId } = useParams();
  const profile = getPublicProfile(profileId);
  const [isConnected, setIsConnected] = useState(false);
  const [posts, setPosts] = useState(() => withComments(profile?.posts));
  const [selectedPostId, setSelectedPostId] = useState(null);
  const selectedPost = posts.find((post) => post.id === selectedPostId);

  const toggleLike = (postId) => setPosts((currentPosts) => currentPosts.map((post) => post.id === postId ? { ...post, liked: !post.liked, likes: post.likes + (post.liked ? -1 : 1) } : post));
  const addComment = (postId, text) => setPosts((currentPosts) => currentPosts.map((post) => post.id === postId ? { ...post, comments: post.comments + 1, commentList: [...(post.commentList || []), { id: `${postId}-${Date.now()}`, text }] } : post));

  if (!profile) {
    return (
      <div className="min-h-screen bg-[#1e1d1b] font-[Inter] text-[#eee9e2]">
        <Sidebar /><Topbar />
        <main className="flex min-h-screen items-center justify-center px-4 pt-20 lg:ml-[237px]">
          <div className="max-w-md text-center"><p className="text-[11px] font-bold tracking-[0.1em] text-[#c0ab91]">PROFILE NOT FOUND</p><h1 className="mt-2 font-[Space_Grotesk] text-3xl font-semibold">This profile is unavailable.</h1><Link to="/feed/people" className="mt-6 inline-flex rounded-xl bg-[#df6e51] px-4 py-3 text-sm font-semibold text-white hover:bg-[#ec7d60]">Browse people</Link></div>
        </main>
        <MobileNav />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1e1d1b] font-[Inter] text-[#eee9e2]">
      <Sidebar /><Topbar />
      <main className="pb-24 pt-20 lg:ml-[237px] lg:pb-8">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <PublicProfileHeader profile={profile} isConnected={isConnected} onConnect={() => setIsConnected((connected) => !connected)} />
          <ProfileOverview profile={profile} />
          <PublicProfilePosts profile={profile} posts={posts} onOpen={setSelectedPostId} />
        </div>
      </main>
      <MobileNav />
      {selectedPost && <PublicPostDialog profile={profile} post={selectedPost} onClose={() => setSelectedPostId(null)} onLike={toggleLike} onAddComment={addComment} />}
    </div>
  );
};

export default UserProfile;
