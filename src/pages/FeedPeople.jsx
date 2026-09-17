import React from "react";

import { useState } from "react";

import { Sidebar } from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import MobileNav from "../components/layout/MobileNav";

import FeedHeader from "../components/feed/FeedHeader";
import FeedTabs from "../components/feed/FeedTabs";
import PeopleGrid from "../components/feed/PeopleGrid";

const peopleData = [
  {
    id: 1,
    name: "Maya",
    age: 21,
    branch: "Economics",
    initials: "M",
    mutuals: 3,
    color: "#b28b52",
    tags: [
      { label: "Coffee", icon: "Coffee" },
      { label: "2000s Pop", icon: "Music2" },
      { label: "Economics", icon: "BookOpen" },
    ],
    bio: "Here for the desserts, staying for the playlist. Ask me about my thesis!",
  },

  {
    id: 2,
    name: "Priya",
    age: 20,
    branch: "Biology",
    initials: "P",
    mutuals: 2,
    color: "#60907a",
    tags: [
      { label: "Badminton", icon: "Dumbbell" },
      { label: "Pre-Med", icon: "BookOpen" },
      { label: "Bio Tech", icon: "Palette" },
    ],
    bio: "Pre-med student looking for doubles badminton partners or study buddy support.",
  },

  {
    id: 3,
    name: "Theo",
    age: 22,
    branch: "Political Science",
    initials: "T",
    mutuals: 1,
    color: "#756c61",
    tags: [
      { label: "Debate", icon: "MessageCircle" },
      { label: "Cinema", icon: "Clapperboard" },
      { label: "Late Night Pizza", icon: "Pizza" },
    ],
    bio: "Debate captain by day, questionable dance moves at night.",
  },

  {
    id: 4,
    name: "Aarav",
    age: 21,
    branch: "Computer Science",
    initials: "A",
    mutuals: 4,
    color: "#806c99",
    tags: [
      { label: "Gaming", icon: "Gamepad2" },
      { label: "Coffee", icon: "Coffee" },
      { label: "Coding", icon: "Code2" },
    ],
    bio: "Usually debugging something. Looking for people who enjoy late-night coding sessions.",
  },

  {
    id: 5,
    name: "Sara",
    age: 20,
    branch: "Psychology",
    initials: "S",
    mutuals: 2,
    color: "#9a6f69",
    tags: [
      { label: "Painting", icon: "Palette" },
      { label: "Books", icon: "BookOpen" },
      { label: "Coffee", icon: "Coffee" },
    ],
    bio: "Bookstore explorer, amateur painter and professional procrastinator.",
  },

  {
    id: 6,
    name: "Kabir",
    age: 23,
    branch: "Mechanical",
    initials: "K",
    mutuals: 3,
    color: "#657d91",
    tags: [
      { label: "Football", icon: "Dumbbell" },
      { label: "Cinema", icon: "Clapperboard" },
      { label: "Pizza", icon: "Pizza" },
    ],
    bio: "Football on weekends and movies whenever deadlines allow it.",
  },

  {
    id: 7,
    name: "Ananya",
    age: 21,
    branch: "Architecture",
    initials: "A",
    mutuals: 1,
    color: "#927b5b",
    tags: [
      { label: "Sketching", icon: "Palette" },
      { label: "Music", icon: "Music2" },
      { label: "Coffee", icon: "Coffee" },
    ],
    bio: "Architecture student who carries a sketchbook absolutely everywhere.",
  },

  {
    id: 8,
    name: "Rohan",
    age: 22,
    branch: "Physics",
    initials: "R",
    mutuals: 5,
    color: "#5f817d",
    tags: [
      { label: "Badminton", icon: "Dumbbell" },
      { label: "Debate", icon: "MessageCircle" },
      { label: "Books", icon: "BookOpen" },
    ],
    bio: "Physics nerd with a surprisingly strong opinion about campus food.",
  },

  {
    id: 9,
    name: "Zoya",
    age: 20,
    branch: "Media Studies",
    initials: "Z",
    mutuals: 2,
    color: "#866b80",
    tags: [
      { label: "Cinema", icon: "Clapperboard" },
      { label: "Late Night Pizza", icon: "Pizza" },
      { label: "Music", icon: "Music2" },
    ],
    bio: "Film enthusiast looking for people to discuss terrible movies with.",
  },
];

const FeedPeople = () => {
  const [activeTab, setActiveTab] = useState("People");
  const [people, setPeople] = useState(peopleData);

  const removePerson = (person) => {
    setPeople((currentPeople) =>
      currentPeople.filter((item) => item.id !== person.id)
    );
  };

  const handleLike = (person) => {
    console.log("Liked:", person.name);

    // Later:
    // send request to backend here

    removePerson(person);
  };

  const handlePass = (person) => {
    console.log("Rejected:", person.name);

    // Later:
    // send rejection to backend here

    removePerson(person);
  };

  return (
    <div className="min-h-screen bg-[#1e1d1b] text-[#eee9e2]">
      <Sidebar />

      <Topbar />

      <main className="pt-20 pb-24 lg:ml-[237px] lg:pb-8">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">

          <FeedHeader />

          <FeedTabs
            activeTab={activeTab}
            onChange={setActiveTab}
          />

          {activeTab === "People" && (
            <PeopleGrid
              people={people}
              onLike={handleLike}
              onPass={handlePass}
            />
          )}

          {activeTab === "Posts" && (
            <div className="rounded-[22px] border border-[#45413c] bg-[#302d29] p-10 text-center">
              <p className="text-sm text-[#aaa39a]">
                Posts will appear here.
              </p>
            </div>
          )}

          {activeTab === "People" && people.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-lg font-semibold">
                No more people nearby
              </p>

              <p className="mt-2 text-sm text-[#aaa39a]">
                Check back later for new people.
              </p>
            </div>
          )}

        </div>
      </main>

      <MobileNav />
    </div>
  );
};

export default FeedPeople;