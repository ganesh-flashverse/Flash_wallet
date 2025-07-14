import React, { useState } from "react";

const tabs = [
  { label: "Default" },
  { label: "English(EN)" },
  { label: "Arabic - العربية(AR)" }
];
const bonusTypes = ["Percentage (%)", "Flat ($)"];

export default function Demo() {
  const [tab, setTab] = useState(0);
  const [bonusType, setBonusType] = useState(bonusTypes[0]);

  return (
    <div className="min-h-screen bg-white p-4 font-sans">
      {/* Header */}
      <div className="flex items-center gap-2 text-gray-800 text-base font-semibold mb-2">
        <span className="inline-block"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="15" rx="2" stroke="#222" strokeWidth="2"/><path d="M3 7V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1" stroke="#222" strokeWidth="2"/></svg></span>
        Wallet Bonus Update
      </div>
      {/* Tabs */}
      <div className="flex gap-3 mb-2 text-xs font-semibold">
        {tabs.map((t, i) => (
          <button
            key={i}
            className={`px-3 py-1 rounded-t ${tab === i ? "bg-white text-teal-600 border-b-2 border-teal-500" : "text-gray-500 bg-gray-50"}`}
            onClick={() => setTab(i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {/* Form Section */}
      <div className="bg-white rounded-lg shadow p-6 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
          <div className="flex flex-col col-span-1">
            <label className="text-xs text-gray-500 mb-1">Bonus Title (Default) <span className="text-red-500">*</span></label>
            <input className="w-full border rounded px-2 py-1 text-xs" defaultValue="Add 100 get 10% Extras" />
          </div>
          <div className="flex flex-col col-span-1">
            <label className="text-xs text-gray-500 mb-1">Short Description (Default) <span className="text-red-500">*</span></label>
            <input className="w-full border rounded px-2 py-1 text-xs" defaultValue="Unlock Extra Value: Enjoy a 10% bonus on every addition of 100 units! Elevate your experience with Bonus Title's exclusive offer and get me" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-2">
          <div className="flex flex-col col-span-1">
            <label className="text-xs text-gray-500 mb-1">Bonus Type <span className="text-red-500">*</span></label>
            <select className="w-full border rounded px-2 py-1 text-xs" value={bonusType} onChange={e => setBonusType(e.target.value)}>
              {bonusTypes.map((type, i) => <option key={i}>{type}</option>)}
            </select>
          </div>
          <div className="flex flex-col col-span-1">
            <label className="text-xs text-gray-500 mb-1">Bonus Amount (%) <span className="text-red-500">*</span></label>
            <input className="w-full border rounded px-2 py-1 text-xs" defaultValue="10" />
          </div>
          <div className="flex flex-col col-span-1">
            <label className="text-xs text-gray-500 mb-1">Minimum Add Money Amount ($) <span className="text-red-500">*</span></label>
            <input className="w-full border rounded px-2 py-1 text-xs" defaultValue="100" />
          </div>
          <div className="flex flex-col col-span-1">
            <label className="text-xs text-gray-500 mb-1">Maximum Bonus ($)</label>
            <input className="w-full border rounded px-2 py-1 text-xs" defaultValue="200" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
          <div className="flex flex-col col-span-1">
            <label className="text-xs text-gray-500 mb-1">Start date <span className="text-red-500">*</span></label>
            <input className="w-full border rounded px-2 py-1 text-xs" defaultValue="08/20/2023" type="date" />
          </div>
          <div className="flex flex-col col-span-1">
            <label className="text-xs text-gray-500 mb-1">Expire date <span className="text-red-500">*</span></label>
            <input className="w-full border rounded px-2 py-1 text-xs" defaultValue="2027-07-21" type="date" />
          </div>
        </div>
        <div className="flex gap-2 justify-end mt-4">
          <button className="bg-gray-100 text-gray-700 px-5 py-1.5 rounded text-xs font-semibold">Reset</button>
          <button className="bg-teal-600 text-white px-5 py-1.5 rounded text-xs font-semibold">Update</button>
        </div>
      </div>
    </div>
  );
}
