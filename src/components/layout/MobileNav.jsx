import { NavLink } from "react-router-dom";
import React from "react";
import {
  Radar,
  UsersRound,
  UserCheck,
  MessageCircle,
  Heart,
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
    path: "/feed",
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
    label: "Us",
    path: "/us",
    icon: Heart,
  },
];

const MobileNav = () => {
  return (
    <nav
      className="
        fixed inset-x-0 bottom-0 z-40
        flex h-[68px]
        border-t border-[#3b3834]
        bg-[#302d29]
        px-2
        lg:hidden
      "
    >
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `
            relative
            flex flex-1
            flex-col
            items-center
            justify-center
            gap-1
            text-[10px]
            transition-colors
            ${
              isActive
                ? "text-[#e47757]"
                : "text-[#aaa39a]"
            }
            `
          }
        >
          <span className="text-[19px] leading-none">
           <item.icon size={20} strokeWidth={2} />
          </span>

          <span>{item.label}</span>

          {item.badge && (
            <span
              className="
                absolute
                right-[18%]
                top-2
                flex h-4 min-w-4
                items-center justify-center
                rounded-full
                bg-[#df7659]
                px-1
                text-[9px]
                font-semibold
                text-white
              "
            >
              {item.badge}
            </span>
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default MobileNav;