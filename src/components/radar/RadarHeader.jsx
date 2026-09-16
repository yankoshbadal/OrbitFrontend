import React from "react";

const RadarHeader = () => {
  return (
    <div className="mb-6">
      <div className="mb-2 flex items-center gap-2 text-[10px] font-semibold tracking-[0.12em] text-[#aaa39a]">
        <span className="h-2 w-2 rounded-full bg-[#7fb895]" />
        SIGMA HOUSE · FORMAL · LIVE
      </div>

      <h1 className="text-[27px] font-semibold tracking-tight sm:text-[30px]">
        12 people around you
      </h1>

      <p className="mt-1 max-w-[600px] text-sm leading-5 text-[#aaa39a]">
        Everyone verified and nearby right now. Tap someone on the radar
        or in the list to see more.
      </p>
    </div>
  );
};

export default RadarHeader;