"use client";
import React from "react";
import { FiArrowLeft, FiSearch } from "react-icons/fi";

const Screen13 = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col w-full max-w-md mx-auto px-4 pt-4">
      {/* Top Bar */}
      <div className="flex items-center mb-6">
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black shadow mr-2">
          <FiArrowLeft size={22} />
        </button>
        <span className="flex-1 text-center text-white font-semibold text-base -ml-10">Send</span>
      </div>
      {/* Search Bar */}
      <div className="flex items-center bg-[#7e7676] rounded-2xl px-3 py-2 mb-3">
        <FiSearch size={20} color="#fff" className="mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent text-white placeholder-white text-sm flex-1 outline-none"
        />
      </div>
      {/* All Networks Dropdown */}
      <button className="bg-[#7e7676] text-white text-xs rounded-lg px-4 py-2 mb-12 flex items-center">
        All Networks
        <svg className="ml-1" width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M5 8l5 5 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      {/* Centered No Result Section */}
      <div className="flex flex-col items-center justify-center flex-1 mt-32">
        <span className="text-gray-400 text-xs mb-3">No result found</span>
        <button className="text-green-400 text-xs font-medium active:underline">Buy Cryptocurrency</button>
      </div>
    </div>
  );
};

export default Screen13;
