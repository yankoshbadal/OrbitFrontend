import { Sidebar } from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import MobileNav from "../components/layout/MobileNav";
import ConnectionsGrid from "../components/connections/ConnectionsGrid";
import ConnectionsHeader from "../components/connections/ConnectionsHeader";

const connections = [
  { id: "diego", name: "Diego", age: 22, initials: "D", color: "#dc8c7a", type: "date", program: "Architecture", connectedAt: "today", note: "Coffee date at the campus café this weekend." },
  { id: "lena", name: "Lena", age: 21, initials: "L", color: "#b8aa94", type: "friend", program: "Psychology", connectedAt: "yesterday", note: "You both love trying new food spots near campus." },
  { id: "maya", name: "Maya", age: 21, initials: "M", color: "#dda441", type: "friend", program: "Economics", connectedAt: "2 days ago", note: "A new friend to swap playlists and thesis ideas with." },
  { id: "theo", name: "Theo", age: 22, initials: "T", color: "#756c61", type: "date", program: "Political Science", connectedAt: "4 days ago", note: "Planning a movie night after your shared love of cinema." },
  { id: "priya", name: "Priya", age: 20, initials: "P", color: "#8db69b", type: "friend", program: "Biology", connectedAt: "last week", note: "Your next badminton partner is one message away." },
  { id: "rohan", name: "Rohan", age: 22, initials: "R", color: "#5f817d", type: "friend", program: "Physics", connectedAt: "last week", note: "A mutual love of late-night campus conversations." },
];

const Connections = () => {
  const [visibleConnections, setVisibleConnections] = useState(connections);
  const removeConnection = (id) => {
    setVisibleConnections((current) => current.filter((connection) => connection.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#1e1d1b] font-[Inter] text-[#eee9e2]">
      <Sidebar />
      <Topbar />
      <main className="pb-24 pt-20 lg:ml-[237px] lg:pb-8">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <ConnectionsHeader />
          <ConnectionsGrid
            connections={visibleConnections}
            onBlock={removeConnection}
            onRemove={removeConnection}
          />
        </div>
      </main>
      <MobileNav />
    </div>
  );
};

export default Connections;
import { useState } from "react";
