"use client";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import GoogleIcon from "./google.png";
import AppleIcon from "./apple-logo.png";
import TelegramIcon from "./telegram.png";

const Screen3 = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordsMatch(e.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordsMatch(e.target.value === password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordsMatch) {
      const name = e.target.name.value;
      const email = e.target.email.value;
      console.log({ name, email, password, confirmPassword });
    } else {
      console.log("Passwords do not match");
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col justify-between items-center px-4 py-6 w-full max-w-md mx-auto">
      {/* Top: Back arrow */}
      <div className="w-full flex items-center mb-8">
        <button className="bg-white rounded-full p-2 shadow-md">
          <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      </div>

      {/* Main content */}
      <div className="w-full flex flex-col items-center flex-1 justify-center">
        <h2 className="text-white text-xl font-semibold mb-1">Welcome Back</h2>
        <p className="text-gray-300 text-xs mb-6 text-center">Register in to your account using email<br />or social networks</p>

        <form className="w-full" autoComplete="off" onSubmit={handleSubmit}>
          {/* Name field */}
          <div className="w-full mb-3">
            <div className="flex items-center border border-blue-400 rounded px-3 py-2 bg-transparent">
              <svg className="text-gray-400 mr-2 min-w-[24px]" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4"/>
                <path d="M4 20c0-4 8-6 8-6s8 2 8 6"/>
              </svg>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="bg-transparent outline-none text-white flex-1 text-sm placeholder-gray-400"
              />
            </div>
          </div>

          {/* Email field */}
          <div className="w-full mb-3">
            <div className="flex items-center border border-blue-400 rounded px-3 py-2 bg-transparent">
              <svg className="text-gray-400 mr-2 min-w-[24px]" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="3" y="5" width="18" height="14" rx="2"/>
                <path d="M3 7l9 6 9-6"/>
              </svg>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                pattern="^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$"
                className="bg-transparent outline-none text-white flex-1 text-sm placeholder-gray-400"
              />
            </div>
          </div>

          {/* Password field */}
          <div className="w-full mb-3">
            <div className="flex items-center border border-blue-400 rounded px-3 py-2 bg-transparent">
              <svg className="text-gray-400 mr-2 min-w-[24px]" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="3" y="11" width="18" height="10" rx="2"/>
                <path d="M7 11V7a5 5 0 0110 0v4"/>
              </svg>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                required
                value={password}
                onChange={handlePasswordChange}
                className="bg-transparent outline-none text-white flex-1 text-sm placeholder-gray-400"
              />
              <button type="button" onClick={togglePasswordVisibility} className="text-gray-400">
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>

          {/* Confirm Password field */}
          <div className="w-full mb-6">
            <div className="flex items-center border border-blue-400 rounded px-3 py-2 bg-transparent">
              <svg className="text-gray-400 mr-2 min-w-[24px]" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="3" y="11" width="18" height="10" rx="2"/>
                <path d="M7 11V7a5 5 0 0110 0v4"/>
              </svg>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                required
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className="bg-transparent outline-none text-white flex-1 text-sm placeholder-gray-400"
              />
              <button type="button" onClick={toggleConfirmPasswordVisibility} className="text-gray-400">
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {!passwordsMatch && <p className="text-red-500 text-xs mt-1">Passwords do not match</p>}
          </div>

          {/* Social login */}
          <div className="w-full flex flex-col items-center mb-6">
            <span className="text-white text-sm mb-4">Sign up With</span>
            <div className="flex flex-row items-center justify-center gap-8">
              {/* Google */}
              <button type="button" className="bg-white rounded-full p-3 shadow-md">
                <img src={GoogleIcon.src} alt="Google" className="w-6 h-6" />
              </button>
              {/* Apple */}
              <button type="button" className="bg-white rounded-full p-3 shadow-md">
                <img src={AppleIcon.src} alt="Apple" className="w-6 h-6" />
              </button>
              {/* Telegram */}
              <button type="button" className="bg-blue-100 rounded-full p-3 shadow-md">
                <img src={TelegramIcon.src} alt="Telegram" className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Signup button */}
          <button type="submit" disabled={!passwordsMatch} className="w-full bg-blue-400 text-white py-2 rounded-lg font-semibold text-base mb-4 active:scale-95 transition-transform disabled:opacity-50">
            Signup
          </button>

          {/* Login link */}
          <div className="w-full flex justify-center">
            <span className="text-xs text-gray-300">Have an account? <button type="button" className="text-blue-400 ml-1">Login</button></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Screen3;
