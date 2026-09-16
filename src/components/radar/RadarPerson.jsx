import React from "react";

const colors = {
  amber: "bg-[#dfa943]",
  coral: "bg-[#db8979]",
  green: "bg-[#91bea6]",
  cream: "bg-[#c7b9a4]",
};

const RadarPerson = ({
  person,
  left,
  top,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left, top }}
    >
      <div
        className={`
          ${colors[person.color]}
          flex h-12 w-12 items-center justify-center
          rounded-full text-sm font-semibold
          transition hover:scale-110
          sm:h-14 sm:w-14
        `}
      >
        {person.initial}
      </div>

      <div className="absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded bg-[#24221f] px-1.5 py-0.5 text-[10px]">
        {person.name} · {person.distance}m
      </div>
    </button>
  );
};

export default RadarPerson;