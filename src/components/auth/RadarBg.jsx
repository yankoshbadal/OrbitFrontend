import React from "react";
const RadarBg = () => {
    const dots = [
    {
      className: "left-[62%] top-[25%]",
      color: "bg-[#8bb39a]",
      size: "h-7 w-7",
    },
    {
      className: "left-[76%] top-[34%]",
      color: "bg-[#d39a3d]",
      size: "h-7 w-7",
    },
    {
      className: "left-[65%] top-[57%]",
      color: "bg-[#d0806c]",
      size: "h-7 w-7",
    },
    {
      className: "left-[77%] top-[57%]",
      color: "bg-[#a99d8e]",
      size: "h-7 w-7",
    },
  ];

  return (
    <div className="relative h-[520px] w-[520px] max-w-full">
      {/* Outer radar ring */}
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.09]" />

      {/* Middle radar ring */}
      <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.09]" />

      {/* Inner radar ring */}
      <div className="absolute left-1/2 top-1/2 h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.09]" />

      {/* Center */}
      <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e5e0d8]" />

      {/* People */}
      {dots.map((dot, index) => (
        <div
          key={index}
          className={`absolute ${dot.className} ${dot.size} ${dot.color} rounded-full`}
        />
      ))}
    </div>
  );
};

export default RadarBg;