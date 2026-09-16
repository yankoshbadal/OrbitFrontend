import React from "react";

const ProfilePreview = ({ profile }) => {
  return (
    <div className="flex flex-col items-start">

      <div className="relative h-[370px] w-[224px] overflow-hidden rounded-[22px] bg-gradient-to-b from-[#aa6250] via-[#b65d45] to-[#302719]">

        {profile.photo ? (
          <img
            src={profile.photo}
            alt={profile.name}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[68px] font-semibold text-white/90">
              {profile.name?.charAt(0)?.toUpperCase() || "Y"}
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#201b16] via-transparent to-transparent" />

        <div className="absolute bottom-6 left-5 right-4">

          <h2 className="text-[18px] font-bold">
            {profile.name || "Your name"}
            {profile.age && `, ${profile.age}`}
          </h2>

          <p className="mt-1 text-[11px] text-white/80">
            {profile.course || "Your course"}
          </p>

        </div>

      </div>

      <p className="mt-3 text-[11px] text-[#aaa49d]">
        Live preview — this is how people see you
      </p>

    </div>
  );
};

export default ProfilePreview;