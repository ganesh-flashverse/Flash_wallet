"use client";
import React, { useState } from "react";

const Screen9 = () => {
  const [selectedOption, setSelectedOption] = useState("create");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col justify-between items-center px-4 py-6 w-full max-w-md mx-auto">
      {/* Heading section */}
      <div className="flex-1 flex flex-col justify-end w-full">
        <h1 className="text-white text-xl font-bold mb-12 ml-1 leading-tight">
          Explore a limitless<br />word of the Apps
        </h1>
      </div>

      {/* Buttons section */}
      <div className="w-full flex flex-col items-center mb-6">
        <button
          className={`w-full py-2 rounded-lg font-semibold text-base mb-3 transition-transform ${
            selectedOption === "create" ? "bg-purple-600 text-white" : "bg-gray-1000 text-gray-400"
          }`}
          onClick={() => handleOptionChange("create")}
        >
          Create new wallet
        </button>
        <button
          className={`w-full py-2 rounded-lg font-semibold text-base mb-5 transition-transform ${
            selectedOption === "existing" ? "bg-purple-600 text-white" : "bg-gray-1000 text-gray-400"
          }`}
          onClick={() => handleOptionChange("existing")}
        >
          I already have a wallet
        </button>
      </div>

      {/* Terms and privacy */}
      <div className="w-full flex flex-col items-center mb-2">
        <span className="text-xs text-gray-400 text-center">
          By tapping any button you agree and consent to our
        </span>
        <span className="text-xs text-center">
          <span className="text-green-400 cursor-pointer">Terms of service</span>
          <span className="text-gray-400"> and </span>
          <span className="text-blue-400 cursor-pointer">privacy policy</span>.
        </span>
      </div>
    </div>
  );
};

export default Screen9;
