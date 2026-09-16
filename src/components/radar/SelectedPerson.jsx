import React from "react";

const colors = {
  amber: "bg-[#dfa943] text-[#211f1c]",
  coral: "bg-[#db8979] text-[#211f1c]",
  green: "bg-[#91bea6] text-[#211f1c]",
  cream: "bg-[#c7b9a4] text-[#211f1c]",
};

const SelectedPerson = ({ person }) => {
  return (
    <section className="rounded-[22px] border border-[#45413c] bg-[#302d29] p-5">

      <div className="flex items-center gap-3">

        <div
          className={`
            ${colors[person.color]}
            flex h-14 w-14 shrink-0
            items-center justify-center
            rounded-xl text-xl font-semibold
          `}
        >
          {person.initial}
        </div>

        <div>
          <h2 className="text-base font-semibold">
            {person.name}
          </h2>

          <p className="text-[11px] text-[#aaa39a]">
            {person.year} · {person.course} · {person.distance}m away
          </p>
        </div>

      </div>

      {person.message && (
        <p className="mt-4 text-sm leading-5 text-[#c8c0b6]">
          {person.message}
        </p>
      )}

      <div className="mt-4 grid grid-cols-3 gap-2">

        <button className="h-14 rounded-xl border border-[#48433e] text-[#df7659]">
          <span className="block text-lg">×</span>
          <span className="text-[10px]">Reject</span>
        </button>

        <button className="h-14 rounded-xl border border-[#48433e] text-[#dca849]">
          <span className="block text-lg">○</span>
          <span className="text-[10px]">Let's see</span>
        </button>

        <button className="h-14 rounded-xl bg-[#91bea6] text-[#20211e]">
          <span className="block text-lg">✓</span>
          <span className="text-[10px] font-semibold">
            Accept
          </span>
        </button>

      </div>
    </section>
  );
};

export default SelectedPerson;