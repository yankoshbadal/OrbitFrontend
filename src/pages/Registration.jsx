import React from "react";

import { useState } from "react";
import ProfileForm from "../components/registration/ProfileForm";
import ProfilePreview from "../components/registration/ProfilePreview";

/*Keep the signup data in React state while the user moves between the two pages, 
and send one JSON request to the backend only at the final step. */

const Registration = () => {
  const [profile, setProfile] = useState({
    name: "Yankosh",
    age: "22",
    pronouns: "",
    course: "Information Technology",
    year: "4th year",
    hometown: "",
    interestedIn: "Women",
    hobbies: ["Coding"],
    bio: "",
    photo: null,
  });

  const updateProfile = (field, value) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <main className="min-h-screen bg-[#1d1c1a] text-white">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[1fr_395px]">

        <section className="px-[60px] py-3">
          <div className="max-w-[1000px]">

            <div className="mb-7">
              <div className="mb-2 mt-5 flex items-center gap-2 text-[11px] font-semibold tracking-[1.5px] text-[#b8b3ad]">
                <span className="h-2 w-2 rounded-full bg-[#7caf91]" />
                  VERIFICATION EMAIL WILL BE SENT
              </div>

              <h1 className="font-serif text-[29px] font-bold">
                Build your profile
              </h1>

              <p className="mt-1 text-[13px] text-[#aaa49d]">
                Give people enough to start a real conversation.
              </p>
            </div>

            <ProfileForm
              profile={profile}
              updateProfile={updateProfile}
            />

          </div>
        </section>

        <aside className="flex min-h-screen items-start justify-center border-l border-[#393632] bg-[#302d29] pt-[238px] lg:col-start-2 lg:row-start-1 max-lg:pt-[238px]">
          <ProfilePreview profile={profile} />
        </aside>

      </div>
    </main>
  );
};

export default Registration;