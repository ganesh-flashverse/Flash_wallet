"use client";
import React, { useState } from "react";
import {
  FiSend,
  FiDollarSign,
  FiRepeat,
  FiSearch,
  FiHome,
  FiGlobe,
} from "react-icons/fi";
import { AiOutlineQrcode } from "react-icons/ai";
import { MdAlarm } from "react-icons/md";

const users = [
  { name: "Angel", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Mitchell", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Debra", img: "https://randomuser.me/api/portraits/women/65.jpg" },
  { name: "Bell", img: "https://randomuser.me/api/portraits/men/76.jpg" },
  { name: "jane", img: "https://randomuser.me/api/portraits/women/68.jpg" },
];

const coins = [
  {
    name: "Solana",
    symbol: "SOL",
    icon: (
      <span className="bg-black rounded-full p-1">
        <svg width="28" height="28" viewBox="0 0 28 28">
          <defs>
            <linearGradient id="solana-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#00FFA3" />
              <stop offset="100%" stopColor="#DC1FFF" />
            </linearGradient>
          </defs>
          <rect width="28" height="28" rx="14" fill="#141414" />
          <rect x="7" y="10" width="14" height="2" rx="1" fill="url(#solana-gradient)" />
          <rect x="7" y="16" width="14" height="2" rx="1" fill="url(#solana-gradient)" />
        </svg>
      </span>
    ),
    amount: "84.36 SOL",
    value: "$4,596.35",
    profit: "+$231.19",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    icon: (
      <span className="bg-black rounded-full p-1">
        <svg width="28" height="28" viewBox="0 0 28 28">
          <circle cx="14" cy="14" r="14" fill="#141414" />
          <polygon points="14,6 20,14 14,18 8,14" fill="#fff" />
        </svg>
      </span>
    ),
    amount: "1.83 ETH",
    value: "$4,596.35",
    profit: "+$231.19",
  },
  {
    name: "Bitcoin",
    symbol: "BTC",
    icon: (
      <span className="bg-black rounded-full p-1">
        <svg width="28" height="28" viewBox="0 0 28 28">
          <circle cx="14" cy="14" r="14" fill="#F7931A" />
          <text x="14" y="19" textAnchor="middle" fontSize="16" fill="#fff" fontWeight="bold">
            ₿
          </text>
        </svg>
      </span>
    ),
    amount: "0.094 BTC",
    value: "$4,596.35",
    profit: "+$231.19",
  },
];

const Screen12 = () => {
  const [activeTab, setActiveTab] = useState("home");

  const bottomTabs = [
    { id: "home", icon: <FiHome size={28} />, label: "Home" },
    { id: "transfer", icon: <FiRepeat size={28} />, label: "Transfer" },
    { id: "alarm", icon: <MdAlarm size={28} />, label: "Alarm" },
    { id: "internet", icon: <FiGlobe size={28} />, label: "Internet" },
  ];

  return (
    <div className="min-h-screen bg-black flex flex-col w-full max-w-md mx-auto">
      {/* Top Card */}
      <div className="bg-[#a259f7] rounded-b-2xl px-4 pt-6 pb-6 sm:px-6">
        {/* Top Row */}
        <div className="flex items-center justify-between mb-4">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="avatar"
            className="w-12 h-12 rounded-full border-2 border-white object-cover"
          />
          <span className="flex-1 text-center text-white font-bold text-xl -ml-12 sm:text-2xl">
            Your Wallet
          </span>
          <div className="flex gap-2 sm:gap-3">
            <button className="w-10 h-10 sm:w-12 sm:h-12 bg-white flex items-center justify-center rounded-full shadow-md">
              <AiOutlineQrcode size={24} className="text-[#a259f7]" />
            </button>
            <button className="w-10 h-10 sm:w-12 sm:h-12 bg-white flex items-center justify-center rounded-full shadow-md">
              <FiSearch size={24} className="text-[#a259f7]" />
            </button>
          </div>
        </div>

        {/* Balances */}
        <div className="flex justify-between items-end mb-6 px-1">
          <div>
            <div className="text-white text-opacity-90 text-sm sm:text-base mb-1">
              Total Available Balance
            </div>
            <div className="text-white font-bold text-xl sm:text-2xl leading-tight">
              $11,134.00
            </div>
          </div>
          <div className="text-right">
            <div className="text-white text-opacity-90 text-sm sm:text-base mb-1">
              Flashverse Balance
            </div>
            <div className="text-white font-bold text-xl sm:text-2xl leading-tight">
              11,134.00
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-4 gap-2 sm:gap-3 mt-1">
          {[{ icon: <FiSend />, label: "Send" },
            { icon: <AiOutlineQrcode />, label: "Receive" },
            { icon: <FiDollarSign />, label: "Buy" },
            { icon: <FiRepeat />, label: "Transfer" },
          ].map((btn, i) => (
            <div key={i} className="flex flex-col items-center">
              <button className="w-16 h-16 sm:w-20 sm:h-20 bg-[#8d41e9] rounded-2xl flex items-center justify-center mb-1">
                {React.cloneElement(btn.icon, { color: "#fff", size: 28 })}
              </button>
              <span className="text-white text-xs sm:text-sm">{btn.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-black px-3 pt-5 pb-24 sm:px-4">
        <div className="text-white text-base font-semibold mb-2">Recent send</div>
        <div className="flex gap-4 overflow-x-auto mb-5 no-scrollbar">
          {users.map((u, i) => (
            <div key={i} className="flex flex-col items-center shrink-0">
              <img
                src={u.img}
                alt={u.name}
                className="w-12 h-12 rounded-full border-2 border-gray-700"
              />
              <span className="text-xs text-white mt-1">{u.name}</span>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-6 mb-4">
          <button className="text-purple-500 font-bold border-b-2 border-purple-500 pb-1">
            CRYPTO
          </button>
          <button className="text-gray-400 font-bold">NFT</button>
        </div>

        {/* Coin List */}
        <div className="flex flex-col gap-3">
          {coins.map((coin, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-gray-800 rounded-xl px-4 py-3"
            >
              <div className="flex items-center gap-3">
                {coin.icon}
                <div>
                  <div className="text-white font-semibold text-sm">{coin.name}</div>
                  <div className="text-gray-400 text-xs">{coin.amount}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-white font-semibold text-sm">{coin.value}</div>
                <div className="text-green-400 text-xs">{coin.profit}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

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

export default Screen12;
