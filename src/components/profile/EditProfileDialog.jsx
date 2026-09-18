import { useEffect, useState } from "react";
import { Camera, X } from "lucide-react";

const fieldClass = "mt-1.5 w-full rounded-xl border border-[#514d47] bg-[#393631] px-3 py-2.5 text-sm text-[#eee9e2] outline-none placeholder:text-[#8e857b] focus:border-[#a66450]";

const EditProfileDialog = ({ profile, onClose, onSave }) => {
  const [draft, setDraft] = useState(profile);

  useEffect(() => setDraft(profile), [profile]);

  const update = (field, value) => setDraft((current) => ({ ...current, [field]: value }));
  const selectProfilePicture = (event) => {
    const [file] = event.target.files;
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => update("avatarUrl", reader.result);
    reader.readAsDataURL(file);
  };
  const save = (event) => {
    event.preventDefault();
    const interests = Array.isArray(draft.interests)
      ? draft.interests
      : draft.interests.split(",").map((item) => item.trim()).filter(Boolean);
    onSave({ ...draft, interests });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end bg-black/65 p-0 backdrop-blur-sm sm:items-center sm:justify-center sm:p-6">
      <form onSubmit={save} className="max-h-[90dvh] w-full overflow-y-auto rounded-t-[24px] border border-[#514d47] bg-[#302d29] p-5 shadow-2xl sm:max-w-[600px] sm:rounded-[24px] sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[11px] font-bold tracking-[0.1em] text-[#c0ab91]">PROFILE</p>
            <h2 className="mt-1 font-[Space_Grotesk] text-2xl font-semibold">Edit profile</h2>
          </div>
          <button type="button" onClick={onClose} aria-label="Close edit profile" className="flex h-9 w-9 items-center justify-center rounded-lg text-[#aaa39a] hover:bg-[#393631] hover:text-[#eee9e2]"><X size={20} /></button>
        </div>
        <div className="mt-5 flex items-center gap-4 rounded-2xl border border-[#45413c] bg-[#393631] p-4">
          {draft.avatarUrl ? (
            <img src={draft.avatarUrl} alt="Profile preview" className="h-14 w-14 rounded-full object-cover" />
          ) : (
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#a45f49] text-xl font-semibold text-white">Y</span>
          )}
          <div>
            <p className="text-sm font-semibold text-[#eee9e2]">Profile picture</p>
            <label className="mt-1.5 inline-flex cursor-pointer items-center gap-1.5 text-xs font-semibold text-[#e99a82] hover:text-[#f3b19d]">
              <Camera size={14} /> Choose photo
              <input type="file" accept="image/*" onChange={selectProfilePicture} className="sr-only" />
            </label>
          </div>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <label className="text-xs font-medium text-[#d0c9c0]">Name<input value={draft.name} onChange={(event) => update("name", event.target.value)} className={fieldClass} /></label>
          <label className="text-xs font-medium text-[#d0c9c0]">Age<input type="number" min="18" value={draft.age} onChange={(event) => update("age", event.target.value)} className={fieldClass} /></label>
          <label className="sm:col-span-2 text-xs font-medium text-[#d0c9c0]">About me<textarea value={draft.about} onChange={(event) => update("about", event.target.value)} className={`${fieldClass} min-h-24 resize-y`} /></label>
          <label className="sm:col-span-2 text-xs font-medium text-[#d0c9c0]">Hobbies <span className="font-normal text-[#aaa39a]">(comma separated)</span><input value={Array.isArray(draft.interests) ? draft.interests.join(", ") : draft.interests} onChange={(event) => update("interests", event.target.value)} className={fieldClass} /></label>
          <label className="text-xs font-medium text-[#d0c9c0]">From<input value={draft.from} onChange={(event) => update("from", event.target.value)} className={fieldClass} /></label>
          <label className="text-xs font-medium text-[#d0c9c0]">Height<input value={draft.height} onChange={(event) => update("height", event.target.value)} className={fieldClass} /></label>
          <label className="text-xs font-medium text-[#d0c9c0]">Looking for<input value={draft.lookingFor} onChange={(event) => update("lookingFor", event.target.value)} className={fieldClass} /></label>
        </div>
        <div className="mt-6 flex justify-end gap-2 border-t border-[#45413c] pt-4">
          <button type="button" onClick={onClose} className="h-10 rounded-xl px-4 text-sm font-semibold text-[#c1b8ae] hover:bg-[#393631]">Cancel</button>
          <button type="submit" className="h-10 rounded-xl bg-[#df6e51] px-4 text-sm font-semibold text-white hover:bg-[#ec7d60]">Save changes</button>
        </div>
      </form>
    </div>
  );
};

export default EditProfileDialog;
