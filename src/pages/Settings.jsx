import { useState } from "react";
import { ChevronDown, LogOut, ShieldBan, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import MobileNav from "../components/layout/MobileNav";
import BlockedUsersDialog from "../components/settings/BlockedUsersDialog";
import ConfirmDialog from "../components/settings/ConfirmDialog";
import SettingsHeader from "../components/settings/SettingsHeader";
import SettingRow from "../components/settings/SettingRow";

const initialBlockedUsers = [
  { id: "jordan", name: "Jordan", initials: "J", color: "#957c65" },
  { id: "sam", name: "Sam", initials: "S", color: "#708998" },
];

const Settings = () => {
  const navigate = useNavigate();
  const [showOnRadar, setShowOnRadar] = useState(true);
  const [distance, setDistance] = useState(5);
  const [isDistanceMenuOpen, setIsDistanceMenuOpen] = useState(false);
  const [blockedUsers, setBlockedUsers] = useState(initialBlockedUsers);
  const [isBlockedUsersOpen, setIsBlockedUsersOpen] = useState(false);
  const [pendingAction, setPendingAction] = useState(null);

  const actions = {
    logout: { title: "Log out?", description: "You will need to sign in again to access your Orbit account.", confirmLabel: "Log out" },
    deactivate: { title: "Deactivate account?", description: "Your profile will no longer be visible on Orbit until you reactivate your account.", confirmLabel: "Deactivate", danger: true },
    delete: { title: "Delete account?", description: "This action is permanent. Your profile, connections, and posts will be removed.", confirmLabel: "Delete account", danger: true },
  };

  const confirmAction = () => {
    setPendingAction(null);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#1e1d1b] font-[Inter] text-[#eee9e2]">
      <Sidebar />
      <Topbar />
      <main className="pb-24 pt-20 lg:ml-[237px] lg:pb-8">
        <div className="mx-auto max-w-[840px] px-4 sm:px-6 lg:px-8">
          <SettingsHeader />
          <section className="rounded-[22px] border border-[#45413c] bg-[#302d29] px-5 sm:px-6">
            <SettingRow title="Show on radar" description="Allow nearby people to discover you on the campus radar.">
              <button type="button" role="switch" aria-label="Show on radar" aria-checked={showOnRadar} onClick={() => setShowOnRadar((visible) => !visible)} className={`relative h-7 w-12 rounded-full p-1 transition-colors ${showOnRadar ? "bg-[#438d68]" : "bg-[#ad5144]"}`}>
                <span className={`absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${showOnRadar ? "translate-x-5" : "translate-x-0"}`} />
              </button>
            </SettingRow>
            <SettingRow title="Radar distance" description="Choose how far away people can be when they appear on your radar.">
              <div className="relative">
                <button type="button" aria-haspopup="listbox" aria-expanded={isDistanceMenuOpen} onClick={() => setIsDistanceMenuOpen((open) => !open)} className="flex h-10 min-w-24 items-center justify-between gap-3 rounded-xl border border-[#514d47] bg-[#393631] px-3 text-sm font-semibold text-[#eee9e2] transition-colors hover:border-[#6a5c52]">
                  {distance} km
                  <ChevronDown size={15} className={`text-[#aaa39a] transition-transform ${isDistanceMenuOpen ? "rotate-180" : ""}`} />
                </button>
                {isDistanceMenuOpen && (
                  <div role="listbox" aria-label="Radar distance" className="absolute right-0 top-11 z-20 w-full overflow-hidden rounded-xl border border-[#514d47] bg-[#302d29] p-1 shadow-xl shadow-black/30">
                    {[1, 3, 5, 10].map((option) => (
                      <button key={option} type="button" role="option" aria-selected={distance === option} onClick={() => { setDistance(option); setIsDistanceMenuOpen(false); }} className={`flex w-full rounded-lg px-3 py-2 text-left text-xs font-semibold transition-colors ${distance === option ? "bg-[#513a31] text-[#ef9a82]" : "text-[#d0c9c0] hover:bg-[#393631]"}`}>
                        {option} km
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </SettingRow>
            <SettingRow title="Blocked users" description="Manage people you have blocked from contacting or finding you.">
              <button type="button" onClick={() => setIsBlockedUsersOpen(true)} className="flex h-10 items-center gap-2 rounded-xl border border-[#514d47] px-3 text-xs font-semibold text-[#eee9e2] hover:bg-[#393631]"><ShieldBan size={15} /> {blockedUsers.length} blocked</button>
            </SettingRow>
            <SettingRow title="Log out" description="Sign out of your Orbit account on this device.">
              <button type="button" onClick={() => setPendingAction("logout")} className="flex h-10 items-center gap-2 rounded-xl border border-[#514d47] px-3 text-xs font-semibold text-[#eee9e2] hover:bg-[#393631]"><LogOut size={15} /> Log out</button>
            </SettingRow>
            <SettingRow danger title="Deactivate account" description="Temporarily hide your account and profile from Orbit.">
              <button type="button" onClick={() => setPendingAction("deactivate")} className="h-10 rounded-xl border border-[#765043] px-3 text-xs font-semibold text-[#ef9a82] hover:bg-[#513a31]">Deactivate</button>
            </SettingRow>
            <SettingRow danger title="Delete account" description="Permanently delete your Orbit account and all its data.">
              <button type="button" onClick={() => setPendingAction("delete")} className="flex h-10 items-center gap-2 rounded-xl border border-[#8d4136] bg-[#51312c] px-3 text-xs font-semibold text-[#f3ac98] hover:bg-[#633831]"><Trash2 size={15} /> Delete account</button>
            </SettingRow>
          </section>
        </div>
      </main>
      <MobileNav />
      {isBlockedUsersOpen && <BlockedUsersDialog users={blockedUsers} onClose={() => setIsBlockedUsersOpen(false)} onUnblock={(id) => setBlockedUsers((users) => users.filter((user) => user.id !== id))} />}
      {pendingAction && <ConfirmDialog action={actions[pendingAction]} onCancel={() => setPendingAction(null)} onConfirm={confirmAction} />}
    </div>
  );
};

export default Settings;
