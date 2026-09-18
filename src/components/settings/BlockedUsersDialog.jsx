import { ShieldOff, UserRoundX, X } from "lucide-react";

const BlockedUsersDialog = ({ users, onClose, onUnblock }) => (
  <div className="fixed inset-0 z-50 flex items-end bg-black/65 p-0 backdrop-blur-sm sm:items-center sm:justify-center sm:p-6">
    <div role="dialog" aria-modal="true" aria-labelledby="blocked-title" className="w-full rounded-t-[24px] border border-[#514d47] bg-[#302d29] p-5 shadow-2xl sm:max-w-lg sm:rounded-[24px] sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div><p className="text-[11px] font-bold tracking-[0.1em] text-[#c0ab91]">PRIVACY</p><h2 id="blocked-title" className="mt-1 text-xl font-semibold">Blocked users</h2></div>
        <button type="button" onClick={onClose} aria-label="Close blocked users" className="flex h-9 w-9 items-center justify-center rounded-lg text-[#aaa39a] hover:bg-[#393631]"><X size={20} /></button>
      </div>
      <div className="mt-5 space-y-2">
        {users.length ? users.map((user) => (
          <div key={user.id} className="flex items-center gap-3 rounded-xl bg-[#393631] p-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl text-sm font-semibold text-[#2b2522]" style={{ backgroundColor: user.color }}>{user.initials}</span>
            <span className="flex-1 text-sm font-semibold">{user.name}</span>
            <button type="button" onClick={() => onUnblock(user.id)} className="flex h-8 items-center gap-1 rounded-lg px-2.5 text-xs font-semibold text-[#e99a82] hover:bg-[#513a31]"><ShieldOff size={14} /> Unblock</button>
          </div>
        )) : (
          <div className="py-8 text-center"><UserRoundX className="mx-auto text-[#756c64]" size={28} /><p className="mt-3 text-sm text-[#aaa39a]">You have not blocked anyone.</p></div>
        )}
      </div>
    </div>
  </div>
);

export default BlockedUsersDialog;
