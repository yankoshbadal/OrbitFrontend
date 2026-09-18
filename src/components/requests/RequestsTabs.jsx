const RequestsTabs = ({ activeTab, receivedCount, onChange }) => (
  <div className="mb-5 flex w-fit rounded-xl border border-[#514d47] bg-[#292723] p-1">
    {[
      { id: "received", label: "Received", count: receivedCount },
      { id: "sent", label: "Sent" },
    ].map((tab) => {
      const isActive = activeTab === tab.id;

      return (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChange(tab.id)}
          className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition-colors sm:px-5 ${
            isActive
              ? "bg-[#eee9e2] text-[#2c2824] shadow-sm"
              : "text-[#aaa39a] hover:text-[#eee9e2]"
          }`}
        >
          {tab.label}
          {tab.count > 0 && (
            <span className={`flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[9px] ${
              isActive ? "bg-[#df7659] text-white" : "bg-[#513a31] text-[#e47757]"
            }`}>
              {tab.count}
            </span>
          )}
        </button>
      );
    })}
  </div>
);

export default RequestsTabs;
