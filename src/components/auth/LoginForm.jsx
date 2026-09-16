import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Send verification code to:", email);
  };

  return (
    <div className="w-full max-w-[420px] px-8 lg:px-14">
      {/* Heading */}
      <h2 className="text-2xl font-semibold tracking-tight text-[#f1eee8]">
        Enter with your .edu
      </h2>

      {/* Description */}
      <p className="mt-2 text-sm leading-5 text-[#969088]">
        We check your school email so this stays
        <br />
        students only.
      </p>

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="mt-5">
        {/* Email */}
        <input
          type="email"
          placeholder="you@university.edu"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="
            h-11
            w-full
            rounded-lg
            border
            border-white/[0.08]
            bg-[#3a3733]
            px-3.5
            text-sm
            text-white
            outline-none
            placeholder:text-[#888179]
            focus:border-[#df6c4f]
          "
        />
        <input
          type="email"
          placeholder="Password"
          required
          className="
            mt-2.5
            h-11
            w-full
            rounded-lg
            border
            border-white/[0.08]
            bg-[#3a3733]
            px-3.5
            text-sm
            text-white
            outline-none
            placeholder:text-[#888179]
            focus:border-[#df6c4f]
          "
        />
        {/* Button */}
        <button
          type="submit"
          className="
            mt-2.5
            h-11
            w-full
            rounded-lg
            bg-[#df6c4f]
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-[#e7795c]
            active:scale-[0.99]
          "
        >
          Log in
        </button>
      </form>

      {/* Verified Students */}
      <div
        className="
          mt-3
          flex
          items-center
          gap-3
          rounded-xl
          border
          border-white/[0.08]
          bg-white/[0.06]
          px-3.5
          py-2.5
        "
      >
        <span className="text-sm text-[#8eb29c]">✓</span>

        <p className="text-xs text-[#aaa49b]">
          <span className="font-semibold text-[#eeeae3]">
            <button
              type="button"
              className="font-medium text-[#df6c4f] hover:underline"
            >
            </button>
            412 students
          </span>{" "}
          verified at your school this week
        </p>
      </div>

      {/* Sign in */}
      <p className="mt-4 text-center text-xs text-[#8e8982]">
        Don't have an account?{" "}
        <Link to="/pre_signup">
          <button
            type="button"
            className="font-medium text-[#df6c4f] hover:underline"
          >
            Sign Up
          </button>
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
