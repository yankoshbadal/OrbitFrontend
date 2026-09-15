import React from "react";

const stats = [
  {
    value: "412",
    label: "verified this week",
  },
  {
    value: "12",
    label: "on radar right now",
  },
  {
    value: "3",
    label: "campuses live",
  },
];

const Stats = () => {
  return (
    <div className="flex gap-14">
      {stats.map((stat) => (
        <div key={stat.label}>
          <div className="text-xl font-semibold text-[#eeeae3]">
            {stat.value}
          </div>

          <div className="mt-1 text-[11px] text-[#918b83]">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;