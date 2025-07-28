"use client";
import React from "react";
import GoogleIcon from "./assets/google.png";
import AppleIcon from "./assets/apple.png";
import TelegramIcon from "./assets/telegram.png";

const Screen2 = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-between items-center px-4 py-6 w-full max-w-md mx-auto">
      {/* Top: Back arrow */}
      <div className="w-full flex items-center mb-8">
        <button className="bg-white rounded-full p-2 shadow-md">
          <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" /></svg>
        </button>
      </div>

      {/* Main content */}
      <div className="w-full flex flex-col items-center flex-1 justify-center">
        <h2 className="text-white text-xl font-semibold mb-1">Welcome</h2>
        <p className="text-gray-300 text-xs mb-6 text-center">
          Log in to your account using email<br />or social networks
        </p>

        <form
          className="w-full"
          autoComplete="off"
          onSubmit={e => {
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;
            console.log({ email, password });
          }}
        >
          {/* Email field */}
          <div className="w-full mb-3">
            <div className="flex items-center border border-blue-400 rounded px-3 py-2 bg-transparent">
              <svg className="text-gray-400 mr-2 min-w-[24px]" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
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
          <div className="w-full mb-1">
            <div className="flex items-center border border-blue-400 rounded px-3 py-2 bg-transparent">
              <svg className="text-gray-400 mr-2 min-w-[24px]" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="bg-transparent outline-none text-white flex-1 text-sm placeholder-gray-400"
              />
              <svg className="text-gray-400 ml-2 min-w-[24px]" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>
            </div>
          </div>

          <div className="w-full flex justify-end mb-6">
            <button type="button" className="text-xs text-gray-300 hover:text-blue-400">Forgot Password?</button>
          </div>

          {/* Signin button */}
          <button type="submit" className="w-full bg-blue-400 text-white py-2 rounded-lg font-semibold text-base mb-6 active:scale-95 transition-transform">
            Signin
          </button>

          {/* Signup link */}
          <div className="w-full flex justify-center mb-6">
            <span className="text-xs text-gray-300">
              Didn't have an account?
              <button type="button" className="text-blue-400 ml-1">Signup</button>
            </span>
          </div>

          {/* Social login */}
          <div className="w-full flex flex-col items-center">
            <span className="text-white text-sm mb-4">Sign in With</span>
            <div className="flex flex-row items-center justify-center gap-6">
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
        </form>
      </div>
    </div>
  );
};

export default Screen2;
