"use client";
import React, { useState } from "react";

const Screen6 = () => {
  const [selectedOption, setSelectedOption] = useState("continue");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col justify-between items-center px-4 py-6 w-full max-w-md mx-auto">
      {/* Top: Back arrow */}
      <div className="w-full flex items-start">
        <button className="bg-white rounded-full p-2 shadow-md mt-2">
          <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center flex-1 w-full">
        {/* Fingerprint Icon with gap at the bottom */}
        <div className="flex flex-col items-center justify-center mb-8">
          <i className="material-icons" style={{ fontSize: "80px", color: "#fff" }}>fingerprint</i>
        </div>

        {/* Content with gap at the top */}
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-white text-lg font-semibold mb-2">Enable Fingerprint</h2>
          <p className="text-gray-300 text-xs text-center max-w-xs mb-4">
            If you enable touch ID, you don't<br />need to enter passcode when you login
          </p>
        </div>
      </div>

      {/* Bottom buttons styled as tabs */}
      <div className="w-full mb-2 flex flex-col items-center">
        <button
          className={`w-full py-2 rounded-lg font-semibold text-base mb-3 transition-transform ${
            selectedOption === "continue" ? "bg-purple-600 text-white" : "bg-gray-1000 text-gray-400"
          }`}
          onClick={() => handleOptionChange("continue")}
        >
          Continue
        </button>
        <button
          className={`w-full py-2 rounded-lg font-semibold text-base transition-transform ${
            selectedOption === "notNow" ? "bg-purple-600 text-white" : "bg-gray-1000 text-gray-400"
          }`}
          onClick={() => handleOptionChange("notNow")}
        >
          Not Now
        </button>
      </div>

   
    </div>
  );
};

export default Screen6;
