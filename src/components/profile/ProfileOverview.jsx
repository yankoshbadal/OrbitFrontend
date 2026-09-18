const ProfileOverview = ({ profile }) => {
  const info = [
    ["Campus", profile.campus],
    ["From", profile.from],
    ["Height", profile.height],
    ["Looking for", profile.lookingFor],
  ];

  return (
  <section className="grid gap-4 lg:grid-cols-[340px_minmax(0,1fr)]">
    <article className="relative flex min-h-[330px] flex-col justify-end overflow-hidden rounded-[24px] border border-[#88503d] bg-gradient-to-b from-[#a45f49] via-[#c66c50] to-[#241d19] p-5">
      <span className="absolute inset-0 flex items-center justify-center after:absolute after:inset-0 after:bg-gradient-to-t after:from-[#171512]/95 after:via-[#171512]/20 after:to-transparent">
        {profile.avatarUrl ? (
          <img src={profile.avatarUrl} alt={`${profile.name}'s profile`} className="h-full w-full object-cover" />
        ) : (
          <span className="text-[112px] font-bold text-white/70">Y</span>
        )}
      </span>
      <div className="relative z-10">
        <h2 className="text-2xl font-semibold text-white">{profile.name}, {profile.age}</h2>
        <p className="mt-1 text-xs font-medium text-[#f3d2bf]">{profile.program}</p>
      </div>
    </article>

    <div className="space-y-4">
      <article className="rounded-[20px] border border-[#45413c] bg-[#302d29] p-5">
        <h2 className="text-sm font-semibold">About me</h2>
        <p className="mt-2 text-sm leading-6 text-[#c1a795]">
          {profile.about}
        </p>
      </article>
      <article className="rounded-[20px] border border-[#45413c] bg-[#302d29] p-5">
        <h2 className="text-sm font-semibold">Hobbies</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {profile.interests.map((interest) => (
            <span key={interest} className="rounded-full border border-[#754638] bg-[#513a31] px-3 py-1.5 text-xs font-medium text-[#e99a82]">
              {interest}
            </span>
          ))}
        </div>
      </article>
      <article className="rounded-[20px] border border-[#45413c] bg-[#302d29] p-5">
        <h2 className="text-sm font-semibold">Personal info</h2>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {info.map(([label, value]) => (
            <div key={label} className="rounded-xl bg-[#3b3732] px-3 py-3">
              <p className="text-[9px] font-medium uppercase tracking-[0.08em] text-[#b6a18b]">{label}</p>
              <p className="mt-1 text-xs font-semibold text-[#eee9e2]">{value}</p>
            </div>
          ))}
        </div>
      </article>
    </div>
  </section>
  );
};

export default ProfileOverview;
