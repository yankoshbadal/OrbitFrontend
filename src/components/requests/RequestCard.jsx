import { CalendarHeart, Clock3, UserRoundPlus, X } from "lucide-react";

const RequestCard = ({ request, type, onReject, onMakeFriend, onAcceptDate, onCancel }) => {
  const isReceived = type === "received";

  return (
    <article className="flex flex-col rounded-[20px] border border-[#45413c] bg-[#302d29] p-4 shadow-sm sm:p-5">
      <div className="flex items-start gap-3">
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[15px] text-base font-semibold text-[#292521]"
          style={{ backgroundColor: request.color }}
        >
          {request.initials}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h2 className="truncate text-base font-semibold text-[#f0ebe4]">
                {request.name}, {request.age}
              </h2>
              <p className="mt-0.5 text-xs text-[#c1a795]">{request.program}</p>
            </div>
            <time className="shrink-0 text-[10px] text-[#aaa39a]">{request.time}</time>
          </div>
          <p className="mt-2 text-xs leading-5 text-[#b7aaa0]">{request.message}</p>
          <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#c0ab91]">
            {request.mutuals} mutual {request.mutuals === 1 ? "connection" : "connections"}
          </p>
        </div>
      </div>

      <div className={`mt-4 grid gap-2 border-t border-[#45413c] pt-4 ${
        isReceived && request.dateInvite ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-2"
      }`}>
        {isReceived ? (
          <>
            <button
              type="button"
              onClick={() => onReject(request.id)}
              className="flex h-10 items-center justify-center gap-1.5 rounded-xl border border-[#5a514b] text-xs font-semibold text-[#d0c9c0] transition-colors hover:bg-[#393631]"
            >
              <X size={15} /> Reject
            </button>
            <button
              type="button"
              onClick={() => onMakeFriend(request.id)}
              className="flex h-10 items-center justify-center gap-1.5 rounded-xl border border-[#8a6d56] bg-[#493a32] text-xs font-semibold text-[#f0d5bf] transition-colors hover:bg-[#5a473d]"
            >
              <UserRoundPlus size={15} /> Make Friend
            </button>
            {request.dateInvite && (
              <button
                type="button"
                onClick={() => onAcceptDate(request.id)}
                className="flex h-10 items-center justify-center gap-1.5 rounded-xl bg-[#df6e51] text-xs font-semibold text-white transition-colors hover:bg-[#ec7d60]"
              >
                <CalendarHeart size={15} /> Accept Date
              </button>
            )}
          </>
        ) : (
          <>
            <span className="flex h-10 items-center justify-center gap-1.5 rounded-xl border border-[#4d4943] bg-[#393631] text-xs font-medium text-[#c1a795]">
              <Clock3 size={15} /> Pending
            </span>
            <button
              type="button"
              onClick={() => onCancel(request.id)}
              className="flex h-10 items-center justify-center gap-1.5 rounded-xl border border-[#765043] text-xs font-semibold text-[#e47757] transition-colors hover:bg-[#513a31]"
            >
              <X size={15} /> Cancel
            </button>
          </>
        )}
      </div>
    </article>
  );
};

export default RequestCard;
