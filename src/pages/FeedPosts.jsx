import { useState } from "react";

import { Sidebar } from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import MobileNav from "../components/layout/MobileNav";

import FeedHeader from "../components/feed/FeedHeader";
import FeedTabs from "../components/feed/FeedTabs";
import PostsFeed from "../components/feed/PostsFeed";

const FeedPosts = () => {
  const [activeTab, setActiveTab] = useState("Posts");

  return (
    <div className="min-h-screen bg-[#1e1d1b] text-[#eee9e2]">
      <Sidebar />

      <Topbar />

      <main className="pt-20 pb-24 lg:ml-[237px] lg:pb-8">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">

          <FeedHeader />

          <FeedTabs
            activeTab={activeTab}
            onChange={setActiveTab}
          />

          {activeTab === "Posts" && (
            <PostsFeed />
          )}

          {activeTab === "People" && (
            <div className="rounded-[22px] border border-[#45413c] bg-[#302d29] p-10 text-center">
              <p className="text-sm text-[#aaa39a]">
                People will appear here.
              </p>
            </div>
          )}

        </div>
      </main>

      <MobileNav />
    </div>
  );
};

export default FeedPosts;