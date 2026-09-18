import { HeartHandshake } from "lucide-react";

const ConnectionsHeader = () => (
  <header className="mb-6 sm:mb-7">
    <div className="mb-2 flex items-center gap-2 text-[#c0ab91]">
      <HeartHandshake size={14} strokeWidth={2} />
      <span className="text-[11px] font-semibold tracking-[0.1em]">YOUR PEOPLE</span>
    </div>
    <h1 className="font-[Space_Grotesk] text-3xl font-semibold tracking-tight text-[#f3eee7]">
      CONNECTIONS
    </h1>
    <p className="mt-1 text-sm text-[#aaa39a]">
      The friends and dates you have connected with on campus.
    </p>
  </header>
);

export default ConnectionsHeader;
