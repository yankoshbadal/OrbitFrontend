import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      console.log("Passwords do not match");
      return;
    }

    console.log("Signup data:", formData);
  };

  return (
    <div className="w-full max-w-[420px] px-8 lg:px-14">
      {/* Heading */}
      <h2 className="text-2xl font-semibold tracking-tight text-[#f1eee8]">
        Create your account
      </h2>

      {/* Description */}
      <p className="mt-2 text-sm leading-5 text-[#969088]">
        Join your campus community using your
        <br />
        university email.
      </p>

      {/* Signup Form */}
      <form onSubmit={handleSubmit} className="mt-5">
        {/* First Name */}
        <input
          type="text"
          name="name"
          placeholder="First Name"
          value={formData.name}
          onChange={handleChange}
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

        {/* Last Name */}
        <input
          type="text"
          name="name"
          placeholder="Last Name"
          value={formData.name}
          onChange={handleChange}
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
        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="you@university.edu"
          value={formData.email}
          onChange={handleChange}
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

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Create password"
          value={formData.password}
          onChange={handleChange}
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

        {/* Confirm Password */}
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          value={formData.confirmPassword}
          onChange={handleChange}
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
        <Link to="/signup">
          {/* Button */}
          <button
            type="submit"
            className="
            mt-3
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
            Create account
          </button>
        </Link>
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
          <span className="font-semibold text-[#eeeae3]">412 students</span>{" "}
          verified at your school this week
        </p>
      </div>

      {/* Sign in */}
      <p className="mt-4 text-center text-xs text-[#8e8982]">
        Already have an account?{" "}
        <Link to="/">
          {" "}
          <button
            type="button"
            className="font-medium text-[#df6c4f] hover:underline"
          >
            Log in
          </button>
        </Link>
      </p>
    </div>
  );
};

export default SignupForm;
