import { Settings } from "lucide-react";

const SettingsHeader = () => (
  <header className="mb-6 sm:mb-7">
    <div className="mb-2 flex items-center gap-2 text-[#c0ab91]">
      <Settings size={14} />
      <span className="text-[11px] font-semibold tracking-[0.1em]">ACCOUNT</span>
    </div>
    <h1 className="font-[Space_Grotesk] text-3xl font-semibold tracking-tight text-[#f3eee7]">SETTINGS</h1>
  </header>
);

export default SettingsHeader;
