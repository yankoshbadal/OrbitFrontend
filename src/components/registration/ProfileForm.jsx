import React from "react";
import { Link } from "react-router-dom";

const ProfileForm = ({ profile, updateProfile }) => {
  const hobbies = ["Coding", "Music", "Sports", "Gaming", "Movies", "Travel"];

  const interests = ["Women", "Men", "Everyone"];

  const toggleHobby = (hobby) => {
    if (profile.hobbies.includes(hobby)) {
      updateProfile(
        "hobbies",
        profile.hobbies.filter((item) => item !== hobby),
      );
    } else {
      updateProfile("hobbies", [...profile.hobbies, hobby]);
    }
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    updateProfile("photo", imageUrl);
  };

  return (
    <div>
      {/* PHOTO */}
      <label
        htmlFor="photo"
        className="mb-[17px] flex h-[140px] w-[475px] cursor-pointer flex-col items-center justify-center rounded-[15px] border border-dashed border-[#57534e] bg-[#302d29]"
      >
        <input
          id="photo"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handlePhoto}
        />

        {profile.photo ? (
          <img
            src={profile.photo}
            alt="Profile"
            className="h-full w-full rounded-[15px] object-cover"
          />
        ) : (
          <>
            <div className="mb-2 text-xl text-[#df6d50]">▣</div>

            <span className="text-[14px] font-semibold">
              Add your best photo
            </span>

            <span className="mt-1 text-[11px] text-[#aaa49d]">
              Clear face · you only · no screenshots
            </span>
          </>
        )}
      </label>

      {/* BASIC INFO */}
      <div className="mb-2 text-[11px] font-semibold text-[#aaa49d]">
        BASIC INFO
      </div>

      <div className="w-[475px] space-y-[10px]">
        <input
          value={profile.name}
          onChange={(e) => updateProfile("name", e.target.value)}
          placeholder="Name"
          className="h-[42px] w-full rounded-[10px] border border-[#4b4843] bg-[#3a3732] px-[14px] text-[13px] outline-none focus:border-[#df6d50]"
        />

        <div className="grid grid-cols-2 gap-[10px]">
          <input
            value={profile.age}
            onChange={(e) => updateProfile("age", e.target.value)}
            placeholder="Age"
            className="h-[44px] rounded-[10px] border border-[#4b4843] bg-[#3a3732] px-[14px] text-[13px] outline-none focus:border-[#df6d50]"
          />

          <select
            value={profile.pronouns}
            onChange={(e) => updateProfile("pronouns", e.target.value)}
            className="h-[44px] rounded-[10px] border border-[#4b4843] bg-[#3a3732] px-[14px] text-[13px] outline-none focus:border-[#df6d50]"
          >
            <option value="">Pronouns</option>
            <option value="he/him">he/him</option>
            <option value="she/her">she/her</option>
            <option value="they/them">they/them</option>
          </select>
        </div>

        <input
          value={profile.course}
          onChange={(e) => updateProfile("course", e.target.value)}
          placeholder="Course"
          className="h-[42px] w-full rounded-[10px] border border-[#4b4843] bg-[#3a3732] px-[14px] text-[13px] outline-none focus:border-[#df6d50]"
        />

        <div className="grid grid-cols-2 gap-[10px]">
          <select
            value={profile.year}
            onChange={(e) => updateProfile("year", e.target.value)}
            className="h-[44px] rounded-[10px] border border-[#4b4843] bg-[#3a3732] px-[14px] text-[13px] outline-none focus:border-[#df6d50]"
          >
            <option value="">Year</option>
            <option value="1st year">1st year</option>
            <option value="2nd year">2nd year</option>
            <option value="3rd year">3rd year</option>
            <option value="4th year">4th year</option>
          </select>

          <input
            value={profile.hometown}
            onChange={(e) => updateProfile("hometown", e.target.value)}
            placeholder="Home town"
            className="h-[44px] rounded-[10px] border border-[#4b4843] bg-[#3a3732] px-[14px] text-[13px] outline-none focus:border-[#df6d50]"
          />
        </div>
      </div>

      {/* INTERESTS */}
      <div className="mb-2 mt-6 text-[11px] font-semibold text-[#aaa49d]">
        I'M INTERESTED IN
      </div>

      <div className="flex gap-2">
        {interests.map((interest) => (
          <button
            key={interest}
            type="button"
            onClick={() => updateProfile("interestedIn", interest)}
            className={`rounded-full border px-4 py-2 text-xs ${
              profile.interestedIn === interest
                ? "border-[#df6d50] bg-[#30221d] text-[#df8065]"
                : "border-[#3f3c38] text-[#b5b0a9]"
            }`}
          >
            {interest}
          </button>
        ))}
      </div>

      {/* HOBBIES */}
      <div className="mb-2 mt-5 text-[11px] font-semibold text-[#aaa49d]">
        HOBBIES
      </div>

      <div className="flex flex-wrap gap-2">
        {hobbies.map((hobby) => (
          <button
            key={hobby}
            type="button"
            onClick={() => toggleHobby(hobby)}
            className={`rounded-full border px-4 py-2 text-xs ${
              profile.hobbies.includes(hobby)
                ? "border-[#df6d50] bg-[#30221d] text-[#df8065]"
                : "border-[#3f3c38] text-[#b5b0a9]"
            }`}
          >
            {hobby}
          </button>
        ))}
      </div>

      {/* BIO */}
      <div className="mb-2 mt-5 text-[11px] font-semibold text-[#aaa49d]">
        BIO
      </div>

      <textarea
        value={profile.bio}
        onChange={(e) => updateProfile("bio", e.target.value)}
        placeholder="A short bio — something people can actually reply to"
        className="h-[83px] w-[475px] resize-none rounded-[10px] border border-[#4b4843] bg-[#3a3732] px-[14px] py-3 text-[13px] outline-none focus:border-[#df6d50]"
      />
      <Link to="/home">
        <button
          type="button"
          onClick={() => console.log(profile)}
          className="block mt-5 h-[40px] w-[475px] rounded-[10px] bg-[#df6d50] text-[13px] font-bold transition hover:bg-[#e67b5e]"
        >
          Finish profile
        </button>
      </Link>
    </div>
  );
};

export default ProfileForm;
