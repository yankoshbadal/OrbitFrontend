import { Ban, Ellipsis, MessageCircle, UserMinus } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const ConnectionCard = ({ connection, onBlock, onRemove }) => {
  const isDate = connection.type === "date";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleAction = (action) => {
    setIsMenuOpen(false);
    action(connection.id);
  };

  return (
    <article className="rounded-[20px] border border-[#45413c] bg-[#302d29] p-4 transition-colors hover:border-[#67574e] sm:p-5">
      <div className="flex items-start gap-3">
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[15px] text-base font-semibold text-[#292521]"
          style={{ backgroundColor: connection.color }}
        >
          {connection.initials}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <h2 className="truncate text-base font-semibold text-[#f0ebe4]">
              {connection.name}, {connection.age}
            </h2>
            <div className="relative flex shrink-0 items-center gap-1">
              <span className={`rounded-md px-2 py-1 text-[9px] font-bold tracking-[0.08em] ${
                isDate
                  ? "bg-[#5a3c30] text-[#ef9a82]"
                  : "bg-[#354b45] text-[#a5d0bc]"
              }`}>
                {isDate ? "DATE" : "FRIEND"}
              </span>
              <button
                type="button"
                aria-label={`Actions for ${connection.name}`}
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
                className="flex h-7 w-7 items-center justify-center rounded-lg text-[#aaa39a] transition-colors hover:bg-[#393631] hover:text-[#eee9e2]"
              >
                <Ellipsis size={18} />
              </button>
              {isMenuOpen && (
                <div className="absolute right-0 top-8 z-10 w-44 overflow-hidden rounded-xl border border-[#514d47] bg-[#302d29] p-1 shadow-xl shadow-black/30">
                  <button
                    type="button"
                    onClick={() => handleAction(onBlock)}
                    className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs font-medium text-[#e9c0b4] transition-colors hover:bg-[#513a31]"
                  >
                    <Ban size={14} /> Block
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAction(onRemove)}
                    className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs font-medium text-[#d0c9c0] transition-colors hover:bg-[#393631]"
                  >
                    <UserMinus size={14} /> Remove connection
                  </button>
                </div>
              )}
            </div>
          </div>
          <p className="mt-0.5 text-xs text-[#c1a795]">{connection.program}</p>
          <p className="mt-2 text-xs leading-5 text-[#b7aaa0]">{connection.note}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-[#45413c] pt-4">
        <span className="text-[10px] font-medium uppercase tracking-[0.08em] text-[#aaa39a]">
          Connected {connection.connectedAt}
        </span>
        <Link
          to="/chats"
          className="flex h-9 items-center gap-1.5 rounded-lg bg-[#393631] px-3 text-xs font-semibold text-[#eee9e2] transition-colors hover:bg-[#493f39]"
        >
          <MessageCircle size={14} /> Message
        </Link>
      </div>
    </article>
  );
};

export default ConnectionCard;
