import { AlertTriangle, X } from "lucide-react";

const ConfirmDialog = ({ action, onCancel, onConfirm }) => (
  <div className="fixed inset-0 z-50 flex items-end bg-black/65 p-0 backdrop-blur-sm sm:items-center sm:justify-center sm:p-6">
    <div role="dialog" aria-modal="true" aria-labelledby="confirm-title" className="w-full rounded-t-[24px] border border-[#69463d] bg-[#302d29] p-5 shadow-2xl sm:max-w-md sm:rounded-[24px] sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#513a31] text-[#ef9a82]"><AlertTriangle size={20} /></span>
        <button type="button" onClick={onCancel} aria-label="Close confirmation" className="flex h-9 w-9 items-center justify-center rounded-lg text-[#aaa39a] hover:bg-[#393631]"><X size={20} /></button>
      </div>
      <h2 id="confirm-title" className="mt-4 text-lg font-semibold text-[#f3eee7]">{action.title}</h2>
      <p className="mt-2 text-sm leading-6 text-[#b7aaa0]">{action.description}</p>
      <div className="mt-6 flex justify-end gap-2">
        <button type="button" onClick={onCancel} className="h-10 rounded-xl px-4 text-sm font-semibold text-[#c1b8ae] hover:bg-[#393631]">Cancel</button>
        <button type="button" onClick={onConfirm} className={`h-10 rounded-xl px-4 text-sm font-semibold ${action.danger ? "bg-[#b94f3d] text-white hover:bg-[#cb5a46]" : "bg-[#df6e51] text-white hover:bg-[#ec7d60]"}`}>{action.confirmLabel}</button>
      </div>
    </div>
  </div>
);

export default ConfirmDialog;
