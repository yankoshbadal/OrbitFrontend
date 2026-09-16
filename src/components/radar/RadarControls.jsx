import React from "react";

const RadarControls = ({ range, setRange }) => {
  const ranges = [15, 50, 150];

  return (
    <div className="mb-2 flex justify-center gap-2">
      {ranges.map((value) => (
        <button
          key={value}
          onClick={() => setRange(value)}
          className={`
            rounded-full border px-3 py-1.5 text-[10px]
            transition
            ${
              range === value
                ? "border-[#eee9e1] bg-[#f0ece5] text-[#2c2925]"
                : "border-[#514d47] text-[#bcb4aa] hover:bg-[#3a3732]"
            }
          `}
        >
          {value}m
        </button>
      ))}
    </div>
  );
};

export default RadarControls;