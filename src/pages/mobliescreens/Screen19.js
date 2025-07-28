"use client";
import React from "react";
import { FiArrowLeft, FiSearch, FiMic } from "react-icons/fi";

const Screen19 = () => {
  return (
    <div className="min-h-screen bg-black w-full max-w-md mx-auto pt-4 px-4">
      {/* Top bar with back arrow */}
      <div className="flex items-center">
        <button className="text-white mr-2">
          <FiArrowLeft size={24} />
        </button>
      </div>
      {/* Search Bar */}
      <div className="flex justify-center mt-4">
        <div className="flex items-center bg-[#636363] rounded-xl px-3 py-2 w-full max-w-xs">
          <FiSearch size={20} className="text-white mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-white placeholder-white flex-1 text-base"
          />
          <FiMic size={20} className="text-white ml-2" />
        </div>
      </div>
    </div>
  );
};

export default Screen19;
