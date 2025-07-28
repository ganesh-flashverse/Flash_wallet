"use client";
import React, { useState } from "react";
import { FiArrowLeft, FiInfo } from "react-icons/fi";

const rangeOptions = [
  "Last 30 days",
  "Last 90 days",
  "Last 180 days",
  "Last 365 days",
  "Select date range",
];

const financialYears = [
  "Current FY",
  "FY 2024 - 2025",
  "FY 2023 - 2024",
  "FY 2022 - 2023",
  "FY 2021 - 2022",
];

const Screen22 = () => {
  const [activeTab, setActiveTab] = useState("Range");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const options = activeTab === "Range" ? rangeOptions : financialYears;

  return (
    <div className="min-h-screen bg-black w-full max-w-md mx-auto flex flex-col pt-4 pb-6 px-4">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-2">
        <button className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black shadow">
          <FiArrowLeft size={22} />
        </button>
        <button className="text-white">
          <FiInfo size={20} />
        </button>
      </div>

      {/* Title */}
      <span className="text-white font-semibold text-sm mb-4 mt-1">Download statement</span>

      {/* Tabs */}
      <div className="flex items-center border-b border-gray-500 mb-4">
        <button
          className={`py-2 px-2 text-sm font-semibold ${activeTab === "Range" ? "text-[#a259f7] border-b-2 border-[#a259f7]" : "text-white"}`}
          onClick={() => {
            setActiveTab("Range");
            setSelectedIndex(null);
          }}
        >
          Range
        </button>
        <button
          className={`py-2 px-2 text-sm font-semibold ml-2 ${activeTab === "Financial year" ? "text-[#a259f7] border-b-2 border-[#a259f7]" : "text-white"}`}
          onClick={() => {
            setActiveTab("Financial year");
            setSelectedIndex(null);
          }}
        >
          Financial year
        </button>
      </div>

      {/* Option List */}
      <div className="flex flex-col gap-4 mb-16">
        {options.map((opt, i) => (
          <button
            key={i}
            onClick={() => setSelectedIndex(i)}
            className="flex items-center justify-between"
          >
            <span className="text-white font-medium text-sm">{opt}</span>
            <span className="w-5 h-5 border-2 border-gray-400 rounded-sm flex items-center justify-center text-white text-xs font-bold">
              {selectedIndex === i && <span>✓</span>}
            </span>
          </button>
        ))}
      </div>

      {/* Download Button */}
      <button className="w-full bg-[#a259f7] rounded-xl text-white font-semibold text-base py-3 mt-auto active:bg-purple-700 transition">
        Download
      </button>
    </div>
  );
};

export default Screen22;
