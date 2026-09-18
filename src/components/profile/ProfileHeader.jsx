import { Pencil, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const ProfileHeader = ({ onEdit }) => (
  <header className="mb-5 flex items-end justify-between gap-4 sm:mb-6">
    <div>
      <p className="text-[11px] font-bold tracking-[0.1em] text-[#c0ab91]">PROFILE</p>
      <h1 className="mt-1 font-[Space_Grotesk] text-3xl font-semibold tracking-tight text-[#f3eee7]">
        Your Orbit profile
      </h1>
    </div>
    <div className="flex shrink-0 items-center gap-2">
      <Link
        to="/settings"
        aria-label="Settings"
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#45413c] text-[#eee9e2] transition-colors hover:bg-[#302d29] lg:hidden"
      >
        <Settings size={17} />
      </Link>
      <button
        type="button"
        onClick={onEdit}
        className="flex h-11 items-center gap-2 rounded-xl border border-[#45413c] px-4 text-sm font-semibold text-[#eee9e2] transition-colors hover:bg-[#302d29]"
      >
        <Pencil size={16} />
        <span className="hidden sm:inline">Edit profile</span>
        <span className="sm:hidden">Edit</span>
      </button>
    </div>
  </header>
);

export default ProfileHeader;
