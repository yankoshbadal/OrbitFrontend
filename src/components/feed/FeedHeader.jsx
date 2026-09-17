import { Circle } from "lucide-react";
import React from "react";

const FeedHeader = () => {
  return (
    <div className="mb-7">
      <div className="mb-2 flex items-center gap-2">
        <Circle
          size={8}
          fill="currentColor"
          className="text-emerald-400"
        />

        <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400">
          Campus Discovery
        </span>
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-stone-100">
        Feed
      </h1>

      <p className="mt-1 text-sm text-stone-400">
        Browse campus profiles or see what people are posting nearby.
      </p>
    </div>
  );
};

export default FeedHeader;