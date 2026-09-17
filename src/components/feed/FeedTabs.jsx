import { Link } from "react-router-dom";

const FeedTabs = ({ activeTab }) => {
  return (
    <div className="mb-5 flex w-fit rounded-xl border border-stone-700 bg-stone-800/70 p-1">
      <Link
        to="/feed/people"
        className={`rounded-lg px-5 py-2 text-xs font-semibold transition ${
          activeTab === "People"
            ? "bg-stone-100 text-stone-900 shadow-sm"
            : "text-stone-400 hover:text-stone-200"
        }`}
      >
        People
      </Link>

      <Link
        to="/feed/posts"
        className={`rounded-lg px-5 py-2 text-xs font-semibold transition ${
          activeTab === "Posts"
            ? "bg-stone-100 text-stone-900 shadow-sm"
            : "text-stone-400 hover:text-stone-200"
        }`}
      >
        Posts
      </Link>
    </div>
  );
};

export default FeedTabs;