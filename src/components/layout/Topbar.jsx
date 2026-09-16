import { useState } from "react";
import React from "react";

const Topbar = () => {
  const [search, setSearch] = useState("");

  return (
    <header
      className="
        fixed left-0 right-0 top-0 z-30
        h-[64px]
        border-b border-[#302e2a]
        bg-[#1e1d1b]/95
        backdrop-blur
        lg:left-[237px]
      "
    >
      <div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Search */}
        <div className="relative w-full max-w-[353px]">

          {/* Search icon */}
          <svg
            className="
              absolute left-3 top-1/2
              -translate-y-1/2
              text-[#aaa39a]
            "
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4-4" />
          </svg>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search people, campuses, chats..."
            className="
              h-9 w-full
              rounded-xl
              border border-[#514d47]
              bg-[#37342f]
              pl-10 pr-3
              text-xs
              text-[#eee8df]
              outline-none
              placeholder:text-[#aaa39a]
              focus:border-[#7b6558]
            "
          />

        </div>

        {/* Right controls */}
        <div className="ml-4 flex items-center gap-2">

          {/* Notifications */}
          <button
            type="button"
            className="
              relative
              flex h-9 w-9
              items-center justify-center
              rounded-xl
              border border-[#45413c]
              bg-[#292723]
              text-[#d6cec3]
              hover:bg-[#37342f]
            "
            aria-label="Notifications"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            >
              <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
              <path d="M10 21h4" />
            </svg>

            {/* Notification dot */}
            <span
              className="
                absolute right-1.5 top-1.5
                h-1.5 w-1.5
                rounded-full
                bg-[#df7659]
              "
            />
          </button>

          {/* Profile avatar */}
          <button
            type="button"
            className="
              flex h-9 w-9
              items-center justify-center
              rounded-xl
              bg-[#c5b59d]
              text-xs font-semibold
              text-[#292723]
            "
            aria-label="Profile"
          >
            Y
          </button>

        </div>
      </div>
    </header>
  );
};

export default Topbar ;