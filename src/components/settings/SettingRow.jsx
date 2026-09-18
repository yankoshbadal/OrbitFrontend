const SettingRow = ({ title, description, children, danger = false }) => (
  <div className="flex flex-col gap-4 border-b border-[#45413c] py-5 last:border-b-0 sm:flex-row sm:items-center sm:justify-between">
    <div className="max-w-[480px]">
      <h2 className={`text-sm font-semibold ${danger ? "text-[#ef9a82]" : "text-[#eee9e2]"}`}>{title}</h2>
      <p className="mt-1 text-xs leading-5 text-[#aaa39a]">{description}</p>
    </div>
    <div className="shrink-0">{children}</div>
  </div>
);

export default SettingRow;
