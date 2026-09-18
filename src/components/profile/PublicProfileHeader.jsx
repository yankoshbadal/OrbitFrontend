import { ArrowLeft, Heart, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const PublicProfileHeader = ({ profile, isConnected, onConnect }) => (
  <header className="mb-5 flex flex-col gap-4 sm:mb-6 sm:flex-row sm:items-end sm:justify-between">
    <div>
      <Link to="/feed/people" className="inline-flex items-center gap-1.5 text-xs font-medium text-[#c1a795] transition-colors hover:text-[#eee9e2]">
        <ArrowLeft size={15} /> Back to people
      </Link>
      <p className="mt-4 text-[11px] font-bold tracking-[0.1em] text-[#c0ab91]">PROFILE</p>
      <h1 className="mt-1 font-[Space_Grotesk] text-3xl font-semibold tracking-tight text-[#f3eee7]">
        {profile.name}'s profile
      </h1>
    </div>
    <div className="flex gap-2">
      <button type="button" className="flex h-11 items-center gap-2 rounded-xl border border-[#45413c] px-4 text-sm font-semibold text-[#eee9e2] transition-colors hover:bg-[#302d29]">
        <MessageCircle size={16} /> Message
      </button>
      <button type="button" onClick={onConnect} className="flex h-11 items-center gap-2 rounded-xl bg-[#df6e51] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#ec7d60]">
        <Heart size={16} fill={isConnected ? "currentColor" : "none"} /> {isConnected ? "Connected" : "Connect"}
      </button>
    </div>
  </header>
);

export default PublicProfileHeader;
