import { useState } from "react";
import { Sidebar } from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import MobileNav from "../components/layout/MobileNav";
import RequestsHeader from "../components/requests/RequestsHeader";
import RequestsList from "../components/requests/RequestsList";
import RequestsTabs from "../components/requests/RequestsTabs";

const initialReceivedRequests = [
  { id: "maya", name: "Maya", age: 21, initials: "M", color: "#d99b3f", program: "Economics", mutuals: 3, time: "12m", dateInvite: true, message: "Your profile seems fun — want to get coffee this week?" },
  { id: "aarav", name: "Aarav", age: 21, initials: "A", color: "#806c99", program: "Computer Science", mutuals: 4, time: "1h", message: "Always happy to meet another campus regular." },
  { id: "zoya", name: "Zoya", age: 20, initials: "Z", color: "#866b80", program: "Media Studies", mutuals: 2, time: "3h", message: "We should trade movie recommendations sometime." },
];

const initialSentRequests = [
  { id: "priya", name: "Priya", age: 20, initials: "P", color: "#8db69b", program: "Biology", mutuals: 2, time: "Yesterday", message: "You sent a connection request." },
  { id: "kabir", name: "Kabir", age: 23, initials: "K", color: "#657d91", program: "Mechanical Engineering", mutuals: 3, time: "2d", message: "You sent a connection request." },
];

const Requests = () => {
  const [activeTab, setActiveTab] = useState("received");
  const [receivedRequests, setReceivedRequests] = useState(initialReceivedRequests);
  const [sentRequests, setSentRequests] = useState(initialSentRequests);
  const visibleRequests = activeTab === "received" ? receivedRequests : sentRequests;

  const removeReceivedRequest = (id) => {
    setReceivedRequests((requests) => requests.filter((request) => request.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#1e1d1b] font-[Inter] text-[#eee9e2]">
      <Sidebar />
      <Topbar />
      <main className="pb-24 pt-20 lg:ml-[237px] lg:pb-8">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <RequestsHeader />
          <RequestsTabs
            activeTab={activeTab}
            receivedCount={receivedRequests.length}
            onChange={setActiveTab}
          />
          <RequestsList
            requests={visibleRequests}
            type={activeTab}
            onReject={removeReceivedRequest}
            onMakeFriend={removeReceivedRequest}
            onAcceptDate={removeReceivedRequest}
            onCancel={(id) => setSentRequests((requests) => requests.filter((request) => request.id !== id))}
          />
        </div>
      </main>
      <MobileNav />
    </div>
  );
};

export default Requests;
