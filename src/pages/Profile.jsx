import { useState } from "react";
import { Sidebar } from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import MobileNav from "../components/layout/MobileNav";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileOverview from "../components/profile/ProfileOverview";
import ProfilePosts from "../components/profile/ProfilePosts";
import EditProfileDialog from "../components/profile/EditProfileDialog";
import ProfilePostDialog from "../components/profile/ProfilePostDialog";

const initialProfile = {
  name: "Yankosh", age: 22, program: "B.Tech · Information Technology · 4th year", campus: "GGV", from: "India", height: "5'6\"", lookingFor: "Dating",
  avatarUrl: "",
  about: "Code, coffee and late-night campus walks. Building things most days; looking for someone who can make me forget my laptop exists.",
  interests: ["💻 Coding", "🎧 Music", "📷 Photography", "🏸 Badminton", "☕ Café hopping"],
};

const initialPosts = [
  { id: 1, time: "12 min ago", location: "Campus Café", emoji: "☕", tag: "late afternoon fuel", background: "linear-gradient(135deg, #8c5a35, #d09a48)", likes: [{ id: "maya", name: "Maya", initials: "M", color: "#d99b3f" }, { id: "diego", name: "Diego", initials: "D", color: "#dc8c7a" }, { id: "lena", name: "Lena", initials: "L", color: "#b8aa94" }], comments: [{ id: "c1", name: "Maya", initials: "M", color: "#d99b3f", text: "This place really is a secret gem.", time: "8m" }, { id: "c2", name: "Diego", initials: "D", color: "#dc8c7a", text: "Saving this for the next study session.", time: "5m" }], caption: "Found the only quiet table on campus. Keeping the location strictly classified 🤫" },
  { id: 2, time: "Yesterday", location: "Computer Lab", emoji: "💻", tag: "building mode", background: "linear-gradient(135deg, #504461, #82709a)", likes: [{ id: "aarav", name: "Aarav", initials: "A", color: "#806c99" }, { id: "priya", name: "Priya", initials: "P", color: "#8db69b" }], comments: [{ id: "c3", name: "Aarav", initials: "A", color: "#806c99", text: "The most relatable debugging story ever.", time: "20h" }], caption: "Three hours debugging and the problem was a missing semicolon." },
  { id: 3, time: "3 days ago", location: "Open Air Theatre", emoji: "🎶", tag: "campus vibes", background: "linear-gradient(135deg, #5b4657, #8d7185)", likes: [{ id: "zoya", name: "Zoya", initials: "Z", color: "#866b80" }, { id: "theo", name: "Theo", initials: "T", color: "#756c61" }, { id: "rohan", name: "Rohan", initials: "R", color: "#5f817d" }], comments: [{ id: "c4", name: "Zoya", initials: "Z", color: "#866b80", text: "Need this night to happen again soon!", time: "2d" }], caption: "Best evening on campus in a while. More nights like this, please." },
];

const Profile = () => {
  const [profile, setProfile] = useState(initialProfile);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [posts, setPosts] = useState(initialPosts);
  const deletePost = (id) => setPosts((current) => current.filter((post) => post.id !== id));
  const updatePost = (id, caption) => setPosts((current) => current.map((post) => post.id === id ? { ...post, caption } : post));
  const deleteComment = (postId, commentId) => setPosts((current) => current.map((post) => post.id === postId ? { ...post, comments: post.comments.filter((comment) => comment.id !== commentId) } : post));
  const selectedPost = posts.find((post) => post.id === selectedPostId);

  return (
    <div className="min-h-screen bg-[#1e1d1b] font-[Inter] text-[#eee9e2]">
      <Sidebar />
      <Topbar />
      <main className="pb-24 pt-20 lg:ml-[237px] lg:pb-8">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <ProfileHeader onEdit={() => setIsEditingProfile(true)} />
          <ProfileOverview profile={profile} />
          <ProfilePosts posts={posts} onDelete={deletePost} onUpdate={updatePost} onOpen={setSelectedPostId} />
        </div>
      </main>
      <MobileNav />
      {isEditingProfile && (
        <EditProfileDialog
          profile={profile}
          onClose={() => setIsEditingProfile(false)}
          onSave={(updatedProfile) => {
            setProfile(updatedProfile);
            setIsEditingProfile(false);
          }}
        />
      )}
      {selectedPost && <ProfilePostDialog post={selectedPost} onClose={() => setSelectedPostId(null)} onDeleteComment={deleteComment} />}
    </div>
  );
};

export default Profile;
