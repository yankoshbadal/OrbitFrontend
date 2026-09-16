import React from "react";

const colors = {
  amber: "bg-[#dfa943]",
  coral: "bg-[#db8979]",
  green: "bg-[#91bea6]",
  cream: "bg-[#c7b9a4]",
};

const NearbyPeople = ({
  people,
  selectedPerson,
  setSelectedPerson,
}) => {
  return (
    <section className="rounded-[22px] border border-[#45413c] bg-[#302d29] p-4">

      <p className="mb-2 px-1 text-[10px] font-semibold tracking-wide text-[#aaa39a]">
        EVERYONE NEARBY
      </p>

      {people.map((person) => (
        <button
          key={person.id}
          onClick={() => setSelectedPerson(person)}
          className={`
            flex w-full items-center gap-3
            border-b border-[#47433e]
            py-3 text-left
            last:border-b-0
            hover:bg-[#383530]
          `}
        >

          <div
            className={`
              ${colors[person.color]}
              flex h-10 w-10 shrink-0
              items-center justify-center
              rounded-xl text-sm font-semibold
            `}
          >
            {person.initial}
          </div>

          <div className="min-w-0">
            <p className="text-sm font-semibold">
              {person.name}
            </p>

            <p className="truncate text-[10px] text-[#aaa39a]">
              {person.year} · {person.course} · {person.distance}m away
            </p>
          </div>

        </button>
      ))}
    </section>
  );
};

export default NearbyPeople;