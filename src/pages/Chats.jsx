import { useState } from "react";
import { Send } from "lucide-react";
import { Sidebar } from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import MobileNav from "../components/layout/MobileNav";

const initialConversations = [
  {
    id: "diego",
    name: "Diego",
    initials: "D",
    color: "#dc8c7a",
    status: "ACTIVE NOW",
    badge: "MATCHED",
    time: "2m",
    preview: "okay but the shrimp cocktail table was elite",
    messages: [
      { id: 1, text: "Hey! Saw you on radar near the formal hall.", sender: "them" },
      { id: 2, text: "Haha yeah! Crazy crowd tonight.", sender: "me" },
      { id: 3, text: "okay but the shrimp cocktail table was elite", sender: "them" },
    ],
  },
  {
    id: "lena",
    name: "Lena",
    initials: "L",
    color: "#b8aa94",
    status: "LAST SEEN RECENTLY",
    time: "1h",
    preview: "saw you across the quad haha this ...",
    messages: [
      { id: 1, text: "saw you across the quad haha this morning!", sender: "them" },
    ],
  },
  {
    id: "maya",
    name: "Maya",
    initials: "M",
    color: "#dda441",
    status: "ACTIVE NOW",
    badge: "LET'S SEE",
    time: "3h",
    preview: "Hey! Loved your thesis topic on 20...",
    messages: [
      { id: 1, text: "Hey! Loved your thesis topic on 2000s pop.", sender: "them" },
    ],
  },
];

const Chats = () => {
  const [conversations, setConversations] = useState(initialConversations);
  const [selectedId, setSelectedId] = useState("diego");
  const [draft, setDraft] = useState("");

  const selectedConversation = conversations.find(
    (conversation) => conversation.id === selectedId,
  );

  const sendMessage = (event) => {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;

    setConversations((current) =>
      current.map((conversation) =>
        conversation.id === selectedId
          ? {
              ...conversation,
              preview: text,
              time: "now",
              messages: [
                ...conversation.messages,
                { id: Date.now(), text, sender: "me" },
              ],
            }
          : conversation,
      ),
    );
    setDraft("");
  };

  return (
    <div className="min-h-screen bg-[#1e1d1b] font-[Inter] text-[#eee9e2]">
      <Sidebar />
      <Topbar />

      <main className="pb-24 pt-20 lg:ml-[237px] lg:pb-8">
        <div className="mx-auto max-w-[1228px] px-4 sm:px-6 lg:px-8">
          <div className="mb-5 pt-3 sm:pt-4">
            <p className="text-[11px] font-bold tracking-[0.08em] text-[#c0ab91]">
              CHATS
            </p>
            <h1 className="mt-1 font-[Space_Grotesk] text-3xl font-semibold tracking-tight text-[#f3eee7]">
              Matches
            </h1>
          </div>

          <section className="grid min-h-[min(706px,calc(100vh-160px))] overflow-hidden rounded-[23px] border border-[#45413c] bg-[#302d29] md:grid-cols-[340px_minmax(0,1fr)]">
            <aside className="border-b border-[#45413c] p-3 md:border-b-0 md:border-r">
              <h2 className="px-2 pb-3 pt-2 text-base font-semibold">Conversations</h2>
              <div className="space-y-1">
                {conversations.map((conversation) => {
                  const isSelected = conversation.id === selectedId;
                  return (
                    <button
                      key={conversation.id}
                      type="button"
                      onClick={() => setSelectedId(conversation.id)}
                      className={`flex w-full items-center gap-3 rounded-xl px-2 py-3 text-left transition-colors ${
                        isSelected
                          ? "bg-[#5a3c30]"
                          : "hover:bg-[#393631]"
                      }`}
                    >
                      <span
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] text-sm font-semibold text-[#2b2522]"
                        style={{ backgroundColor: conversation.color }}
                      >
                        {conversation.initials}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-center gap-2">
                          <span className="truncate text-sm font-semibold">{conversation.name}</span>
                          {conversation.badge && (
                            <span className="rounded bg-[#5c5032] px-1.5 py-0.5 text-[8px] font-bold tracking-wide text-[#d5b872]">
                              {conversation.badge}
                            </span>
                          )}
                        </span>
                        <span className="mt-0.5 block truncate text-xs text-[#c1a795]">
                          {conversation.preview}
                        </span>
                      </span>
                      <span className="self-start pt-1 text-[10px] text-[#b7aaa0]">{conversation.time}</span>
                    </button>
                  );
                })}
              </div>
            </aside>

            <div className="flex min-h-[440px] flex-col">
              <header className="flex items-center gap-3 border-b border-[#45413c] px-6 py-[18px]">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-[13px] text-sm font-semibold text-[#2b2522]"
                  style={{ backgroundColor: selectedConversation.color }}
                >
                  {selectedConversation.initials}
                </span>
                <div>
                  <h2 className="text-sm font-semibold">{selectedConversation.name}</h2>
                  <p className="text-[10px] font-medium tracking-[0.06em] text-[#d0bba2]">
                    {selectedConversation.status}
                  </p>
                </div>
              </header>

              <div className="flex flex-1 flex-col gap-3 p-6">
                {selectedConversation.messages.map((message) => (
                  <div
                    key={message.id}
                    className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-sm leading-5 ${
                      message.sender === "me"
                        ? "self-end rounded-br-md bg-[#df6e51] text-white"
                        : "self-start rounded-tl-md border border-[#4c4842] bg-[#3a3732] text-[#f1ece5]"
                    }`}
                  >
                    {message.text}
                  </div>
                ))}
              </div>

              <form onSubmit={sendMessage} className="flex gap-2 border-t border-[#45413c] p-5">
                <input
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  placeholder="Type a message..."
                  aria-label="Message"
                  className="h-12 min-w-0 flex-1 rounded-xl border border-[#4d4943] bg-[#393631] px-3.5 text-sm text-[#eee9e2] outline-none placeholder:text-[#b5a99d] focus:border-[#a66450]"
                />
                <button
                  type="submit"
                  aria-label="Send message"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#df6e51] text-[#241f1c] transition-colors hover:bg-[#ec7d60]"
                >
                  <Send size={20} strokeWidth={1.8} />
                </button>
              </form>
            </div>
          </section>
        </div>
      </main>
      <MobileNav />
    </div>
  );
};

export default Chats;
