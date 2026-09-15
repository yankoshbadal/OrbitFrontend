import React from 'react'

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#633e31]">
        <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#df6c4f]">
          <div className="h-2 w-2 rounded-full bg-[#df6c4f]" />
        </div>
      </div>

      <span className="text-sm font-bold tracking-wide text-white font-['sans-serif']">
        Orbit
      </span>
    </div>
  );
};


export default Logo;