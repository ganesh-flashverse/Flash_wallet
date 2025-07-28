"use client";
import React, { useState } from "react";
import {
  FiRefreshCw,
  FiX,
  FiChevronDown,
  FiInfo,
  FiHome,
  FiGlobe,
  FiRepeat,
} from "react-icons/fi";
import { FaBitcoin } from "react-icons/fa";
import { SiSolana } from "react-icons/si";
import { MdAlarm } from "react-icons/md";

const bottomTabs = [
  { id: "home", icon: <FiHome size={28} />, label: "Home" },
  { id: "transfer", icon: <FiRepeat size={28} />, label: "Transfer" },
  { id: "alarm", icon: <MdAlarm size={28} />, label: "Alarm" },
  { id: "internet", icon: <FiGlobe size={28} />, label: "Internet" },
];

const Screen18 = () => {
  const [activeTab, setActiveTab] = useState("transfer");

  return (
    <div className="min-h-screen bg-black flex flex-col w-full max-w-md mx-auto px-4 pt-4 pb-20">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-2">
        <button className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black shadow">
          <FiRefreshCw size={22} />
        </button>
        <div className="flex flex-col items-center flex-1 -ml-9">
          <span className="text-white font-semibold text-xl">Swap Tokens</span>
          <span className="text-gray-300 text-xs mt-0.5 font-semibold">
            Exchange <span className="text-white">SOL ↔ BTC</span>
          </span>
        </div>
        <button className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black shadow">
          <FiX size={22} />
        </button>
      </div>

      {/* Selling Card */}
      <div className="bg-[#232323] rounded-2xl px-4 py-3 mb-3">
        <div className="flex items-center mb-1">
          <span className="text-white font-semibold text-base flex-1">
            Selling
          </span>
          <span className="text-gray-400 text-xs">Available : 09,88</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-white rounded-full p-1.5 flex items-center justify-center">
              <SiSolana size={22} className="text-[#00FFA3]" />
            </span>
            <span className="text-white font-medium text-base">SOL</span>
            <FiChevronDown size={18} className="text-gray-400 ml-1" />
          </div>
          <span className="text-white font-bold text-2xl">02,33</span>
        </div>
      </div>

      {/* Swap Icon */}
      <div className="flex justify-center items-center mb-3">
        <span className="bg-white rounded-full w-9 h-9 flex items-center justify-center shadow">
          <FiRepeat size={22} className="text-black" />
        </span>
      </div>

      {/* Received Card */}
      <div className="bg-[#232323] rounded-2xl px-4 py-3 mb-4">
        <div className="flex items-center mb-1">
          <span className="text-white font-semibold text-base flex-1">
            Received
          </span>
          <span className="text-gray-400 text-xs">Available : 12,889</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-white rounded-full p-1.5 flex items-center justify-center">
              <FaBitcoin size={22} className="text-[#F7931A]" />
            </span>
            <span className="text-white font-medium text-base">BTC</span>
            <FiChevronDown size={18} className="text-gray-400 ml-1" />
          </div>
          <span className="text-white font-bold text-2xl">1,443.0</span>
        </div>
      </div>

      {/* Rate & Fee Section */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-gray-400 text-xs">Rate</span>
        <span className="bg-green-400/90 text-green-900 font-semibold text-xs rounded-full px-2 py-0.5 ml-1">
          1BTC = 32,244£-UH ($3,222)
        </span>
        <FiInfo size={16} className="text-gray-400 ml-1" />
      </div>
      <div className="flex items-center gap-2 mb-6">
        <span className="text-gray-400 text-xs">Fee Exchange</span>
        <FiInfo size={16} className="text-gray-400 ml-1" />
      </div>

      {/* CTA Button */}
      <button className="w-full bg-[#f7fa92] rounded-xl text-black font-semibold text-lg py-3 flex items-center justify-center gap-2 mb-8">
        Get 32,244£-UH
        <FiRepeat size={20} />
      </button>

      {/* Bottom Navigation */}
   {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 flex justify-between items-center px-8 py-3 max-w-md mx-auto w-full z-10">
        {bottomTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`transition-colors duration-200 ${
              activeTab === tab.id ? "text-[#a259f7]" : "text-white"
            }`}
          >
            {React.cloneElement(tab.icon, {
              color: activeTab === tab.id ? "#a259f7" : "#fff",
            })}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Screen18;
