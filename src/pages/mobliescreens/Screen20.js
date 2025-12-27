"use client";
import React, { useState } from "react";
import { FiArrowLeft, FiSearch, FiHome, FiRepeat, FiGlobe } from "react-icons/fi";
import { MdAlarm } from "react-icons/md";

const recent = [
  { name: "Angel", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Mitchell", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Debra", img: "https://randomuser.me/api/portraits/women/68.jpg" },
  { name: "Bell", img: "https://randomuser.me/api/portraits/men/65.jpg" },
  { name: "Jane", img: "https://randomuser.me/api/portraits/women/45.jpg" },
];

const contacts = [
  { name: "Angel", img: "https://randomuser.me/api/portraits/men/32.jpg", id: "987654321" },
  { name: "Mitchell", img: "https://randomuser.me/api/portraits/women/44.jpg", id: "987654321" },
  { name: "Debra", img: "https://randomuser.me/api/portraits/women/68.jpg", id: "987654321" },
  { name: "Bell", img: "https://randomuser.me/api/portraits/men/65.jpg", id: "987654321" },
  { name: "Jane", img: "https://randomuser.me/api/portraits/women/45.jpg", id: "987654321" },
];

const transactions = [
  { name: "Amazon", amount: "-₹1,200", time: "Today, 09:30 AM", img: "https://img.icons8.com/color/48/amazon.png" },
  { name: "Flipkart", amount: "-₹2,450", time: "Yesterday, 08:15 PM", img: "https://img.icons8.com/color/48/flipkart.png" },
  { name: "PhonePe", amount: "+₹3,000", time: "Yesterday, 02:45 PM", img: "https://img.icons8.com/color/48/phonepe.png" },
  { name: "Zomato", amount: "-₹350", time: "2 Days Ago, 07:10 PM", img: "https://img.icons8.com/color/48/zomato.png" },
];

const bottomTabs = [
  { id: "home", icon: <FiHome size={28} />, label: "Home" },
  { id: "transfer", icon: <FiRepeat size={28} />, label: "Transfer" },
  { id: "alarm", icon: <MdAlarm size={28} />, label: "Alarm" },
  { id: "internet", icon: <FiGlobe size={28} />, label: "Internet" },
];

const Screen20 = () => {
  const [activeTab, setActiveTab] = useState("Transaction history");
  const [activeNav, setActiveNav] = useState("transfer");

  return (
    <div className="min-h-screen bg-black flex flex-col w-full max-w-md mx-auto pt-4 pb-20">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 mb-2">
        <button className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black shadow">
          <FiArrowLeft size={22} />
        </button>
        <span className="text-white font-semibold text-lg">Transfer Money</span>
        <button className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black shadow">
          <FiSearch size={22} />
        </button>
      </div>

      {/* Recent Send */}
      <div className="px-4">
        <span className="text-white text-sm font-medium">Recent send</span>
        <div className="flex gap-4 mt-2 mb-3">
          {recent.map((r, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={r.img} alt={r.name} className="w-12 h-12 rounded-full border-2 border-white object-cover" />
              <span className="text-white text-xs mt-1 font-medium">{r.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card with Tabs */}
      <div className="bg-[#23223a] rounded-2xl mx-2 mt-2 flex flex-col overflow-hidden">
        <div className="flex items-center px-4 pt-3 pb-2">
          <button
            className={`text-xs font-medium mr-4 transition-colors duration-150 ${activeTab === "All contact" ? "text-white" : "text-gray-400"}`}
            onClick={() => setActiveTab("All contact")}
          >
            All contact
          </button>
          <button
            className={`text-xs font-medium mr-4 transition-colors duration-150 ${activeTab === "Transaction history" ? "text-white" : "text-gray-400"}`}
            onClick={() => setActiveTab("Transaction history")}
          >
            Transaction history
          </button>
          <span className="ml-auto text-xs text-[#a259f7] font-semibold cursor-pointer">View All</span>
        </div>

        <div className="divide-y divide-[#39395e] max-h-80 overflow-y-auto">
          {activeTab === "All contact" &&
            contacts.map((c, i) => (
              <div key={i} className="flex items-center px-4 py-3">
                <img src={c.img} alt={c.name} className="w-10 h-10 rounded-full object-cover mr-3" />
                <div>
                  <span className="text-white text-sm font-semibold">{c.name}</span>
                  <div className="text-gray-400 text-xs">Id: {c.id}</div>
                </div>
              </div>
            ))}

          {activeTab === "Transaction history" &&
            transactions.map((t, i) => (
              <div key={i} className="flex items-center px-4 py-3">
                <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover mr-3" />
                <div className="flex-1">
                  <span className="text-white text-sm font-semibold">{t.name}</span>
                  <div className="text-gray-400 text-xs">{t.time}</div>
                </div>
                <div className={`text-sm font-bold ${t.amount.startsWith("+") ? "text-green-400" : "text-red-400"}`}>
                  {t.amount}
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
            onClick={() => setActiveNav(tab.id)}
            className={`transition-colors duration-200 flex flex-col items-center ${
              activeNav === tab.id ? "text-[#a259f7]" : "text-white"
            }`}
          >
            {React.cloneElement(tab.icon, {
              color: activeNav === tab.id ? "#a259f7" : "#fff",
            })}
            <span className="text-xs mt-1">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Screen20;
