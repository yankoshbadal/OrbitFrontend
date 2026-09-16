import React from "react";
import RadarPerson from "./RadarPerson";

const positions = {
  Maya: {
    left: "70%",
    top: "35%",
  },
  Diego: {
    left: "30%",
    top: "68%",
  },
  Priya: {
    left: "45%",
    top: "25%",
  },
  Theo: {
    left: "75%",
    top: "68%",
  },
};

const RadarMap = ({ people, setSelectedPerson }) => {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[500px] overflow-hidden">
      
      {/* Radar rings */}

      <div className="absolute inset-[12%] rounded-full border border-[#565149]" />

      <div className="absolute inset-[26%] rounded-full border border-[#565149]" />

      <div className="absolute inset-[40%] rounded-full border border-[#565149]" />

      {/* Radar scanner */}

      <div
        className="
          radar-scanner
          absolute
          left-1/2
          top-1/2
          z-10
          h-[48%]
          w-[48%]
          origin-top-left
        "
      >
        <svg
  viewBox="0 0 100 100"
  className="h-full w-full overflow-visible"
>
  <defs>
    <linearGradient
      id="scannerGradient"
      x1="0"
      y1="0"
      x2="1"
      y2="0"
    >
      <stop
        offset="0%"
        stopColor="#df7659"
        stopOpacity="0.30"
      />

      <stop
        offset="45%"
        stopColor="#df7659"
        stopOpacity="0.18"
      />

      <stop
        offset="75%"
        stopColor="#df7659"
        stopOpacity="0.06"
      />

      <stop
        offset="100%"
        stopColor="#df7659"
        stopOpacity="0"
      />
    </linearGradient>
  </defs>

  <path
    d="
      M 0 0
      L 100 0
      A 100 100 0 0 1 0 100
      Z
    "
    fill="url(#scannerGradient)"
  />
</svg>
      </div>

      {/* Radar center */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          z-20
          flex
          h-5
          w-5
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          bg-[#f2eee7]
          shadow-[0_0_0_6px_rgba(242,238,231,0.08)]
        "
      >
        <div className="h-2 w-2 rounded-full bg-[#8c8175]" />
      </div>

      {/* People */}

      {people.map((person) => {
        const position = positions[person.name];

        if (!position) {
          return null;
        }

        return (
          <RadarPerson
            key={person.id}
            person={person}
            left={position.left}
            top={position.top}
            onClick={() => setSelectedPerson(person)}
          />
        );
      })}
    </div>
  );
};

export default RadarMap;