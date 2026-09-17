import React from "react";

import {
  Heart,
  X,
  Coffee,
  Music2,
  BookOpen,
  Dumbbell,
  Palette,
  MessageCircle,
  Clapperboard,
  Pizza,
  Gamepad2,
  Code2,
} from "lucide-react";

const iconMap = {
  Coffee,
  Music2,
  BookOpen,
  Dumbbell,
  Palette,
  MessageCircle,
  Clapperboard,
  Pizza,
  Gamepad2,
  Code2,
};

const PersonCard = ({ person, onLike, onPass }) => {
  const {
    name,
    age,
    branch,
    initials,
    color,
    mutuals,
    tags,
    bio,
  } = person;

  return (
    <article
      className="relative flex h-[388px] w-full flex-col justify-end overflow-hidden rounded-[22px] border bg-[#171512] shadow-xl"
      style={{
        borderColor: `${color}99`,
      }}
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              to bottom,
              ${color}cc 0%,
              ${color}88 30%,
              ${color}44 52%,
              #171512 82%
            )
          `,
        }}
      />

      {/* Initial */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="select-none text-[120px] font-bold leading-none text-white/[0.13]">
          {initials}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 px-5 pb-4">
        <div className="mb-3 flex items-end gap-2">
          <h2 className="text-xl font-bold text-[#eee9e2]">
            {name},
          </h2>

          <span className="text-xl font-bold text-[#eee9e2]">
            {age}
          </span>
        </div>

        <div className="mb-3 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide">
          <span style={{ color }}>
            {branch}
          </span>

          <span className="text-stone-500">
            •
          </span>

          <span style={{ color }}>
            {mutuals} {mutuals === 1 ? "Mutual" : "Mutuals"}
          </span>
        </div>

        <div className="mb-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => {
            const Icon = iconMap[tag.icon];

            return (
              <span
                key={tag.label}
                className="flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-medium text-stone-300 backdrop-blur-sm"
              >
                {Icon && <Icon size={11} />}
                {tag.label}
              </span>
            );
          })}
        </div>

        <p className="line-clamp-2 min-h-[34px] text-xs leading-4 text-stone-400">
          {bio}
        </p>

        {/* Actions */}
        <div className="mt-3 flex justify-center gap-3">
          <button
            onClick={() => onPass(person)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-700 bg-stone-800 text-[#df7659] transition hover:scale-105 hover:bg-stone-700"
          >
            <X size={19} />
          </button>

          <button
            onClick={() => onLike(person)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#df7659] text-white shadow-lg shadow-[#df7659]/20 transition hover:scale-105 hover:bg-[#e98267]"
          >
            <Heart
              size={20}
              fill="currentColor"
            />
          </button>
        </div>
      </div>
    </article>
  );
};

export default PersonCard;