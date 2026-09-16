import React from "react";
import {Sidebar} from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import MobileNav from "../components/layout/MobileNav";

import RadarHeader from "../components/radar/RadarHeader";
import RadarControls from "../components/radar/RadarControls";
import RadarMap from "../components/radar/RadarMap";
import SelectedPerson from "../components/radar/SelectedPerson";
import NearbyPeople from "../components/radar/NearbyPeople";

import { useState } from "react";

const people = [
  {
    id: 1,
    name: "Maya",
    initial: "M",
    year: "Junior",
    course: "Econ",
    distance: 8,
    color: "amber",
    message:
      "Here for the desserts, staying for the playlist. Ask me about my thesis on 2000s pop.",
  },
  {
    id: 2,
    name: "Diego",
    initial: "D",
    year: "Senior",
    course: "CS",
    distance: 15,
    color: "coral",
    message:
      "Here for the desserts, staying for the playlist. Ask me about my thesis on 2000s pop.",
  },
  {
    id: 3,
    name: "Priya",
    initial: "P",
    year: "Sophomore",
    course: "Bio",
    distance: 22,
    color: "green",
    message:
      "Here for the desserts, staying for the playlist. Ask me about my thesis on 2000s pop.",
  },
  {
    id: 4,
    name: "Theo",
    initial: "T",
    year: "Junior",
    course: "Poli Sci",
    distance: 34,
    color: "cream",
    message:
      "Here for the desserts, staying for the playlist. Ask me about my thesis on 2000s pop.",
  },
];

const Radar = () => {
  const [range, setRange] = useState(50);
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  return (
    <div className="min-h-screen bg-[#1e1d1b] text-[#eee9e2]">
      <Sidebar />
      <Topbar />

      <main className="pt-20 pb-24 lg:ml-[237px] lg:pb-8">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">

          <RadarHeader />

          <div className="grid gap-5 xl:grid-cols-[1fr_352px]">

            {/* Radar */}
            <section className="rounded-[22px] border border-[#45413c] bg-[#302d29] p-5 sm:p-7">

              <RadarControls
                range={range}
                setRange={setRange}
              />

              <RadarMap
                people={people}
                selectedPerson={selectedPerson}
                setSelectedPerson={setSelectedPerson}
              />

              <div className="text-center">
                <p className="text-xl font-semibold">12</p>
                <p className="text-[11px] text-[#aaa39a]">
                  on your radar right now
                </p>
              </div>

            </section>

            {/* Right side */}
            <div className="space-y-5">

              <SelectedPerson
                person={selectedPerson}
              />

              <NearbyPeople
                people={people}
                selectedPerson={selectedPerson}
                setSelectedPerson={setSelectedPerson}
              />

            </div>

          </div>
        </div>
      </main>

      <MobileNav />
    </div>
  );
};

export default Radar;