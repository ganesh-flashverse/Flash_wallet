"use client";
import React, { useState } from "react";

const Screen10 = () => {
  const [selectedOption, setSelectedOption] = useState("enable");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col justify-between items-center px-4 py-6 w-full max-w-md mx-auto">
      {/* Centered content */}
      <div className="flex-1 flex flex-col justify-center items-center w-full">
        <h2 className="text-white text-lg font-bold mb-2 text-center">Keep up with the market!</h2>
        <p className="text-gray-400 text-xs text-center max-w-xs mb-2">
          Turn on notifications to keep track of prices and receive transaction updates.
        </p>
      </div>

      {/* Bottom actions with tab effect */}
      <div className="w-full flex flex-col items-center mb-2">
        <button
          className={`w-full py-2 rounded-lg font-semibold text-base mb-3 transition-transform ${
            selectedOption === "enable" ? "bg-purple-600 text-white" : "bg-gray-1000 text-gray-400"
          }`}
          onClick={() => handleOptionChange("enable")}
        >
          Enable Notifications
        </button>
        <button
          className={`w-full py-2 rounded-lg font-semibold text-base transition-transform ${
            selectedOption === "skip" ? "bg-purple-600 text-white" : "bg-gray-1000 text-gray-400"
          }`}
          onClick={() => handleOptionChange("skip")}
        >
          Skip, I’ll do it later
        </button>
      </div>
    </div>
  );
};

export default Screen10;
