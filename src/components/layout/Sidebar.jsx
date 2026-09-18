import { NavLink, useLocation } from "react-router-dom";
import Logo from "../common/Logo";
import React from "react";
import {
  Radar,
  UsersRound,
  UserCheck,
  MessageCircle,
  HeartHandshake,
  Settings,
} from "lucide-react";

const navItems = [
  {
    label: "Radar",
    path: "/home",
    icon: Radar,
  },
  {
    label: "Feed",
    paths: ["/feed/people", "/feed/posts"],
    icon: UsersRound,
  },
  {
    label: "Requests",
    path: "/requests",
    icon: UserCheck,
    badge: 2,
  },
  {
    label: "Chats",
    path: "/chats",
    icon: MessageCircle,
  },
  {
    label: "Connections",
    path: "/connections",
    icon: HeartHandshake,
  },
];

const NavItem = ({ item }) => {
  const location = useLocation();

  const isActive = item.paths
    ? item.paths.includes(location.pathname)
    : location.pathname === item.path;

  return (
    <NavLink
      to={item.path || item.paths[0]}
      className={`
        flex items-center gap-3
        rounded-xl px-3 py-2.5
        text-sm transition-colors

        ${
          isActive
            ? "border border-[#8a4e3d] bg-[#513a31] text-[#e47757]"
            : "text-[#d0c9c0] hover:bg-[#393631]"
        }
      `}
    >
      <span className="flex w-5 items-center justify-center text-lg">
        <item.icon size={20} strokeWidth={2} />
      </span>

      <span>{item.label}</span>

      {item.badge && (
        <span
          className="
            ml-auto
            flex h-5 min-w-5
            items-center justify-center
            rounded-full
            bg-[#df7659]
            px-1.5
            text-[10px]
            font-bold
            text-white
          "
        >
          {item.badge}
        </span>
      )}
    </NavLink>
  );
};

const Sidebar = () => {
  return (
    <aside
      className="
        fixed inset-y-0 left-0 z-40
        hidden w-[237px]
        flex-col
        border-r border-[#3a3732]
        bg-[#302d29]
        px-4 py-6
        lg:flex
      "
    >
      {/* Logo */}
      <div className="mb-6 px-2">
        <Logo />
      </div>

      {/* Navigation */}
      <nav className="space-y-1">
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            item={item}
          />
        ))}
      </nav>

      {/* Bottom section */}
      <div
        className="
          mt-auto
          border-t border-[#49453f]
          pt-4
        "
      >
        {/* Profile */}
        <NavLink
          to="/profile"
          className="
            mb-4
            flex items-center gap-3
            rounded-xl px-2 py-2
            hover:bg-[#393631]
          "
        >
          <div
            className="
              flex h-9 w-9
              items-center justify-center
              rounded-xl
              bg-[#c5b59d]
              text-sm font-semibold
              text-[#25221f]
            "
          >
            Y
          </div>

          <div>
            <p className="text-xs font-semibold text-[#f0ebe4]">
              Yankosh
            </p>

            <p className="text-[11px] text-[#aaa39a]">
              View profile
            </p>
          </div>
        </NavLink>

        {/* Settings */}
        <NavLink
          to="/settings"
          className={({ isActive }) => `
            flex items-center gap-3
            rounded-xl px-3 py-2.5
            text-sm transition-colors

            ${
              isActive
                ? "bg-[#393631] text-[#e47757]"
                : "text-[#d0c9c0] hover:bg-[#393631]"
            }
          `}
        >
          <span className="flex w-5 items-center justify-center">
            <Settings size={20} strokeWidth={2} />
          </span>

          <span>Settings</span>
        </NavLink>
      </div>
    </aside>
  );
};

export { NavItem, Sidebar };
